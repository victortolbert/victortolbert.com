<script setup>
import { useStore } from 'vuex'

// import BoosterAddContactsModal from '~/components/booster/AddContactsModal'
// import BoosterToastModal from '~/components/booster/ToastModal'

defineEmits(['addContactsToDisplay'])

const route = useRoute()
const store = useStore()

const contacts = ref([])

onMounted(() => {
  initializeCloudSponge()
})

function initializeCloudSponge() {
  // initialization for cloudsponge
  (function (u) {
    const d = document
    const s = 'script'
    const a = d.createElement(s)
    const m = d.getElementsByTagName(s)[0]
    a.async = 1
    a.src = u
    m.parentNode.insertBefore(a, m)
  })('//api.cloudsponge.com/widget/V-2F2bg0uFYke7PBz9c7uw.js')
  // eslint-disable-next-line ts/no-this-alias
  const self = this

  window.csPageOptions = {
    sources: ['gmail', 'yahoo', 'windowslive'],
    mobile_render: true,
    filter(contact) {
      return contact.email.length && contact.first_name.length
    },
    inlineOauth: 'mobile',
    localeData: {
      GET_CONTACTS: self.lang.send_emails,
      SELECT_CONTACTS: self.lang.select_contacts,
      SELECT_ALL: self.lang.select_all_with_count,
      REVIEW_SELECTED: self.lang.review_selected,
    },
    afterSubmitContacts(contacts, source, owner) {
      self.contacts = contacts.map((contact) => {
        return {
          firstName: contact.first_name,
          lastName: contact.last_name,
          emailAddress: contact.selectedEmail(),
        }
      })
      self.enrollContacts()
    },
  }
}

function showAddContactsModal() {
  // this.$modal.open({
  //   parent: this,
  //   component: BoosterAddContactsModal,
  //   hasModalCard: true,
  //   width: 'auto',
  //   onCancel: unBlur,
  //   events: {
  //     addContactToDisplay: (contact) => {
  //       addContactsToDisplay([contact])
  //     },
  //   },
  // })

  blur()
}

function enrollContacts() {
  axios.post('/v3/api/enroll-contacts', {
    contacts: contacts.value,
    participantUserId: route.params.participantUserId,
  }).then((response) => {
    response.data.contacts.forEach((contact) => {
      contact.email = contact.emailAddress
      delete contact.emailAddress
      contact.first_name = contact.firstName
      delete contact.firstName
      contact.last_name = contact.lastName
      delete contact.lastName
      contact.participant_user_id = route.params.participantUserId
    })

    addContactsToDisplay(response.data.contacts)
    store.commit('ADD_NEW_USER_ACTIVITY_HISTORIES', response.data.userActivityHistories)
    isSending.value = true
  }).catch((error) => {
    isSending.value = false
    errors.value = error.response.data.errors
  })
}

function addContactsToDisplay(contacts) {
  emit('addContactsToDisplay', contacts)
  showToastModal(contacts)
}

function showToastModal(contacts) {
  isOpen.value = false
  // this.$modal.open({
  //   parent: this,
  //   component: BoosterToastModal,
  //   hasModalCard: true,
  //   width: 'auto',
  //   onCancel: unBlur,
  //   canCancel: ['escape', 'outside'],
  //   props: {
  //     successMessage: successMessage(contacts),
  //   },
  // })

  blur()
}

function successMessage(contacts) {
  // if (contacts.length === 1)
  //   return this.lang.email_sent

  // return this.parseLanguage(this.lang.multiple_emails_sent, {
  //   count: contacts.length,
  // })
}

function closeModal() {
  // this.$parent.$emit('close')
}

function blur() {
  document.getElementById('app').style.filter = 'blur(4px)'
}

function unBlur() {
  document.getElementById('app').style.filter = 'none'
}
</script>

<template>
  <div>
    <p class="text-center md:text-lg font-bold mb-4 px-12">
      Add or import your contacts to send emails.
    </p>

    <div class="flex justify-center content-center mb-5">
      <div class="w-16 sm:w-24 flex flex-col flex-wrap text-center">
        <button
          class="shadow is-rounded border w-12 h-12 rounded-full mx-auto cursor-pointer"
          @click="showAddContactsModal"
        >
          <BaseIcon name="add-email" />
        </button>
        <span class="text-xs">
          Add Contact
        </span>
      </div>
      <div class="w-16 sm:w-24 flex flex-col flex-wrap text-center">
        <button
          class="shadow is-rounded border w-12 h-12 rounded-full mx-auto cursor-pointer"
          onclick="return cloudsponge.launch('gmail');"
        >
          <BaseIcon name="gmail" />
        </button>
        <span class="text-xs">
          Gmail
        </span>
      </div>
      <div class="w-16 sm:w-24 flex flex-col flex-wrap text-center">
        <button
          class="shadow is-rounded border w-12 h-12 rounded-full mx-auto cursor-pointer"
          onclick="return cloudsponge.launch('yahoo');"
        >
          <BaseIcon name="yahoo" />
        </button>
        <span class="text-xs">
          Yahoo
        </span>
      </div>
      <div class="w-16 sm:w-24 flex flex-col flex-wrap text-center">
        <button
          class="shadow is-rounded border w-12 h-12 rounded-full mx-auto cursor-pointer"
          onclick="return cloudsponge.launch('windowslive');"
        >
          <BaseIcon name="outlook" />
        </button>
        <span class="text-xs">
          Outlook
        </span>
      </div>
    </div>
  </div>
</template>
