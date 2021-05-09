<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
  },
  setup: () => {
    const { t, availableLocales, locale } = useI18n()
    const count = ref(0)
    const fullwidth = ref(false)
    const show = ref(false)
    return { t, availableLocales, locale, count, fullwidth, show }
  }
})
</script>

<template>
  <div>
    <span class="relative inline-flex rounded-md shadow-sm cursor-pointer">
      <button
        class="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        @click="show = !show"
      >
        <span class="sr-only">{{ t('view_notifications') }}</span>
        <BaseIconOutlined name="bell" />
      </button>
      <!-- <span
        class="absolute top-0 right-0 flex w-2 h-2 -mt-1 -mr-1 pointer-events-none"
        style="margin: 8px 7px 0 0"
      >
        <span
          class="absolute inline-flex w-full h-full bg-red-400 rounded-full opacity-75 pointer-events-none animate-ping"
        />
        <span
          class="relative inline-flex w-2 h-2 bg-red-500 rounded-full pointer-events-none"
        />
      </span>-->
    </span>

    <OSidebar
      :fullwidth="fullwidth"
      fullheight
      right
      position="fixed"
      :overlay="false"
      background-class
      content-class
      mobile="fullwidth"
      :open="show"
    >
      <section class="flex flex-col h-full mt-16 bg-white divide-y divide-gray-200 shadow-xl">
        <div class="flex flex-col flex-1 min-h-0 overflow-y-scroll">
          <header class="px-4 mt-4 sm:px-6">
            <div class="flex items-start justify-between">
              <h2
                id="slide-over-heading"
                class="text-lg font-medium text-gray-900"
              >{{ t('announcements') }}</h2>
              <div class="flex items-center ml-3 h-7">
                <button
                  class="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  @click="show = false"
                >
                  <span class="sr-only">{{ t('close_panel') }}</span>
                  <BaseIconOutlined name="x" />
                </button>
              </div>
            </div>
          </header>

          <article class="relative flex-1 px-4 mt-4 sm:px-6">
            <div>
              <div class="flow-root mt-6">
                <ul class="-my-5 divide-y divide-gray-200">
                  <li class="py-5">
                    <div class="relative focus-within:ring-2 focus-within:ring-primary-500">
                      <h3 class="text-sm font-semibold text-gray-800">
                        <a href="#" class="hover:underline focus:outline-none">
                          <!-- Extend touch target to entire panel -->
                          <span class="absolute inset-0" aria-hidden="true" />
                          Office closed on July 2nd
                        </a>
                      </h3>
                      <p class="mt-1 text-sm text-gray-600 line-clamp-2">
                        Cum qui rem deleniti. Suscipit in dolor veritatis sequi
                        aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut
                        repudiandae possimus. Nihil ex tempora neque cum
                        consectetur dolores.
                      </p>
                    </div>
                  </li>

                  <li class="py-5">
                    <div class="relative focus-within:ring-2 focus-within:ring-primary-500">
                      <h3 class="text-sm font-semibold text-gray-800">
                        <a href="#" class="hover:underline focus:outline-none">
                          <!-- Extend touch target to entire panel -->
                          <span class="absolute inset-0" aria-hidden="true" />
                          New password policy
                        </a>
                      </h3>
                      <p class="mt-1 text-sm text-gray-600 line-clamp-2">
                        Alias inventore ut autem optio voluptas et repellendus.
                        Facere totam quaerat quam quo laudantium cumque eaque
                        excepturi vel. Accusamus maxime ipsam reprehenderit
                        rerum id repellendus rerum. Culpa cum vel natus. Est sit
                        autem mollitia.
                      </p>
                    </div>
                  </li>

                  <li class="py-5">
                    <div class="relative focus-within:ring-2 focus-within:ring-primary-500">
                      <h3 class="text-sm font-semibold text-gray-800">
                        <a href="#" class="hover:underline focus:outline-none">
                          <!-- Extend touch target to entire panel -->
                          <span class="absolute inset-0" aria-hidden="true" />
                          Office closed on July 2nd
                        </a>
                      </h3>
                      <p class="mt-1 text-sm text-gray-600 line-clamp-2">
                        Tenetur libero voluptatem rerum occaecati qui est
                        molestiae exercitationem. Voluptate quisquam iure
                        assumenda consequatur ex et recusandae. Alias
                        consectetur voluptatibus. Accusamus a ab dicta et.
                        Consequatur quis dignissimos voluptatem nisi.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="mt-6">
                <a
                  href="#"
                  class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                >View all</a>
              </div>
            </div>
          </article>
        </div>

        <footer v-if="false" class="flex justify-end flex-shrink-0 px-4 py-4">
          <button
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            @click="show = false"
          >{{ t('cancel') }}</button>
          <button
            type="submit"
            class="inline-flex justify-center px-4 py-2 ml-4 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >{{ t('save') }}</button>
        </footer>
      </section>
    </OSidebar>
  </div>
</template>
