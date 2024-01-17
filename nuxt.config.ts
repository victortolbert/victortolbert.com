// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  ],

  devServer: {
    port: 8589,
  },

  devtools: { enabled: true },

  fontMetrics: {
    fonts: ['DM Sans'],
  },

  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [400, 500, 600, 700],
    },
  },

  modules: [
    '@formkit/auto-animate/nuxt',
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@pinia/nuxt',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
  ],

  ssr: false,

  tailwindcss: {
    viewer: false,
  },

  typescript: { strict: false },

  ui: {
    icons: ['ph', 'logos'],
  },
})
