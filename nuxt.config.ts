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
    viewTransition: false,
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
    fallback: 'system',
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
      //   angular-html
      //   angular-ts
      //   astro
      //   bash
      //   bat
      //   blade
      //   csharp
      //   csv
      //   docker
      //   erb
      //   gherkin
      //   git-commit
      //   git-rebase
      //   go
      //   graphql
      //   haml
      //   handlebars
      //   http
      //   ini
      //   json
      //   json5
      //   jsonc
      //   jsx
      //   latex
      //   less
      //   markdown
      //   mdc
      //   mdx
      //   nginx
      //   postcss
      //   powershell
      //   prisma
      //   pug
      //   python
      //   r
      //   reg
      //   rust
      //   sass
      //   scss
      //   shell
      //   svelte
      //   toml
      //   tsx
      //   twig
      //   vue-html
      //   xml
      //   xsl
      //   yaml
      // ],

      preload: ['apex', 'css', 'diff', 'handlebars', 'html', 'jinja', 'js', 'php', 'prisma', 'razor', 'ruby', 'sql', 'ts', 'vue', 'xml'],

      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      // theme: {
      //   light: 'vitesse-light',
      //   default: 'vitesse-light',
      //   dark: 'vitesse-dark',
      //   sepia: 'monokai',

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
    '@fontsource-variable/roboto-slab',
    '@fontsource-variable/rubik',
    '@fontsource/balsamiq-sans',
    '@fontsource/bungee',
    '@fontsource/flow-block',
    '@fontsource/flow-circular',
    '@fontsource/im-fell-dw-pica',
    '@fontsource/kalam',
    '@fontsource/lato',
    '@fontsource/redacted-script',
    '@fontsource/roboto',
    '@fontsource/space-mono',
    'animate.css',
    'lite-youtube-embed/src/lite-yt-embed.css',
    '~/assets/css/debug-children.css',
    '~/assets/css/debug-grid.css',
    '~/assets/css/devices.css',
    '~/assets/css/fonts/monaspace-neon.css',
    '~/assets/css/fonts/salesforce-sans.css',
    // '~/assets/scss/vue-sidebar-menu.scss',
    '~/assets/scss/typed.scss',
    '~/assets/css/hack/hack.css',
  ],

  devServer: {
    port: 8589,
    https: {
      key: 'localhost-key.pem',
      cert: 'localhost.pem',
    },
  },

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  experimental: {
    // renderJsonPayloads: true,
    scanPageMeta: true,
    sharedPrerenderData: true,
    // typedPages: true,
    viewTransition: true,
  },

  fathom: {
    siteId: 'OVDPOLBF',
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
    fonts: ['DM Sans', 'Inter', 'Kalam'],
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
      'Kalam': [300, 400, 700],
    },
  },

  // gtag: {
  //   id: 'G-XXXXXXXXXX',
  // },

  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton', 'UColorModeButton', 'UIcon'].includes(c.pascalName))

      globals.forEach(c => c.global = true)
    },

    // 'components:dirs': function (dirs) {
    //   dirs.push({
    //     path: '~/app-components',
    //     prefix: 'App',
    //   })
    // },

    // 'components:extend': function (components) {
    //   for (const component of components) {
    //     if (component.global)
    //       component.global = 'sync'
    //   }
    // },

    'pages:extend': function (routes) {
      // console.log(routes)
    },
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
    domains: ['victortolbert.com'],
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

  modules: [
    '@nuxt/ui',
    '@formkit/auto-animate/nuxt',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@vueuse/sound/nuxt',
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
    'nuxt-fathom',
    'nuxt-mail',
    'nuxt-og-image',
    'nuxt-prepare',
    'nuxt-swiper',
    'shadcn-nuxt',
    // 'nuxt-mailer',
    // 'nuxt-gtag',
    // 'nuxt-kql',
    // '@vee-validate/nuxt',
    // '@nuxtjs/html-validator',
    // '@nuxtjs/supabase',
    // '@nuxtjs/storybook',
    // '@nuxtlabs/github-module',
    // 'nuxt-cloudflare-analytics',
    // '@formkit/nuxt',
    // '@nuxtjs/i18n',
    // '@nuxtjs/prismic',
    // '@pinia-orm/nuxt',
    // '@unlazy/nuxt',
    // 'nuxt-component-meta',
    // 'nuxt-icon',
    // 'nuxt-proxy',
    // 'nuxt-time',
  ],

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

  nitro: {
    routeRules: {
      // '/**': {
      //   headers: {
      //     'Cross-Origin-Embedder-Policy': 'require-corp',
      //     'Cross-Origin-Opener-Policy': 'same-origin',
      //   },
      // },
    },
  },

  ogImage: {
    defaults: {
      component: 'OgImageNotes',
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
  postcss: {
    plugins: {
      'postcss-nested': {},
      // 'postcss-import': {},
      'postcss-mixins': {},
      // 'postcss-simple-vars': {},
      'postcss-preset-env': {},
      // "postcss-custom-media": {}
    },
  },

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

  robots: {
    disallow: ['/secret', '/admin'],
    allow: '/admin/login',
  },

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
    // '/docs': { redirect: '/docs/getting-started', prerender: false }

  },

  runtimeConfig: {
    baseUrl: process.env.BASE_URL || 'http://localhost:8589',
    public: {
      apiUrl: process.env.API_URL || 'http://localhost:8589',
      assetsSrc: '/assets',
      baseUrl: process.env.BASE_URL || 'http://localhost:8589',
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
      // supabase: {
      //   url: process.env.NUXT_PUBLIC_SUPABASE_URL,
      //   key: process.env.NUXT_PUBLIC_SUPABASE_KEY,
      // },
      theme: {
        primaryColor: 'user_primary',
      },
      version: pkg.version,
    },
    app: {
      devtools: {
        iframeProps: {
          allow: 'cross-origin-isolated',
          credentialless: true,
        },
      },
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
    // supabase: {
    //   url: process.env.NUXT_SUPABASE_URL,
    //   key: process.env.NUXT_SUPABASE_KEY,
    //   serviceRole: process.env.NUXT_SUPABASE_SERVICE_ROLE,
    //   jwtToken: process.env.NUXT_SUPABASE_JWT_TOKEN,
    // },
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

  site: {
    indexable: false,
    url: 'https://victortolbert.com',
    name: 'Victor Tolbert',
    description: 'Full-stack software engineer with 20+ years of experience in web development, design engineering, and digital product design.',
    logo: 'https://victortolbert.com/favicon-dark.svg',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },

  ssr: true,

  // supabase: {
  //   redirectOptions: {
  //     login: '/',
  //     callback: '/confirm',
  //     exclude: ['/'],
  //     cookieRedirect: true,
  //   },
  // },

  // supabase: {
  //   serviceKey: process.env.NUXT_SUPABASE_SERVICE_KEY,
  //   redirect: true,
  //   redirectOptions: {
  //     login: '/login',
  //     callback: '/confirm',
  //     exclude: [],
  //     cookieRedirect: false,
  //   },
  //   cookieName: 'sb',
  //   cookieOptions: {
  //     maxAge: 60 * 60 * 8,
  //     sameSite: 'lax',
  //     secure: true,
  //   },
  //   clientOptions: {
  //     auth: {
  //       flowType: 'pkce',
  //       detectSessionInUrl: true,
  //       persistSession: true,
  //       autoRefreshToken: true,
  //     },
  //   },
  // },

  swiper: {
    // Swiper options
    // ----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },

  tailwindcss: {
    viewer: false,
  },

  typescript: {
    strict: false,
    tsConfig: {
      compilerOptions: {
        types: ['@oruga-ui/oruga-next/volar.d.ts'],
      },
    },
  },

  ui: {
    icons: [
      'fa6-brands',
      'heroicons',
      'heroicons-outline',
      'logos',
      'mdi',
      'ph',
      'simple-icons',
    ],
  },

  vite: {
    build: {
      minify: 'esbuild',
      cssMinify: 'esbuild',
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;\n',
        },
        styl: {
          additionalData: '@import "~/assets/styl/variables.styl"\n',
        },
      },
    },

    optimizeDeps: {
      include: [
        // '@fawmi/vue-google-maps',
        // 'fast-deep-equal'
        // 'monaco-editor/esm/vs/editor/editor.worker',
        // 'monaco-editor-core/esm/vs/editor/editor.worker',
        // 'typescript/lib/tsserverlibrary',
        // '@vue/language-service',
        // '@volar/monaco/worker',
        // 'typescript',
      ],
    },

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
    // defineModel: true,
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
    baseUrl: 'https://assets.victortolbert.com/',
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
