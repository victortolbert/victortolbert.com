<script setup>
const links = ref([
  {
    label: 'General',
    to: '/settings/general',
  },
  {
    label: 'Profile',
    to: '/settings/profile',
  },
  {
    label: 'Security',
    to: '/settings/security',
  },
  {
    label: 'Notifications',
    to: '/settings/notifications',
  },
  {
    label: 'Billing',
    to: '/settings/billing',
  },
  {
    label: 'Integrations',
    to: '/settings/integrations',
  },
  {
    label: 'API',
    to: '/settings/api',
  },
  {
    label: 'Advanced',
    to: '/settings/advanced',
  },
])
</script>

<template>
  <div>
    <UPageHero />

    <UPage>
      <template #left>
       <UAside>
          <UNavigationTree :links="links" />
        </UAside>
      </template>

      <UPageHeader />

      <UPageBody prose>
        <NuxtPage />
      </UPageBody>
    </UPage>
  </div>
</template>
