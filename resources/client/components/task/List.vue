<script>
export default {
  name: 'TaskList',
  props: {
    tasks: {
      type: Array,
      default: () => []
    },
    emits: ['delete-task', 'toggle-reminder'],
  }
}
</script>

<template>
  <div :key="task.id" v-for="task in tasks">
    <TaskItem
      @toggle-reminder="$emit('toggle-reminder', task.id)"
      @delete-task="$emit('delete-task', task.id)"
      :task="task"
    />
  </div>
</template>
