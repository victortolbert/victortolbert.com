import process from 'node:process'

import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execaSync } from 'execa'

import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'
import SvgLoader from 'vite-svg-loader'

// import { appDescription } from './constants/index'
import pkg from './package.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/ui',
    '@formkit/auto-animate/nuxt',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@nuxtjs/plausible',
    '@nuxtjs/seo',
    '@vue-email/nuxt',
    'v-wave/nuxt',
    'magic-regexp/nuxt',
    'nuxt-lodash',
    'nuxt-api-party',
    'nuxt-mail',
    'nuxt-prepare',
    'shadcn-nuxt',
    // '@formkit/nuxt',
    // '@nuxtjs/html-validator',
    // '@nuxtjs/i18n',
    // '@nuxtjs/prismic',
    // '@nuxtjs/storybook',
    // '@nuxtjs/supabase',
    // '@nuxtlabs/github-module',
    // '@pinia-orm/nuxt',
    // '@unlazy/nuxt',
    // '@vee-validate/nuxt',
    // '@vue-email/nuxt',
    // '@vueuse/motion/nuxt',
    // 'nuxt-cloudflare-analytics',
    // 'nuxt-component-meta',
    // 'nuxt-gtag',
    // 'nuxt-icon',
    // 'nuxt-kql',
    // 'nuxt-mailer',
    // 'nuxt-og-image',
    // 'nuxt-proxy',
    // 'nuxt-swiper',
    // 'nuxt-time',
  ],

  apiParty: {
    endpoints: {
      jsonPlaceholder: {
        url: process.env.JSON_PLACEHOLDER_BASE_URL!,
      },
      petStore: {
        url: process.env.PET_STORE_BASE_URL!,
        schema: './schemas/petStore.json',
      },
    },
  },

  app: {
    // baseURL: '/testing',

    head: {
      htmlAttrs: {
        lang: 'en',
        class: 'overflow-y-scroll',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Victor Tolbert',
      titleTemplate: '%s - victortolbert.com',
      link: [
        { rel: 'icon', href: '/favicon.svg', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon-dark.svg' },
        // { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  appConfig: {
    buildDate: new Date().toISOString(),
  },

  build: {
    transpile: [/vue-i18n/],
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },

  // componentMeta: {
  //   metaFields: {
  //     props: true,
  //     slots: false,
  //     events: false,
  //     exposed: false,
  //   },
  // },

  content: {
    highlight: {
      // preload: [
      // angular-ts,
      // angular-html,
      // astro
      // bat
      // blade
      // csv
      // diff
      // docker
      // erb
      // git-commit
      // git-rebase
      // go
      // graphql
      // haml
      // handlebars
      // http
      // jsonc
      // json
      // json5
      // jsx
      // latex
      // less
      // mdc
      // mdx
      // nginx
      // postcss
      // powershell
      // pug
      // python
      // r
      // razor
      // reg
      // ruby
      // rust
      // sass
      // scss
      // svelte
      // toml
      // tsx
      // twig
      // vue-html
      // xml
      // xsl
      // yaml
      //   'apex',
      //   'bash',
      //   'csharp',
      //   'css',
      //   'diff',
      //   'gherkin',
      //   'html',
      //   'ini',
      //   'js',
      //   'json',
      //   'markdown',
      //   'php',
      //   'powershell',
      //   'prisma',
      //   'pug',
      //   'python',
      //   'razor',
      //   'ruby',
      //   'scss',
      //   'shell',
      //   'sql',
      //   'svelte',
      //   'ts',
      //   'tsx',
      //   'vue',
      //   'yaml',
      // ],
      preload: ['apex', 'sql', 'html', 'razor', 'css', 'js', 'ts', 'vue', 'prisma'],
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      // theme: {
      //   light: 'vitesse-light',
      //   default: 'vitesse-light',
      //   dark: 'vitesse-dark',
      // },

      theme: {
        default: 'github-light',
        dark: 'github-dark',
        sepia: 'monokai',
      },
    },
    // markdown: { },
    // navigation: {
    //   fields: ['author', 'publishedAt'],
    // },
  },

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@fontsource-variable/dm-sans',
    '@fontsource-variable/fira-code',
    '@fontsource-variable/inter',
    '@fontsource-variable/jetbrains-mono',
    '@fontsource-variable/josefin-sans',
    '@fontsource-variable/nunito',
    '@fontsource-variable/nunito-sans',
    '@fontsource-variable/raleway',
    '@fontsource-variable/rubik',
    '@fontsource/balsamiq-sans',
    '@fontsource/bungee',
    '@fontsource/flow-block',
    '@fontsource/flow-circular',
    '@fontsource/im-fell-dw-pica',
    '@fontsource/lato',
    '@fontsource/redacted-script',
    '@fontsource/roboto',
    '@fontsource/space-mono',
    // 'animate.css',
    // 'lite-youtube-embed/src/lite-yt-embed.css',
    '~/assets/css/debug-children.css',
    '~/assets/css/debug-grid.css',
    '~/assets/css/fonts/monaspace-neon.css',
    '~/assets/css/fonts/salesforce-sans.css',
    // '~/assets/scss/vue-sidebar-menu.scss',
    '~/assets/scss/typed.scss',
  ],

  devServer: {
    port: 8589,
  },

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  experimental: {
    // renderJsonPayloads: true,
    // typedPages: true,
    // viewTransition: true,
  },

  features: {
    inlineStyles: false,
  },

  // If you are using a Google font or you don't have a @font-face declaration
  // for a font you're using, you can declare them here.
  //
  // In most cases this is not necessary.
  //
  // fontMetrics: {
  //   fonts: [
  //     'DM Sans',
  //     'Inter',
  //     {
  //       family: 'Some Custom Font',
  //       src: '/path/to/custom/font.woff2'
  //     }
  //   ],
  // },

  fontMetrics: {
    fonts: ['DM Sans', 'Inter'],
  },

  future: {
    typescriptBundlerResolution: true,
  },

  // github: {
  //   owner: 'victortolbert',
  //   repo: 'ux-kit',
  //   branch: 'main',
  // },

  // googleFonts: {
  //   display: 'swap',
  //   download: true,
  //   families: {
  //     'Roboto': true,
  //     'DM+Sans': [400, 500, 600, 700],
  //     'Inter': [400, 500, 600, 700],
  //     'Josefin+Sans': true,
  //     'Lato': [100, 300],
  //     'Raleway': {
  //       wght: [100, 400],
  //       ital: [100],
  //     },
  //   },
  // },

  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [400, 500, 600, 700],
      'Inter': [400, 500, 600, 700, 800, 900],
    },
  },

  // gtag: {
  //   id: 'G-XXXXXXXXXX',
  // },

  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton', 'UColorModeButton'].includes(c.pascalName))

      globals.forEach(c => c.global = true)
    },

    // 'components:dirs': function (dirs) {
    //   dirs.push({
    //     path: '~/app-components',
    //     prefix: 'App',
    //   })
    // },

    // 'components:extend': function (components) {
    //   for (const comp of components) {
    //     if (comp.global)
    //       comp.global = 'sync'
    //   }
    // },
  },

  // htmlValidator: {
  //   failOnError: false,
  //   options: {
  //     rules: {
  //       'wcag/h30': 'warn',
  //       'wcag/h37': 'warn',
  //       'element-permitted-content': 'warn',
  //       'element-required-content': 'warn',
  //       'element-required-attributes': 'warn',
  //       'attribute-empty-style': 'off',
  //     },
  //   },
  // },

  // i18n: {
  //   locales: ['en', 'fr', 'ar'],
  //   defaultLocale: 'en',
  // },

  // image: {
  //   provider: 'proxy',
  //   providers: {
  //     proxy: {
  //       provider: 'ipx',
  //       options: {
  //         baseURL: `${apiBaseUrl}/ipx`,
  //       },
  //     },
  //   },
  // },

  image: {
    providers: {
      spoonacular: {
        provider: '~/providers/spoonacular.ts',
      },
    },
  },

  // imports: {
  //   dirs: ['stores'],
  // },

  mail: {
    message: {
      to: 'foo@bar.de',
    },
    smtp: {
      host: 'smtp.example.com',
      port: 587,
    },
  },

  // nitro: {
  //   imports: {
  //     dirs: [
  //       './constants',
  //     ],
  //     presets: [
  //       {
  //         from: 'date-fns/addDays',
  //         imports: [
  //           { name: 'default', as: 'addDays' },
  //         ],
  //       },
  //     ],
  //   },
  //   prerender: {
  //     routes: ['/api/search.json'],
  //     autoSubfolderIndex: false,
  //   },
  // },

  ogImage: {
    defaults: {
      component: 'OgImageDocs',
      props: {
        colorMode: 'dark',
      },
    },
    componentOptions: {
      global: true,
    },
  },

  // pinia: {
  //   autoImports: ['defineStore', 'acceptHMRUpdate'],
  // },

  prepare: {
    scripts: ['server.prepare', 'store.prepare'],
  },

  // primevue: {
  //   unstyled: true
  // },

  // prismic: {
  //   endpoint: 'ux-lab',
  //   preview: '/api/preview',
  //   clientConfig: {
  //     routes: [
  //       {
  //         type: 'page',
  //         path: '/:uid',
  //       },
  //       {
  //         type: 'page',
  //         uid: 'home',
  //         path: '/',
  //       },
  //     ],
  //   },
  // },

  router: {
    options: {
      linkActiveClass: 'font-bold',
      linkExactActiveClass: '',
    },
  },

  routeRules: {
    // '/**': {
    //   isr: 60 * 60 * 24
    // },
    '/api/search.json': { prerender: true },

  },

  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL || 'http://localhost:8589',
      assetsSrc: '/assets',
      baseUrl: process.env.BASE_URL || 'http://localhost:5090',
      buildTime: Date.now(),
      github: {
        clientId: process.env.NUXT_PUBLIC_GITHUB_CLIENT_ID,
        repo: process.env.NUXT_PUBLIC_GITHUB_REPO,
        url: process.env.NUXT_PUBLIC_GITHUB_URL,
      },
      gitSha: execaSync('git', ['rev-parse', 'HEAD']).stdout.trim(),
      google: {
        maps: {
          apiKey: process.env.NUXT_PUBLIC_GOOGLE_MAPS_API,
        },
      },
      site: {
        url: process.env.NUXT_PUBLIC_SITE_URL,
      },
      sentry: {
        dsn: process.env.NUXT_PUBLIC_SENTRY_DSN,
        environment: process.env.NUXT_PUBLIC_SENTRY_ENVIRONMENT,
      },
      storybook: {
        url: process.env.NUXT_STORYBOOK_URL,
      },
      stripeKey: '',
      theme: {
        primaryColor: 'user_primary',
      },
      version: pkg.version,

    },
    authorizeNet: {
      apiLoginId: '8d7Kz9Qt2t',
      transactionKey: '8T4YCA85hnn9rG26',
    },
    github: {
      id: '',
      repo: '',
      token: '',
      clientSecret: '',
      inviteToken: '',
    },
    mailer: {
      host: process.env.NUXT_MAILER_HOST,
      port: process.env.NUXT_MAILER_PORT,
      user: process.env.NUXT_MAILER_USER,
      password: process.env.NUXT_MAILER_PASSWORD,
    },
    omdb: {
      apiKey: '',
    },
    openai: {
      apiKey: '',
    },
    openWeather: {
      apiKey: '',
    },
    resend: {
      apiKey: '',
    },
    session: {
      password: '',
    },
    spoonacular: {
      apiKey: process.env.SPOONACULAR_API_KEY!,
    },
    stripeSecret: '',
    stripeWebhookSecret: '',
    supabase: {
      url: process.env.NUXT_SUPABASE_URL,
      key: process.env.NUXT_SUPABASE_KEY,
      serviceRole: process.env.NUXT_SUPABASE_SERVICE_ROLE,
      jwtToken: process.env.NUXT_SUPABASE_JWT_TOKEN,
    },
    tmdb: {
      apiKey: process.env.NUXT_TMDB_API_KEY,
    },
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },

  ssr: true,

  tailwindcss: {
    viewer: false,
  },

  typescript: { strict: false },

  ui: {
    icons: [
      'fa6-brands',
      'heroicons',
      'heroicons-outline',
      'logos',
      'ph',
      'simple-icons',
    ],
  },

  vite: {
    build: {
      minify: 'esbuild',
      cssMinify: 'esbuild',
    },

    // css: {
    //   preprocessorOptions: {
    //     sass: {
    //       additionalData: '@use "~/assets/_vars.sass" as *\n',
    //     },
    //   },
    // },

    // optimizeDeps: {
    //   include: ['@fawmi/vue-google-maps', 'fast-deep-equal'],
    // },

    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js',
      },
    },

    plugins: [
      SvgLoader({
        defaultImport: 'raw',
      }),

      // Vsharp()
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json'),
        ],
      }),
    ],
  },

  vue: {
    compilerOptions: {
      isCustomElement: tag => ['lite-youtube'].includes(tag),
    },
    defineModel: true,
    // propsDestructure: true,
    // runtimeCompiler: true,
  },

  // vueEmail: {
  //   baseUrl: 'http://localhost:5090',
  //   verbose: true,
  //   playground: false,
  //   i18n: {
  //     defaultLocale: 'en',
  //     translations: {
  //       en: {
  //         greetings: 'Welcome {user}',
  //         message: 'Welcome to dashboard {username}',
  //       },
  //       es: {
  //         greetings: 'Bienvenido {user}',
  //         message: 'Bienvenido al panel {user}',
  //       },
  //     },
  //   },
  // },

  vueEmail: {
    baseUrl: 'https://victortolbert.com/',
    autoImport: true,
  },

  $development: {
    nitro: {
      storage: {
        recipes: {
          driver: 'fs',
          base: 'recipes',
        },
      },
    },
  },
})
