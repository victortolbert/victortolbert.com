<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'

async function todoFetcher() {
  await new Promise(resolve => setTimeout(resolve, 2000))

  return await fetch('https://dummyjson.com/todos')
    .then(response => response.json(),
    )
}

const { isPending, isFetching, isError, data, error, suspense } = useQuery({
  queryKey: ['todos'],
  queryFn: todoFetcher,
})

onServerPrefetch(async () => {
  await suspense()
})
</script>

<template>
  <div>
    <div v-if="isPending">
      <div>Loading...</div>
    </div>
    <div v-else-if="isError">
      <div>Error: {{ error }}</div>
    </div>
    <div v-else-if="isFetching">
      <div>Fetching...</div>
    </div>
    <div v-else>
      <pre>{{ data.todos }}</pre>
    </div>
  </div>
</template>
