<script setup>
const description
  = 'Throughout my journey, I\'ve been fortunate to work on countless projects, but these are the ones that truly stand out. A few of them are open-source, so if anything sparks your curiosity, take a look at the code and consider contributing your insights for further refinement.'
useSeoMeta({
  title: 'Projects - Victor Tolbert',
  description,
})

const { data: projects } = await useAsyncData('projects-all', () =>
  queryContent('/projects').find())
</script>

<template>
  <main class="min-h-screen mx-auto max-w-3xl">
    <Breadcrumbs />
    <AppHeader class="mt-1.5 mb-12" title="Projects" :description="description" />

    <LogoCloud />

    <section v-if="false" class="grid gap-16 text-gray-400 scale-90 dark:text-gray-500">
      <!-- <LogoHancockClaims /> -->
      <NuxtLink to="/att" class="grid">
        <LogoATT />
      </NuxtLink>
      <NuxtLink to="/autotrader" class="grid">
        <LogoAutoTrader />
      </NuxtLink>
      <NuxtLink to="/booster" class="grid">
        <LogoBooster />
      </NuxtLink>
      <NuxtLink to="/turner" class="grid">
        <LogoTurnerSports />
      </NuxtLink>
      <NuxtLink to="/videa" class="grid">
        <LogoVidea />
      </NuxtLink>
      <NuxtLink to="/webmd" class="grid">
        <LogoWebmd />
      </NuxtLink>
    </section>

    <div class="space-y-4 mt-16">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
  </main>
</template>
