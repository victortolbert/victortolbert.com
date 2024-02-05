<script>
import BoosterActivityRewardIcon from './ActivityRewardIcon.vue'
import BoosterShareButtonAction from '~/components/booster/share/ShareButtonAction.vue'

export default {
  components: {
    BoosterActivityRewardIcon,
    BoosterShareButtonAction,
  },
  inheritAttrs: false,
  props: {
    category: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    specialUrls: {
      type: Array,
      default: () => [],
    },
    hasVideo: {
      type: Boolean,
      default: false,
    },
    program: {
      type: Object,
      default: undefined,
    },
    gaPageLocation: {
      type: String,
      default: 'Activity Rewards Section',
    },
    gaSiteLocation: {
      type: String,
      default: 'Parent Dashboard',
    },
  },
  emits: ['click'],

  computed: {
    lang() {
      return this.$store.state.lang
    },
    referrerName() {
      return this.hasVideo ? 'SMS_Video' : 'SMS'
    },
    participantDisplayNameString() {
      return this.participantDisplayNames(this.program.participants)
    },
    shareUrl() {
      return this.getShareUrl(this.referrerName)
    },
    eventName() {
      return this.program.event_name
    },
    smsLangText() {
      return this.hasVideo ? this.lang.sms.has_video : this.lang.sms.no_video
    },
  },
  methods: {
    onClick() {
      this.$emit('click')
      this.gaTrack()
      const participantUserId = this.getSmallestParticipantId()
      switch (this.category) {
        case 'easy_emailer':
          this.$router.push({
            name: 'easy-emailer',
            params: {
              participantUserId,
            },
          })
          break
        case 'sms':
          break
        case 'facebook':
        default:
          this.shareFacebook()
      }
    },
    getSmallestParticipantId() {
      const participantIds = this.program.participants.map(obj => obj.id)
      return Math.min(...participantIds)
    },
    gaTrack() {
      const action = `Share Button: ${this.type}${this.hasVideo ? ' video' : ''}`
      this.gaEvent(this.gaSiteLocation, this.gaPageLocation, action)
    },
    getShareUrl(referrerName) {
      const filterFunction = function (specialUrl) {
        return specialUrl.referrer.name === referrerName
      }
      const shortKey = this.specialUrls.filter(filterFunction)[0].short_key
      return `${window.location.protocol}//${window.location.hostname}/v3/dash/${shortKey}`
    },
    shareFacebook() {
      const referrerName = this.hasVideo ? 'Facebook_Video' : 'Facebook'
      const url = this.getShareUrl(referrerName)
      FB.ui(
        {
          method: 'share',
          href: url,
        },
        (response) => {
          if (response && !response.error_message) {
            const label = this.hasVideo ? 'Pledge Success Page Video' : 'Pledge Success Page'
            ga('send', 'event', 'Share Public Pledge Page', 'Click Facebook Share', label, 1)
            this.saveFacebookActivityHistory(this.program.participants[0].id)
          }
        },
      )
    },
    saveUserActivityHistory(participantUserId, userActivityId) {
      axios.post(
        '/v3/api/user-activity-history/store',
        {
          activityId: userActivityId,
          participantUserId,
        },
      )
        .then(
          (response) => {
            if (response.data.success)
              this.$store.commit('ADD_NEW_USER_ACTIVITY_HISTORIES', response.data.created)
          },
        )
    },
    saveFacebookActivityHistory(participantUserId) {
      const facebookActivityId = this.$store.state.activityReward.userActivities.find((userActivity) => {
        return userActivity.name === 'Share On Facebook'
      }).id
      this.saveUserActivityHistory(participantUserId, facebookActivityId)
    },
    saveTextActivityHistory(participantUserId) {
      const textActivityId = this.$store.state.activityReward.userActivities.find((userActivity) => {
        return userActivity.name === 'Share By Text'
      }).id
      this.saveUserActivityHistory(participantUserId, textActivityId)
    },
  },
}
</script>

<template>
  <div>
    <BoosterShareButtonAction
      v-if="category === 'sms'"
      :program="program"
      :style_classes="['bg-secondary py-3 flex items-center justify-center block w-full max-w-xs mx-auto text-xl font-semibold text-white rounded-full focus:outline-none focus:shadow-outline hover:text-white leading-none']"
      :ga-site-location="gaSiteLocation"
      :ga-page-location="gaPageLocation"
      type="sms"
    >
      <BoosterActivityRewardIcon
        :category="category"
        class="mr-2"
      />

      <span>{{ label }}</span>
    </BoosterShareButtonAction>
    <button
      v-else
      v-bind="$attrs"
      class="bg-secondary focus:shadow-outline mx-auto block max-w-xs w-full flex items-center justify-center rounded-full py-3 text-xl font-semibold leading-none text-white focus:outline-none"
      @click="onClick"
    >
      <BoosterActivityRewardIcon
        :category="category"
        class="mr-2"
      />

      <span>{{ label }}</span>
    </button>
  </div>
</template>
