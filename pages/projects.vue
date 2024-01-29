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
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Projects" :description="description" />
    <div class="space-y-4">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
  </main>
</template>
