<script setup>
const description
  = 'You\'ve found your way to my Uses page, where I share the software, gadgets, and items that I use in my daily life. This is the place to uncover my personal favorites that add a sprinkle of magic to my daily routine. Dive in!"'
useSeoMeta({
  title: 'Uses - Victor Tolbert',
  description,
})

const { data: items } = await useAsyncData('uses', () =>
  queryContent('/uses').find())

const hardware = items.value.filter(item => item.category === 'hardware')
const software = items.value.filter(item => item.category === 'software')
const desk = items.value.filter(item => item.category === 'desk')
const other = items.value.filter(item => item.category === 'others')
</script>

<template>
  <article class="min-h-screen mx-auto">
    <AppHeader
      class="mt-1.5 mb-12"
      title="Uses"
      :description="description"
    />
    <div class="space-y-24">
      <ul class="space-y-8">
        <AppUsesHeader title="Hardware" />
        <AppUsesItem v-for="(item, id) in hardware" :key="id" :item="item" />
      </ul>
      <ul class="space-y-8">
        <AppUsesHeader title="Software" />
        <AppUsesItem v-for="(item, id) in software" :key="id" :item="item" />
      </ul>
      <ul class="space-y-8">
        <AppUsesHeader title="Desk" />
        <AppUsesItem v-for="(item, id) in desk" :key="id" :item="item" />
      </ul>
      <ul class="space-y-8">
        <AppUsesHeader title="Other" />
        <AppUsesItem v-for="(item, id) in other" :key="id" :item="item" />
      </ul>
    </div>
  </article>
</template>
