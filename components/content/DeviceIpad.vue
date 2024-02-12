<script setup>
defineProps({
  landscape: {
    type: Boolean,
    default: true,
  },
  silver: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="marvel-device ipad" :class="{ landscape, silver }">
    <div class="camera" />
    <div class="screen">
      <!-- Content goes here -->
      <slot />
    </div>
    <div class="home" />
  </div>
</template>
