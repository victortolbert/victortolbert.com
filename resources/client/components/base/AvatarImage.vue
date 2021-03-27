<!-- @vue-ignore -->
<script lang="ts">
export default {
  name: 'AvatarImage',
  props: {
    alt: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '/assets/img/avatar.svg',
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
  computed: {
    size() {
      return this.small ? 'w-9 h-9' : 'w-16 h-16'
    },
  },
  methods: {
    emit() {
      if (this.shouldEmit) {
        this.$emit('open')
      }
    },
  },
}
</script>


<template>
  <img
    :alt="alt"
    :src="src"
    :class="[size, 'shadow border rounded-full']"
    @click="emit"
  />
</template>
