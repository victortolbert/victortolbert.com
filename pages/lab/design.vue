<script setup>
const vueds = '/_nuxt/public/assets/images/design-systems/vueds.svg'
const styleguide = '/_nuxt/public/assets/images/design-systems/styleguide.svg'

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
