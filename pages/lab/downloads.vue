<script setup lang="ts">
definePageMeta({
  title: 'Downloads',
  description: 'These downloads, links, and third-party tools will help you and your teams learn, design, and build products. Here you can also provide links to assets like fonts, icons, color swatches, Sketch UI kits and so on.',
  breadcrumb: {
    title: 'Downloads',
    ariaLabel: 'Downloads',
    hideCurrent: true,
  },
})
const links = ref([
  {
    label: 'Back',
    to: '/examples',
    icon: 'i-ph-arrow-left-duotone',
  },
])
</script>

<template>
  <article class="grid gap-4">
    <!-- <ExampleBreadcrumb :links="links" /> -->

    <header>
      <h2 class="font-semibold">
        Downloads
      </h2>
    </header>

    <section class="grid gap-4">
      <p>
        These downloads, links, and third-party tools will help you and your teams learn, design, and build products. Here you can also provide links to assets like fonts, icons, color swatches, Sketch UI kits and so on.
      </p>
    </section>

    <NuxtPage />
  </article>
</template>
