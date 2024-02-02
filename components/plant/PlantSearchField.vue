<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Search',
    },
  },
}
</script>

<template>
  <div class="search-field">
    <UIcon name="i-ph-magnifying-glass" class="search-icon" />

    <input class="search-input" type="search" :placeholder="placeholder">
  </div>
</template>
