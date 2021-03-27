<script lang="ts">
export default {
  name: 'LoadingOverlay',
  status: 'prototype',
  release: '1.0.0',
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    isFullPage: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<template>
  <OLoading
    :is-full-page="isFullPage"
    :active.sync="isLoading"
    :can-cancel="true"
  />
</template>
