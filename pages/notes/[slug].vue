<script setup lang="ts">
import { joinURL, withoutTrailingSlash } from 'ufo'
import type { NotesPost } from '~/types'

const route = useRoute()

const { data: note } = await useAsyncData(route.path, () => queryContent<NotesPost>(route.path).findOne())
if (!note.value)
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => queryContent('/notes')
  .where({ _extension: 'md' })
  .without(['body', 'excerpt'])
  .sort({ date: -1 })
  .findSurround(withoutTrailingSlash(route.path)), { default: () => [] })

const title = note.value.head?.title || note.value.title
const description = note.value.head?.description || note.value.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
})

if (note.value.image?.src) {
  const site = useSiteConfig()

  useSeoMeta({
    ogImage: joinURL(site.url, note.value.image.src),
    twitterImage: joinURL(site.url, note.value.image.src),
  })
}
else {
  defineOgImageComponent('Saas', {
    title,
    description,
    headline: 'Blog',
  })
}
</script>

<template>
  <UContainer v-if="note">
    <UPageHeader :title="note.title" :description="note.description">
      <template #headline>
        <UBadge v-bind="note.badge" variant="subtle" />
        <span class="text-gray-500 dark:text-gray-400">&middot;</span>
        <time class="text-gray-500 dark:text-gray-400">{{ new Date(note.date).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' }) }}</time>
      </template>

      <div class="flex flex-wrap items-center gap-3 mt-4">
        <UButton
          v-for="(author, index) in note.authors"
          :key="index"
          :to="author.to"
          color="white"
          target="_blank"
          size="sm"
        >
          <UAvatar v-bind="author.avatar" :alt="author.name" size="2xs" />

          {{ author.name }}
        </UButton>
      </div>
    </UPageHeader>

    <UPage>
      <UPageBody prose>
        <ContentRenderer v-if="note && note.body" :value="note" />

        <hr v-if="surround?.length">

        <UDocsSurround :surround="surround" />
      </UPageBody>

      <template #right>
        <UDocsToc v-if="note.body && note.body.toc" :links="note.body.toc.links" />
      </template>
    </UPage>
  </UContainer>
</template>
