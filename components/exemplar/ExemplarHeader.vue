<script lang="ts" setup>
const q = ref('')
</script>

<template>
  <header class="dark:bg-primary-900 sticky top-0 z-10 bg-white py-2 shadow">
    <UContainer>
      <div class="flex items-center justify-between gap-4">
        <NuxtLink class="flex items-center gap-2" to="/dashboard">
          <LogoHancockMark />
          <span class="border-b border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
            {{ useAppConfig().name }}
          </span>
        </NuxtLink>

        <div class="flex items-center gap-2">
          <TheExamplesMenu />

          <TheEventsMenu />

          <HancockMenu />
        </div>
      </div>
    </UContainer>
  </header>
</template>
