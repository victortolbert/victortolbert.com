<script>
import { defineComponent } from 'vue'
import { useMessages } from '~/composables/useMessages'

export default defineComponent({
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const {
      tags,
      checked,
      checkAll,
      updateCheckAll,
      isCheckAll,
      truncate,
      formatDate,
      removeMessage,
      filteredMessages,
      removeMessages,
      markAllRead,
    } = useMessages()

    return {
      tags,
      checked,
      checkAll,
      updateCheckAll,
      isCheckAll,
      truncate,
      formatDate,
      removeMessage,
      filteredMessages,
      removeMessages,
      markAllRead,
    }
  },
})
</script>

<template>
  <div>
    <div class="h-10 flex items-center border-b pl-6 text-2xl text-gray-500 space-x-2">
      <input
        v-model="isCheckAll"
        class="form-checkbox h-5 w-5 text-gray-500"
        type="checkbox"
        @click="checkAll()"
      >

      <button :class="[checked.length ? 'hidden' : 'flex']" type="button" title="Refresh">
        <UIcon name="i-mdi-refresh" />
      </button>

      <div v-show="checked.length" class="flex items-center space-x-2">
        <button type="button">
          <UIcon name="i-mdi-package-down" />
        </button>

        <button type="button">
          <UIcon name="i-mdi-alert-octagon" />
        </button>

        <button title="Delete" @click="removeMessages">
          <UIcon name="i-mdi-delete" />
        </button>

        <button type="button" @click="markAllRead">
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

    <table class="w-full">
      <tbody>
        <tr
          v-for="(message, index) in filteredMessages"
          :key="message.id"
          class="group cursor-pointer border-b text-gray-500 hover:bg-gray-100 hover:shadow"
        >
          <td class="whitespace-no-wrap py-2 pl-6 align-top">
            <input
              v-model="checked"
              class="form-checkbox h-5 w-5 text-gray-500"
              type="checkbox"
              :value="message"
              @change="updateCheckAll"
            >

            <NuxtLink class="pl-2" :to="`/examples/messages/${message.id}`">
              {{ message.sender }}
            </NuxtLink>
          </td>

          <td class="py-2 pl-6 align-top">
            <span
              v-for="tag in message.tags"
              :key="tag"
              class="mr-1 inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-xs font-medium leading-4 capitalize text-gray-800"
              :class="tag"
            >
              {{ tag }}
            </span>
            <NuxtLink class="font-bold" :to="`/examples/messages/${message.id}`">
              {{ message.subject }}
            </NuxtLink>
            <NuxtLink class="hidden md:inline-block" :to="`/examples/messages/${message.id}`">
              {{ truncate(message.body) }}
            </NuxtLink>
          </td>

          <td class="whitespace-no-wrap py-2 text-right align-top text-sm">
            <NuxtLink :to="`/examples/messages/${message.id}`">
              {{ formatDate(message.date) }}
            </NuxtLink>
          </td>

          <td class="whitespace-no-wrap actions py-2 pl-6">
            <button type="button" @click="removeMessage(index)">
              <UIcon name="i-mdi-delete" />
            </button>

            <button v-if="false" class="relative" type="button" @click="archive(message.id)">
              <UIcon name="i-mdi-dots-vertical" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
