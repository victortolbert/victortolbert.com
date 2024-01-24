import process from 'node:process'
import { execaSync } from 'execa'
import svgLoader from 'vite-svg-loader'

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

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },

  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
        sepia: 'monokai',
      },
    },
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
    '~/assets/css/debug-children.css',
    '~/assets/css/debug-grid.css',
    '~/assets/css/fonts/monaspace-neon.css',
    '~/assets/css/fonts/salesforce-sans.css',
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

  features: {
    inlineStyles: false,
  },

  fontMetrics: {
    fonts: ['DM Sans', 'Inter'],
  },

  future: {
    typescriptBundlerResolution: true,
  },

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
  },

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
    'nuxt-lodash',
    'nuxt-api-party',
    'nuxt-prepare',
    // 'nuxt-gtag',
    // 'nuxt-kql',
  ],

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

  prepare: {
    scripts: ['server.prepare', 'store.prepare'],
  },

  routeRules: {
    '/api/search.json': { prerender: true },
  },

  runtimeConfig: {
    sponacular: {
      apiKey: process.env.SPOONACULAR_API_KEY!,
    },
    stripeSecret: '',
    stripeWebhookSecret: '',
    public: {
      apiUrl: process.env.API_URL || 'http://localhost:8589',
      assetsSrc: '/assets',
      stripeKey: '',
      buildTime: Date.now(),
      gitSha: execaSync('git', ['rev-parse', 'HEAD']).stdout.trim(),
    },
  },

  ssr: true,

  tailwindcss: {
    viewer: false,
  },

  typescript: { strict: false },

  ui: {
    icons: ['fa6-brands', 'heroicons', 'heroicons-outline', 'logos', 'ph', 'simple-icons'],
  },

  vite: {
    build: {
      minify: 'esbuild',
      cssMinify: 'esbuild',
    },

    plugins: [
      svgLoader({
        defaultImport: 'raw',
      }),
      // vsharp()
    ],
  },

  vue: {
    defineModel: true,
  },

  vueEmail: {
    baseUrl: 'https://victortolbert.com/',
    autoImport: true,
  },
})
