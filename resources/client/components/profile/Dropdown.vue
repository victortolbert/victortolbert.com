<script lang="ts">
import {defineComponent, ref} from 'vue'
import { useI18n} from 'vue-i18n'

export default defineComponent({
  props: {
    person: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    const open = ref(false)
    const {t} = useI18n()
    return {
      open,
      t
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    },

    hide() {
      this.open = false
    },
  },
})
</script>

<template>
  <!-- Profile dropdown -->

  <!-- <div class="relative ml-3"> -->
  <!-- <ProfileDropdownButton /> -->
  <!--
      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    -->
  <!-- <DropdownPanel /> -->
  <!-- </div> -->

  <div class="relative flex-shrink-0 ml-4">
    <div>
      <button
        v-click-away="hide"
        @click="open = !open"
        type="button"
        class="flex text-sm text-white rounded-full focus:outline-none focus:bg-primary-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-900 focus:ring-white"
        id="user-menu"
        aria-expanded="false"
        aria-haspopup="true"
      >
        <span class="sr-only">{{ t('open_user_menu')}}</span>
        <img
          class="w-8 h-8 rounded-full"
          :src="person.profile_photo_url"
          alt="person.name"
          style="filter: grayscale(1)"
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
      class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu"
    >
      <RouterLink
        to="/profile/"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
      >
        {{ t('my_profile') }}
      </RouterLink>

      <RouterLink
        v-if="false"
        to="/settings/"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
      >
        {{ t('settings') }}
      </RouterLink>

      <button
        type="button"
        @click="$auth.logout()"
        class="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
        role="menuitem"
      >
        {{ t('sign_out') }}
      </button>
    </div>
  </div>
</template>
