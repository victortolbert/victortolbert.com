<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'

definePageMeta({
  title: 'Examples',
  breadcrumb: 'Examples',
  layout: 'hancock',
})

async function todoFetcher() {
  return await fetch('https://dummyjson.com/todos')
    .then(response => response.json(),
    )
}

const { isPending, isFetching, isError, data, error, suspense } = useQuery({
  queryKey: ['todos'],
  queryFn: todoFetcher,
})

await suspense()
</script>

<template>
  <UBox>
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
      <div class="overflow-auto border">
        <UTable :rows="data.todos">
          <template #completed-data="{ row }">
            {{ row.completed ? 'Yes' : 'No' }}
          </template>
        </UTable>
      </div>
    </div>
  </UBox>
</template>
