<script lang="ts">
export default {
  props: {
    padded: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
<template>
  <section :class="{'lg:p-8': padded}">
    <slot />
  </section>
</template>
