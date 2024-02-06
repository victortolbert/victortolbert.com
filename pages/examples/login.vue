<script setup>
const email = ref(null)
const password = ref(null)

function handleSubmit() {
  login()
}

async function login() {
  // const response = await this.$api.auth.login(this.email, this.password);
  // console.log(response);
}
</script>

<template>
  <USection>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <div>
          <input
            id="email"
            v-model="email"
            type="text"
            placeholder="email"
            class="focus:ring-primary-500 focus:border-primary-500 block max-w-lg w-full border-gray-300 rounded-md shadow-sm sm:max-w-xs sm:text-sm"
          >
        </div>
      </div>

      <div class="mt-4">
        <label for="password" class="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div>
          <input
            v-model="password"
            type="password"
            placeholder="password"
            class="focus:ring-primary-500 focus:border-primary-500 block max-w-lg w-full border-gray-300 rounded-md shadow-sm sm:max-w-xs sm:text-sm"
          >
        </div>
      </div>

      <div class="mt-8">
        <button type="submit">
          Login
        </button>
      </div>
    </form>
  </USection>
</template>
