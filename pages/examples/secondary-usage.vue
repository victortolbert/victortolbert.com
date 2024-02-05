<script>
import { useUsers } from '~/composables/useUsers'

export default {
  name: 'Users',

  setup() {
    const { users, error } = useUsers()

    return { users, error }
  },
}
</script>

<template>
  <div v-if="error">
    {{ error }}
  </div>
  <div v-else-if="users">
    <h2>Loaded the following users IDs</h2>
    <ul>
      <li v-for="user in users.data" :key="user.id">
        <code>{{ user.id }}</code>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
}
</style>
