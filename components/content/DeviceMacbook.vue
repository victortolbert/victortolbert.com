<script setup>
defineProps({
  landscape: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="marvel-device macbook">
    <div class="top-bar" />
    <div class="camera" />
    <div class="screen">
      <slot />
    </div>
    <div class="bottom-bar" />
  </div>
</template>
