<script setup lang="ts">
const online = useOnline()
const date = useAppConfig().buildDate
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header v-if="!online" class="bg-red-600 text-gray-100 p-4">
      Offline
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer>Built Date: {{ date }}</footer>
  </div>
</template>
