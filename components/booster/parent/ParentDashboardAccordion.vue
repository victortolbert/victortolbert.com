<script>
import BoosterAccordion from '~/components/booster/Accordion.vue'
import BoosterProgramOverview from '~/components/booster/program/ProgramOverview.vue'
import BoosterSchoolGoalAndStats from '~/components/booster/SchoolGoalAndStats.vue'
import BoosterHowToGetPledges from '~/components/booster/HowToGetPledges.vue'
import BoosterStudentStarVideo from '~/components/booster/StudentStarVideo.vue'
import BoosterPledgeInfo from '~/components/booster/pledge/PledgeInfo.vue'
import BoosterBusinessLeaderboard from '~/components/booster/BusinessLeaderboard.vue'

export default {
  components: {
    BoosterAccordion,
    BoosterProgramOverview,
    BoosterSchoolGoalAndStats,
    BoosterHowToGetPledges,
    BoosterStudentStarVideo,
    BoosterPledgeInfo,
    BoosterBusinessLeaderboard,
  },
  props: {
    program: {
      type: Object,
      default: null,
    },
  },
  data() {
    let items = [
      {
        name: 'BoosterProgramOverview',
        title: 'Program Overview',
        isOpen: false,
      },
      {
        name: 'BoosterSchoolGoalAndStats',
        title: 'School Goal and Stats',
        isOpen: false,
      },
      {
        name: 'BoosterStudentStarVideo',
        title: this.studentStarVideoTitle(),
        isOpen: false,
      },
      {
        name: 'BoosterHowToGetPledges',
        title: 'How To Get Pledges',
        isOpen: false,
      },
      {
        name: 'BoosterPledgeInfo',
        title: this.pledgeInfoTitle(),
        isOpen: false,
      },
      {
        name: 'BoosterBusinessLeaderboard',
        title: 'Business Leaderboard',
        isOpen: true,
      },
    ]
    if (this.program.ssv_disabled)
      items = items.filter(item => item.name !== 'BoosterStudentStarVideo')

    return {
      items,
    }
  },
  methods: {
    pledgeInfoTitle() {
      let title = 'Pledges'
      if (this.pledgesCount())
        title += ` (${this.pledgesCount()})`

      return title
    },
    pledgesCount() {
      return new Set(this.program.participants
        .map(participant => participant.participant_info.pledges.map(pledge => pledge.family_pledge_id || pledge.id))
        .flat(1)).size
    },
    studentStarVideoTitle() {
      return this.program.participants
        .find(participant => participant.profile.image_name !== null)
        ? 'Share Student Star Video'
        : 'Create Student Star Video'
    },
  },
}
</script>

<template>
  <div>
    <BoosterAccordion
      v-for="(item, index) in items"
      :key="index"
      :is-open="item.isOpen"
      :title="item.title"
      :should-reslick="true"
    >
      <template #default>
        <Component
          :is="item.name"
          :program="program"
        />
      </template>
    </BoosterAccordion>
  </div>
</template>
