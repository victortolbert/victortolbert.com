<script setup>
const props = defineProps(['rate', 'rating'])

const cpp = computed(() => {
  return props.rate / props.rating
})
</script>

<template>
  <span>
    <!-- {{ Math.round(cpp) | formatMoney }} -->
    {{ Math.round(cpp) }}
  </span>
</template>
