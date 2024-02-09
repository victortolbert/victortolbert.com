<script setup lang="ts">
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
        Design Tokens
      </h2>
    </header>

    <section class="grid gap-4">
      <p>
        <SvgTokens class="float-left w-auto h-16 pr-4 text-primary-500" />
        Design tokens are the atoms of the system as <NuxtLink target="_blank" to="https://www.lightningdesignsystem.com/design-tokens/">
          Salesforce
        </NuxtLink> describes them. They are used instead of hard coded values to ensure a better consistency across any platform.
      </p>
    </section>

    <NuxtPage />
  </article>
</template>
