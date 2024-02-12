<script setup>
defineEmits(['click'])

function handleClick() {
  emit('click')
}
</script>

<template>
  <a
    class="m-0 p-4 px-4 font-medium text-gray-dark border-b border-grey-light hover:text-blue-darker hover:bg-grey-lighter"
    @click="handleClick"
  >
    <slot />
  </a>
</template>
