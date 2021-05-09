<!-- @vue-ignore -->
<script setup lang="ts">
import { reactive } from 'vue'

const state = reactive({
  actionPlan: {
    1: { goal: 'Goal 1', method: 'My method', date: '2021-03-30 12:00:00', isComplete: false },
    2: { goal: '', method: '', date: '2021-03-30 12:00:00', isComplete: false },
    3: { goal: '', method: '', date: '2021-03-30 12:00:00', isComplete: false },
    4: { goal: '', method: '', date: '2021-03-30 12:00:00', isComplete: false }
  },
})
const handleSubmit = (event) => console.log(state.actionPlan)
</script>

<template>
  <form @submit.prevent="handleSubmit" class="mx-auto w-full max-w-7xl grid grid-cols-4 gap-8" >
    <span>Goal</span>
    <span>Plan</span>
    <span>Date</span>
    <span>Complete</span>
    <template v-for="(item, key) in state.actionPlan">
      <span class="border border-red-500">
        <textarea v-model="item.goal"></textarea>
      </span>

      <span class="border border-red-500">
        <textarea v-model="item.plan"></textarea>
      </span>

      <span class="border border-red-500">
        {{item.date}}
      </span>

      <span class="border border-red-500">

      </span>
    </template>

    <button type="submit">Update Plan</button>
  </form>
</template>
