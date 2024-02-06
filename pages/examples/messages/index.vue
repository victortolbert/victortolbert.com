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
      filteredMessages,
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
      filteredMessages,
    }
  },
})
</script>

<template>
  <div>
    <template v-if="$fetchState.pending">
      <PendingPlaceholder />
    </template>

    <template v-else-if="$fetchState.error">
      <p>Error while fetching messages: {{ $fetchState.error.message }}</p>
    </template>

    <template v-else>
      <MessageTable :data="messages" class="hidden lg:block" />
      <MessageList :data="messages" class="lg:hidden" />
    </template>
  </div>
</template>
