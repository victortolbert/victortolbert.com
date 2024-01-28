<script>
export default {
  computed: {
    hasAvatarSlot() {
      return !!this.$slots.avatar
    },
    hasSubtitleSlot() {
      return !!this.$slots.subtitle
    },
    hasActionsSlot() {
      return !!this.$slots.actions
    },
  },
}
</script>
<template>
  <div class="px-8 mt-8">
    <div class="px-4 py-5 bg-white border-b border-gray-200 sm:px-6">
      <div class="flex flex-wrap items-center justify-between -mt-4 -ml-4 sm:flex-nowrap">
        <div class="mt-4 ml-4">
          <div class="flex items-center">
            <div v-if="hasAvatarSlot" class="flex-shrink-0">
              <div class="flex items-center justify-center w-12 h-12 border rounded-full">
                <!-- #avatar slot -->
                <slot name="avatar" />
              </div>
            </div>

            <div class="ml-4">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                <!-- #default slot -->
                <slot></slot>
              </h3>

              <p v-if="hasSubtitleSlot" class="text-sm text-gray-500">
                <!-- #subtitle slot -->
                <slot name="subtitle"></slot>
              </p>
            </div>
          </div>
        </div>

        <div v-if="hasActionsSlot" class="flex flex-shrink-0 mt-4 ml-4">
          <!-- #actions slot -->
          <slot name="actions" />
        </div>
      </div>
    </div>
  </div>
</template>

