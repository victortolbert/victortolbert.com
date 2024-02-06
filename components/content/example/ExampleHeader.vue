<script setup lang="ts">
// import type { NavItem } from '@nuxt/content/dist/runtime/types'

// const navigation = inject<Ref<NavItem[]>>('navigation')
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

const links = [{
  label: 'Documentation',
  icon: 'i-heroicons-book-open',
  to: '/guide',
}, {
  label: 'Releases',
  icon: 'i-heroicons-rocket-launch',
  to: 'https://github.com/victortolbert/ux-lab/releases',
  target: '_blank',
}]
</script>

<template>
  <UHeader :links="links" :ui="{ container: 'max-w-none' }">
    <template #logo>
      <TheLogo class="h-6 w-auto" />
    </template>

    <!-- <template #left>
      Left
    </template>

    <template #center>
      Center
    </template> -->

    <template #right>
      <UDocsSearchButton :label="null" />

      <UColorModeButton />

      <UButton to="https://github.com/victortolbert/ux-lab" target="_blank" icon="i-simple-icons-github" color="gray" variant="ghost" />
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>
