// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 8589,
  },

  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/content',
  ],

  typescript: { strict: false },

  ui: {
    icons: ['ph', 'logos'],
  },
})
