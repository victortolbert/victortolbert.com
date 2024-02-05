<script setup lang="ts">
interface Props {
  example?: string
  showTips?: boolean
  class?: string
  openPath?: string
  repo?: string
}
const props = withDefaults(defineProps<Props>(), {
  repo: 'victortolbert/ux-lab',
})

function openInEditor() {
  fetch(`/__open-in-editor?file=${encodeURIComponent(props.openPath || 'app.vue')}`)
}
</script>

<template>
  <div class="relative font-sans green6">
    <div class="container max-w-200 mx-auto py-10 px-4">
      <div class="flex items-end gap-3 mb-4 relative">
        <slot name="icon">
          <NuxtIcon />
        </slot>

        <div class="text-xl flex">
          <div class="opacity-50">
            examples/
          </div>

          <slot name="name">
            <NuxtLink :href="`https://github.com/${repo}/tree/main/pages/examples/${example}`" target="_blank">
              {{ example }}
            </NuxtLink>
          </slot>
        </div>

        <div flex-auto />

        <div class="opacity-20 hover:opacity-100 n-transition -mb-2 -mr-1">
          <UButton
            size="lg"
            variant="soft"
            class="p-2 opacity-50"
            :to="`https://github.com/${repo}/tree/main/examples/${example}`"
            target="_blank"
          >
            <UIcon name="i-carbon-code" />
          </UButton>

          <UColorModeToggle />

          <!-- <NDarkToggle>
            <template #default="{ toggle }">
              <NButton n="borderless lg" p-2 op50 @click="toggle">
                <UIcon name="dark:carbon-moon carbon-sun" />
              </NButton>
            </template>
          </NDarkToggle> -->
        </div>
      </div>

      <slot name="subtitle" />

      <slot name="nav" />

      <UCard class="p-6 flex flex-col gap-2 text-center" :class="$props.class">
        <slot />
      </UCard>

      <div
        v-if="$slots.tips"
        :class="showTips ? 'opacity-100' : 'opacity-0'"
        class="transition py-5 flex items-center gap-2 text-gray-400"
      >
        <UIcon name="i-carbon-idea" class="text-xl flex-none" />

        <slot name="tips" />

        <UButton icon="i-carbon-edit" class="flex-none" @click="openInEditor">
          Open in Editor
        </UButton>
      </div>

      <slot name="footer" />
    </div>
  </div>
</template>
