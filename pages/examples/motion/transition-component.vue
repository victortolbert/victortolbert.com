<script setup>
import 'animate.css'

const show = ref(true)
</script>

<template>
  <div>
    <button @click="show = !show">
      Toggle
    </button>
  </div>
  <br>
  <RubberbandTransition>
    <div v-if="show" class="circle" />
  </RubberbandTransition>
</template>

<style scoped>
.circle {
  @apply w-12 h-12 bg-green-500 rounded-full;
}
</style>
