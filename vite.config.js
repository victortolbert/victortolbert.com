import { resolve } from 'path'
import fs from 'fs-extra'

import Vue from '@vitejs/plugin-vue'
import Banner from 'vite-plugin-banner'
import Markdown from 'vite-plugin-md'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import ViteComponents from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'

import VueI18n from '@intlify/vite-plugin-vue-i18n'
import SvgLoader from 'vite-svg-loader'

import anchor from 'markdown-it-anchor'
import prism from 'markdown-it-prism'
import matter from 'gray-matter'

// @ts-expect-error
import markdownAttr from 'markdown-it-link-attributes'

import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-regex'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-yaml'

import { slugify } from './scripts/slugify'
import pkg from './package.json'

export default ({ command }) => ({
    base: command === 'serve' ? '' : '/build/',
    publicDir: 'fake_dir_so_nothing_gets_copied',
    build: {
        manifest: true,
        outDir: 'public/build',
        rollupOptions: {
            input: 'resources/client/main.js',
        },
    },
    define: {
        _APP_VERSION: JSON.stringify(pkg.version),
    },
    resolve: {
      alias: {
        '~/': `${resolve(__dirname, 'resources/client')}/`,
      },
    },
    optimizeDeps: {
      include: [
        'vue',
        'vue-router',
        '@vueuse/core',
      ],
      exclude: [
        'vue-demi',
      ],
    },
    plugins: [
        Banner(`/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * description: ${pkg.description}\n * author: ${pkg.author}\n * homepage: ${pkg.homepage}\n */`),
        Vue({
            include: [/\.vue$/, /\.md$/],
        }),
        Pages({
          pagesDir: 'resources/client/pages',
          extensions: ['vue', 'md'],
          extendRoute(route, parent) {
            const path = resolve(__dirname, route.component.slice(1))

            if (!path.includes('projects.md')) {
              const md = fs.readFileSync(path, 'utf-8')
              const { data } = matter(md)
               route.meta = Object.assign(route.meta || {}, { frontmatter: data })
            }

            if (route.path === '/') {
              // Index is unauthenticated.
              return route
            }

            // Augment the route with meta that indicates that the route requires authentication.
            return {
              ...route,
              meta: { auth: true },
            }
          },
        }),
        Layouts(),
        ViteComponents({
          dirs: ['resources/client/components'],
          extensions: ['vue', 'md'],
          customLoaderMatcher: path => path.endsWith('.md'),
          customComponentResolvers: [
            ViteIconsResolver({
              componentPrefix: '',
              // enabledCollections: ['carbon']
            }),
          ],
          directoryAsNamespace: true,
          globalNamespaces: ['global'],
        }),
        Markdown({
          headEnabled: false,
          wrapperClasses: 'prose prose-sm m-auto text-left',
          markdownItOptions: {
            html: true,
            linkify: true,
            typographer: true,
          },
          markdownItSetup(md) {
            md.use(prism)
            md.use(anchor, {
              slugify,
              permalink: true,
              permalinkBefore: true,
              permalinkSymbol: '#',
              permalinkAttrs: () => ({ 'aria-hidden': true }),
            })
            md.use(markdownAttr, {
              pattern: /^https?:/,
              attrs: {
                target: '_blank',
                rel: 'noopener',
              },
            })
          },
        }),
        ViteIcons(),
        VueI18n({
            include: [resolve(__dirname, 'locales/**')],
        }),
        SvgLoader(),
        {
          name: 'blade',
          handleHotUpdate({ file, server }) {
            if (file.endsWith('.blade.php')) {
              server.ws.send({
                type: 'full-reload',
                path: '*',
              });
            }
          },
        }
    ],
});
