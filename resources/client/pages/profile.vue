<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const sections = ref([
  { name: 'account', icon: 'cog' },
  { name: 'password', icon: 'key' },
  { name: 'notifications', icon: 'bell' },
  { name: 'plan', icon: 'credit-card' },
])
</script>

<template>
  <main class="mt-8 relative">
    <div class="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
          <aside class="py-6 lg:col-span-3">
            <nav class="space-y-1">
              <RouterLink to="/profile" exact custom v-slot="{ href, navigate, isExactActive }">
                <a
                  :class="[
                    { 'bg-primary-50 border-primary-500 text-primary-700 hover:bg-primary-50 hover:text-primary-700': isExactActive },
                    'border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                    'group border-l-4 px-3 py-2 flex items-center text-sm font-medium'
                  ]"
                  :href="href"
                  @click="navigate"
                  aria-current="page"
                >
                  <vti-IconOutlined
                    name="user-circle"
                    :class="[
                      { 'text-primary-500 group-hover:text-primary-500 flex-shrink-0 -ml-1 mr-3': isExactActive },
                      'text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3'
                    ]"
                  />
                  <span class="truncate">{{ t('profile') }}</span>
                </a>
              </RouterLink>
              <RouterLink
                v-for="section in sections"
                :to="`/profile/${section.name}`"
                :key="`section-link-${section.name}`"
                custom
                exact
                v-slot="{ href, navigate, isActive }"
              >
                <a
                  :class="[
                    { 'bg-primary-50 border-primary-500 text-primary-700 hover:bg-primary-50 hover:text-primary-700': isActive },
                    'border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                    'group border-l-4 px-3 py-2 flex items-center text-sm font-medium'
                  ]"
                  :href="href"
                  @click="navigate"
                  aria-current="page"
                >
                  <vti-IconOutlined
                    :name="section.icon"
                    :class="[
                      { 'text-primary-500 group-hover:text-primary-500 flex-shrink-0 -ml-1 mr-3': isActive },
                      'text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3'
                    ]"
                  />
                  <span class="truncate">{{ t(section.name) }}</span>
                </a>
              </RouterLink>
            </nav>
          </aside>

          <RouterView />
        </div>
      </div>
    </div>
  </main>
</template>
