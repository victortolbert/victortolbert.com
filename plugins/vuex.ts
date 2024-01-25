import store from '~/store'

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.use(store)
})
