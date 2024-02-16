<script lang="ts" setup>
const items = [
  [
    {
      label: 'Dashboard',
      to: '/dashboard',
      icon: 'i-carbon-dashboard',
    },
    {
      label: 'Schedule a claim',
      to: '/claims/create',
      icon: 'i-carbon-bullhorn',
    },
    {
      label: 'Projects',
      to: '/projects',
      icon: 'i-carbon-folders',
    },
    {
      label: 'Add Project',
      to: '/projects/add',
      icon: 'i-carbon-folders',
    },
    {
      label: 'Edit Project',
      to: '/projects/1154912/edit',
      icon: 'i-carbon-folders',
    },
    {
      label: 'Project PIF',
      to: '/projects/1154912/pif',
      icon: 'i-carbon-inspection',
    },
    {
      label: 'Project PIF Report',
      to: '/projects/1154912/report',
      icon: 'i-carbon-inspection',
    },
  ],
]
</script>

<template>
  <nav class="flex items-center gap-4">
    <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
      <UButton
        variant="ghost"
        label="Templates"
        trailing-icon="i-heroicons-chevron-down-20-solid"
      />
    </UDropdown>
  </nav>
</template>
