<script setup>
const description
  = 'All of my long-form thoughts on programming, user interfaces, product design, and more, collected in chronological order.'
useSeoMeta({
  title: 'Articles | Victor Tolbert',
  description,
})

const { data: articles } = await useAsyncData('all-articles', () =>
  queryContent('/articles').sort({ published: -1 }).find())
</script>

<template>
  <article class="min-h-screen mx-auto max-w-3xl">
    <AppHeader class="mt-1.5 mb-16" title="Articles" :description="description" />
    <ul class="space-y-16">
      <li v-for="(article, id) in articles" :key="id">
        <AppArticleCard :article="article" />
      </li>
    </ul>
  </article>
</template>
