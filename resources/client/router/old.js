import { createRouter, createWebHistory } from 'vue-router'
import EventList from '~/pages/events.vue'
import EventDetails from '~/pages/events/[id].vue'
import EventCreate from '~/pages/events/[id]/create.vue'
import ErrorDisplay from '~/pages/error-display.vue'
import About from '~/pages/about.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/events/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails
  },
  {
    path: '/events/create',
    name: 'EventCreate',
    component: EventCreate
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/error/:error',
    name: 'ErrorDisplay',
    props: true,
    component: ErrorDisplay
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
