<script>
import { defineAsyncComponent } from 'vue'

import Loading from '~/components/Loading.vue'
import { useUsers } from '~/composables/useUsers'

const AsyncUser = defineAsyncComponent({
  loader: () => import('~/pages/examples/user.vue'),
  loadingComponent: Loading,
  delay: 200,
  suspensible: false,
})

export default {
  name: 'Users',
  components: {
    AsyncUser,
  },

  async setup() {
    const { users, error, load } = useUsers()

    await load()

    return { users, error }
  },
}
</script>

<template>
  <div>
    <div v-if="error">
      {{ error }}
    </div>
    <AsyncUser
      v-for="user in users.data"
      v-else
      :key="user.id"
      :user="user"
    />
  </div>
</template>
