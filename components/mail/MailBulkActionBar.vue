<script setup>
import { useEmailSelection } from '~/composables/useEmailSelection'

// const props = defineProps({
//   emails: {
//     type: Array,
//     required: true,
//   },
//   selectedScreen: {
//     type: String,
//     required: true,
//   },
// })

const props = defineProps(['emails', 'selectedScreen'])

const emailSelection = useEmailSelection()

const numberSelected = computed(() => {
  return emailSelection.emails.size
})

const allAreSelected = computed(() => {
  return props.emails.length === numberSelected.value && numberSelected.value !== 0
})

const partialSelection = computed(() => {
  return numberSelected.value > 0 && !allAreSelected.value
})

function bulkSelect() {
  if (allAreSelected.value)
    emailSelection.clear()
  else
    emailSelection.addMultiple(props.emails)
}
</script>

<template>
  <div class="bulk-action-bar">
    <span class="checkbox">
      <UCheckbox
        :checked="allAreSelected"
        :indeterminate="partialSelection"
        @click="bulkSelect"
      />
    </span>

    <span class="buttons">
      <UButton
        :disabled="Array.from(emailSelection.emails).every(e => e.read)"
        @click="emailSelection.markRead()"
      >
        Mark Read
      </UButton>
      <UButton
        :disabled="Array.from(emailSelection.emails).every(e => !e.read)"
        @click="emailSelection.markUnread()"
      >
        Mark Unread
      </UButton>
      <UButton
        v-if="selectedScreen === 'inbox'"
        :disabled="numberSelected === 0"
        @click="emailSelection.archive()"
      >
        Archive
      </UButton>
      <UButton
        v-else
        :disabled="numberSelected === 0"
        @click="emailSelection.moveToInbox()"
      >
        Move to Inbox
      </UButton>
    </span>
  </div>
</template>
