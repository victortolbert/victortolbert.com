<script setup lang="ts">
  import { reactive } from 'vue'

  const state = reactive({
    showMobileTopNavigation: true,
    showSecondarySidebar: true

  })
</script>
<template>
  <div class="h-screen flex bg-blue-gray-50 overflow-hidden">
    <!-- show/hide based on off-canvas menu state. -->
    <SettingsMobileOffCanvasMenu v-if="false" />

    <SettingsDesktopStaticSidebar v-if="false" />

    <div class="flex-1 min-w-0 flex flex-col overflow-hidden">
      <SettingsMobileTopNavigation v-if="!state.showMobileTopNavigation" />

      <main class="flex-1 flex overflow-hidden">
        <div class="flex-1 flex flex-col overflow-y-auto xl:overflow-hidden">
          <SettingsBreadcrumb />

          <div class="flex-1 flex xl:overflow-hidden">
            <SettingsSecondarySidebar v-if="state.showSecondarySidebar" />

            <!-- Main content -->
            <div class="flex-1 max-h-screen xl:overflow-y-auto">
              <div class="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:py-12 lg:px-8 border-2 border-purple-600">
                <h1 class="text-3xl font-extrabold text-blue-gray-900">Account</h1>

                <ProfileForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
