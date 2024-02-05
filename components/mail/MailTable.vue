<script setup>
import axios from 'axios'
import { format } from 'date-fns'
import { useEmailSelection } from '~/composables/useEmailSelection'

const props = defineProps({
  emails: {
    type: Array,
    required: true,
  },
})

const emailSelection = useEmailSelection()
const openedEmail = ref(null)

function openEmail(email) {
  openedEmail.value = email

  if (email) {
    email.read = true
    axios.put(`http://localhost:3006/emails/${email.id}`, email)
  }
}

function archiveEmail(email) {
  email.archived = true
  axios.put(`http://localhost:3006/emails/${email.id}`, email)
}

function changeEmail(email, { indexChange, toggleArchive, toggleRead, save, closeModal }) {
  if (toggleArchive)
    email.archived = !email.archived

  if (toggleRead)
    email.read = !email.read

  if (save)
    axios.put(`http://localhost:3006/emails/${email.id}`, email)

  if (closeModal) {
    openedEmail.value = null
    return null
  }

  if (indexChange) {
    const index = props.emails.findIndex(e => e === email)
    openEmail(props.emails[index + indexChange])
  }
}
</script>

<template>
  <div class="relative">
    <table class="mail-table">
      <tbody>
        <tr
          v-for="email in emails"
          :key="email.id"
          class="clickable" :class="[email.read ? 'read' : '']"
        >
          <td>
            <input
              type="checkbox"
              :checked="emailSelection.emails.has(email)"
              @click="emailSelection.toggle(email)"
            >
          </td>
          <td>{{ email.from }}</td>
          <td>
            <p><strong>{{ email.subject }}</strong> - {{ email.body }}</p>
          </td>
          <td class="date">
            {{ format(new Date(email.sentAt), 'MMM do yyyy') }}
          </td>
          <td>
            <UButton @click="archiveEmail(email)">
              Archive
            </UButton>
          </td>
        </tr>
      </tbody>
    </table>

    <ModalView v-if="openedEmail" :close-modal="() => { openedEmail = null; }">
      <MailView
        :email="openedEmail"
        :change-email="(args) => changeEmail(openedEmail, args)"
      />
    </ModalView>
  </div>
</template>
