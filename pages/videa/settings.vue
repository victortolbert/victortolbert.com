<script setup>
import { useStore } from 'vuex'

const store = useStore()
const newpassword = ref('')
</script>

<template>
  <div class="settings-view">
    <VuiTitle>Settings</VuiTitle>
    <div class="vui-tabs--scoped">
      <ul
        class="vui-tabs--scoped__nav"
        role="tablist"
      >
        <NuxtLink
          class="vui-tabs--scoped__item vui-text-heading--label"
          to="/videa/settings/user"
          active-class="vui-active"
          exact="exact"
          role="presentation"
          tag="li"
          title="User Settings"
        >
          <a
            id="user-settings__item"
            class="vui-tabs--scoped__link"
            aria-selected="true"
            aria-controls="tab-scoped-1"
            role="tab"
            tabindex="0"
          >User Settings</a>
        </NuxtLink>

        <NuxtLink
          v-if="store.state.user.name === 'Seller User'" class="vui-tabs--scoped__item vui-text-heading--label"
          to="/videa/settings/display"
          active-class="vui-active"
          exact="exact"
          role="presentation"
          tag="li"
          title="Display Settings"
        >
          <a
            id="display-settings__item"
            class="vui-tabs--scoped__link"
            aria-controls="tab-scoped-2"
            aria-selected="false"
            role="tab"
            tabindex="-1"
          >Display Settings</a>
        </NuxtLink>
        <NuxtLink
          v-if="store.state.user.name === 'Seller User'"
          class="vui-tabs--scoped__item vui-text-heading--label"
          to="/videa/settings/specials"
          active-class="vui-active"
          exact="exact"
          role="presentation"
          tag="li"
          title="Add A Program"
        >
          <a
            id="specials-settings__item"
            class="vui-tabs--scoped__link"
            aria-controls="tab-scoped-4"
            aria-selected="false"
            role="tab"
            tabindex="-1"
          >Add A Program</a>
        </NuxtLink>
        <NuxtLink
          v-if="store.state.user.name === 'Seller User'"
          class="vui-tabs--scoped__item vui-text-heading--label"
          to="/videa/settings/reps"
          active-class="vui-active"
          exact="exact"
          role="presentation"
          tag="li"
          title="Sales Reps"
        >
          <a
            id="reps-settings__item"
            class="vui-tabs--scoped__link"
            aria-controls="tab-scoped-5"
            aria-selected="false"
            role="tab"
            tabindex="-1"
          >Sales Reps</a>
        </NuxtLink>
      </ul>
    </div>

    <NuxtPage />
  </div>
</template>
