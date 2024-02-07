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
    <!-- <ExampleBreadcrumb :links="links" /> -->

    <header>
      <h2 class="font-semibold">
        Patterns
      </h2>
    </header>

    <section class="grid gap-4">
      <p>
        <SvgPatterns class="h-16 w-auto float-left pr-4 text-primary-500" />

        Patterns are UI patterns that fall on the more complex side of the spectrum. Date pickers, data tables, and visualizations are good examples. Patterns utilize both <NuxtLink to="/lab/elements">
          elements
        </NuxtLink> and <NuxtLink to="/lab/tokens">
          design tokens.
        </NuxtLink>
      </p>
    </section>

    <NuxtPage />
  </article>
</template>
