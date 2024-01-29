<script setup lang="ts">
import { ref } from 'vue'

const amount = ref(0)
const text = ref('')
</script>

<template>
  <div class="grid grid-cols-2 gap-x-8">
    <ExampleInputText v-model="amount" label="Number" type="number" />

    <ExampleInputText v-model="text" label="String" type="text" />

    <div class="mt-10 bg-gray-100 rounded p-4">
      <pre>{{ { value: amount, type: typeof amount } }}</pre>
    </div>

    <div class="mt-10 bg-gray-100 rounded p-4">
      <pre>{{ { value: text, type: typeof text } }}</pre>
    </div>
  </div>
</template>
