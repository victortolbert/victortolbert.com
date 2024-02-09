<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

async function fetcher() {
  return await fetch('https://api.victortolbert.com/plants').then(response =>
    response.json(),
  )
}

const { data, suspense } = useQuery({ queryKey: ['test'], queryFn: fetcher })

await suspense()
</script>

<template>
  <div>{{ data }}</div>
</template>
