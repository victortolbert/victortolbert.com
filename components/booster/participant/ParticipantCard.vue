<script>
import BoosterAvatarImage from '~/components/booster/AvatarImage.vue'
import BoosterProgressMeter from '~/components/booster/ProgressMeter.vue'
import PledgeTotalCalculator from '~/utils/PledgeTotalCalculator'

export default {
  components: {
    BoosterAvatarImage,
    BoosterProgressMeter,
  },
  props: {
    program: {
      type: Object,
      default: () => ({
        program_pledge_setting: {
          flat_donate_only: 0,
        },
        unit: {
          per: null,
          modifier: null,
        },
        unit_flat_conversion: null,
      }),
    },
    participant: {
      type: Object,
      default: null,
    },
    selected: {
      type: Number,
      default: 0,
    },
    group: {
      type: Number,
      default: 0,
    },
  },
  emits: ['toggle'],

  data() {
    return {
      pledgeStatuses: [
        {
          name: 'confirmed',
          id: 2,
        },
        {
          name: 'paid',
          id: 3,
        },
        {
          name: 'pending',
          id: 4,
        },
        {
          name: 'paymentScheduled',
          id: 8,
        },
      ],
    }
  },

  computed: {
    lang() {
      return this.$store.state.lang
    },
    avatarSrc() {
      return this.participant.profile.image_name == null ? '/booster/assets/images/dashboard-avatar.svg' : this.avatarImgSrc
    },
    avatarImgSrc() {
      return this.$store.getters.avatarPath + this.participant.profile.image_name
    },
    editProfileLink() {
      return `/v3/tkdashboard/?redirect=${encodeURI(`auth/login/${this.participant.fr_code}/edit-personalize`)}`
    },
    isFlat() {
      return this.program.program_pledge_setting.flat_donate_only === 1
    },
    hasRewards() {
      return this.participant.prizes && this.participant.prizes.length > 0
    },
    totalPending() {
      const statusNames = ['pending']
      const statusIds = this.pledgeStatuses
        .filter(status => statusNames.includes(status.name))
        .map(status => status.id)
      const value = this.participant.participant_info.pledges
        .filter(pledge => statusIds.includes(pledge.pledge_status_id))
        .reduce((total, pledge) => total + pledge.amount, 0)

      return Number.parseFloat(value)
    },
    totalPledged() {
      const statusNames = ['confirmed', 'paid', 'paymentScheduled']
      const statusIds = this.pledgeStatuses
        .filter(status => statusNames.includes(status.name))
        .map(status => status.id)
      return Number.parseFloat(this.getPledgeTotal(statusIds))
    },
    hasTotalPending() {
      return this.totalPending > 0
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
    getPledgeTotal(statusIds) {
      if (this.program.unit_flat_conversion <= 0)
        return 0

      if (this.isFlat) {
        return this.participant.participant_info.pledges
          .filter(pledge => statusIds.includes(pledge.pledge_status_id))
          .reduce((total, pledge) => total + pledge.amount, 0)
      }
      const calculator = new PledgeTotalCalculator(this.program, this.participant.participant_info.pledges)
      return calculator.getTotalAsPPL()
    },
    editParticipant(participant) {
      this.$router.push({
        name: 'edit-participant',
        params: {
          id: participant.id,
        },
      })
    },
  },
}
</script>

<template>
  <div class="participant-card m-4 max-w-xl">
    <div>
      <div class="media relative mb-2 lg:px-4">
        <div class="media-left">
          <a @click="editParticipant(participant)">
            <BoosterAvatarImage
              :alt="participant.first_name"
              :src="avatarSrc"
            />
          </a>
        </div>
        <div class="media-content self-center">
          <h2 class="mr-2 inline-block text-xl">
            {{ participant.first_name }}
          </h2>
          <a @click="editParticipant(participant)">
            <UIcon
              name="i-carbon-edit"
              class="edit-icon"
            />
          </a>
        </div>
      </div>
    </div>
    <section class="lg:px-4">
      <div
        class="is-block mb-4"
      >
        <BoosterProgressMeter
          :first-meter="totalPledged"
          :second-meter="totalPending"
          :goal="participant.profile.pledge_goal"
        />

        <div class="mt-2">
          <div class="flex items-center justify-between">
            <h3 class="flex items-center font-bold">
              <svg
                class="text-primary mr-1 h-4 w-4 fill-current"
                viewBox="0 0 16 16"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                />
              </svg>
              <span>
                {{ lang.participant_card.total_pledged }} ${{ currency(totalPledged) }} {{ lang.participant_card.of }} ${{ currency(participant.profile.pledge_goal) }}
              </span>
            </h3>
            <div
              v-if="isFlat && !hasTotalPending"
              class="flex items-center justify-between"
            >
              <a
                class="text-sm font-semibold underline"
                @click="$emit('toggle', participant.id)"
              >
                {{ selected === participant.id ? lang.close : lang.view }} {{ lang.rewards }}
              </a>
            </div>
          </div>
          <div
            v-if="!isFlat && !hasTotalPending"
            class="flex items-center justify-between"
          >
            <h4
              class="inline-block text-sm capitalize"
            >
              {{ program.unit.modifier }} {{ program.unit.name }}
            </h4>
            <a
              class="text-sm font-semibold underline"
              @click="$emit('toggle', participant.id)"
            >
              {{ selected === participant.id ? lang.close : lang.view }} {{ lang.rewards }}
            </a>
          </div>
        </div>
        <div
          v-if="hasTotalPending"
          class="mt-2"
        >
          <div class="flex items-center justify-between">
            <h3 class="flex items-center font-bold">
              <svg
                class="text-tertiary mr-1 h-4 w-4 fill-current"
                viewBox="0 0 16 16"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                />
              </svg>
              <span>
                {{ lang.participant_card.awaiting_confirmation }} ${{ currency(totalPending) }}
              </span>
            </h3>
          </div>
          <div class="flex items-center justify-between">
            <h4
              v-if="!isFlat"
              class="inline-block text-sm capitalize"
            >
              {{ program.unit.modifier }} {{ program.unit.name }}
            </h4>
            <a
              class="text-sm font-semibold underline"
              @click="$emit('toggle', participant.id)"
            >
              {{ selected === participant.id ? lang.close : lang.view }} {{ lang.rewards }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.edit-icon {
  color: #979797;
}
</style>
