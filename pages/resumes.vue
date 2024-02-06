<script setup>
definePageMeta({
  title: 'Resumes',
  description: 'Resume starter templates',
  image: 'https://nuxtjs.org/nuxt-card.png',
  url: 'https://victortolbert/lab',
})
</script>

<template>
  <article class="min-h-screen mx-auto max-w-3xl">
    <Breadcrumbs />
    <!--
    <AppHeader
      class="mt-1.5 mb-8"
      title="Resumes"
      :description="description"
    /> -->

    <div class="mt-4 flex gap-8 items-start">
      <NuxtPage />
    </div>
  </article>
</template>
