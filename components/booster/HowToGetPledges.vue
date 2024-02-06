<script>
import axios from 'axios'

import BoosterPhoneScriptModal from '~/components/booster/PhoneScriptModal.vue'
import BoosterShareSvgIcon from '~/components/booster/share/ShareSvgIcon.vue'
import BoosterVideoIframe from '~/components/booster/VideoIframe.vue'

export default {
  components: {
    BoosterShareSvgIcon,
    BoosterVideoIframe,
  },
  props: {
    program: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      video: null,
      gaSiteLocation: 'Parent Dashboard',
      gaPageLocation: 'How To Get Pledges',
    }
  },
  computed: {
    lang() {
      return this.$store.state.lang.how_to_get_pledges
    },
    firstParticipantId() {
      return this.program.participants[0].id
    },
    hasVideo() {
      return this.program.participants.reduce((result, participant) => {
        const hasImage = !!participant.profile.image_name
        return result || hasImage
      }, false)
    },
    specialUrls() {
      return this.program.participants[0].special_urls
    },
    smsLink() {
      const referrerName = this.hasVideo ? 'SMS_Video' : 'SMS'
      const isAre = this.program.participants.length === 1 ? 'is' : 'are'
      const eventName = this.program.event_name
      const langString = this.hasVideo ? this.lang.sms.has_video : this.lang.sms.no_video
      const smsBody = this.parseLanguage(
        langString,
        {
          participant_display_names: this.participantDisplayNames(this.program.participants),
          is_are: isAre,
          event_name: eventName,
          share_url: this.getShareUrl(referrerName),
        },
      )
      return `sms:?&body=${smsBody.replace(/&/g, 'and')}`
    },
  },
  created() {
    this.fetchVideos()
  },
  methods: {
    blur() {
      document.getElementById('app').style.filter = 'blur(4px)'
    },
    unBlur() {
      document.getElementById('app').style.filter = 'none'
    },
    isDesktop() {
      return window.matchMedia('(min-width: 769px)').matches
    },
    scrollTo() {
      this.$parent.$parent.$parent.items[2].isOpen = true

      setTimeout(() => {
        // scroll to top
        $('html, body').animate({
          scrollTop: $(this.$parent.$parent.$parent.$el).offset().top,
        }, 300)
      }, 310)
    },

    fetchVideos(videoMetadata) {
      axios.get(`/v3/api/videos/get-pledges/${this.program.id}`).then((response) => {
        this.video = response.data
      }).catch((error) => {
        console.error(error)
      })
    },
    openPhoneScript(evt) {
      this.$modal.open({
        parent: this,
        component: BoosterPhoneScriptModal,
        hasModalCard: false,
        canCancel: ['close', 'outside'],
        onCancel: this.unBlur,
        props: { program: this.program },
      })

      this.blur()

      this.gaEvent(this.gaSiteLocation, this.gaPageLocation, 'Phone Script')
    },
    sendText() {
      const action = `Share Button: sms${this.hasVideo ? ' video' : ''}`
      this.gaEvent(this.gaSiteLocation, this.gaPageLocation, action)
      this.saveTextActivityHistory(this.program.participants[0].id)
    },
    getShareUrl(referrerName) {
      if (!this.specialUrls.length)
        return ''

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
            this.saveFacebookActivityHistory(this.program.participants[0].id)
            const label = this.hasVideo ? 'Pledge Success Page Video' : 'Pledge Success Page'
            ga('send', 'event', 'Share Public Pledge Page', 'Click Facebook Share', label, 1)
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
  <div class="card-content">
    <div>
      <div class="pb-4">
        <figure class="image is-16by9 mb-4 border">
          <BoosterVideoIframe
            v-if="video"
            :video-id="video.external_video_id"
            :source="video.source"
          />
        </figure>
      </div>

      <h4 class="mb-4 text-center text-lg font-bold md:text-left">
        {{ lang.asking_for_pledges }}
      </h4>
      <ul class="list-reset text-sm md:text-xl">
        <li class="mb-2 flex items-center">
          <NuxtLink
            :to="{
              name: 'easy-emailer',
              params: {
                participantUserId: firstParticipantId,
              },
            }"
            strict
            class="font-semibold underline"
          >
            <BoosterShareSvgIcon type="email" />
          </NuxtLink>
          <p class="ml-4">
            <NuxtLink
              :to="{
                name: 'easy-emailer',
                params: {
                  participantUserId: firstParticipantId,
                },
              }"
              strict
              class="font-semibold underline"
            >
              {{ lang.email.link }}
            </NuxtLink> {{ lang.email.paragraph }}
          </p>
        </li>
        <li class="mb-2 flex items-center">
          <button @click="shareFacebook()">
            <NuxtShareSvgIcon type="facebook" />
          </button>
          <p class="ml-4">
            <a
              class="font-semibold underline"
              @click.prevent="shareFacebook()"
            >
              {{ lang.share_on_facebook }}
            </a> {{ lang.get_sponsor_pledges }}
          </p>
        </li>
        <li
          v-if="!program.ssv_disabled"
          class="mb-2 flex items-center"
        >
          <a href="#">
            <NuxtShareSvgIcon type="ssv" />
          </a>
          <p class="ml-4">
            <a
              href="#"
              class="font-semibold underline"
              @click.prevent="scrollTo()"
            >
              {{ lang.share_ssv }}
            </a> {{ lang.customize_it }}
          </p>
        </li>
        <li class="mb-2 flex items-center">
          <a
            href="#"
            class="phone-script-icon"
            @click.prevent="openPhoneScript"
          >
            <NuxtShareSvgIcon type="script" />
          </a>
          <p class="ml-4">
            <a
              href="#"
              class="phone-script-link font-semibold underline"
              @click.prevent="openPhoneScript"
            >
              {{ lang.use_our_phone_script }}
            </a> {{ lang.call_friends }}
          </p>
        </li>
        <li class="sms-share-btn mb-2 flex items-center lg:hidden">
          <a
            :href="smsLink"
            @click="sendText"
          >
            <NuxtShareSvgIcon type="sms" />
          </a>
          <p class="ml-4">
            <a
              :href="smsLink"
              data-test-id="sms-click"
              class="phone-script-link font-semibold underline"
              @click="sendText"
            >
              {{ lang.send_a_text }}
            </a> {{ lang.text_to_friends }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 768px) and (orientation: portrait) {
  .sms-share-btn {
    display: none;
  }
}
@media (min-width: 1024px) and (orientation: landscape) {
  .sms-share-btn {
    display: none;
  }
}
</style>
