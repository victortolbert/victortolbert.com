<script setup lang="ts">
import { useStore } from 'vuex'

const store = useStore()
</script>

<template>
  <nav class="vui-site-navigation">
    <VideaAppLogin v-if="store.state.activeApp === 'login'" />
    <VideaAppBuyersNav v-else-if="store.state.activeApp === 'buyers'" />
    <VideaAppSellersNav v-else-if="store.state.activeApp === 'sellers'" class="vui-max-medium-hide" />
    <!-- <VideaAppExamplesNav v-else-if="store.state.activeApp === 'examples'" /> -->
    <!-- <VideaAppTicketsNav v-else-if="store.state.activeApp === 'tickets'" /> -->
    <VideaAppNotification />
  </nav>
</template>
