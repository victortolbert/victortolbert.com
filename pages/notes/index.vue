<script setup lang="ts">
import type { NotesPost } from '~/types'

const { data: page } = await useAsyncData('notes', () => queryContent('/notes').findOne())

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true,
  })
}

const { data: notes } = await useAsyncData('notes', () => queryContent<NotesPost>('/notes')
  .where({ _extension: 'md' })
  .sort({ date: -1 })
  .find())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
})

defineOgImageComponent('Saas', {
  title: page.value.title,
  description: page.value.description,
}, { alt: 'A welcome message' })
</script>

<template>
  <UContainer>
    <UPageHeader v-bind="page" class="py-[50px]" />

    <UPageBody>
      Notes
    </UPageBody>
  </UContainer>
</template>
