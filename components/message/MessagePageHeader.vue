<script setup>
defineProps({
  messages: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <header
    class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between lg:px-8 sm:px-6"
  >
    <div class="min-w-0 flex-1 prose">
      <slot name="left">
        <h2>Messages</h2>
      </slot>
    </div>

    <div class="mt-4 flex sm:ml-4 sm:mt-0">
      <slot name="right" />
    </div>
  </header>
</template>
