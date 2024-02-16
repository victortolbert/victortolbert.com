<script setup lang="ts">
import { useStore } from 'vuex'

defineEmits(['close'])

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: '/videa/assets/css/vui.css',
    },
  ],
})

const store = useStore()

const version = ref('0.10.0')
const callingAPI = ref(false)
const serverURI = ref('http://10.110.1.10:8080')

// const caller: this.$http
</script>

<template>
  <div class="app" @click="$emit('close')">
    <VideaAppHeader />
    <VideaAppNavigation />

    <main
      class="vui-main"
      :class="{
        'vui-main--login': store.state.activeApp === 'sellers' }"
    >
      <transition
        name="slide"
        :duration="{
          enter: 300,
          leave: 500,
        }"
      >
        <slot />
      </transition>
    </main>

    <VideaAppFooter />
    <VideaAppHelp />
  </div>
</template>

<style lang="stylus">
  .app
    display flex
    flex-direction column
    min-height 100vh
    height 100%  // Avoid the IE 10-11 `min-height` bug.
    background-color #f4f6f9
    color #000000
    position relative

  a
    transition 1s color
</style>
