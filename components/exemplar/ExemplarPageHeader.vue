<script setup lang="ts">
import { useBreadcrumbs } from '~/composables/useBreadcrumbs'

const props = withDefaults(defineProps<{
  title: string
  actionComponent?: string
}>(), {
  title: 'Page Title',
  actionComponent: 'SomeComponent',
})
const SomeComponent = resolveComponent('SomeComponent')
const showActions = ref(false)
const { breadcrumbs } = useBreadcrumbs()
</script>

<template>
  <header class="bg-hero-texture bg-primary-800 py-4 px-4 text-white">
    <!-- <header class="bg-[url('/assets/images/backgrounds/polaris.jpeg')] bg-cover bg-center py-4 text-white"> -->
    <!-- <header class="bg-[url('/assets/images/backgrounds/squiggle.svg')] py-4"> -->
    <!-- bg-[url('/assets/images/backgrounds/polaris.jpeg')] bg-cover bg-center -->
    <!-- bg-hero-texture bg-primary-800 -->
    <div>
      <!-- <div class="lg:flex lg:items-center lg:justify-between">
        <Breadcrumbs
          v-if="$route.path !== '/'"
          :breadcrumbs="breadcrumbs"
        />
        <UBadge v-if="$route.meta.status" size="xs" :label="$route.meta.status as string" color="blue" />
      </div> -->

      <div class="lg:flex lg:items-center lg:justify-between">
        <div class="mt-2 flex items-center justify-between">
          <h1 class="text-2xl font-bold">
            <slot>{{ title }}</slot>
          </h1>
        </div>

        <div class="mt-5 flex overflow-auto lg:ml-4 lg:mt-0">
          <div class="flex items-center gap-4">
            <div v-if="showActions && $route.meta.actionPath">
              <UButton
                color="gray"
                variant="solid"
                icon="i-carbon-add"
                :to="$route.meta.actionPath"
              >
                {{ $route.meta.action }}
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
