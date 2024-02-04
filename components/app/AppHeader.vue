<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

// const client = useSupabaseClient()
const user = ref(undefined)

// const user = useSupabaseUser()
const colorMode = useColorMode()

function toggleDark() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const colorModeIcon = computed(() => colorMode.preference === 'dark' ? 'i-heroicons-outline-moon' : 'i-heroicons-outline-sun')

async function logout() {
  // await client.auth.signOut()
  navigateTo('/')
}
</script>

<template>
  <div>
    <h1
      class="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100"
    >
      {{ title }}
    </h1>
    <p class="mt-6 text-base text-gray-600 dark:text-gray-400">
      {{ description }}
    </p>
    <UButton
      v-if="user"
      variant="transparent"
      @click="logout"
    >
      Logout
    </UButton>
  </div>
</template>
