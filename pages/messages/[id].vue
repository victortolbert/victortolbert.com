<script setup>
import { strip } from '~/utils'

const message = ref()
const route = useRoute()

function truncate(html) {
  return `${strip(html).substr(0, 50)}...`
}

useFetch(async () => {
  message.value = await axios.get(`messages/${route.params.value.id}`)
})
</script>

<template>
  <div class="mx-16 my-8 prose">
    <template v-if="$fetchState.pending">
      <ContentPlaceholders>
        <ContentPlaceholdersHeading />
        <ContentPlaceholdersText :lines="10" />
      </ContentPlaceholders>
    </template>

    <template v-else-if="$fetchState.error">
      <h1>Message #{{ $route.params.id }} not found</h1>
    </template>

    <template v-else>
      <h2>
        <NuxtLink to="/messages">
          &larr; Inbox
        </NuxtLink>
      </h2>

      <h1>{{ message.subject }}</h1>

      <span class="text-gray-700">
        <span class="block text-xs tracking-wider uppercase">From</span>
        <b>{{ message.sender }}</b>
      </span>

      <div v-html="message.body" />
    </template>
  </div>
</template>
