<script setup lang="ts">
const online = useOnline()
const date = useAppConfig().buildDate
const supabase = useSupabaseClient()
console.log('supabase', supabase)
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header v-if="!online" class="bg-red-600 text-gray-100 p-4">
      Offline
    </header>

    <AppNavbar />

    <div class="h-32" />

    <main class="flex-1">
      <UContainer>
        <slot />
      </UContainer>
    </main>

    <div class="h-32" />

    <AppFooter />

    <!-- <footer class="flex items-center justify-between p-4">
      <NuxtLink to="/">
        <TheLogo />
      </NuxtLink>

      <div class="flex items-center gap-2">
        <span class="text-sm">Built Date: {{ date }}</span>
        <UColorModeButton />
      </div>
    </footer> -->

    <AppCommandPalette />
  </div>
</template>
