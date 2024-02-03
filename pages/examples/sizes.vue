<script setup lang="ts">
const containers = ref([
  { name: '2xs', minWidth: '256px' },
  { name: 'xs', minWidth: '320px' },
  { name: 'sm', minWidth: '384px' },
  { name: 'md', minWidth: '448px' },
  { name: 'lg', minWidth: '512px' },
  { name: 'xl', minWidth: '576px' },
  { name: '2xl', minWidth: '672px' },
  { name: '3xl', minWidth: '768px' },
  { name: '4xl', minWidth: '896px' },
  { name: '5xl', minWidth: '1024px' },
  { name: '6xl', minWidth: '1152px' },
  { name: '7xl', minWidth: '1280px' },
].reverse())
</script>

<template>
  <div class="grid gap-2 border place-items-center">
    <div
      v-for="container in containers"
      :key="container.name"
      :style="{ maxWidth: container.minWidth }"
      class="border-2 w-full border-dashed border-gray-400 p-4 text-center"
    >
      {{ container.name }}
    </div>
  </div>
</template>
