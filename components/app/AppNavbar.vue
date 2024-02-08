<script setup>
import { useFixedHeader } from 'vue-use-fixed-header'

// const client = useSupabaseClient()
// const user = useSupabaseUser()
const user = ref(undefined)

const headerRef = ref(null)

const { styles } = useFixedHeader(headerRef)

// Composables
// Form elements
//   - Input
//   - Textarea
//   - Select
//   - Checkbox
//   - Radio
//   - Button
// Form components
//   - Dialog(Modal)
//   - Disclosure
//   - Popover
//   - Radio group
//   - Listbox(Select)
//   - Menu(Dropdown)
//   - Switch(Toggle)
//   - Tabs
//   - Transition

// Other
//   - Alert
//   - Card
//   - Media Object
//   - Pagination
//   - Table

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
  <div ref="headerRef" :style="styles" class="fixed top-0 w-full z-50">
    <nav class="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      <ul
        class="flex items-center my-4 px-3 text-sm font-medium text-gray-800 rounded-full shadow-lg bg-white/90 shadow-gray-800/5 ring-1 backdrop-blur dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/20 ring-gray-900/5"
      >
        <li v-for="item in items" :key="item.path">
          <UTooltip
            :text="item.name"
            :ui="{ popper: { strategy: 'absolute' } }"
          >
            <ULink
              :to="item.path"
              class="relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400"
              active-class="text-primary-600 dark:text-primary-400"
            >
              <Icon
                aria-hidden="true"
                :name="item.icon"
                class="w-5 h-5 z-10"
              />

              <span
                v-if="$route.path === item.path"
                class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/70 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0"
              />

              <span
                v-if="$route.path === item.path"
                class="absolute h-8 w-8 z-0 rounded-full bg-gray-100 dark:bg-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
              <span class="sr-only">{{ item.name }}</span>
            </ULink>
          </UTooltip>
        </li>
        <li class="flex-1" />
        <li>
          <UTooltip
            text="Lab"
            :ui="{ popper: { strategy: 'absolute' } }"
          >
            <ULink
              to="/lab"
              class="relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400"
              active-class="text-primary-600 dark:text-primary-400"
            >
              <Icon
                aria-hidden="true"
                name="ph:flask-duotone"
                class="w-5 h-5 z-10"
              />
              <span class="sr-only">About Me</span>
            </ULink>
          </UTooltip>
        </li>
        <li>
          <UTooltip
            text="About Me"
            :ui="{ popper: { strategy: 'absolute' } }"
          >
            <ULink
              to="/about"
              class="relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400"
              active-class="text-primary-600 dark:text-primary-400"
            >
              <Icon
                aria-hidden="true"
                name="ph:question-duotone"
                class="w-5 h-5 z-10"
              />
              <span class="sr-only">About Me</span>
            </ULink>
          </UTooltip>
        </li>
        <!--
        <li
          v-if="!user"
        >
          <UButton
            color="white"
            variant="soft"
            @click="signInWithEmail"
          >
            Sign In
          </UButton>
        </li>
        <li
          v-if="user"
        >
          {{ user && user.email }}
          <UButton
            color="white"
            variant="soft"
            @click="logout"
          >
            Logout
          </UButton>
        </li>
        -->
      </ul>
    </nav>
  </div>
</template>
