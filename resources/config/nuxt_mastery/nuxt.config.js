export default {
  components: true,
  head: {
    titleTemplate: 'Mastering Nuxt: %s',
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: ['my-style'],
    },
    meta: [
      {
        charset: 'utf-8',
      },
    ],
  },
  router: {
    prefetchLinks: false,
  },
  plugins: ['~/plugins/maps.client', '~/plugins/dataApi'],
  modules: [],
  buildModules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/sass/app.scss'],
  build: {
    extractCSS: true,
    loaders: {
      limit: 0,
    },
  },
}
