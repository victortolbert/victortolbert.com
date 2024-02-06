<script setup>
import axios from 'axios'
import { useEmailSelection } from '~/composables/useEmailSelection'

const { metaSymbol } = useShortcuts()
const emailSelection = useEmailSelection()

const selectedScreen = ref('inbox')

const response = await axios.get('http://localhost:3006/emails')
const emails = ref(response.data)

// const { data: emails } = await useAsyncData(
//   'emails', () => axios.get('http://localhost:3006/emails'),
// )

const sortedEmails = computed(() => {
  return emails.value.sort((e1, e2) => {
    return e1.sentAt < e2.sentAt ? 1 : -1
  })
})

// console.log({ sortedEmails })

const unarchivedEmails = computed(() => {
  return sortedEmails.value.filter(e => !e.archived)
})

const archivedEmails = computed (() => {
  return sortedEmails.value.filter(e => e.archived)
})

const filteredEmails = computed(() => {
  const filters = {
    inbox: unarchivedEmails.value,
    archive: archivedEmails.value,
  }
  return filters[selectedScreen.value]
})

function selectScreen(newScreen) {
  selectedScreen.value = newScreen
  emailSelection.clear()
}

function capitalize(word) {
  if (!word || !word.length)
    return

  return word[0].toUpperCase() + word.slice(1)
}
</script>

<template>
  <UButton
    :variant="selectedScreen === 'inbox' ? 'solid' : 'outline'"
    @click="selectScreen('inbox');"
  >
    Inbox View
  </UButton>
  <UButton
    :variant="selectedScreen === 'archive' ? 'solid' : 'outline'"
    @click="selectScreen('archive')"
  >
    Archived View
  </UButton>

  <h1>VMail {{ capitalize(selectedScreen) }}</h1>

  <div class="flex items-center gap-0.5">
    <UKbd>{{ metaSymbol }}</UKbd>
    <UKbd>K</UKbd>
  </div>

  <MailBulkActionBar
    :emails="filteredEmails"
    :selected-screen="selectedScreen"
  />

  <MailTable :emails="filteredEmails" />
</template>
