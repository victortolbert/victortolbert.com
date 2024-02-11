<script setup>
defineProps(['title'])
</script>

<template>
  <h1 class="vui-text-heading--large vui-m-bottom--medium">
    <slot />
  </h1>
</template>
