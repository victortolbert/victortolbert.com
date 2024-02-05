<script>
import BoosterParticipantRewardsCard from '~/components/booster/participant/ParticipantRewardsCard.vue'
import BoosterTeacherIncentives from '~/components/booster/TeacherIncentives.vue'
import PledgeTotalCalculator from '~/utils/PledgeTotalCalculator'
import { STATUS_CONFIRMED, STATUS_PAID, STATUS_PAYMENT_SCHEDULED, STATUS_PENDING } from '~/store/modules/pledge.js'

export default {
  components: {
    BoosterParticipantRewardsCard,
    BoosterTeacherIncentives,
  },
  props: {
    program: {
      type: Object,
      default: null,
    },
    participant: {
      type: Object,
      default: null,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      viewMore: false,
    }
  },
  computed: {
    lang() {
      return this.$store.state.lang
    },
    shouldDisplayIncentives() {
      if (this.$store.state.User.is_teacher_user && !this.program.hide_teacher_incentives)
        return this.isTeacherInProgram

      return false
    },
    isTeacherInProgram() {
      return this.program.participants.some((participant) => {
        return this.$store.state.User.teacher_participant_ids.includes(participant.id)
      })
    },
    rewards() {
      let combinedPrizeObjects = this.getCombinedPrizeObjects()
      combinedPrizeObjects = this.filterPrizesForDisplay(combinedPrizeObjects)
      combinedPrizeObjects = this.sortPrizesForDisplay(combinedPrizeObjects)
      return combinedPrizeObjects
    },
    topRewards() {
      return this.rewards.slice(0, 4)
    },
    remainingRewards() {
      return this.rewards.slice(4)
    },
    sumPledgesFlat() {
      const calculator = new PledgeTotalCalculator(this.program, this.participant.participant_info.pledges, [
        STATUS_CONFIRMED,
        STATUS_PAID,
        STATUS_PAYMENT_SCHEDULED,
        STATUS_PENDING,
      ])
      return calculator.getTotalAsFlat()
    },
  },
  methods: {
    sortPrizesForDisplay(combinedPrizeObjects) {
      return combinedPrizeObjects.sort((a, b) => {
        return a.prizeBound.display_amount - b.prizeBound.display_amount
      })
    },
    filterPrizesForDisplay(combinedPrizeObjects) {
      return combinedPrizeObjects.filter((prizeBoundStudent) => {
        const isNotActivityReward = prizeBoundStudent.prizeBound.activity_reward === null
        const hasNoPeriod = prizeBoundStudent.prizeBound.starts_at === null
          && prizeBoundStudent.prizeBound.ends_at === null
        const isNotQuantity = prizeBoundStudent.prizeBound.quantity === null
        let isInPeriod = false
        let isDisplayableStatus = true
        const displayableStatuses = [
          'giveaway',
          'delivered',
          'pending',
        ]
        if (!hasNoPeriod) {
          isInPeriod = new Date(prizeBoundStudent.prizeBound.starts_at) < new Date()
          && new Date(prizeBoundStudent.prizeBound.ends_at) > new Date()
          isDisplayableStatus = displayableStatuses.includes(prizeBoundStudent.status)
        }

        return (isNotActivityReward && (hasNoPeriod || isInPeriod || isDisplayableStatus) && isNotQuantity)
      })
    },
    getCombinedPrizeObjects() {
      const prizeBoundStudents = this.participant.participant_info.prize_bound_students
      const prizesBound = this.participant.participant_info.classroom.group.prizes_bound.reduce((prizesBound, prizeBound) => {
        prizesBound[prizeBound.prize_id] = prizeBound
        return prizesBound
      }, {})
      const prizes = this.participant.prizes.reduce((prizes, prize) => {
        prizes[prize.id] = prize
        return prizes
      }, {})
      return prizeBoundStudents.map((prizeBoundStudent) => {
        prizeBoundStudent.prizeBound = prizesBound[prizeBoundStudent.prize_id]
        prizeBoundStudent.prize = prizes[prizeBoundStudent.prize_id]
        return prizeBoundStudent
      })
    },
    toggleRewards(id) {
      this.$parent.toggleParticipant(id)
    },
    toggleViewMore() {
      if (this.viewMore) {
        this.viewMore = false
        this.scrollTo()
      }
      else {
        this.viewMore = true
      }
    },
    scrollTo() {
      setTimeout(() => {
        $('html, body').animate({
          scrollTop: 0,
        }, 300)
      }, 310)
    },
  },
}
</script>

<template>
  <section class="participant-rewards">
    <Transition name="fade">
      <article
        v-if="show"
        class="py-8"
      >
        <a
          class="float-right text-2xl text-black"
          @click="toggleRewards(participant.id)"
        >
          <i class="fal fa-times" />
        </a>
        <h1 class="text-2xl font-bold">
          {{ lang.rewards }}
        </h1>
        <h2
          v-if="program.program_pledge_setting.flat_donate_only === '0'"
          class="mb-4"
        >
          ${{ program.unit_flat_conversion }} {{ lang.flat_donation }} = $1 {{ program.unit.modifier }} {{ program.unit.name }}
        </h2>

        <BoosterTeacherIncentives v-if="shouldDisplayIncentives" />

        <!-- Shown when greater than small, hidden when small -->
        <div class="mb-4 hidden sm:block">
          <BoosterParticipantRewardsCard
            v-for="reward in rewards"
            :key="reward.id"
            :reward="reward"
            :program="program"
            :sum-pledges-flat="sumPledgesFlat"
          />
        </div>

        <!-- Shown when small, hidden when greater than small -->
        <div class="mb-4 sm:hidden">
          <BoosterParticipantRewardsCard
            v-for="reward in topRewards"
            :key="reward.id"
            :reward="reward"
            :program="program"
            :sum-pledges-flat="sumPledgesFlat"
          />

          <BoosterParticipantRewardsCard
            v-for="reward in remainingRewards"
            :key="reward.id"
            :reward="reward"
            :program="program"
            :sum-pledges-flat="sumPledgesFlat"
            :class="[viewMore ? '' : 'hidden']"
          />
        </div>

        <div class="border-grey mb-6 pb-4 text-center sm:hidden">
          <a
            class="text-blue hover:text-blue-400"
            @click="toggleViewMore"
          >
            {{ lang.view }} {{ viewMore ? lang.less : lang.more }}
          </a>
        </div>

        <div class="flex items-center justify-center border-b pb-6 lg:border-none">
          <button
            class="focus:shadow-outline bg-secondary rounded-full px-8 py-2 text-sm font-semibold text-white shadow focus:outline-none"
            @click="toggleRewards(participant.id)"
          >
            <span>{{ lang.close }} {{ lang.rewards }}</span>
          </button>
        </div>
      </article>
    </Transition>
  </section>
</template>

<style lang="scss" scoped>
.card-container:focus {
  outline: none;
}
.image {
  position: relative;
}

img {
  display: block;
  width: 100%;
  height: auto;
  &.is-variant {
    opacity: 1;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }
}

.play-icon {
  transition: 0.5s ease;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
