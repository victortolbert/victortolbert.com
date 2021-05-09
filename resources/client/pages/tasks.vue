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
const handleSubmit = (event) => console.log(state.actionPlan)
</script>
<template>
  <div id="app">
    <ExampleTabs initial-active-tab="plan">
      <div :class="$style.section">
        <ExampleTab id="plan">Plan</ExampleTab>
        <ExampleTab id="weekly-tasks">Weekly Tasks</ExampleTab>
        <ExampleTab id="settings">Settings</ExampleTab>
      </div>

      <div :class="$style.section">
        <ExampleTabPanel id="plan">
          <ActionPlanForm />
        </ExampleTabPanel>

        <ExampleTabPanel id="weekly-tasks">
          <WeeklyTaskList />
        </ExampleTabPanel>

        <ExampleTabPanel id="settings">
          Settings content
        </ExampleTabPanel>
      </div>
    </ExampleTabs>
  </div>
</template>

<style module>
.section {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}
</style>
