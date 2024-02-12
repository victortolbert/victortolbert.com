<script setup lang="ts">
import { ref } from 'vue'

import { useQuery } from '@tanstack/vue-query'

async function fetcher() {
  return await fetch('https://api.victortolbert.com/states').then(response =>
    response.json(),
  )
}

const { data, suspense } = useQuery({ queryKey: ['test'], queryFn: fetcher })

await suspense()
const state = ref(null)
</script>

<template>
  <div>
    <USelect
      v-model="state"
      :options="data"
      value-attribute="id"
      option-attribute="label"
    />

    <USelectMenu
      v-model="state"
      :options="data"
      searchable
      searchable-placeholder="Search a state..."
      value-attribute="id"
    />

    {{ state }}
  </div>
</template>
