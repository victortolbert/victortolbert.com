<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

async function fetcher() {
  return await fetch('https://api.victortolbert.com/messages').then(response =>
    response.json(),
  )
}

const { data, suspense } = useQuery({ queryKey: ['test'], queryFn: fetcher })

await suspense()
</script>

<template>
  <div class="flex h-screen overflow-hidden bg-white">
    <MessageSidebar class="hidden lg:flex lg:flex-shrink-0" />
    <MessageSidebarOffCanvas class="lg:hidden" />

    <div class="flex flex-col flex-1 w-0 overflow-hidden">
      <MessageSearchHeader />

      <article class="relative z-0 flex-1 overflow-y-auto focus:outline-none" tabindex="0">
        <MessagePageHeader />

        <NuxtPage />

        <div>{{ data }}</div>
      </article>
    </div>
  </div>
</template>
