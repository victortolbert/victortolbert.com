<script>
export default {
  name: 'NextActions',
  props: {
    showAddTask: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tasks: [],
    }
  },
  methods: {
    async addTask(task) {
      const res = await fetch('mock-api/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task),
      })

      const data = await res.json()

      this.tasks = [...this.tasks, data]
    },
    async deleteTask(id) {
      if (confirm('Are you sure?')) {
        const res = await fetch(`mock-api/tasks/${id}`, {
          method: 'DELETE',
        })

        res.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert('Error deleting task')
      }
    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id)
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

      const res = await fetch(`mock-api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updTask),
      })

      const data = await res.json()

      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    },
    async fetchTasks() {
      const res = await fetch('mock-api/tasks')

      const data = await res.json()

      return data
    },
    async fetchTask(id) {
      const res = await fetch(`mock-api/tasks/${id}`)

      const data = await res.json()

      return data
    },
  },
  async created() {
    this.tasks = await this.fetchTasks()
  },
}
</script>

<template>
  <TaskAddForm v-show="showAddTask" @add-task="addTask" />
  <TaskList @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
</template>
