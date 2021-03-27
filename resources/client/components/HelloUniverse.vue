<template>
  <h1 class="text-2xl bg-red-500">{{ msg }}</h1>
  <button class="rounded bg-blue-500 py-1 px-3 text-white" @click="state.count++">count is: {{ state.count }}</button>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>
