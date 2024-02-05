<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['openMenu']),
  },
}
</script>

<template>
  <button
    class="border-r border-gray-200 px-4 text-gray-500 lg:hidden focus:bg-gray-100 focus:text-gray-600 focus:outline-none"
    aria-label="Open sidebar"
    @click="openMenu"
  >
    <svg
      class="h-6 w-6"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M4 6h16M4 12h8m-8 6h16" />
    </svg>
  </button>
</template>
