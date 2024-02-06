<script lang="ts" setup>
const items = [
  [
    {
      label: 'Billing List',
      to: '/billing',
      icon: 'i-carbon-list',
    },
  ],
]
</script>

<template>
  <nav class="flex items-center gap-4">
    <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
      <button class="flex items-center gap-2 text-sm text-gray-300 hover:text-white">
        <span>Billing</span>
        <UIcon name="i-carbon-chevron-down" />
      </button>
    </UDropdown>
  </nav>
</template>
