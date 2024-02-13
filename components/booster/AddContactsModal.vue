<script setup>
import axios from 'axios'
import { useStore } from 'vuex'

defineEmits(['close', 'addContactToDisplay'])
const route = useRoute()
const store = useStore()

const isSending = ref(false)
const validationError = ref('')
const errors = ref(null)

const contact = ref({
  firstName: '',
  lastName: '',
  emailAddress: '',
})

const templates = ref([
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
])

const firstNameErrors = computed(() => {
  if (errors.value)
    return errors.value['contacts.0.firstName']
  return ''
})

const lastNameErrors = computed(() => {
  if (errors.value)
    return errors.value['contacts.0.lastName']
  return ''
})

const emailAddressErrors = computed(() => {
  if (errors.value)
    return errors.value['contacts.0.emailAddress']
  return ''
})

function close() {
  emit('close')
  unBlur()
}

function enrollContacts() {
  validationError.value = ''

  axios.post('/v3/api/enroll-contacts', {
    contacts: [
      contact.value,
    ],
    participantUserId: route.params.participantUserId,
  }).then((response) => {
    const sponsorRecord = response.data.contacts[0]
    const contact = {
      first_name: sponsorRecord.firstName,
      last_name: sponsorRecord.lastName,
      email: sponsorRecord.emailAddress,
      participant_user_id: route.params.participantUserId,
    }
    emit('addContactToDisplay', contact)
    store.commit('ADD_NEW_USER_ACTIVITY_HISTORIES', response.data.userActivityHistories)

    isSending.value = true
  }).catch((error) => {
    validationError.value = error.response.data.message
    isSending.value = false
    errors.value = error.response.data.errors
    validationError.value = error.response.data.message
  })
}

function blur() {
  document.getElementById('app').style.filter = 'blur(4px)'
}

function unBlur() {
  document.getElementById('app').style.filter = 'none'
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
              <UIcon name="i-ph-x-circle-duotone" />
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
            class="button is-medium px-16 py-2 bg-white text-secondary-500 rounded-full inline-block font-semibold shadow"
            @click.prevent="enrollContacts"
          >
            {{ lang.send_email }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
