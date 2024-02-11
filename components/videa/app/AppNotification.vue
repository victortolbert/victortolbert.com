<script setup lang="ts">
import { useStore } from 'vuex'

const store = useStore()
</script>

<template>
  <div v-show="store.state.hasError" class="vui-notify_container" style="position: absolute; top:100%">
    <div class="vui-notify vui-notify--alert vui-theme--error" role="alert">
      <span class="alert__message">
        <vui-icon name="exclamation-triangle" />Please enter your username and password.</span>
    </div>
  </div>
</template>
