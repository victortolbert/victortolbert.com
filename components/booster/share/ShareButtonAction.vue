<script>
import ClipboardJS from 'clipboard'

export default {
  props: {
    type: {
      type: String,
      default: 'facebook',
    },
    program: {
      type: Object,
      default: () => {},
    },
    gaPageLocation: {
      type: String,
      default: 'Student Card Header Section',
    },
    gaSiteLocation: {
      type: String,
      default: 'Parent Dashboard',
    },
    styleClasses: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    lang() {
      return this.$store.state.lang
    },
    participants() {
      return this.program.participants
    },
    hasVideo() {
      return this.participants.reduce((result, participant) => {
        const hasImage = !!participant.profile.image_name
        return result || hasImage
      }, false)
    },
    specialUrls() {
      return this.participants[0].special_urls
    },
    getSmallestParticipantId() {
      const participantIds = this.participants.map(obj => obj.id)
      return Math.min(...participantIds)
    },
    copiedText() {
      return this.$store.state.shareButtons.copiedText
    },
    smsLink() {
      const referrerName = this.hasVideo ? 'SMS_Video' : 'SMS'
      const isAre = this.participants.length === 1 ? 'is' : 'are'
      const eventName = this.program.event_name
      const langString = this.hasVideo ? this.lang.sms.has_video : this.lang.sms.no_video
      const smsBody = this.parseLanguage(
        langString,
        {
          participant_display_names: this.participantDisplayNames(this.participants),
          is_are: isAre,
          event_name: eventName,
          share_url: this.getShareUrl(referrerName),
        },
      )
      return `sms:?&body=${smsBody.replace(/&/g, 'and')}`
    },
  },
  methods: {
    getShareUrl(referrerName) {
      const filterFunction = function (specialUrl) {
        return specialUrl.referrer.name === referrerName
      }
      const shortKey = this.specialUrls.filter(filterFunction)[0].short_key
      return `${window.location.protocol}//${window.location.hostname}/v3/dash/${shortKey}`
    },
    gaTrack() {
      const action = `Share Button: ${this.type}${this.hasVideo ? ' video' : ''}`
      this.gaEvent(this.gaSiteLocation, this.gaPageLocation, action)
    },
    shareFacebook() {
      this.gaTrack()
      const referrerName = this.hasVideo ? 'Facebook_Video' : 'Facebook'
      const url = this.getShareUrl(referrerName)
      FB.ui(
        {
          method: 'share',
          href: url,
        },
        (response) => {
          // titan version
          if (response && !response.error_message) {
            const label = this.hasVideo ? 'Pledge Success Page Video' : 'Pledge Success Page'
            ga('send', 'event', 'Share Public Pledge Page', 'Click Facebook Share', label, 1)
            this.saveFacebookActivityHistory(this.participants[0].id)
          }
        },
      )
    },
    shareLink() {
      this.gaTrack()
      const referrerName = this.hasVideo ? 'Link_Video' : 'Link'
      const clipboardjs = new ClipboardJS('.copy-text', {
        text: (trigger) => {
          return this.getShareUrl(referrerName)
        },
      })
      clipboardjs.on('success', (e) => {
        $('.copy-text').tooltip({ trigger: 'manual' })
        $(e.trigger).tooltip('show')
        setTimeout(() => {
          $(e.trigger).tooltip('hide')
        }, 1000)
      })
    },
    shareSMS() {
      this.gaTrack()
      this.saveTextActivityHistory(this.participants[0].id)
    },
    easyEmailerLink() {
      this.gaTrack()
      this.$router.push({
        name: 'easy-emailer',
        params: {
          participantUserId: this.getSmallestParticipantId,
        },
      })
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
    <!-- SMS Link -->
    <a
      v-if="type === 'sms'"
      :href="smsLink"
      :class="style_classes"
      @click="shareSMS()"
    >
      <slot />
    </a>

    <!-- Facebook Link -->
    <a
      v-if="type === 'facebook'"
      :class="styleClasses"
      @click="shareFacebook()"
    >
      <slot />
    </a>

    <!-- Copy Link -->
    <a
      v-if="type === 'link'"
      :data-tooltip="copiedText"
      :title="copiedText"
      :class="styleClasses.concat(['copy-text'])"
      @click="shareLink()"
    >
      <slot />
    </a>

    <!-- Easy Emailer Link -->
    <a
      v-if="type === 'email'"
      :class="styleClasses"
      @click="easyEmailerLink()"
    >
      <slot />
    </a>
  </div>
</template>
