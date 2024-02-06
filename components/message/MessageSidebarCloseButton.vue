<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['closeMenu']),
  },
}
</script>

<template>
  <div class="absolute right-0 top-0 p-1 -mr-14">
    <button
      class="h-12 w-12 flex items-center justify-center rounded-full focus:bg-gray-600 focus:outline-none"
      aria-label="Close sidebar"
      @click="closeMenu"
    >
      <svg class="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</template>
