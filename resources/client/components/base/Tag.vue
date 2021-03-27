<script lang="ts">
export default {
  props: {
    variant: {
      type: String,
      default: 'info',
    },
    isRounded: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<template>
  <span
    :class="[
      `font-medium bg-${variant}-100 text-xs py-0.5 px-2 text-${variant}-800 inline-flex items-center`,
      {
        'rounded-full': isRounded,
      },
    ]"
  >
    <slot>Tag</slot>
  </span>
</template>
