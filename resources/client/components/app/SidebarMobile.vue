<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  props: {
    logoName: {
        type: String,
        default: 'vticonsulting'
    },
    person: {
        type: Object,
        default: () => ({
            name: 'Victor Tolbert',
            profilePhotoUrl: '',
        })
    }
  },
  setup: () => {
    const count = ref(0)
    const fullwidth = ref(false)
    const showAnnouncements = ref(false)
    const { t, availableLocales, locale } = useI18n()
    return { t, availableLocales, locale, count, fullwidth, showAnnouncements }
  }
})
</script>

<template>
  <div class="fixed inset-0 z-40 flex">
    <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
    <div class="fixed inset-0">
      <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
    </div>
    <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
    <div
      tabindex="0"
      class="relative flex flex-col flex-1 w-full max-w-xs bg-white focus:outline-none"
    >
      <div class="absolute top-0 right-0 pt-2 -mr-12">
        <button
          type="button"
          class="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          <span class="sr-only">{{ t('close_sidebar') }}</span>
          <BaseIconOutlined name="x" class="text-white" />
        </button>
      </div>
      <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
        <div
          v-if="person.name"
          class="flex items-center flex-shrink-0 px-4"
        >
          <BaseLogo
            :name="logoName"
            class="text-primary-500"
          />
        </div>

        <nav aria-label="Sidebar" class="mt-5">
          <div class="px-2 space-y-1">
            <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
          </div>
          <hr class="my-5 border-t border-gray-200" aria-hidden="true" />
          <div class="px-2 space-y-1">
            <!-- Under divider links -->
          </div>
        </nav>
      </div>
      <div class="flex flex-shrink-0 p-4 border-t border-gray-200">
        <!-- Profile Link -->
        <a href="#" class="flex-shrink-0 block group">
          <div class="flex items-center">
            <div>
              <img
                class="inline-block w-10 h-10 rounded-full"
                :src="person.profilePhotoUrl"
                alt=""
              />
            </div>
            <div class="ml-3">
              <p
                class="text-base font-medium text-gray-700 group-hover:text-gray-900"
              >
                {{ person.name }}
              </p>
              <p
                class="text-sm font-medium text-gray-500 group-hover:text-gray-700"
              >
                {{ t('view_profile') }}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="flex-shrink-0 w-14" aria-hidden="true">
      <!-- Force sidebar to shrink to fit close icon -->
    </div>
  </div>
</template>
