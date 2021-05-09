<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const show = ref(false)
</script>
<template>
  <button
    v-click-away="() => show = false"
    @click="show = !show"
    class="flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
  >
    <span class="sr-only">{{ t('view_notifications') }}</span>
    <vti-IconOutlined name="bell" />
  </button>

  <section
    v-if="show"
    class="z-30 fixed inset-0 overflow-hidden"
    aria-labelledby="slide-over-title"
    role="dialog"
    aria-modal="true"
  >
    <div class="absolute inset-0 overflow-hidden">
      <!-- Background overlay, show/hide based on slide-over state. -->
      <div class="absolute inset-0" aria-hidden="true" />

      <div class="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
        <!--
          Slide-over panel, show/hide based on slide-over state.

          Entering: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-0"
            To: "translate-x-full"
        -->
        <div class="w-screen max-w-2xl">
          <div class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
            <div class="px-4 sm:px-6">
              <div class="flex items-start justify-between">
                <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Panel title</h2>
                <div class="ml-3 h-7 flex items-center">
                  <button
                    class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span class="sr-only">Close panel</span>
                    <!-- Heroicon name: outline/x -->
                    <vti-IconOutlined name="x" />
                  </button>
                </div>
              </div>
            </div>
            <div class="mt-6 relative flex-1 px-4 sm:px-6">
              <!-- Replace with your content -->
              <div class="absolute inset-0 px-4 sm:px-6">
                <div class="h-full border-2 border-dashed border-gray-200" aria-hidden="true"></div>
              </div>
              <!-- /End replace -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
