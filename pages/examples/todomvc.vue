<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done),
}

const store = useStore()
const visibility = ref('all')

const todos = computed(() => store.state.todos)
const allChecked = computed(() => todos.value.every(todo => todo.done))
const filteredTodos = computed(() => filters[visibility.value](todos.value))
const remaining = computed(() => todos.value.filter(todo => !todo.done).length)

function addTodo(event) {
  const text = event.target.value

  if (text.trim())
    store.dispatch('addTodo', text)

  event.target.value = ''
}

function toggleAll(done) {
  return store.dispatch('toggleAll', done)
}

function clearCompleted() {
  return store.dispatch('clearCompleted')
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function pluralize(num, word) {
  return num === 1 ? word : (`${word}s`)
}
</script>

<template>
  <section class="todoapp">
    <!-- header -->
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        autofocus
        autocomplete="off"
        placeholder="What needs to be done?"
        @keyup.enter="addTodo"
      >
    </header>
    <!-- main section -->
    <section v-show="todos.length" class="main">
      <input
        id="toggle-all" class="toggle-all"
        type="checkbox"
        :checked="allChecked"
        @change="toggleAll(!allChecked)"
      >
      <label for="toggle-all" />
      <ul class="todo-list">
        <TodoItem
          v-for="(todo, index) in filteredTodos"
          :key="index"
          :todo="todo"
        />
      </ul>
    </section>
    <!-- footer -->
    <footer v-show="todos.length" class="footer">
      <span class="todo-count">
        <strong>{{ remaining }}</strong>
        {{ pluralize(remaining, 'item') }} left
      </span>
      <ul class="filters">
        <li v-for="(val, key) in filters" :key="key">
          <a
            :href="`#/${key}`"
            :class="{ selected: visibility === key }"
            @click="visibility = key"
          >{{ capitalize(key) }}</a>
        </li>
      </ul>
      <button
        v-show="todos.length > remaining"
        class="clear-completed"
        @click="clearCompleted"
      >
        Clear completed
      </button>
    </footer>
  </section>
</template>
