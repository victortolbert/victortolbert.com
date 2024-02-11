<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return this.type === 'toxic' && 'is-toxic'
    },
  },
}
</script>

<template>
  <span :class="`badge ${classes}`">
    <slot />
  </span>
</template>

<style>
.badge {
  white-space: nowrap;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-weight: bold;
  font-size: 0.75rem;
  background-color: #006b40;
  color: #fff;
}

.badge.is-toxic {
  background-color: #ffbc00;
  color: #000;
}
</style>
