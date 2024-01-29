<script setup lang="ts">
const { data } = useAsyncData('data', async () => {
  return new AwesomeFramework('Nuxt.js')
})
</script>

<template>
  <div>
    {{ data?.name }}
  </div>
</template>
