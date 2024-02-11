<script>
defineProps({
  landscape: {
    type: Boolean,
    default: false,
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
    </div>
    <div class="home" />
  </div>
</template>
