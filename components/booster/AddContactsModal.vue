<script>
export default {
  emits: ['close', 'addContactToDisplay'],
  data() {
    return {
      isSending: false,
      validationError: '',
      contact: {
        firstName: '',
        lastName: '',
        emailAddress: '',
      },
      templates: [
        {
          id: 1,
          isOpen: false,
        },
        {
          id: 2,
          isOpen: false,
        },
        {
          id: 3,
          isOpen: false,
        },
      ],
      errors: null,
    }
  },
  computed: {
    firstNameErrors() {
      if (this.errors)
        return this.errors['contacts.0.firstName']
      return ''
    },
    lastNameErrors() {
      if (this.errors)
        return this.errors['contacts.0.lastName']
      return ''
    },
    emailAddressErrors() {
      if (this.errors)
        return this.errors['contacts.0.emailAddress']
      return ''
    },
    lang() {
      return this.$store.state.lang
    },
  },
  methods: {
    close() {
      this.$emit('close')
      this.unBlur()
    },
    enrollContacts() {
      this.validationError = ''
      axios.post('/v3/api/enroll-contacts', {
        contacts: [
          this.contact,
        ],
        participantUserId: this.$route.params.participantUserId,
      }).then((response) => {
        const sponsorRecord = response.data.contacts[0]
        const contact = {
          first_name: sponsorRecord.firstName,
          last_name: sponsorRecord.lastName,
          email: sponsorRecord.emailAddress,
          participant_user_id: this.$route.params.participantUserId,
        }
        this.$emit('addContactToDisplay', contact)
        this.$store.commit('ADD_NEW_USER_ACTIVITY_HISTORIES', response.data.userActivityHistories)

        this.isSending = true
      }).catch((error) => {
        this.validationError = error.response.data.message
        this.isSending = false
        this.errors = error.response.data.errors
        this.validationError = error.response.data.message
      })
    },
    blur() {
      document.getElementById('app').style.filter = 'blur(4px)'
    },
    unBlur() {
      document.getElementById('app').style.filter = 'none'
    },
  },
}
</script>

<template>
  <div
    v-if="!isSending"
    class="overflow-hidden rounded-xl max-w-xs mx-auto animated fadeIn animated-slow"
  >
    <div class="card bg-blue w-full">
      <header
        class="card-header bg-blue text-white border-b-0 p-4 shadow-none"
      >
        <p class="flex justify-between items-center text-center modal-card-title text-white">
          <span style="width: 24px; height: 48px;" />
          <span class="flex-1 text-center text-2xl font-bold">{{ lang.add_contact }}</span>
          <a
            href="#"
            class="text-white self-start"
            style="width: 24px; height: 48px;"
            @click.prevent="close"
          >
            <span class="icon">
              <FontAwesomeIcon
                :icon="['fas', 'times']"
                size="xs"
              />
            </span>
          </a>
        </p>
      </header>
      <div
        class="card-content pt-0 text-white bg-blue"
      >
        <div class="sm:w-64 mx-auto">
          <OField
            :message="firstNameErrors"
          >
            <OInput
              v-model="contact.firstName"
              :placeholder="lang.first_name"
              expanded
            />
          </OField>
          <OField
            :message="lastNameErrors"
          >
            <OInput
              v-model="contact.lastName"
              :placeholder="lang.last_name"
              expanded
            />
          </OField>
          <OField
            :message="emailAddressErrors"
          >
            <OInput
              v-model="contact.emailAddress"
              :placeholder="lang.email_address"
              expanded
            />
          </OField>
        </div>
      </div>
      <div
        class="card-footer border-t-0"
      >
        <div class="card-footer-item flex-col mb-4">
          <button
            class="button is-medium px-16 py-2 bg-white text-secondary rounded-full inline-block font-semibold shadow"
            @click.prevent="enrollContacts"
          >
            {{ lang.send_email }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
