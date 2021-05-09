<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <nav class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Left-side menu items -->
        <div class="flex px-2 lg:px-0">
          <!-- Branding -->
          <RouterLink class="flex-shrink-0 flex items-center text-primary-500" to="/">
            <AppLogo :name="$store.state.affiliate.slug" class="block lg:hidden h-8 w-auto" />
            <AppLogo :name="$store.state.affiliate.slug" class="hidden lg:block h-8 w-auto" />
          </RouterLink>
          <!-- /Branding -->

          <!-- Nav links -->
          <div class="hidden lg:ml-6 lg:flex lg:space-x-8">
            <RouterLink
              v-for="link in $store.state.affiliate.navbar.topLinks"
              :key="`navbar-top-link-${link}`"
              :to="`/${link}`"
              active-class="border-primary-500 text-gray-900"
              class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >{{ t(link) }}</RouterLink>
          </div>
          <!-- /Nav links -->
        </div>
        <!-- /Left-side menu items -->

        <!-- Search Form Container-->
        <div class="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
          <div class="max-w-lg w-full lg:max-w-xs">
            <AppSearchForm />
          </div>
        </div>

        <!-- Mobile menu button container -->
        <div class="flex items-center lg:hidden">
          <AppMobileMenuButton />
        </div>

        <!-- Right-side menu items -->
        <div class="hidden lg:ml-4 lg:flex lg:items-center">
          <AppNotificationsButton />
          <ProfileDropdownMenu />
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="$store.state.menu.open" class="lg:hidden" id="mobile-menu">
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex items-center px-4">
          <!-- Auth user avatar -->
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              :src="$store.state.user.avatarUrl"
              :alt="$store.state.user.name"
            />
          </div>

          <!-- Auth user name -->
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800">{{ $store.state.user.name }}</div>
            <div class="text-sm font-medium text-gray-500">{{ $store.state.user.email }}</div>
          </div>

          <!-- Notifications Button -->
          <button
            class="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <span class="sr-only">{{ t('view_notifications') }}</span>
            <vti-IconOutlined name="bell" />
          </button>
          <!-- / Notifications Button -->
        </div>

        <!-- Mobile menu navbar links -->
        <div class="mt-3 space-y-1">
          <RouterLink
            v-for="link in $store.state.affiliate.navbar.userLinks"
            :key="`navbar-user-link-${link}`"
            :to="`/${link}`"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
          >{{ t(link) }}</RouterLink>

          <!-- Auth logout link -->
          <a
            href="#"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
          >{{ t('sign_out') }}</a>
          <!-- / Auth logout link -->
        </div>
        <!-- / Mobile menu navbar links -->
      </div>
    </div>
  </nav>
</template>
