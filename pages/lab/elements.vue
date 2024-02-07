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
        Elements
      </h2>
    </header>

    <section class="grid gap-4">
      <p>
        <SvgElements class="h-16 w-auto float-left pr-4 text-primary-500" />
        Elements are the smallest basic structures of an user interface. They cannot be broken down any further. Buttons, links, and inputs are good examples. Elements utilize decisions made on the <NuxtLink to="/lab/tokens">
          design token
        </NuxtLink> level.
      </p>
    </section>

    <NuxtPage />
  </article>
</template>
