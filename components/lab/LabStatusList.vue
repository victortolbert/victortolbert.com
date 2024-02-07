<script setup>
import { statuses } from '~/data'
</script>

<template>
  <ul class="flex gap-2 flex-wrap whitespace-nowrap justify-between">
    <li v-for="(status, key) in statuses" :key="key" class="inline-flex gap-1">
      <UIcon :name="status.icon" :class="status.className" class="text-xl" />
      <span class="text-sm">{{ key }}</span>
    </li>
  </ul>
</template>
