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
        Templates
      </h2>
    </header>

    <section class="grid gap-4">
      <p>
        <SvgTemplates class="-mt-2 h-16 w-auto float-left pr-4 text-primary-500" />
        Templates exist to document the layout and structure of a section. These are not called “pages” for a reason. While they can be pages, that’s not their only functionality. Templates consist of <NuxtLink to="/lab/tokens">
          design tokens,
        </NuxtLink><NuxtLink to="/lab/elements">
          elements,
        </NuxtLink> and <NuxtLink to="/lab/patterns">
          patterns.
        </NuxtLink>
      </p>
    </section>

    <NuxtPage />
  </article>
</template>
