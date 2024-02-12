<script setup lang="ts">
import { useStore } from 'vuex'

const emit = defineEmits(['goHome'])
const store = useStore()
const router = useRouter()

function goHome() {
  store.state.activeApp = 'login'
  router.push('/videa')
  emit('goHome')
}
</script>

<template>
  <header class="vui-site-header vui-site-header--app" role="banner">
    <div class="vui-site-header--app__container vui-grid vui-grid--align-spread">
      <a
        class="vui-align-middle"
        @click.prevent="goHome"
      >
        <LogoVideaWhite style="height: 2rem" />
      </a>
      <div v-if="store.state.activeApp === 'sellers' || store.state.activeApp === 'buyers'" class="vui-medium-show vui-action">
        <span class="vui-m-right--xx-small">Welcome Back,</span>
        <vui-dropdown class="dropdown-left vui-m-right--x-small" :text="store.state.user.name" />
        <button id="stationSelector" class="vui-button vui-button--inverse vui-button--small vui-m-right--x-small">
          <span>{{ store.state.stationCallLetters }}</span>
          <vui-icon name="caret-down" />
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="stylus">
  .app-logo
    height 2rem
</style>
