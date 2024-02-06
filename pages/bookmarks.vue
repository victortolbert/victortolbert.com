<script setup>
const description
  = 'Awesome stuff on the internet for developers and designers.'
useSeoMeta({
  title: 'Bookmarks - Victor Tolbert',
  description,
})

const bookmarks = [

  {
    id: 1,
    label: 'UnJS (Unified JavaScript) - Agnostic High-Quality JavaScript Libraries, Tools, and Utilities',
    url: 'https://unjs.io/',
    icon: 'unjs.svg',
  },
  {
    id: 2,
    label: 'NuxtUI - A UI Library for Modern Web Apps',
    url: 'https://ui.nuxt.com/',
    icon: 'nuxt.svg',
  },
  {
    id: 3,
    label: 'Logo Ipsum - 100 free placeholder logos',
    url: 'https://logoipsum.com/',
    icon: 'logoipsum.svg',
  },
  // {
  //   id: 3,
  //   label: 'Coverr - Free Stock Video Footage, Royalty Free Clips for Download',
  //   url: 'https://coverr.co/',
  //   icon: 'coverr.svg',
  // },
  // {
  //   id: 6,
  //   label: 'CSS Gradient Generator',
  //   url: 'https://www.joshwcomeau.com/gradient-generator/',
  //   icon: '',
  // },
  // {
  //   id: 4,
  //   label: 'Unsplash - Beautiful Free Images & Pictures',
  //   url: 'https://unsplash.com/',
  //   icon: 'unsplash.svg',
  // },
  // {
  //   id: 1,
  //   label: 'Reqres.in - Test your front-end against a real API',
  //   url: 'https://reqres.in/',
  //   icon: '',
  // },

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
  return `/assets/images/icons/${host}`
}
function getIcon(icon) {
  return `/assets/images/icons/${icon || 'link.svg'}`
}
</script>

<template>
  <main class="min-h-screen mx-auto max-w-3xl">
    <Breadcrumbs />
    <AppHeader class="mt-1.5 mb-8" title="Bookmarks" :description="description" />
    <ul class="space-y-2">
      <li v-for="bookmark in bookmarks" :key="bookmark.id">
        <a
          :href="bookmark.url"
          target="_blank"
          class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0"
        >
          <UAvatar
            :src="getIcon(bookmark.icon)"
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
