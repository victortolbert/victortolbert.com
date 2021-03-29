import 'vite/dynamic-import-polyfill'

import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'layouts-generated'

import App from '~/App.vue'
import '~/assets/css/tailwind.css'

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(App, { routes }, (ctx) => {
  Object.values(import.meta.globEager('./modules/*.ts')).map(i =>
    i.install?.(ctx),
  )
})



// import { createApp } from 'vue'
// import App from '~/App.vue'
// const app = createApp(App)

// import { createRouter, createWebHistory } from 'vue-router'
// const router = createRouter({
//     routes,
//     history: createWebHistory(),
// });
// app.use(router)

// import { createI18n } from 'vue-i18n'
// import en from '../../locales/en.json'
// const i18n = createI18n({
//   locale: 'en',
//   messages: {
//     en,
//   }
// })
// app.use(i18n)

// import { createHead  } from '@vueuse/head'
// const head = createHead()
// app.use(head)

// import Oruga from '@oruga-ui/oruga-next'
// import '@oruga-ui/oruga-next/dist/oruga-full-vars.css'
// app.use(Oruga)

// import VueClickAway from "vue3-click-away"
// app.use(VueClickAway)
