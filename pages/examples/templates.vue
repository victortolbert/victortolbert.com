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
        Templates
      </h2>
    </header>

    <section class="px-8 grid gap-4">
      <p>
        Templates exist to document the layout and structure of a section. These are not called “pages” for a reason. While they can be pages, that’s not their only functionality. Templates consist of <NuxtLink to="/examples/tokens">
          design tokens,
        </NuxtLink><NuxtLink to="/examples/elements">
          elements,
        </NuxtLink> and <NuxtLink to="/examples/patterns">
          patterns.
        </NuxtLink>
      </p>
    </section>

    <NuxtPage />
  </article>
</template>
