<script setup lang="ts">
const { data } = await useCustomFetch<object>('/accounts')
</script>

<template>
  <div>
    <h1 class="text-xl opacity-50">
      Nuxt custom fetch
    </h1>

    <pre class="text-left text-xs">{{ data }}</pre>
  </div>
</template>
