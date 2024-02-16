<script lang="ts" setup>
const showExemplarHeader = ref(false)
const showSidebarMenu = ref(false)
const showLogoutButton = ref(true)
const collapsed = ref(true)
const isOnMobile = ref(true)
const menuRef = ref(null)

const confirmModal = reactive({
  open: false,
  promptText: '',
  title: '',
})

const userProfileModal = reactive({
  open: false,
  phoneNumber: '',
  email: '',
  title: '',
  loaded: false,
})

const currentUser = reactive({
  FullName: '',
  Email: '',
  PhoneNumber: '',
  Role: '',
  Id: '',
})

function logOutUser() {
  confirmModal.title = 'Confirm Log Out'
  confirmModal.promptText = 'Are you sure you wish to log out?'
  confirmModal.open = true
}

function openProfile() {
  userProfileModal.title = currentUser.FullName
  userProfileModal.loaded = true
  userProfileModal.open = true
}

function onToggleCollapsed() {
  collapsed.value = !collapsed.value
}
</script>

<template>
  <div id="exemplar-layout" class="min-h-screen w-full flex flex-col" :class="{ collapsed }">
    <!-- <TheHeader /> -->
    <ExemplarTopNavbar />

    <ExemplarHeaderComponent v-if="showExemplarHeader">
      <div class="flex items-center">
        <div v-show="collapsed" class="shrink-0">
          <NuxtLink class="text-primary-500" to="/exemplar">
            <LogoHancockMark class="-ml-4" />
          </NuxtLink>
        </div>
      </div>

      <template #actions>
        <div class="flex items-center gap-8">
          <div class="flex items-center gap-4">
            <UButton icon="i-carbon-user-avatar" @click="openProfile">
              Profile
            </UButton>

            <UButton v-if="showLogoutButton" @click="logOutUser">
              <UIcon
                name="i-carbon-logout"
                class="mr-1.5 h-5 w-5 text-gray-400 -ml-0.5"
                fill="currentColor"
                aria-hidden="true"
              />
              Logout
            </UButton>
          </div>
        </div>
      </template>
    </ExemplarHeaderComponent>

    <ExemplarSidebarMenuComponent
      v-if="showSidebarMenu"
      ref="menuRef"
      @toggle-collapse="onToggleCollapsed"
    />

    <main class="mb-32 flex-1">
      <ExemplarPageHeader
        v-if="!['/', '/dashboard'].includes($route.path)"
        :title="($route.meta.title as string) || 'Untitled'"
      />

      <slot />
    </main>

    <ExemplarFooter />
  </div>
</template>
