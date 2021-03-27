<script lang="ts">
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<template>
  <ul class="mt-4 list-none">
    <li v-for="(item, i) in items" :key="i" class="flex mt-3">
      <IconCheck class="flex-shrink-0 w-6 h-6 mt-px mr-3" />
      {{ item }}
    </li>
  </ul>
</template>
