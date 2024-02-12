<script setup lang="ts">
const online = useOnline()
// const date = useAppConfig().buildDate
// const client = useSupabaseClient()
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header v-if="!online" class="bg-red-600 text-gray-100 p-4">
      Offline
    </header>

    <SalesforceNavbar />

    <div class="h-32" />

    <main class="flex-1">
      <slot />
    </main>

    <div class="h-32" />

    <SalesforceFooter />

    <!-- <footer class="flex items-center justify-between p-4">
      <NuxtLink to="/">
        <SalesforceLogo />
      </NuxtLink>

      <div class="flex items-center gap-2">
        <span class="text-sm">Built Date: {{ date }}</span>
        <UColorModeButton />
      </div>
    </footer> -->

    <SalesforceCommandPalette />
  </div>
</template>
