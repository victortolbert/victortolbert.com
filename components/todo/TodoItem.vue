<script setup>
import { nextTick, ref, watch } from 'vue'
import { useStore } from 'vuex'

defineProps(['todo'])

const store = useStore()
const editing = ref(false)
const input = ref(null)

watch(editing, (v) => {
  v && nextTick(() => {
    input.value.focus()
  })
})

function editTodo(todo, value) {
  store.dispatch('editTodo', {
    todo,
    value,
  })
}

function toggleTodo(todo) {
  store.dispatch('toggleTodo', todo)
}

function removeTodo(todo) {
  store.dispatch('removeTodo', todo)
}

function doneEdit(event) {
  const value = event.target.value.trim()

  if (!value)
    removeTodo(props.todo)
  else if (editing.value)
    editTodo(props.todo, value)

  editing.value = false
}

function cancelEdit(event) {
  event.target.value = props.todo.text
  editing.value = false
}
</script>

<template>
  <li class="todo" :class="{ completed: todo.done, editing }">
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        :checked="todo.done"
        @change="toggleTodo(todo)"
      >
      <label @dblclick="editing = true" v-text="todo.text" />
      <button class="destroy" @click="removeTodo(todo)" />
    </div>

    <input
      v-show="editing"
      ref="input"
      class="edit"
      :value="todo.text"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit"
      @blur="doneEdit"
    >
  </li>
</template>
