<script setup>
defineProps({
  value: {
    type: [String, Boolean, Number],
    default: null,
  },
})
</script>

<template>
  <div class="campaign-performance-delivery-indicator">
    <span v-if="value">
      <!-- {{ value | decimalToPercent }} -->
      {{ value }}
    </span>
    <span v-else class="vui-float--left">N/A</span>
  </div>
</template>
