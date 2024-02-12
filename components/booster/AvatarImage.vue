<script setup>
defineProps({
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
})

const emit = defineEmits(['open'])

const size = computed(() => {
  return props.small ? 'w-9 h-9' : 'w-16 h-16'
})

function handleEmit() {
  if (props.shouldEmit)
    emit('open')
}
</script>

<template>
  <img
    :alt="alt"
    :src="src"
    class="border rounded-full shadow" :class="[size]"
    @click="handleEmit()"
  >
</template>
