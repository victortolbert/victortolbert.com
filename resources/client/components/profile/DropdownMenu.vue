<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
const { t } = useI18n()
const open = ref(false)
const onClickAway = () => open.value = false
</script>

<template>
  <!-- Profile dropdown -->
  <div class="ml-4 relative flex-shrink-0">
    <div>
      <button
        v-click-away="onClickAway"
        @click="open = !open"
        type="button"
        class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        id="user-menu"
        aria-expanded="false"
        aria-haspopup="true"
      >
        <span class="sr-only">{{ t('open_user_menu') }}</span>
        <img
          class="h-8 w-8 rounded-full"
          :src="$store.state.user.avatarUrl"
          :alt="$store.state.user.name"
        />
      </button>
    </div>

    <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
    -->
    <div
      v-if="open"
      class="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu"
    >
      <RouterLink
        v-for="link in $store.state.affiliate.navbar.userLinks"
        :key="`navbar-user-link-${link}`"
        :to="`/${link}`"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >{{ t(link) }}</RouterLink>
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
      >{{ t('sign_out') }}</a>
    </div>
  </div>
</template>
