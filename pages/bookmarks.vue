<script setup>
const description
  = 'Awesome things I\'ve found on the internet. This page is still WIP, I want to add search like bmrks.com'
useSeoMeta({
  title: 'Bookmarks - Victor Tolbert',
  description,
})

const bookmarks = [

  {
    id: 3,
    label: 'UnJS - Agnostic High-Quality JavaScript Libraries, Tools, and Utilities',
    url: 'https://unjs.io/',
  },
  {
    id: 3,
    label: 'Coverr - Free Stock Video Footage, Royalty Free Clips for Download',
    url: 'https://coverr.co/',
  },
  {
    id: 6,
    label: 'CSS Gradient Generator',
    url: 'https://www.joshwcomeau.com/gradient-generator/',
  },
  {
    id: 4,
    label: 'Unsplash - Beautiful Free Images & Pictures',
    url: 'https://unsplash.com/',
  },
  {
    id: 2,
    label: 'Logo Ipsum - 100 free placeholder logos',
    url: 'https://logoipsum.com/',
  },
  {
    id: 1,
    label: 'Reqres.in - Test your front-end against a real API',
    url: 'https://reqres.in/',
  },
  {
    id: 1,
    label: 'NuxtUI - A UI Library for Modern Web Apps',
    url: 'https://ui.nuxt.com/',
  },
]

function getHost(url) {
  const parsedUrl = new URL(url)
  let host = parsedUrl.host
  if (host.startsWith('www.'))
    host = host.substring(4)

  return host
}

function getThumbnail(url) {
  const host = getHost(url)
  return `https://logo.clearbit.com/${host}`
}
</script>

<template>
  <main class="min-h-screen">
    <AppHeader class="mb-8" title="Bookmarks" :description="description" />
    <ul class="space-y-2">
      <li v-for="bookmark in bookmarks" :key="bookmark.id">
        <a
          :href="bookmark.url"
          target="_blank"
          class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0"
        >
          <UAvatar
            :src="getThumbnail(bookmark.url)"
            :alt="bookmark.label"
            :ui="{ rounded: 'rounded-md' }"
          />
          <p class="truncate text-gray-700 dark:text-gray-200">
            {{ bookmark.label }}
          </p>
          <span class="flex-1" />
          <span class="text-xs font-medium text-gray-400 dark:text-gray-600">
            {{ getHost(bookmark.url) }}
          </span>
        </a>
      </li>
    </ul>
  </main>
</template>
