<script setup>
const vueds = '/_nuxt/public/assets/images/vueds.svg'
const styleguide = '/_nuxt/public/assets/images/styleguide.svg'

definePageMeta({
  title: 'Design System',
  breadcrumb: 'Design System',
})
</script>

<template>
  <div>
    <img :src="`${styleguide}`" class="logo" alt="Style Guide">
    <img :src="`${vueds}`" class="logo" alt="Vue Design Systems">
  </div>
</template>
