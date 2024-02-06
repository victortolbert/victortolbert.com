<script setup>
const description = 'Victor Tolbert is a software engineer and content creator.'

useSeoMeta({
  title: 'About - Victor Tolbert',
  description,
})
</script>

<template>
  <main class="min-h-screen w-full relative mx-auto max-w-3xl print:p-12">
    <Breadcrumbs />
    <div class="mt-1.5 space-y-24">
      <HomeIntro />
      <HomeSocialLinks />
      <HomeFeaturedProjects />
      <HomeFeaturedArticles />
      <HomeNewsletter />
    </div>
  </main>
</template>
