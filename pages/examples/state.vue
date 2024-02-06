<script setup>
const counter = useState('counter', () => Math.round(Math.random() * 1000))
const sameCounter = useState('counter')
</script>

<template>
  <div class="gap-4 grid">
    <p>Counter: {{ counter }}</p>
    <p class="flex items-center gap-2">
      <UButton variant="outline" @click="counter--">
        -
      </UButton>
      <UButton variant="outline" @click="counter++">
        +
      </UButton>
    </p>
    <p>Same Counter: {{ sameCounter }}</p>
  </div>
</template>
