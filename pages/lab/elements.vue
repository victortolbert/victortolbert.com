<script setup>
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
    <ExampleBreadcrumb :links="links" />

    <header class="py-2 px-8 bg-gray-100 dark:bg-gray-900">
      <h2 class="font-semibold">
        Elements
      </h2>
    </header>

    <section class="px-8 grid gap-4">
      <p>
        Elements are the smallest basic structures of an user interface. They cannot be broken down any further. Buttons, links, and inputs are good examples. Elements utilize decisions made on the <NuxtLink to="/examples/tokens">
          design token
        </NuxtLink> level.
      </p>
    </section>

    <NuxtPage />
  </article>
</template>
