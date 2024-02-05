<script>
import BoosterActivityRewardActionButton from './ActivityRewardActionButton.vue'
import BoosterParticipantRewardsCard from '~/components/booster/participant/ParticipantRewardsCard.vue'

export default {
  components: {
    BoosterActivityRewardActionButton,
    BoosterParticipantRewardsCard,
  },
  props: {
    activity: {
      type: Object,
      default: () => {},
    },
    isEarned: {
      type: Boolean,
      default: false,
    },
    program: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    lang() {
      return this.$store.state.lang
    },
    headerText() {
      return this.parseLanguage(
        this.lang.activity_reward_action_header[this.activity.category],
        {
          needed: this.activity.amount_needed,
        },
      )
    },
    prizeBound() {
      return this.$store.getters.getActivityRewardPrizesBound(this.program, this.activity.id)
    },
    reward() {
      const prize = this.$store.getters.getPrize(this.prizeBound.prize_id)
      const prizeBoundStudent = this.$store.getters.getPrizesBoundToStudents(this.program.participants, this.prizeBound, [prize])
      return prizeBoundStudent
    },
    description() {
      if (this.isEarned && this.prizeBound) {
        return this.parseLanguage(
          this.lang.activity_reward_description_earned[this.activity.category],
          {
            prize: this.prizeBound.display_name,
          },
        )
      }

      return this.prizeBound.badge_description || this.parseLanguage(
        this.lang.activity_reward_description_unearned[this.activity.category],
        {
          prize: this.prizeBound.display_name,
          needed: this.activity.amount_needed,
        },
      )
    },
    buttonLabel() {
      return this.parseLanguage(
        this.lang.activity_reward_action_button[this.activity.category],
      )
    },
    hasVideo() {
      return this.program.participants.reduce((result, participant) => {
        const hasImage = !!participant.profile.image_name
        return result || hasImage
      }, false)
    },
  },
}
</script>

<template>
  <section>
    <div class="mb-4">
      <BoosterActivityRewardActionButton
        :category="activity.category"
        :header-text="headerText"
        :label="buttonLabel"
        :has-video="hasVideo"
        :special-urls="program.participants[0].special_urls"
        :program="program"
      />
    </div>

    <BoosterParticipantRewardsCard
      v-if="reward && reward.prize.picture"
      :reward="reward"
      :program="program"
      :is-full-width="true"
      :display-price="false"
    />

    <p class="mb-8 lg:text-lg">
      {{ description }}
    </p>
  </section>
</template>
