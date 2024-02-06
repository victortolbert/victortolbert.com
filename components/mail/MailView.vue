<script setup>
import { format } from 'date-fns'
import { marked } from 'marked'
import { useKeydown } from '~/composables/useKeydown'

const props = defineProps({
  email: {
    type: Object,
    required: true,
  },
  changeEmail: {
    type: Function,
    required: true,
  },
})

const { metaSymbol } = useShortcuts()

marked.use({
  async: true,
  pedantic: false,
  gfm: true,
  mangle: false,
  headerIds: false,
})

useKeydown([
  { key: 'e', fn: toggleArchive },
  { key: 'r', fn: toggleRead },
  { key: 'k', fn: goNewer },
  { key: 'j', fn: goOlder },
  { key: '[', fn: goNewerAndArchive },
  { key: ']', fn: goOlderAndArchive },
])

function toggleArchive() {
  return props.changeEmail({
    toggleArchive: true,
    save: true,
    closeModal: true,
  })
}

function toggleRead() {
  return props.changeEmail({
    toggleRead: true,
    save: true,
  })
}

function goNewer() {
  return props.changeEmail({
    indexChange: -1,
  })
}

function goOlder() {
  return props.changeEmail({
    indexChange: 1,
  })
}

function goNewerAndArchive() {
  return props.changeEmail({
    indexChange: -1,
    toggleArchive: true,
  })
}

function goOlderAndArchive() {
  return props.changeEmail({
    indexChange: 1,
    toggleArchive: true,
  })
}
</script>

<template>
  <div class="email-display">
    <div class="toolbar">
      <div class="flex items-center gap-0.5">
        <UKbd>{{ metaSymbol }}</UKbd>
        <UKbd>K</UKbd>
      </div>

      <UButtonGroup>
        <UButton @click="toggleArchive">
          {{ email.archived ? 'Move to Inbox (e)' : 'Archive (e)' }}
        </UButton>
        <UButton @click="toggleRead">
          {{ email.read ? 'Mark Unread (r)' : 'Mark Read (r)' }}
        </UButton>
        <UButton @click="goNewer">
          Newer (k)
        </UButton>
        <UButton @click="goOlder">
          Older (j)
        </UButton>
      </UButtonGroup>
    </div>

    <h2 class="mb-0">
      Subject: <strong>{{ email.subject }}</strong>
    </h2>

    <div>
      <em>From {{ email.from }} on {{ format(new Date(email.sentAt), 'MMM do yyyy') }}</em>
    </div>

    <div v-html="marked.parse(email.body)" />
  </div>
</template>
