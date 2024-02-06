<script lang="ts" setup>
const items = [
  [
    {
      label: 'Accounts List',
      to: '/accounts',
      icon: 'i-carbon-list',
    },
    {
      label: 'Add Account',
      to: '/accounts/create',
      icon: 'i-carbon-add',
    },
  ],
]
</script>

<template>
  <nav class="flex items-center gap-4">
    <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
      <button class="flex items-center gap-2 text-sm text-gray-300 hover:text-white">
        <span>Accounts</span>
        <UIcon name="i-carbon-chevron-down" />
      </button>
    </UDropdown>
  </nav>
</template>
