<template>
  <div id="user-login">
    <header class="mb-6">
      <h1 class="text-2xl text-center">{{ msg }}</h1>
    </header>

    <form @submit.prevent="login" method="POST" action="/login">
      <div>
        <label for="email" class="block text-sm font-medium leading-5">Email address</label>

        <div class="mt-1 rounded-md shadow-sm">
          <input
            id="email"
            v-model="email"
            type="email"
            required
            autofocus
            class="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      <div class="mt-6">
        <label for="password" class="block text-sm font-medium leading-5">Password</label>

        <div class="mt-1 rounded-md shadow-sm">
          <input
            id="password"
            v-model="password"
            type="password"
            required
            class="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      <div class="mt-6">
        <button
          type="submit"
          class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out border border-transparent rounded-full bg-secondary-600 hover:bg-secondary-500 focus:outline-none focus:border-secondary-700 focus:shadow-outline-secondary active:bg-secondary-700"
        >Sign in</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'

export default {
  name: 'UserLoginForm',

  props: {
    msg: {
      type: String,
      default: '👋 Welcome to Frontier, a themeable design system',
    },
  },

  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },

  computed: {
    ...mapGetters({
      loggedIn: 'auth/loggedIn',
    }),
  },

  methods: {
    login() {
      if (this.password.length > 0) {
        this.$axios.get('/sanctum/csrf-cookie').then(() => {
          this.$axios
            .post('/login', {
              email: this.email,
              password: this.password,
            })
            .then(response => {
              this.$axios.get('api/user').then(userFetch => {
                this.$store.commit('auth/SET_USER_DATA', userFetch.data)
                this.$router.push({ name: 'dashboard' })
              })
            })
            .catch(error => {
              this.error = error
            })
        })
      }
    },
  },
}
</script>
