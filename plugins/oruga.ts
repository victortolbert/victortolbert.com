import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/theme-oruga/dist/oruga-full.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Oruga)
})
