<script>
import BoosterAddContactsModal from '~/components/booster/AddContactsModal'
import BoosterToastModal from '~/components/booster/ToastModal'

export default {
  name: 'AddContactsButtons',
  components: {
    BoosterToastModal,
  },
  data() {
    return {
      contacts: [],
    }
  },
  computed: {
    lang() {
      return this.$store.state.lang
    },
  },
  mounted() {
    this.initializeCloudSponge()
  },
  methods: {
    initializeCloudSponge() {
      // initialization for cloudsponge
      (function (u) {
        const d = document
        const s = 'script'
        const a = d.createElement(s)
        const m = d.getElementsByTagName(s)[0]
        a.async = 1; a.src = u; m.parentNode.insertBefore(a, m)
      })('//api.cloudsponge.com/widget/V-2F2bg0uFYke7PBz9c7uw.js')
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
    },
    showAddContactsModal() {
      this.$modal.open({
        parent: this,
        component: BoosterAddContactsModal,
        hasModalCard: true,
        width: 'auto',
        onCancel: this.unBlur,
        events: {
          addContactToDisplay: (contact) => {
            this.addContactsToDisplay([contact])
          },
        },
      })
      // this.blur()
    },
    enrollContacts() {
      axios.post('/v3/api/enroll-contacts', {
        contacts: this.contacts,
        participantUserId: this.$route.params.participantUserId,
      }).then((response) => {
        response.data.contacts.forEach((contact) => {
          contact.email = contact.emailAddress
          delete contact.emailAddress
          contact.first_name = contact.firstName
          delete contact.firstName
          contact.last_name = contact.lastName
          delete contact.lastName
          contact.participant_user_id = this.$route.params.participantUserId
        })
        this.addContactsToDisplay(response.data.contacts)
        this.$store.commit('ADD_NEW_USER_ACTIVITY_HISTORIES', response.data.userActivityHistories)
        this.isSending = true
      }).catch((error) => {
        this.isSending = false
        this.errors = error.response.data.errors
      })
    },
    addContactsToDisplay(contacts) {
      this.$emit('addContactsToDisplay', contacts)
      this.showToastModal(contacts)
    },
    showToastModal(contacts) {
      this.isOpen = false
      this.$modal.open({
        parent: this,
        component: BoosterToastModal,
        hasModalCard: true,
        width: 'auto',
        onCancel: this.unBlur,
        canCancel: ['escape', 'outside'],
        props: {
          successMessage: this.successMessage(contacts),
        },
      })
      // this.blur()
    },
    successMessage(contacts) {
      if (contacts.length === 1)
        return this.lang.email_sent

      return this.parseLanguage(this.lang.multiple_emails_sent, {
        count: contacts.length,
      })
    },
    closeModal() {
      this.$parent.$emit('close')
    },
  },
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
