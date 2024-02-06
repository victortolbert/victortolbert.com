<script setup lang="ts">
async function loadMountains() {
  const { data, pending, error, refresh } = await useAsyncData(
    'mountains',
    () => $fetch('https://api.nuxtjs.dev/mountains'),
  )

  console.log('loadMountains', data)
}

loadMountains()

const error = ref()

onErrorCaptured((e: Error) => {
  console.error(e)
  return false
})
</script>

<template>
  <Suspense>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>
