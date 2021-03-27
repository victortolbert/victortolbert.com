<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  computed: {
    hasHeaderSlot() {
      return !!this.$slots.header
    },
    hasFooterSlot() {
      return !!this.$slots.footer
    },
  },
})
</script>

<template>
  <div
    class="flex flex-col w-full min-h-screen pt-16 bg-white dark:bg-gray-900 dark:text-primary-50"
  >
    <header v-if="hasHeaderSlot">
      <slot name="header" />
    </header>

    <slot />

    <footer v-if="hasFooterSlot">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
