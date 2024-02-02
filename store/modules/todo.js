export const STORAGE_KEY = 'todos-vuejs'

// for testing
// if (navigator.webdriver)
//   window.localStorage.clear()

export const namespaced = true

export function state() {
  return {
    // todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]'),
    todos: '[]',
  }
}

export const mutations = {
  ADD_TODO(state, todo) {
    state.todos.push(todo)
  },

  REMOVE_TODO(state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },

  EDIT_TODO(state, { todo, text = todo.text, done = todo.done }) {
    const index = state.todos.indexOf(todo)

    state.todos.splice(index, 1, {
      ...todo,
      text,
      done,
    })
  },
}

export const actions = {
  addTodo({ commit }, text) {
    commit('ADD_TODO', {
      text,
      done: false,
    })
  },

  removeTodo({ commit }, todo) {
    commit('REMOVE_TODO', todo)
  },

  toggleTodo({ commit }, todo) {
    commit('EDIT_TODO', { todo, done: !todo.done })
  },

  editTodo({ commit }, { todo, value }) {
    commit('EDIT_TODO', { todo, text: value })
  },

  toggleAll({ state, commit }, done) {
    state.todos.forEach((todo) => {
      commit('EDIT_TODO', { todo, done })
    })
  },

  clearCompleted({ state, commit }) {
    state.todos.filter(todo => todo.done)
      .forEach((todo) => {
        commit('REMOVE_TODO', todo)
      })
  },
}
