<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <button
    v-click-away="() => $store.state.menu.open = false"
    @click="$store.state.menu.open = !$store.state.menu.open"
    type="button"
    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
    aria-controls="mobile-menu"
    aria-expanded="false"
  >
    <span class="sr-only">{{ t('open_main_menu') }}</span>
    <vti-IconOutlined v-if="$store.state.menu.open" name="x" />
    <vti-IconOutlined v-if="!$store.state.menu.open" name="menu" />
  </button>
</template>
