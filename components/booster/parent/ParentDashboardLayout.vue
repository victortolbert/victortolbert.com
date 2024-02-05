<script>
import chunk from 'lodash/chunk'
import { mapGetters } from 'vuex'
import BoosterBetaBanner from '~/components/booster/BetaBanner.vue'
import BoosterEventInfo from '~/components/booster/event/EventInfo.vue'
import BoosterParentDashboardAccordion from '~/components/booster/parent/ParentDashboardAccordion.vue'

import BoosterParticipantCard from '~/components/booster/participant/ParticipantCard.vue'
import BoosterParticipantGroup from '~/components/booster/participant/ParticipantGroup.vue'
import BoosterParticipantRewards from '~/components/booster/participant/ParticipantRewards.vue'

import BoosterPledgeButton from '~/components/booster/pledge/PledgeButton.vue'
import BoosterShareModalButton from '~/components/booster/share/ShareModalButton.vue'

import BoosterSponsorLogos from '~/components/booster/SponsorLogos.vue'
import BoosterActivityRewards from '~/components/booster/activity/ActivityRewards.vue'
import BoosterBottomFloatBar from '~/components/booster/BottomFloatBar.vue'

export default {
  name: 'ParentDashboardLayout',
  release: '1.0.0',
  components: {
    BoosterBetaBanner,
    BoosterEventInfo,
    BoosterParentDashboardAccordion,
    BoosterParticipantCard,
    BoosterParticipantGroup,
    BoosterParticipantRewards,
    BoosterPledgeButton,
    BoosterSponsorLogos,
    BoosterActivityRewards,
    BoosterShareModalButton,
    BoosterBottomFloatBar,
  },
  props: {
    program: {
      type: Object,
      default: undefined,
    },
  },
  data() {
    return {
      enableActivityRewards: true,
      selected: null,
    }
  },
  computed: {
    ...mapGetters({
      isFeatureEnabled: 'systemControl/isEnabled',
    }),
    lang() {
      return this.$store.state.lang
    },
    betaBannerKillSwitch() {
      return this.$store.state.beta_banner_kill_switch
    },
    participants() {
      return this.program.participants
    },
    participantGroups() {
      return chunk(this.program.participants, 2)
    },
    eligibleRewards() {
      return this.$store.getters.getEligibleUserActivitiesForProgram(this.program)
    },
    eligibleRewardsWithoutSMS() {
      return this.$store.getters.getEligibleUserActivitiesForProgramWithoutSMS(this.program)
    },
    hasPreviousSponsors() {
      return this.$store.getters.getPreviousSponsors.length > 0
    },
  },
  methods: {
    toggleParticipant(id) {
      if (this.selected !== id)
        this.selected = id
      else
        this.selected = null
    },
    enterScreen() {
      this.$store.state.shareButtonsOnScreen = true
    },
    leaveScreen() {
      this.$store.state.shareButtonsOnScreen = false
    },
  },
}
</script>

<template>
  <div class="max-w-xl container">
    <BoosterBetaBanner v-if="!betaBannerKillSwitch" />

    <!-- Mobile (desktop hidden) -->
    <BoosterEventInfo
      :fun-run="program.fun_run"
      class="mb-4 flex justify-between px-6 lg:hidden"
    />

    <!-- Mobile (desktop hidden) -->
    <div class="mx-4 mb-8 border rounded-lg shadow-md lg:hidden">
      <div class="mobile-cards flex-wrap lg:flex">
        <div
          v-for="(participant, index) in participants"
          :key="index"
          class="lg:w-1/2"
        >
          <BoosterParticipantCard
            :participant="participant"
            :program="program"
            :selected="selected"
            @toggle="toggleParticipant($event)"
          />
          <div class="px-4 lg:px-8">
            <BoosterParticipantRewards
              :program="program"
              :participant="participant"
              :show="selected === participant.id"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Desktop (mobile hidden) -->
    <div class="hidden lg:block">
      <div
        v-for="(participantGroup, index) in participantGroups"
        :key="index"
        class="mb-8 overflow-hidden border rounded-lg shadow-md"
      >
        <BoosterParticipantGroup
          :program="program"
          :participant-group="participantGroup"
          :has-only-one-participant="participants.length === 1"
        />
      </div>
    </div>

    <!-- Shown on both Mobile and Desktop -->
    <!-- <intersect
      @enter="enterScreen()"
      @leave="leaveScreen()"
    >
      <div class="mx-auto mb-8 max-w-sm px-8">
        <BoosterPledgeButton :participants="participants" />
        <BoosterShareModalButton
          :program="program"
          class="m-2"
        />
      </div>
    </intersect>

    <BoosterActivityRewards
      v-if="eligibleRewards.length > 0"
      :program="program"
      :user-activities="eligibleRewards"
      class="mx-4 mb-8 lg:hidden"
      data-test-id="eligible-rewards"
    />

    <BoosterActivityRewards
      v-if="eligibleRewardsWithoutSMS.length > 0"
      :program="program"
      :user-activities="eligibleRewardsWithoutSMS"
      class="mx-4 mb-8 hidden lg:block"
      data-test-id="eligible-rewards-without-SMS"
    /> -->

    <!-- <BoosterParentDashboardAccordion :program="program" /> -->

    <!-- <div
      v-if="program.display_sponsor_logos_on_home_dashboard && program.sponsor_logos.length > 0"
      class="mx-4 mx-auto mb-8 p-8 lg:w-1/2"
    >
      <div class="mx-auto max-w-sm text-center lg:max-w-lg">
        <h2 class="text-xl font-semibold">
          {{ lang.thank_sponsors }}
        </h2>
        <BoosterSponsorLogos
          :program="program"
        />
      </div>
    </div> -->
    <BoosterBottomFloatBar
      v-if="isFeatureEnabled('bottom_float_bar')"
      :program="program"
    />
  </div>
</template>

<style>
    .mobile-cards > :last-child .button-container {
  border-bottom: none;
}

.banner_dashboard {
  padding: 0 0 2rem 0;
  text-align: center;
  font-family: sans-serif;
  max-width: 80%;
}
.banner_dashboard a {
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  line-height: 1;
  text-decoration: none;
}
.banner_dashboard .message {
  flex: 1 1 auto;
  text-left: left;
  font-weight: 600;
}
</style>
