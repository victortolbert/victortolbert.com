<script setup>
defineProps(['name', 'size', 'color'])

const classes = computed(() => {
  return [
    'vui-icon--x-small',
  ]
})
</script>

<template>
  <svg class="vui-icon vui-align-middle" :class="classes">
    <use :xlink:href="`/icons.svg#icon-${name}`" />
  </svg>
</template>
