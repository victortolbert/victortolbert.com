<script>
import { defineComponent } from 'vue'
import { useMessages } from '~/composables/useMessages'

export default defineComponent({
  setup() {
    const {
      messages,
      tags,
      checked,
      checkAll,
      updateCheckAll,
      isCheckAll,
      truncate,
      formatDate,
    } = useMessages()

    return {
      messages,
      tags,
      checked,
      checkAll,
      updateCheckAll,
      isCheckAll,
      truncate,
      formatDate,
    }
  },
})
</script>

<template>
  <div class="h-10 flex items-center border-b pl-6 text-2xl text-gray-500 space-x-2">
    <input
      v-model="isCheckAll"
      class="form-checkbox h-5 w-5 text-gray-500"
      type="checkbox"
      @click="checkAll"
    >
    <button v-if="[checked.length ? 'hidden' : 'flex']" type="button" title="Refresh">
      <UIcon name="i-mdi-refresh" />
    </button>

    <div v-show="checked.length" class="flex items-center space-x-2">
      <button type="button">
        <UIcon name="i-mdi-package-down" />
      </button>

      <button type="button">
        <UIcon name="i-mdi-alert-octagon" />
      </button>

      <button title="Delete">
        <UIcon name="i-mdi-delete" />
      </button>

      <button type="button">
        <UIcon name="i-mdi-email-mark-as-unread" />
      </button>

      <button type="button">
        <UIcon name="i-mdi-clock" />
      </button>
    </div>

    <button type="button">
      <UIcon name="i-mdi-dots-vertical" />
    </button>
  </div>
</template>
