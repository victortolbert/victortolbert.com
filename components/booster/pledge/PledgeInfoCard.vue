<script>
import BoosterPledgeEditForm from '~/components/booster/pledge/PledgeEditForm.vue'
import BoosterToastModal from '~/components/booster/ToastModal.vue'
import BoosterFlipIcon from '~/components/booster/FlipIcon.vue'

export default {
  components: {
    BoosterFlipIcon,
  },
  props: {
    pledges: {
      type: Array,
      default: null,
    },
    program: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      flipped: false,
      statusClasses: {
        1: 'text-green',
        2: '',
        3: 'text-green',
        4: 'text-orange',
        5: 'text-green',
        6: 'text-green',
        7: 'text-green',
        8: 'text-green',
      },
      update: 1,
      canDeletePledgeStatuses: [
        2, // Confirmed
        4, // Pending
      ],
      nonDeniedOnlinePendingPaymentsStatuses: [
        1, // Pending
        2, // Processing
        3, // Paid
      ],
      PAID_STATUS_ID: 3,
      CONFIRMED_STATUS_ID: 2,
      PENDING_STATUS_ID: 4,
    }
  },
  computed: {
    lang() {
      return this.$store.state.lang
    },
    showAllStatuses() {
      const statuses = this.pledges.map((pledge) => {
        return pledge.pledge_status_id
      })
      const statusSet = new Set(statuses)
      return statusSet.size > 1
    },
    pledgeSponsor() {
      return this.familyPledges[0].pledge_sponsor || {}
    },
    date() {
      const date = new Date(this.pledges[0].ts_entered)
      return `${this.lang.pledges.months[date.getMonth()]} ${date.getDate()}`
    },
    pledgeTotal() {
      const totals = this.familyPledges.reduce(
        (totals, pledge) => {
          if (pledge.pledge_type_id === 1) {
            totals.low += Number.parseFloat(pledge.amount) * this.program.unit_range_low
            totals.high += Number.parseFloat(pledge.amount) * this.program.unit_range_high
          }
          else {
            totals.low += Number.parseFloat(pledge.amount)
            totals.high += Number.parseFloat(pledge.amount)
          }
          return totals
        },
        { low: 0, high: 0 },
      )
      let totalsString = currency(totals.low, true, '$')
      if (totals.low !== totals.high)
        totalsString += ` to ${currency(totals.high, true, '$')}`

      return totalsString
    },
    isMissingPayment() {
      const unPaidPledge = this.pledges.find((pledge) => {
        return pledge.hasPendingPayment === false && pledge.payment_id === null
      })
      return unPaidPledge !== undefined
    },
    familyPledges() {
      return this.update > 0 ? this.$store.getters.familyPledges(this.pledges, this.program) : []
    },
  },
  methods: {
    currency(val, addCommas, currencySymbol) {
      let value = Number.parseFloat(val)
      if (Math.floor(value) === value)
        value = value.toFixed(0)

      else
        value = value.toFixed(2)

      if (typeof (addCommas) !== 'undefined' && addCommas)
        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

      if (typeof (currencySymbol) !== 'undefined')
        value = currencySymbol + value

      return value
    },
    remind(pledgeId) {
      this.blur()
      this.showReminderEmailModal(pledgeId)
      this.gaEvent('Parent Dashboard', 'Pledges', 'Remind')
    },
    hasLaps() {
      return this.pledges[0].laps !== null && this.pledges[0].laps !== ''
    },
    isConfirmedWithLaps() {
      return this.pledges[0].pledge_status_id === this.CONFIRMED_STATUS_ID && this.hasLaps()
    },
    isPaidStatus() {
      return this.pledges[0].pledge_status_id === this.PAID_STATUS_ID
    },
    isNotSponsor() {
      return this.pledges[0].user_id !== this.$store.state.User.id
    },
    isPendingWithoutPayment() {
      return this.pledges[0].pledge_status_id === this.PENDING_STATUS_ID && !this.pledges[0].hasPendingPayment
    },
    canDelete() {
      if (this.isPaidStatus())
        return false

      if (this.isConfirmedWithLaps())
        return false

      if (this.isPendingWithoutPayment() && this.isNotSponsor())
        return false

      return true
    },
    edit(pledge) {
      this.gaEvent('Parent Dashboard', 'Pledges', 'Edit')
      this.$modal.open({
        parent: this,
        canCancel: ['escape', 'outside'],
        component: BoosterPledgeEditForm,
        hasModalCard: false,
        customClass: 'edit-pledge-modal',
        width: 375,
        onCancel: this.unBlur,
        props: {
          pledgeData: this.familyPledges,
          canDelete: this.canDelete(),
          program: this.program,
        },
        events: {
          close: (evt) => {
            this.unBlur()
          },
        },
      })
      this.blur()
      this.isEditing = false
    },
    blur() {
      document.getElementById('app').style.filter = 'blur(4px)'
    },
    unBlur() {
      this.update++
      this.$forceUpdate()
      document.getElementById('app').style.filter = 'none'
    },
    viewComment() {
      this.flip()
      this.gaEvent('Parent Dashboard', 'Pledges', 'View Comments')
    },
    flip() {
      this.flipped = !this.flipped
    },
    showReminderEmailModal(pledgeId) {
      document.querySelector('body').classList.add('modal-is-open')

      this.$modal.open({
        parent: this,
        component: PledgeReminderModal,
        props: {
          pledgeId,
        },
        hasModalCard: true,
        canCancel: ['escape', 'outside'],
        onCancel: () => {
          document.querySelector('body').classList.remove('modal-is-open')
          this.unBlur()
        },
      })
      this.blur()
    },
    isLastPledge(pledge) {
      return pledge === this.familyPledges.slice(-1)[0]
    },
    openDeleteCommentModal(pledge) {
      this.$modal.open({
        parent: this,
        component: ConfirmationModal,
        hasModalCard: true,
        canCancel: ['escape', 'outside'],
        onCancel: () => {
          this.unBlur()
        },
        props: {
          text: this.lang.delete_pledge_text,
          deleteText: this.lang.delete_comment,
        },
        events: {
          confirmed: () => {
            this.deleteComment(pledge)
          },
        },
      })
      this.blur()
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
          successMessage: this.lang.delete_comment_success,
          icon: ['fas', 'check'],
        },
      })
      this.blur()
    },
    deleteComment(updatedPledge) {
      axios.get(`/v3/pledges/${updatedPledge.id}/delete-comment`)
        .then((response) => {
          const pledges = this.pledges

          pledges.forEach((pledge) => {
            if (pledge.id === updatedPledge.id) {
              pledge.comment = null
            }
            else if (pledge.family_pledge_id) {
              if (pledge.family_pledge_id === updatedPledge.family_pledge_id)
                pledge.comment = null
            }
          })
          this.$store.dispatch('updatePledges', pledges)
          this.showToastModal()
          this.flip()
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>

<template>
  <div class="flip-card pledge-info-card max-w-full" :class="[{ flipped }]">
    <div class="flip-card-inner">
      <div
        class="flip-card-front h-full border border-b-2 border-gray-300 rounded-lg bg-white p-2 px-4 shadow-md"
      >
        <div class="mb-2 flex items-center">
          <div class="w-1/2">
            <div class="leading-none">
              <span
                :title="`${pledgeSponsor.first_name} ${pledgeSponsor.last_name}`"
                class="inline-block w-full truncate pr-4 text-lg font-semibold sm:pr-0"
              >{{ pledgeSponsor.first_name }} {{ pledgeSponsor.last_name }}</span>
              <br>
              <span class="has-text-grey text-2xs">{{ date }}</span>
            </div>
          </div>
          <div class="has-text-right w-1/2">
            <div class="flex justify-end">
              <a
                v-if="pledges[0].comment"
                class="has-text-grey ml-2 flex flex-col items-center"
                @click.prevent="viewComment"
              >
                <UIcon name="i-carbon-chat" />
                <div class="text-2xs whitespace-no-wrap capitalize">{{ lang.view_comment }}</div>
              </a>
              <a
                v-if="isMissingPayment"
                class="has-text-grey ml-2 flex flex-col items-center"
                @click.prevent="remind(pledges[0].id)"
              >
                <UIcon name="i-carbon-email" />
                <div class="text-2xs capitalize">{{ lang.remind }}</div>
              </a>
              <a
                class="has-text-grey ml-6 flex flex-col items-center"
                @click.prevent="edit"
              >
                <UIcon name="i-carbon-edit" />
                <div class="text-2xs capitalize">{{ lang.edit }}</div>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div
            v-for="(pledge) in familyPledges"
            :key="pledge.id + update"
            class="text-sm"
          >
            <div class="flex justify-between border-b-2">
              <div>{{ pledge.participant.first_name }}</div>
              <div>
                ${{ pledge.amount }}
                <span
                  v-if="pledge.pledge_type_id === 1"
                >{{ program.unit.modifier }} {{ program.unit.name }}</span>
              </div>
            </div>
            <div
              v-if="showAllStatuses || isLastPledge(pledge)"
              class="flex items-baseline justify-between"
            >
              <span
                :class="[statusClasses[pledge.pledge_status_id]]"
                class="font-bold capitalize"
              >{{ lang.statuses[pledge.pledge_status_id] }}</span>
              <div
                v-if="isLastPledge(pledge)"
                class="text-base"
              >
                {{ lang.total }}
                <span class="font-bold">{{ pledgeTotal }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flip-card-back flex flex-col border border-b-2 border-gray-300 rounded-lg bg-white p-2 px-4 align-middle shadow-md"
      >
        <div class="mb-2 flex items-center">
          <div class="w-1/2">
            <div class="leading-none">
              <span
                class="font-semibold"
              >{{ pledgeSponsor.first_name }} {{ pledgeSponsor.last_name }}</span>
            </div>
          </div>
          <div class="has-text-right w-1/2">
            <div class="flex justify-end">
              <a
                class="has-text-grey ml-6 flex flex-col items-center"
                @click.prevent="openDeleteCommentModal(pledges[0])"
              >
                <UIcon
                  v-tooltip="lang.delete_comment"
                  name="i-carbon-trash-can"
                />
              </a>
              <a
                v-tooltip="lang.go_back"
                class="has-text-grey ml-6 flex flex-col items-center"
                @click.prevent="flip"
              >
                <BoosterFlipIcon style="width: 14px" />
              </a>
            </div>
          </div>
        </div>
        <p class="flex flex-1 items-center justify-center p-4">
          <span
            v-if="pledges[0].comment"
            class="text-center"
          >
            “{{ pledges[0].comment }}”
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.pledge-info-card {
  width: 24rem;
}

.flip-card {
  background-color: transparent;
  perspective: 1000px;

  .table th,
  .table td {
    padding: 0.25rem 0;
  }
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card.flipped .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front {
  position: relative;
  backface-visibility: hidden;
}

.flip-card-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}

.edit-pledge-modal .modal-content {
  @apply shadow-lg;
}
</style>
