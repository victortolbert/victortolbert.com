
<script setup lang='ts'>
import { useAxios } from '@vueuse/integrations'
const { data, loading, finished } = useAxios('http://localhost:3006/posts/1')
</script>

<template>
  <note>Loading: {{ loading.toString() }}</note>
  <note>Finished: {{ finished.toString() }}</note>
  {{ data }}
  <RouterView />
</template>

<route lang="yaml">
name: name-override
meta:
  requiresAuth: true
</route>
