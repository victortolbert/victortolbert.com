<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<template>
  <div class="code-block" :class="[active && 'active']">
    <slot />
  </div>
</template>

<style scoped>
.code-block {
  display: none;
}
.code-block.active {
  display: block;
}
</style>
