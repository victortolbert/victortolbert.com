  <!-- created() {
    const parts = location.hostname.split('.')
    const subdomain = parts.shift()
    const upperleveldomain = parts.join('.')
    const secondleveldomain = parts.slice(-2).join('.')

    this.$store.commit('SET_SUBDOMAIN', subdomain)
  },
  mounted() {
    this.$jam('this.$jam plugin works in mounted...')
    // ctx.$icon(512)
  }, -->
<!-- @vue-ignore -->
<script setup lang="ts">
// import {computed} from 'vue'
import { useHead } from '@vueuse/head'
// import {css} from '@emotion/css'
import {getColors} from 'theme-colors'
import theme from '~/theme'

import {generate} from '@ant-design/colors'
const colors = generate(Object.values(theme.colors.paprika)[5])
// const colors = generate('#1890ff')
const colors2 = getColors('#da5d3f')
// const applyStyles = computed(() => {
//     return css({})
// })

useHead({
  title: 'App',
  meta: [
    { property: 'og:title', content: 'Anthony Fu' },
    { property: 'og:image', content: 'https://antfu.me/avatar.png' },
    { name: 'description', content: 'Victor Tolbert\'s Portfolio' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:creator', content: '@antfu7' },
    ],
})
</script>
<!-- @vue-ignore -->

<template>

    <div
      id="app"
      class="relative flex flex-col min-h-screen"
    >
      <AppNavbar
        :person="{
          id: 1,
          isOnline: false,
          username: 'victortolbert',
          name: 'Victor',
          isLoggedIn: true,
          profilePhotoUrl: '',
          email: 'victor.tolbert@gmail.com'
        }"
        />

      <main class="flex-1">
        <RouterView />
      </main>
    </div>
</template>
