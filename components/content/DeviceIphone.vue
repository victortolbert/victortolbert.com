<script setup>
defineProps({
  landscape: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="marvel-device iphone-x" :class="{ landscape }">
    <div class="notch">
      <div class="camera" />
      <div class="speaker" />
    </div>
    <div class="top-bar" />
    <div class="sleep" />
    <div class="bottom-bar" />
    <div class="volume" />
    <div class="overflow">
      <div class="shadow shadow--tr" />
      <div class="shadow shadow--tl" />
      <div class="shadow shadow--br" />
      <div class="shadow shadow--bl" />
    </div>
    <div class="inner-shadow" />
    <div class="screen">
      <slot />
    </div>
  </div>
</template>
