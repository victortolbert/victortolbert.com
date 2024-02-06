<script>
// import { Carousel, Slide } from 'vue-carousel'
import { Carousel, Slide } from '@jambonn/vue-concise-carousel'
import '@jambonn/vue-concise-carousel/lib/vue-concise-carousel.css'

import axios from 'axios'
import { mapState } from 'vuex'
import { chunk } from 'lodash-es'

import BoosterProgressMeter from '~/components/booster/ProgressMeter.vue'
import BoosterRingChart from '~/components/booster/RingChart.vue'
import BoosterPledgesByState from '~/components/booster/pledge/PledgesByState.vue'
import tailwindConfig from '~/tailwind.config'

export default {
  components: {
    Carousel,
    Slide,
    BoosterProgressMeter,
    BoosterRingChart,
    BoosterPledgesByState,
  },
  props: {
    program: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      progressPercentage: 100,
      paginationNonActiveColor: tailwindConfig.colors['gray-300'],
      paginationActiveColor: tailwindConfig.colors['gray-400est'],
      isProgressPercentageSet: false,
      classroomChunks: [],
      classroomsPerSlide: 5,
      classroomGoal: 0,
    }
  },
  computed: {
    ...mapState(['lang']),
    hasGoalBeenMet() {
      return this.progressPercentage >= 100
    },
  },
  created() {
    if (this.program.total_raised_goal !== 0)
      this.updateProgressPercentage()
    else
      this.isProgressPercentageSet = true

    axios.get(`/v3/api/programs/classroom-pledge-totals/${this.program.id}`)
      .then((response) => {
        if (response.data.length && typeof (response.data[0].pledgeTotal) === 'string')
          this.classroomGoal = response.data[0].pledgeTotal

        if (Array.isArray(response.data))
          this.classroomChunks = this.getClassroomChunks(this.program.participants, response.data)
      })
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
    getClassroomChunks(participants, classrooms) {
      const userClassrooms = []
      const nonUserClassrooms = []
      const alreadyUsedClassroomIds = []
      const userClassroomIds = []

      // Assign user classrooms
      participants.forEach((participant) => {
        classrooms.forEach((classroom) => {
          if (!alreadyUsedClassroomIds.includes(classroom.id) && participant.participant_info.classroom_id === classroom.id) {
            classroom.color = 'secondary'
            classroom.isParticipantClassroom = true

            userClassroomIds.push(classroom.id)
            userClassrooms.push(classroom)
            alreadyUsedClassroomIds.push(classroom.id)
          }
        })
      })

      // Sort user classrooms
      userClassrooms.sort(this.sortByTotalAndName)

      // Assign non-user classrooms
      classrooms.forEach((classroom) => {
        if (userClassroomIds.includes(classroom.id))
          classroom = Object.assign({}, classroom)

        classroom.color = 'primary'
        classroom.isParticipantClassroom = false

        nonUserClassrooms.push(classroom)
      })

      // Sort non user classrooms
      nonUserClassrooms.sort(this.sortByTotalAndName)

      return chunk(userClassrooms.concat(nonUserClassrooms), this.classroomsPerSlide)
    },
    sortByTotalAndName(classroomA, classroomB) {
      const classroomATotal = classroomA.pledgeTotal ? Number.parseFloat(classroomA.pledgeTotal) : 0
      const classroomBTotal = classroomB.pledgeTotal ? Number.parseFloat(classroomB.pledgeTotal) : 0

      if (classroomATotal < classroomBTotal) {
        return 1
      }
      else if (classroomATotal === classroomBTotal) {
        const classAName = classroomA.name.toLowerCase().replace('ms.', 'mr.', 'mrs.') + classroomA.gradeText
        const classBName = classroomB.name.toLowerCase().replace('ms.', 'mr.', 'mrs.') + classroomB.gradeText
        return (classAName > classBName) ? 1 : -1
      }
      else {
        return -1
      }
    },
    getGradeText(classroom) {
      return (classroom.gradeText === '' ? '' : ` - ${classroom.gradeText}`)
    },
    getPledgeTotalForDisplay(classroom) {
      if (classroom.pledgeTotal)
        return currency(Math.ceil(classroom.pledgeTotal), true, this.lang.currency_symbol)

      return `${this.lang.currency_symbol}0`
    },
    toPercentageValue(numerator, denominator = this.program.total_raised_goal) {
      return Number.parseInt(numerator / denominator * 100)
    },
    updateProgressPercentage() {
      axios.get(`/v3/api/programs-total-pledged/${this.program.id}`)
        .then((response) => {
          this.progressPercentage = this.toPercentageValue(response.data)
          this.isProgressPercentageSet = true
        })
    },
  },
}
</script>

