<script setup>
const props = defineProps({
  id: Number,
  msg: String,
  isActive: Boolean,
})

onUpdated(() => {
  console.log(`updated: ${props.id}`)
})
</script>

<template>
  <li>
    <span>-></span>
    <span v-if="isActive" style="color: red">{{ msg }}</span>
  </li>
</template>
