<script setup>
const props = defineProps(['rate', 'impressions'])

const cpm = computed(() => {
  return props.rate / props.impressions
})
</script>

<template>
  <span>
    <!-- {{ Math.round(cpm) | formatMoney }} -->
    {{ Math.round(cpm) }}
  </span>
</template>
