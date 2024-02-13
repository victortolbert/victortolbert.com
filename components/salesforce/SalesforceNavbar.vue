<script setup>
// const client = useSupabaseClient()
// const user = useSupabaseUser()

const user = ref(undefined)
const headerRef = ref(null)

const items = [
  {
    name: 'Home',
    path: '/',
    icon: 'ph:house-duotone',
  },
  {
    name: 'Projects',
    path: '/projects',
    icon: 'ph:folder-notch-open-duotone',
  },
  {
    name: 'Articles',
    path: '/articles',
    icon: 'ph:newspaper-duotone',
  },
  {
    name: 'Uses',
    path: '/uses',
    icon: 'ph:backpack-duotone',
  },
  {
    name: 'Bookmarks',
    path: '/bookmarks',
    icon: 'ph:bookmarks-simple-duotone',
  },
]

const colorMode = useColorMode()

function toggleDark() {
  colorMode.preference = colorMode.value === 'dark'
    ? 'light'
    : 'dark'
}

const colorModeIcon = computed(() => {
  return colorMode.preference === 'dark'
    ? 'i-heroicons-outline-moon'
    : 'i-heroicons-outline-sun'
})

async function logout() {
  await client.auth.signOut()
  navigateTo('/')
}

async function signUpNewUser() {
  const { data, error } = await client.auth.signUp({
    email: 'victor.tolbert@outlook.com',
    password: 'password1234',
    options: {
      emailRedirectTo: 'https://localhost:8589/landing',
    },
  })
}

async function signInWithEmail() {
  // const { data, error } = await client.auth.signInWithOtp({
  //   email: 'victor.tolbert@outlook.com',
  //   options: {
  //     // set this to false if you do not want the user to be automatically signed up
  //     shouldCreateUser: true,
  //     emailRedirectTo: 'https://localhost:8589/landing',
  //   },
  // })
}
</script>

<template>
  <SldsGlobalHeader />
</template>
