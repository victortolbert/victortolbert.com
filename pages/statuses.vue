<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { videaStatuses } from '~/data'

async function fetcher() {
  return await fetch('https://api.victortolbert.com/statuses').then(response =>
    response.json(),
  )
}

const { data, suspense } = useQuery({ queryKey: ['test'], queryFn: fetcher })

await suspense()
</script>

<template>
  <div>
    <!-- 688 Alpha Omega -->
    <div class="flex flex-wrap gap-1.5">
      <UButton
        v-for="status in data"
        :key="`status-${status.name}`"
        size="2xs"
        variant="outline"
      >
        <template #leading>
          {{ status.status }}
          <UIcon
            :name="videaStatuses[status.label].icon"
            :class="videaStatuses[status.label].className"
          />
        </template>

        {{ status.label }}
      </UButton>
    </div>

    <!-- <div v-for="status in data" :key="`status-${status.name}`">
      {{ status }}
    </div> -->

    <!-- <UButton v-for="status in data" :key="`status-${status.name}`" class="text-sm">
      <template #leading>
        <UIcon
          :name="videaStatuses[status.status].icon"
          :class="videaStatuses[status.status].className"
        />
      </template>
      <span class="whitespace-nowrap px-2 py-2">
        <NuxtLink :to="status.url" class="text-gray-700 hover:text-primary-600 font-medium dark:text-gray-100">
          <pre>{{ status.name }}</pre>
        </NuxtLink>
      </span>
      <span class="whitespace-nowrap px-2 py-2">
        {{ status.version }}
      </span>
    </UButton> -->
  </div>
</template>
