import 'vite/dynamic-import-polyfill'
import { createApp } from 'vue'
import { createHead  } from '@vueuse/head'
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHistory } from 'vue-router'
import VueClickAway from "vue3-click-away"
import { RayPlugin } from 'vue-ray'
import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga-full-vars.css'
import './assets/css/tailwind.css'

import routes from 'virtual:generated-pages'

import App from './App.vue'

import en from '../locales/en.json'


const app = createApp(App)
const router = createRouter({
    routes,
    history: createWebHistory(),
});

const i18n = createI18n({
  locale: 'en',
  messages: {
    en,
  }
})

const head = createHead()




app.use(router)
app.use(i18n)
app.use(head)
app.use(RayPlugin, { interceptErrors: true, host: '127.0.0.1', port: 23517 })
app.use(Oruga)
app.use(VueClickAway)
app.mount('#app')
