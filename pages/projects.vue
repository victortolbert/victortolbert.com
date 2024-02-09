<script setup>
const description
  = 'Throughout my professional journey, I\'ve had the privilege of contributing to a diverse array of projects for some truly remarkable companies. Below, I\'ve highlighted a selection of these endeavors, some of which are open-source initiatives. I encourage you to explore these projects—should any pique your interest, I warmly invite you to delve into the code and consider offering your unique insights and expertise to enhance their development further.'
useSeoMeta({
  title: 'Projects - Victor Tolbert',
  description,
})

const { data: projects } = await useAsyncData('projects-all', () =>
  queryContent('/projects').find())
</script>

<template>
  <article class="min-h-screen mx-auto max-w-3xl">
    <AppHeader class="mt-1.5 mb-12" title="Projects" :description="description" />

    <LogoCloud />

    <div v-if="false" class="space-y-4 mt-16">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
  </article>
</template>
