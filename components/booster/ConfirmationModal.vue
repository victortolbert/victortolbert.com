<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    deleteText: {
      type: String,
      default: 'Delete',
    },
    cancelText: {
      type: String,
      default: 'Cancel',
    },
  },
  emits: ['close', 'confirmed'],
  computed: {
    lang() {
      return this.$store.state.lang
    },
  },
  methods: {
    cancel() {
      this.$emit('close')
      this.unBlur()
      return false
    },
    confirmed() {
      this.$emit('close')
      this.unBlur()
      this.$emit('confirmed')
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
  <div class="bg-grey-lightest pb-2 mx-auto shadow-md rounded-xl max-w-xs">
    <div
      class="modal-card"
      style="width: auto;"
    >
      <button
        type="button"
        class="inner-modal-close modal-close-btn-position is-large absolute bg-transparent mb-4 text-3xl"
        aria-label="close"
        @click="cancel"
      >
        &times;
      </button>

      <p class="text-center text-lg leading-normal mt-18 max-w-xs">
        {{ text }}
      </p>
      <p class="text-center font-semibold text-lg leading-normal mt-4 mb-6">
        {{ lang.continue }}
      </p>

      <div
        class="controls px-6"
      >
        <div class="text-center mt-5 pb-1">
          <div class="max-w-md mx-0 md:mx-auto">
            <div>
              <button
                type="submit"
                class="button is-danger is-rounded inline-block mb-4 w-64 shadow"
                @click="confirmed"
              >
                {{ deleteText }}
              </button>
              <br>
              <button
                type="button"
                class="button border-grey-dark text-grey-dark is-rounded inline-block mb-4 w-64 is-outlined shadow"
                @click="cancel"
              >
                {{ cancelText }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
    .modal-close-btn-position {
  top: 2%;
  right: 4%;
}
.modal-close::before,
.modal-close::after {
  background-color: black;
}
</style>