<template>
  <div class="school-goals-and-stats">
    <div
      v-if="isProgressPercentageSet"
      class="mb-4 md:flex md:flex-row-reverse md:border-b-2"
    >
      <div class="mb-4 text-center md:w-1/2">
        <Carousel
          v-if="$parent.isOpen && program.microsite.images.length"
          :autoplay="true"
          :loop="true"
          :autoplay-timeout="3000"
          :speed="500"
          :per-page="1"
          :center-mode="true"
          :pagination-active-color="paginationActiveColor"
          :pagination-color="paginationNonActiveColor"
          :pagination-padding="6"
          class="elevation-1 relative mb-8 w-full rounded p-4 lg:order-last"
        >
          <Slide
            v-for="(image, index) in program.microsite.images"
            :key="index"
            :data-index="index"
            data-name="MySlideName"
          >
            <figure class="relative aspect-ratio-16/9 w-full">
              <img
                :src="image"
                class="pin absolute h-full w-full object-contain"
              >
            </figure>
          </Slide>
        </Carousel>
      </div>
      <div
        class="flex items-center justify-between md:mb-4 md:w-1/2 md:pr-6"
      >
        <div class="w-2/3 px-4 md:p-4" :class="[hasGoalBeenMet ? 'mx-auto' : '']">
          <h2
            v-if="!hasGoalBeenMet"
            class="is-paddingless is-marginless text-xl"
          >
            {{ lang.total_goal_amt }}
          </h2>
          <h3
            v-if="!hasGoalBeenMet"
            class="is-paddingless is-marginless text-3xl font-semibold"
          >
            ${{ currency(program.client_goal) }}
          </h3>
          <p
            v-if="program.microsite.funds_raised_for"
            class="mb-6 hidden md:block" :class="[hasGoalBeenMet ? 'text-2xl text-center' : 'text-lg']"
          >
            {{ lang.funds_raised_for }} {{ program.microsite.funds_raised_for.replace(/[.!]$/g, '!') }}
          </p>
        </div>
        <div class="md:p-4">
          <BoosterRingChart
            v-if="!hasGoalBeenMet"
            :value="progressPercentage"
            class="h-32 w-32 md:h-64 md:w-64"
          />
        </div>
      </div>
      <div class="mb-6 block px-4 text-xl md:hidden" :class="[hasGoalBeenMet ? 'mt-3 text-center' : '']">
        {{ lang.funds_raised_for }} {{ program.microsite.funds_raised_for.replace(/[.!]$/g, '!') }}
      </div>
    </div>
    <div class="pb-4 md:flex">
      <div class="md:w-1/2 md:border-r-2 md:p-4">
        <header class="px-4">
          <h2 class="text-xl font-bold">
            {{ lang.pledge_o_meter }}
          </h2>
          <p class="mb-0 text-sm">
            {{ lang.currency_symbol }}{{ program.unit_flat_conversion }}
            {{ lang.flat_conversion }}
            {{ lang.currency_symbol }}1
            {{ lang.per }}
            {{ program.unit.name }}
          </p>
          <p
            v-if="program.program_pledge_setting.flat_donate_only === 1"
            class="mb-4 text-sm"
          >
            {{ lang.all_team_values_flat }}
          </p>
          <p
            v-if="program.program_pledge_setting.flat_donate_only !== 1"
            class="mb-4 text-sm"
          >
            {{ lang.all_team_values_not_flat }} {{ program.unit.name }}
          </p>
        </header>
        <div class="mb-16 p-0 md:mb-0">
          <div class="mb-4 px-4">
            <Carousel
              v-if="$parent.isOpen && classroomChunks.length > 0"
              :per-page="1"
              :speed="500"
              :navigation-enabled="true"
              :center-mode="true"
              :pagination-padding="6"
              navigation-prev-label="<i class='fas fa-chevron-left'></i>"
              navigation-next-label="<i class='fas fa-chevron-right'></i>"
              class="pledge-o-meter-carousel relative mx-auto mb-8 mt-2 w-full content-center lg:order-last md:p-4"
            >
              <Slide
                v-for="(classroomChunk, key) in classroomChunks"
                :key="key"
                :data-index="key"
                data-name="Pledge-O-Meter"
              >
                <div
                  v-for="(classroom, index) in classroomChunk"
                  :key="index"
                  :data-index="index"
                  class="team-meter pb-6" :class="[
                    {
                      'participant-class': classroom.isParticipantClassroom,
                    },
                  ]"
                >
                  <p class="is-marginless">
                    {{ classroom.name }} {{ getGradeText(classroom) }}
                  </p>
                  <BoosterProgressMeter
                    :goal="classroomGoal"
                    :first-meter="parseInt(Math.ceil(classroom.pledgeTotal))"
                    :color="classroom.color"
                    :show-value="true"
                    :value-to-display="getPledgeTotalForDisplay(classroom)"
                    background-color-class="bg-white"
                  />
                </div>
              </Slide>
            </Carousel>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/2">
        <h2 class="text-xl font-bold">
          Pledges by State
        </h2>
        <BoosterPledgesByState :program="program" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.pledge-o-meter-carousel .VueCarousel-dot,
.pledge-o-meter-carousel .VueCarousel-dot-container {
  margin-top: 0px !important;
}
@media (max-width: 640px) {
  .pledge-o-meter-carousel .VueCarousel-navigation {
    display: none;
  }
}
.VueCarousel-pagination {
  position: absolute;
  bottom: -2rem;
  margin-left: -1rem;
}
.aspect-ratio-16\/9 {
  padding-top: 56.25%;
}

.team-meter.participant-class {
  @apply relative mb-8 pb-10;
}
.team-meter.participant-class:after {
  @apply absolute w-full mx-auto h-px bg-gray-400;
  content: '';
  bottom: -4px;
  left: 0;
  right: 0;
  transition: 0.5s;
}
</style>
