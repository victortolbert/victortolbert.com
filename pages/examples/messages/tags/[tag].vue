<script>
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useMessages } from '~/composables/useMessages'

export default defineComponent({
  setup() {
    const { messages } = useMessages()
    const route = useRoute()

    const taggedMessages = computed(() => {
      return messages.value.filter(message => message.tags.includes(route.params.tag))
    })

    return {
      taggedMessages,
    }
  },
})
</script>

<template>
  <MessageTable :data="taggedMessages" />
</template>
