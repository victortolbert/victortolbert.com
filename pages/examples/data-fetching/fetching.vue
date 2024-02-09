<script lang="ts" setup>
definePageMeta({
  title: 'Fetching',
  breadcrumb: 'Fetching',
  layout: 'hancock',
})
</script>

<template>
  <Suspense>
    <template #default>
      <div>
        <FetchTodos />
      </div>
    </template>

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
