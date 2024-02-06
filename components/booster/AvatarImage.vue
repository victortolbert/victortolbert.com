<script>
export default {
  props: {
    alt: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '/booster/assets/images/dashboard-avatar.svg',
    },
    shouldEmit: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['open'],
  computed: {
    size() {
      return this.small ? 'w-9 h-9' : 'w-16 h-16'
    },
  },
  methods: {
    emit() {
      if (this.shouldEmit)
        this.$emit('open')
    },
  },
}
</script>

<template>
  <img
    :alt="alt"
    :src="src"
    class="border rounded-full shadow" :class="[size]"
    @click="emit"
  >
</template>
