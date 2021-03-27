<script lang="ts">
export default {
  props: {
    color: {
      type: String,
      default: 'teal',
    },
  },
}
</script>

<template>
  <div class="hidden p-4 rounded-md lg:block bg-info-50">
    <div class="flex">
      <div class="flex-shrink-0">
        <!-- Heroicon name: information-circle -->
        <svg
          class="w-5 h-5 text-info-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="flex-1 ml-3 md:flex md:justify-between">
        <p class="text-sm text-info-700">
          A new software update is available. See what’s new in version 2.0.4.
        </p>
        <p class="mt-3 text-sm md:mt-0 md:ml-6">
          <a
            href="#"
            class="font-medium text-info-700 whitespace-nowrap hover:text-info-600"
            >Details <span aria-hidden="true">→</span></a
          >
        </p>
      </div>
    </div>
  </div>
</template>
