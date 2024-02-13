<script setup lang="ts">
import type { HeaderLink } from '#ui-pro/types'

interface Props {
  links: HeaderLink[]
}

defineProps<Props>()

// const links = [{
//   label: 'Documentation',
//   icon: 'i-heroicons-book-open',
//   to: '/getting-started'
// }, {
//   label: 'Playground',
//   icon: 'i-simple-icons-stackblitz',
//   to: '/playground'
// }, {
//   label: 'Roadmap',
//   icon: 'i-heroicons-map',
//   to: '/roadmap'
// }, {
//   label: 'Pro',
//   icon: 'i-heroicons-square-3-stack-3d',
//   to: '/pro'
// }, {
//   label: 'Releases',
//   icon: 'i-heroicons-rocket-launch',
//   to: 'https://github.com/nuxt/ui/releases',
//   target: '_blank'
// }]
</script>

<template>
  <div>
    <UPageHero />
    <UPage>
      <UPageHeader />
      <UPageBody prose>
        <slot />
      </UPageBody>
      <template #left>
        <UAside>
          <UNavigationTree :links="links" />
          <!-- <UHeader :links="links" /> -->
        </UAside>
      </template>
    </UPage>
  </div>
</template>
