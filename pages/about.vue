<script setup>
const description = 'Victor Tolbert is a software engineer and content creator.'

useSeoMeta({
  title: 'About - Victor Tolbert',
  description,
})
</script>

<template>
  <main class="min-h-screen">
    <div class="space-y-24">
      <HomeIntro />
      <HomeSocialLinks />
      <HomeFeaturedProjects />
      <HomeFeaturedArticles />
      <HomeNewsletter />
    </div>
  </main>
</template>
