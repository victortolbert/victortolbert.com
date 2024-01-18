import process from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],

  app: {
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

  // content: {
  //   highlight: {
  //     theme: 'github-dark',
  //   },
  // },

  content: {
    highlight: {
      theme: {
        default: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    },
  },

  css: [
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

  fontMetrics: {
    fonts: ['DM Sans', 'Inter'],
  },

  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [400, 500, 600, 700],
      'Inter': [400, 500, 600, 700, 800, 900],
    },
  },

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
    'v-wave/nuxt',
    'nuxt-lodash',
  ],

  routeRules: {
    '/api/search.json': { prerender: true },
  },

  runtimeConfig: {
    stripeSecret: '',
    stripeWebhookSecret: '',
    public: {
      apiUrl: process.env.API_URL || 'http://localhost:8589',
      assetsSrc: '/assets',
      stripeKey: '',
    },
  },

  ssr: false,

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
    // plugins: [vsharp()],
  },

  vue: {
    defineModel: true,
  },
})
