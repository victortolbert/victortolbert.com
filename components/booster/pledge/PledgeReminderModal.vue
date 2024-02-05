<script>
export default {
  props: {
    pledgeId: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      fields: {},
      errors: null,
      isSubmitting: false,
      showSuccess: false,
      showErrors: false,
    }
  },
  computed: {
    lang() {
      return this.$store.state.lang
    },
    shouldShowMain() {
      return !this.showSuccess && !this.showErrors
    },
    shouldShowSuccess() {
      return this.showSuccess && !this.showErrors
    },
    shouldShowError() {
      return this.showErrors
    },
  },
  methods: {
    submit() {
      this.isSubmitting = true

      axios
        .post(
          `/v3/pledge/reminder/${this.pledgeId}`,
          {},
          { headers: { 'Content-Type': 'multipart/form-data' } },
        )
        .then((response) => {
          this.fields = {}
          this.errors = {}
          this.showSuccess = true
          this.gaEvent('Parent Dashboard', 'Pledges', 'Sent Reminder Email')

          setTimeout(() => {
            if (this.isModalCurrentlyOpen())
              this.closeModal()
          }, 3000)
        })
        .catch((error) => {
          this.errors = JSON.parse(error.request.response).errors
          this.showErrors = true
          setTimeout(() => {
            if (this.isModalCurrentlyOpen())
              this.closeModal()
          }, 3000)
        })
        .finally(() => {
          this.isSubmitting = false
        })
    },
    isModalCurrentlyOpen(selector) {
      const className = ' modal-is-open '
      const element = document.querySelector('body')
      return (` ${element.className} `).replace(/[\n\t]/g, ' ').includes(className)
    },
    removeClass(element, className) {
      element.classList.remove(className)
    },
    closeModal() {
      this.removeClass(document.querySelector('body'), 'modal-is-open')
      this.unBlur()
      this.$parent.close()
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
  <form
    class="mx-auto max-w-xs overflow-hidden rounded-xl bg-white shadow-lg" :class="{
      'successEnabled flex justify-center': showSuccess,
    }"
    action=""
    @submit.prevent="submit"
  >
    <div
      v-if="shouldShowMain"
      class="modal-card bg-white"
      style="width: auto;"
    >
      <button
        type="button"
        class="inner-modal-close is-large modal-close-btn-position modal-close absolute mb-4 bg-transparent"
        aria-label="close"
        @click="closeModal"
      >
        &times;
      </button>
      <p class="mt-12 max-w-xs text-center text-lg leading-normal">
        {{ lang.send_explanation }}
      </p>
      <p class="mt-4 text-center text-lg font-semibold leading-normal">
        {{ lang.continue }}
      </p>

      <div
        class="controls px-6"
      >
        <div class="mt-5 pb-1 text-center">
          <div class="mx-0 max-w-md md:mx-auto">
            <div>
              <button
                :disabled="isSubmitting"
                type="submit"
                class="button is-secondary is-rounded mb-4 inline-block w-64 shadow"
              >
                {{ lang.send }}
                <i
                  v-if="isSubmitting"
                  class="fa fa-spinner fa-spin"
                />
              </button><br>
              <button
                type="button"
                class="button is-rounded is-outlined border-grey-dark text-grey-dark mb-4 inline-block w-64 shadow"
                @click="closeModal"
              >
                {{ lang.cancel }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="shouldShowSuccess"
      class="modal-card bg-secondary reminder-sent-success w-64 flex items-center px-4 py-12 text-center font-semibold text-white"
    >
      <img
        src="/booster/assets/img/email-icon-white.svg"
        alt="Email Icon"
        class="mb-4"
      >
      {{ lang.success }}
    </div>
    <div
      v-if="shouldShowError"
      class="modal-card flex items-center bg-white px-4 text-center"
      style="width: auto;"
    >
      <button
        type="button"
        class="modal-close inner-modal-close modal-close-btn-position is-large absolute bg-transparent"
        aria-label="close"
        @click="closeModal"
      >
        &times;
      </button>

      <p class="mt-12 w-64 text-center text-lg leading-normal">
        {{ lang.reminder_error }}
      </p>
      <div
        class="controls px-6"
      >
        <div class="mt-5 pb-1 text-center">
          <div class="mx-0 max-w-md md:mx-auto">
            <button
              type="button"
              class="button is-secondary is-rounded is-outlined mb-4 inline-block w-64"
              @click="closeModal"
            >
              {{ lang.close }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>
    div.reminder-sent-success img {
  width: 60px;
  height: 31px;
}
.modal-close-btn-position {
  top: 2%;
  right: 1%;
}
.modal-close::before,
.modal-close::after {
  background-color: black;
}
</style>
