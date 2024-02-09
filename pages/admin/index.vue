<script setup lang="ts">
definePageMeta({
  layout: 'admin',
})
</script>

<template>
  <div>
    <ULandingHero description="">
      <template #title>
        The <span class="text-primary block lg:inline-block">Building Blocks</span> for Modern Web apps
      </template>
    </ULandingHero>

    <ULandingSection title="The freedom to build anything" align="left" />

    <ULandingSection title="The flexibility to control your data" align="right" />
  </div>
</template>
