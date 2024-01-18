<script setup lang='ts'>
const { count, inc, dec } = useCount()
</script>

<template>
  <div class="inline-flex my-3">
    <button class="rounded-full p-2 btn" @click="dec()">
      <Icon name="ph:minus-duotone" class="w-6 h-6" />
    </button>
    <div class="font-mono w-15 m-auto inline-block">
      {{ count }}
    </div>
    <button class="rounded-full p-2 btn" @click="inc()">
      <Icon name="ph:plus-duotone" class="w-6 h-6" />
    </button>
  </div>
</template>
