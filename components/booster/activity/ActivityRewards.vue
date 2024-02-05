<script>
import BoosterActivityRewardsHeader from './ActivityRewardsHeader.vue'
import BoosterActivityRewardAction from './ActivityRewardAction.vue'
import BoosterActivityRewardSelect from './ActivityRewardSelect.vue'

export default {
  components: {
    BoosterActivityRewardsHeader,
    BoosterActivityRewardSelect,
    BoosterActivityRewardAction,
  },
  props: {
    program: {
      type: Object,
      default: null,
    },
    userActivities: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedId: null,
      confettiFired: false,
    }
  },
  computed: {
    earnedUserActivitiesCount() {
      return this.earnedUserActivities.length
    },
    earnedUserActivities() {
      return this.userActivities.filter((activity) => {
        return this.isEarned(activity)
      }) || []
    },
    userActivityHistories() {
      let allUserActivityHistories = []
      this.program.participants.forEach((participant) => {
        allUserActivityHistories = allUserActivityHistories.concat(participant.user_activity_history)
      })
      return allUserActivityHistories
    },
  },
  mounted() {
    this.setInitialSelected()
  },
  methods: {
    select(selected) {
      this.selectedId = selected.id
    },
    firstUnearned() {
      return this.userActivities.find(this.isUnearned)
    },
    firstUnearnedOrFirst() {
      return this.firstUnearned() || this.userActivities[0]
    },
    setInitialSelected() {
      if (this.userActivities && this.userActivities.length > 0)
        this.select(this.firstUnearnedOrFirst())
    },
    isEarned(activity) {
      return this.userActivityHistories.some((userActivityHistory) => {
        return userActivityHistory.activity_id === activity.id
      })
    },
    isUnearned(activity) {
      return !this.isEarned(activity)
    },
    handleConfetti() {
      const isEligableForConfetti = this.earnedUserActivitiesCount >= this.userActivities.length
      if (!this.confettiFired && isEligableForConfetti) {
        const confetti = this.$confetti
        confetti.start({
          shape: 'rect',
        })

        setTimeout(() => {
          confetti.stop()
        }, 3000)
        this.confettiFired = true
      }
    },
  },
}
</script>

<template>
  <section class="border rounded-lg p-4 pb-0 shadow-md">
    <BoosterActivityRewardsHeader
      :earned="earnedUserActivitiesCount"
      :total="userActivities.length"
      class="mb-4"
    />

    <div class="mx-auto mb-4 max-w-sm w-full flex flex-wrap items-center justify-center">
      <BoosterActivityRewardSelect
        v-for="activity in userActivities"
        :key="activity.id"
        :activity="activity"
        :has-badge="isEarned(activity)"
        :class="{ 'border-blue-dark': selectedId === activity.id }"
        @selected="select"
      />
    </div>

    <intersect
      @enter="handleConfetti()"
    >
      <footer class="mx-auto mb-8 max-w-xs">
        <BoosterActivityRewardAction
          v-for="activity in userActivities"
          v-show="selectedId === activity.id"
          :key="activity.id"
          :activity="activity"
          :is-earned="isEarned(activity)"
          :program="program"
          class="mb-8"
        />
      </footer>
    </intersect>
  </section>
</template>
