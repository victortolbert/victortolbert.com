<script setup>
const description = 'Victor Tolbert is a software engineer and content creator.'

useSeoMeta({
  title: 'About - Victor Tolbert',
  description,
})
</script>

<template>
  <article class="min-h-screen w-full relative mx-auto print:p-12 max-w-3xl">
    <div class="mt-1.5 space-y-24">
      <HomeIntro />
      <HomeSocialLinks />
      <HomeFeaturedProjects />
      <HomeFeaturedArticles />
      <HomeNewsletter v-if="false" />
    </div>
  </article>
</template>
