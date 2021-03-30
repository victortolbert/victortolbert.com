import 'vite/dynamic-import-polyfill'
import { createApp } from 'vue'
import { createHead  } from '@vueuse/head'
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHistory } from 'vue-router'
// import { createGtm } from 'vue-gtm'

import { RayPlugin } from 'vue-ray'
import Oruga from '@oruga-ui/oruga-next'
import VueClickAway from "vue3-click-away"

// import router from './router'
import routes from 'virtual:generated-pages'
import GStore from '~/store/global'
import store from '~/store'

import '@oruga-ui/oruga-next/dist/oruga-full-vars.css'
import 'nprogress/nprogress.css'
import './assets/css/tailwind.css'

import App from './App.vue'
import en from '../locales/en.json'

const app = createApp(App)
const router = createRouter({
  routes,
  history: createWebHistory(),
})
const head = createHead()
const i18n = createI18n({
  locale: 'en',
  messages: {
    en,
  }
})

// const gtm = createGtm({
//   id: "GTM-xxxxxx", // Your GTM single container ID, array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryParams: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}], // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']
//   queryParams: {
//     // Add url query string when load gtm.js with GTM ID (optional)
//     gtm_auth: "AB7cDEf3GHIjkl-MnOP8qr",
//     gtm_preview: "env-4",
//     gtm_cookies_win: "x",
//   },
//   defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
//   compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
//   nonce: "2726c7f26c", // Will add `nonce` to the script tag
//   enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
//   debug: true, // Whether or not display console logs debugs (optional)
//   loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
//   vueRouter: router, // Pass the router instance to automatically sync with router (optional)
//   ignoredViews: ["homepage"], // Don't trigger events for specified router names (case insensitive) (optional)
//   trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
// })

// app.use(gtm)
app.use(router)
app.use(head)
app.use(i18n)
app.provide('GStore', GStore)
app.use(store)
app.use(Oruga)
app.use(VueClickAway)
app.use(RayPlugin, { interceptErrors: true, host: '127.0.0.1', port: 23517 })
app.mount('#app')
