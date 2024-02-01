<script setup lang="ts">
import type { BreadcrumbLink } from '#ui/types'

export interface Props {
  links: BreadcrumbLink[]
}

defineProps<Props>()
</script>

<template>
  <UBreadcrumb :links="links">
    <template #icon="{ link }">
      <UIcon :name="link.icon" />
    </template>
  </UBreadcrumb>
</template>
