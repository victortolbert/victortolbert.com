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
<script lang="ts">
import { defineComponent } from 'vue'
import { useHead } from '@vueuse/head'
// import {css} from '@emotion/css'
import { getColors } from 'theme-colors'
import theme from '~/theme'
import { generate } from '@ant-design/colors'

export default defineComponent({
  inject: ['GStore'],
  setup() {
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

    return {
      colors,
      colors2,
    }
  }
})
</script>

<template>
  <div id="app" class="relative flex flex-col min-h-screen">
    <div id="flashMessage" v-if="GStore.flashMessage">{{ GStore.flashMessage }}</div>

    <FlashMessage v-if="false" />

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

<style>
.ga-sps {
  --color-primary: #98002f;
  --color-primary-50: #faf2f5;
  --color-primary-100: #f5e6ea;
  --color-primary-200: #e5bfcb;
  --color-primary-300: #d699ac;
  --color-primary-400: #b74d6d;
  --color-primary-500: #98002f;
  --color-primary-600: #89002a;
  --color-primary-700: #720023;
  --color-primary-800: #5b001c;
  --color-primary-900: #4a0017;

  --color-secondary: #16abe4;
  --color-secondary-50: #f3fbfe;
  --color-secondary-100: #e8f7fc;
  --color-secondary-200: #c5eaf8;
  --color-secondary-300: #a2ddf4;
  --color-secondary-400: #5cc4ec;
  --color-secondary-500: #16abe4;
  --color-secondary-600: #149acd;
  --color-secondary-700: #1180ab;
  --color-secondary-800: #0d6789;
  --color-secondary-900: #0b5470;

  --color-tertiary: #0e50a9;
  --color-tertiary-50: #f3f6fb;
  --color-tertiary-100: #e7eef6;
  --color-tertiary-200: #c3d3ea;
  --color-tertiary-300: #9fb9dd;
  --color-tertiary-400: #5685c3;
  --color-tertiary-500: #0e50a9;
  --color-tertiary-600: #0d4898;
  --color-tertiary-700: #0b3c7f;
  --color-tertiary-800: #083065;
  --color-tertiary-900: #072753;
}

@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}
#flashMessage {
  animation-name: yellowfade;
  animation-duration: 3s;
}
</style>
