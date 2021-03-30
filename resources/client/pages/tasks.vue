<!-- @vue-ignore -->
<script setup lang="ts">
import { reactive } from 'vue'

const state = reactive({
  actionPlan: {
    1: { goal: '', method: '', date: '2021-03-30 12:00:00', isComplete: false },
  },
  tasks: {
    1: { item: '', completed_at: '2021-03-30 12:00:00' },
    2: { item: '', completed_at: '2021-03-30 12:00:00' },
    3: { item: '', completed_at: '2021-03-30 12:00:00' },
    4: { item: '', completed_at: '2021-03-30 12:00:00' },
    5: { item: '', completed_at: '2021-03-30 12:00:00' },
    6: { item: '', completed_at: '2021-03-30 12:00:00' },
    7: { item: '', completed_at: '2021-03-30 12:00:00' },
    8: { item: '', completed_at: '2021-03-30 12:00:00' },
    9: { item: '', completed_at: '2021-03-30 12:00:00' },
    10: { item: '', completed_at: '2021-03-30 12:00:00'},
  }
})
const range = (start, end) => [...Array(1 + end - start).keys()].map(val => start + val)
const updateTasks = (tasks) => state.tasks = [...tasks]
</script>

<template>

  {{ state.actionPlan }}

  Weekly Tasks
  <ol>
    <li v-for="(task, key) in state.tasks">Week {{key}}: {{ task }}</li>
  </ol>

  <ol>
    <li v-for="week in range(1, 10)">Week {{ week }}</li>
  </ol>
</template>
