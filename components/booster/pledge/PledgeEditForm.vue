<script>
import { isEmpty } from 'lodash-es'
import { decimal, email, minValue, required } from '@vuelidate/validators'

// import required from 'vuelidate/lib/validators/required'
// import minValue from 'vuelidate/lib/validators/minValue'
// import email from 'vuelidate/lib/validators/email'
// import decimal from 'vuelidate/lib/validators/decimal'

// import { TheMask } from 'vue-the-mask'
import { STATUS_CONFIRMED, STATUS_PAID } from '~/store/modules/pledge.js'
import { STATUS_PAYMENT_SCHEDULED } from '~/store/modules/online_pending_payment.js'
import BoosterConfirmationModal from '~/components/booster/ConfirmationModal.vue'

export default {
  props: {
    canDelete: {
      type: Boolean,
      default: true,
    },
    pledgeData: {
      type: Array,
      default: null,
    },
    program: {
      type: Object,
      default: null,
    },
  },
  emits: ['close', 'pledgeUpdated', 'pledgeDeleted'],
  data: () => ({
    focused: false,
    loading: false,
    errors: [],
    pledge: {
      pledge_sponsor: {
        first_name: null,
        last_name: null,
        email: null,
        phone: null,
        state: null,
        country: null,
      },
      sponsor_type_id: null,
      pledge_type_id: null,
      amount: 0,
    },
  }),
  validations: {
    pledge: {
      pledge_sponsor: {
        first_name: {
          required,
        },
        last_name: {
          required,
        },
        email: {
          required,
          email,
        },
        phone: {
          required,
        },
        state: {
          required,
        },
        country: {
          required,
        },
      },
      sponsor_type_id: {
        required,
      },
      pledge_type_id: {
        required,
      },
      amount: {
        required,
        decimal,
        minValue: minValue(0.01),
      },
    },
  },
  computed: {
    countries() {
      return this.$store.state.countries
    },
    states() {
      return this.$store.state.states
    },
    stateActive() {
      return this.pledge.pledge_sponsor.country !== 'US'
    },
    lang() {
      return this.$store.state.lang.pledge_edit
    },
    isEstimated() {
      return !(this.hasLaps() || this.isFlat())
    },
    estimatedTotal() {
      if (this.isFlat())
        return this.flatTotal()

      if (this.hasLaps())
        return this.lapsTotal()

      return this.rangeTotal()
    },
  },

  mounted() {
    this.pledge = { ...this.pledgeData[0] }
    this.pledge.pledge_sponsor = { ...this.pledgeData[0].pledge_sponsor }
  },
  methods: {
    flatTotal() {
      const amount = this.v$.pledge.amount.$model * this.pledgeData.length
      return this.formatCurrency(amount)
    },
    rangeTotal() {
      const amount = this.v$.pledge.amount.$model * this.pledgeData.length
      const low = this.formatCurrency(amount * this.program.unit_range_low)
      const high = this.formatCurrency(amount * this.program.unit_range_high)
      return `${low} - ${high}`
    },
    lapsTotal() {
      const amount = this.v$.pledge.amount.$model * this.pledgeData.length
      return this.formatCurrency(amount * this.pledgeData[0].participant.laps)
    },
    isFlat() {
      const FLAT_TYPE_ID = 3
      return this.pledge.pledge_type_id === FLAT_TYPE_ID
    },
    hasLaps() {
      return Number.isInteger(this.pledgeData[0].participant.laps)
    },
    formatCurrency(number) {
      return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
        .format(number)
        .replace('.00', '')
    },
    editFieldTooltipOptions(refEle) {
      if (!isEmpty(this.$refs)) {
        const disableTooltip = !this.$refs[refEle].getElementsByClassName('input')[0].disabled

        if (disableTooltip)
          return {}

        return {
          classes: ['info', 'wide'],
          content: this.lang.disabled_edit_message,
          placement: 'auto-start',
          trigger: 'hover click focus',
        }
      }
    },
    close() {
      this.$emit('close')
      this.unBlur()
    },
    canEditAmount() {
      const pledge = this.pledgeData[0]

      if (pledge.pledge_status_id === STATUS_PAID) {
        // Can't edit once the pledge has been paid
        return false
      }

      if (pledge.pledge_status_id === STATUS_CONFIRMED && Number.isInteger(pledge.participant.laps)) {
        // Can't edit once the pledge has been confirmed
        return false
      }

      if (this.$store.state.User.id === pledge.user_id) {
        // Sponsor can edit their amount
        return true
      }

      if (!pledge.online_pending_payments.length) {
        // No pending payments, so user can edit
        return true
      }

      let hasPaymentInAScheduledState = false

      pledge.online_pending_payments.forEach((payment) => {
        if (STATUS_PAYMENT_SCHEDULED.includes(payment.online_pending_payment_status_id))
          hasPaymentInAScheduledState = true
      })

      // Make sure payment is not currently in a scheduled state
      if (hasPaymentInAScheduledState)
        return false
      else
        return true
    },
    submit() {
      this.v$.$touch()
      if (this.v$.$invalid) {
        this.submitStatus = 'ERROR'
      }
      else {
        this.submitStatus = 'PENDING'
        this.loading = true
        const url = `/v3/pledges/edit/${this.pledge.id}`
        axios.put(url, {
          pledge: {
            pledge_sponsor: this.pledge.pledge_sponsor,
            pledge_type_id: this.pledge.pledge_type_id,
            sponsor_type_id: this.pledge.sponsor_type_id,
            amount: this.pledge.amount,
          },
        })
          .then((response) => {
            if (response.status === 200) {
              this.pledges = response.data
              this.$store.commit('UPDATE_PLEDGES', this.pledges)
              this.loading = false
              this.$parent.$parent.$emit('pledgeUpdated')
              this.$emit('close')
              this.submitStatus = 'OK'
            }
          }).catch((err) => {
            this.errors = [err.message]
            this.loading = false
          })
      }
    },
    openPledgeDeleteModal() {
      this.$emit('close')
      this.$modal.open({
        parent: this,
        component: BoosterConfirmationModal,
        hasModalCard: true,
        canCancel: ['escape', 'outside'],
        onCancel: () => {
          this.$emit('close')
          this.unBlur()
        },
        props: {
          text: this.lang.about_to_delete,
          deleteText: this.lang.delete,
          cancelText: this.lang.cancel,
        },
        events: {
          confirmed: () => {
            this.deletePledge()
          },
        },
      })
      this.blur()
    },
    deletePledge() {
      this.submitStatus = 'PENDING'
      this.loading = true
      const url = `/v3/pledges/${this.pledge.id}`
      axios.delete(url)
        .then((response) => {
          this.$parent.$parent.$emit('pledgeDeleted', this.pledge)
          this.$emit('close')
          this.submitStatus = 'OK'
        }).catch((err) => {
          this.errors = [err.message]
          this.loading = false
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
  <form
    novalidate
    role="form"
    class="min-h-full w-full overflow-y-scroll rounded-xl bg-white p-8 shadow-lg"
    style="max-height: 90vh;"
    @keydown.enter.prevent
    @submit.prevent="submit"
  >
    <div class="flex justify-between">
      <h2 class="text-2xl font-semibold">
        {{ lang.edit_pledge }}
      </h2>
      <button
        class="cursor-pointer self-start text-black"
        @click.prevent="close"
      >
        <span class="icon">
          <UIcon name="i-carbon-close" />
        </span>
      </button>
    </div>
    <p class="mb-4">
      {{ lang.reminder }}
    </p>
    <!-- Sponsor First Name Input -->
    <div class="field mb-4">
      <label
        for="sponsorFirstName"
        class="mb-1 inline-block pl-2 text-sm text-gray-700"
      >
        {{ lang.first_name_lbl }}
      </label>
      <div class="control">
        <input
          id="sponsorFirstName"
          v-model.trim="v$.pledge.pledge_sponsor.first_name.$model"
          :class="{
            'is-danger': v$.pledge.pledge_sponsor.first_name.$error,
          }"
          type="text"
          class="input"
        >
      </div>
      <p
        v-if="v$.pledge.pledge_sponsor.first_name.$error && focused === false"
        class="is-danger help"
      >
        {{ lang.first_name_missing }}
      </p>
    </div>
    <!-- Sponsor Last Name Input -->
    <div class="field mb-4">
      <label
        for="first_name"
        class="mb-1 inline-block pl-2 text-sm text-gray-700"
      >
        {{ lang.last_name_lbl }}
      </label>
      <div class="control">
        <input
          id="sponsorLastName"
          v-model.trim="v$.pledge.pledge_sponsor.last_name.$model"
          :class="{
            'is-danger': v$.pledge.pledge_sponsor.last_name.$error,
          }"
          type="text"
          name="last_name"
          class="input"
        >
      </div>
      <p
        v-if="v$.pledge.pledge_sponsor.last_name.$error && focused === false"
        class="help is-danger"
      >
        {{ lang.last_name_missing }}
      </p>
    </div>
    <!-- Email Address Input -->
    <div class="field mb-4">
      <label
        for="first_name"
        class="mb-1 inline-block pl-2 text-sm text-gray-700"
      >{{ lang.email_address_lbl }}</label>
      <div>
        <input
          id="sponsorEmail"
          v-model.trim="v$.pledge.pledge_sponsor.email.$model"
          :class="{
            'is-danger': v$.pledge.pledge_sponsor.email.$error,
          }"
          type="email"
          name="sponsor_email"
          class="input"
        >
      </div>
      <p
        v-if="v$.pledge.pledge_sponsor.email.$error && focused === false"
        class="help is-danger"
      >
        {{ lang.email_address_missing }}
      </p>
    </div>
    <!-- Phone Number Input -->
    <div class="field mb-4">
      <label
        for="first_name"
        class="mb-1 inline-block pl-2 text-sm text-gray-700"
      >{{ lang.phone_number_lbl }}</label>
      <div>
        <input
          v-model.trim="v$.pledge.pledge_sponsor.phone.$model"
          :class="{
            'is-danger': v$.pledge.pledge_sponsor.phone.$error,
          }"
          mask="(###) ###-####"
          type="tel"
          name="phone_number"
          class="input"
        >
      </div>
      <p
        v-if="v$.pledge.pledge_sponsor.phone.$error && focused === false"
        class="help is-danger"
      >
        {{ lang.phone_number_missing }}
      </p>
    </div>
    <!-- State Select Input -->
    <div class="field mb-4">
      <label class="mb-1 inline-block pl-2 text-sm text-gray-700">{{ lang.state_lbl }}</label>
      <div class="control">
        <div class="select w-full">
          <select
            id="state"
            v-model.trim="v$.pledge.pledge_sponsor.state.$model"
            :disabled="stateActive"
            class="input form-select w-full"
          >
            <option
              v-for="state in states"
              :key="state.id"
              :value="state.state_code"
            >
              {{ state.name }}
            </option>
          </select>
        </div>
      </div>
      <p
        v-if="v$.pledge.pledge_sponsor.state.$error && focused === false"
        class="help is-danger"
      >
        {{ lang.state_missing }}
      </p>
    </div>
    <!-- Country Select Input -->
    <div class="field mb-4">
      <label class="mb-1 inline-block pl-2 text-sm text-gray-700">{{ lang.country_lbl }}</label>
      <div class="control">
        <div class="select w-full">
          <select
            id="country"
            v-model.trim="v$.pledge.pledge_sponsor.country.$model"
            class="input form-select w-full"
          >
            <option
              v-for="country in countries"
              :key="country.id"
              :value="country.iso"
            >
              {{ country.name }}
            </option>
          </select>
        </div>
      </div>
      <p
        v-if="v$.pledge.pledge_sponsor.country.$error && focused === false"
        class="help is-danger"
      >
        {{ lang.country_missing }}
      </p>
    </div>
    <!-- Sponsor Type Input -->
    <div class="field mb-4">
      <label class="mb-1 inline-block pl-2 text-sm text-gray-700">{{ lang.sponsor_type_lbl }}</label>
      <div class="control">
        <div class="select w-full">
          <select
            v-model.trim="v$.pledge.sponsor_type_id.$model"
            class="input form-select w-full"
          >
            <option
              v-for="sponsor_type in $store.state.sponsor_types"
              :key="sponsor_type.id"
              :value="sponsor_type.id"
            >
              {{ sponsor_type.sponsor_type }}
            </option>
          </select>
        </div>
      </div>
      <p
        v-if="v$.pledge.sponsor_type_id.$error && focused === false"
        class="help is-danger"
      >
        {{ lang.sponsor_type_missing }}
      </p>
    </div>
    <!-- Pledge Type Input  -->
    <div class="mb-4 block">
      <label class="mb-1 inline-block pl-2 text-sm text-gray-700">{{ lang.pledge_type_lbl }}</label>
      <div class="control">
        <div
          ref="pledge_type"
          v-tooltip="editFieldTooltipOptions('pledge_type')"
          class="select w-full"
        >
          <select
            v-model.trim="v$.pledge.pledge_type_id.$model"
            :disabled="!canEditAmount()"
            class="input form-select w-full"
          >
            <option
              v-for="pledge_type in $store.state.pledge_types"
              :key="pledge_type.id"
              :value="pledge_type.id"
            >
              {{ pledge_type.long_name }}
            </option>
          </select>
        </div>
      </div>
      <p
        v-if="v$.pledge.pledge_type_id.$error && focused === false"
        class="help is-danger"
      >
        {{ lang.plege_type_missing }}
      </p>
    </div>
    <!-- Pledge Amount Input -->
    <div class="field mb-4">
      <label
        for="pledgeAmount"
        class="mb-1 inline-block pl-2 text-sm text-gray-700"
      >
        {{ lang.pledge_amount }}
      </label>
      <div
        ref="pledge_amount"
        v-tooltip="editFieldTooltipOptions('pledge_amount')"
        class="control has-icons-left"
      >
        <input
          id="pledgeAmount"
          v-model.trim="v$.pledge.amount.$model"
          :disabled="!canEditAmount()"
          :class="{
            'is-danger': false,
          }"
          type="text"
          name="pledge_amount"
          class="input form-input"
        >
        <span class="icon is-left">
          $
        </span>
      </div>
      <p
        v-if="v$.pledge.amount.$error && focused === false"
        class="help is-danger"
      >
        {{ lang.pledge_amount_invalid }}
      </p>
    </div>
    <!-- Estimated Pledge Total -->
    <div class="mb-8 text-center">
      <p
        class="text-center text-lg"
      >
        {{ isEstimated ? lang.estimated_total : lang.total }}
      </p>
      <p
        class="text-2xl font-bold"
      >
        {{ estimatedTotal }}
      </p>
    </div>

    <div
      v-if="errors"
      class="mb-6 text-center"
    >
      <p
        v-for="(error, index) in errors"
        :key="index"
        class="text-red"
      >
        {{ error }}
      </p>
    </div>
    <!-- Buttons -->
    <div class="px-8">
      <button
        :disabled="loading"
        type="submit"
        class="button is-secondary is-rounded is-fullwidth bg-secondary mb-3 border font-bold text-white shadow-md"
      >
        {{ lang.update_pledge }}
      </button>
      <button
        v-if="canDelete"
        :disabled="loading"
        class="button is-danger is-rounded is-fullwidth mb-3 border bg-red-700 font-bold text-white shadow-md"
        @click.prevent="openPledgeDeleteModal"
      >
        {{ lang.delete_pledge }}
      </button>
      <button
        :disabled="loading"
        class="button is-outlined is-rounded is-fullwidth mb-3 border bg-white font-bold text-gray-600 shadow-md"
        @click.prevent="close"
      >
        {{ lang.cancel }}
      </button>
    </div>
  </form>
</template>

<style lang="scss">
.tooltip.wide .tooltip-inner {
  max-width: 19.375rem;
}
</style>
