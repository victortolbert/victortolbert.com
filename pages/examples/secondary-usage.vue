<script setup>
import { useUsers } from '~/composables/useUsers'

// const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

// const { users, error } = await useAsyncData('users', () => useUsers())
// const { users, error } = useAsyncData('users', () => useUsers())

const { users, error } = useUsers()

console.log('users', users)
console.log('error', error)
</script>

<template>
  <div>
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
    <div v-else>
      No users loaded yet
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
}
</style>
