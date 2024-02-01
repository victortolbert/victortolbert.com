<script setup lang="ts">
const links = [{ label: 'Home', to: '/' }, { label: 'Examples', to: '/examples' }, { label: 'Photo Gallery' }]
</script>

<template>
  <div>
    Photo Gallery
    <!-- <UBreadcrumb :links="links" /> -->
    <ExampleBreadcrumb :links="links" />
    <NuxtImg src="/assets/images/me/2004-house-042705_001.jpeg" />
  </div>
</template>
