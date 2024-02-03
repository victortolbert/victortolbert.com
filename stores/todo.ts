import { defineStore } from 'pinia'
import { todos } from '#nuxt-prepare'

export const useTodos = defineStore('todos', {
  state: () => ({
    todos: todos || [],
  }),
})
