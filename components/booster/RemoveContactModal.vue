<script>
import { mapState } from 'vuex'
import BoosterToastModal from '~/components/booster/ToastModal'

export default {
  props: {
    contact: {
      type: Object,
      default: null,
    },
  },
  emits: ['close', 'removeContact'],
  data() {
    return {
      isSending: false,
      duration: 2000,
    }
  },
  computed: {
    ...mapState(['lang']),
  },
  methods: {
    removeContact() {
      // call action to remove contact
      this.isSending = true
      this.$store
        .dispatch(
          'removeContact',
          {
            contact: this.contact,
          },
        )
        .then(() => {
          this.isSending = false
          this.closeModal()
          this.showToastModal()
          this.$emit('removeContact', this.contact)
        })
    },
    closeModal() {
      this.$emit('close')
      this.unBlur()
    },
    showToastModal() {
      this.isOpen = false
      this.$modal.open({
        parent: this,
        component: BoosterToastModal,
        hasModalCard: true,
        width: 'auto',
        onCancel: this.unBlur,
        canCancel: ['escape', 'outside'],
        props: {
          duration: this.duration,
          successMessage: this.lang.contact_removed,
        },
      })
      this.blur()
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
  <div class="m-4 rounded-xl overflow-hidden">
    <div
      class="card bg-blue w-full"
    >
      <header class="card-header p-4 shadow-none">
        <p class="flex justify-between items-center text-center modal-card-title text-white">
          <span style="width: 24px; height: 48px;" />
          <span class="flex-1 text-center text-2xl font-bold">Remove Contact</span>
          <a
            href="#"
            class="text-white self-start"
            style="width: 24px; height: 48px;"
            @click.prevent="closeModal"
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
        class="card-content text-lg text-white text-center"
      >
        <p class="px-2">
          Removing a contact will remove them from this list for the current email campaign.
        </p>
      </div>
      <div class="card-footer border-t-0">
        <div class="card-footer-item flex-col mb-4">
          <button
            class="px-8 rounded-full button inline-block is-danger shadow-md font-bold"
            @click="removeContact"
          >
            Remove Contact
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
