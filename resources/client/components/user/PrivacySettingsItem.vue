<script setup lang="ts">
import { ref } from 'vue'
const on = ref(false)
</script>
<template>
  <li class="py-4 flex items-center justify-between">
    <div class="flex flex-col">
      <p
        class="text-sm font-medium text-gray-900"
        id="privacy-option-1-label"
        @click="on = !on"
      >Available to hire</p>
      <p
        class="text-sm text-gray-500"
        id="privacy-option-1-description"
      >Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.</p>
    </div>
    <button
      type="button"
      class="ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 bg-primary-500"
      :class="{ 'bg-primary-500': on, 'bg-gray-200': !on }"
      aria-labelledby="privacy-option-1-label"
      aria-describedby="privacy-option-1-description"
      :aria-pressed="on"
      @click="on = !on"
    >
      <span class="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        class="inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 translate-x-5"
        :class="{ 'translate-x-5': on, 'translate-x-0': !on }"
      />
    </button>
  </li>
</template>
