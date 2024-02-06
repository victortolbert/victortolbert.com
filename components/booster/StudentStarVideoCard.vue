<script>
export default {
  props: {
    participant: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    avatarSrc() {
      return this.participant.profile.image_name == null ? '/booster/assets/images/dashboard-avatar.svg' : this.avatarImgSrc
    },
    avatarImgSrc() {
      return this.$store.getters.avatarPath + this.participant.profile.image_name
    },
    editProfileLink() {
      return `/v3/tkdashboard/?redirect=${encodeURI(`auth/login/${this.participant.fr_code}/edit-personalize`)}`
    },
    inProgress() {
      return this.participant.profile.image_name !== null && this.participant.profile.video_url == null
    },
    readyToShare() {
      return this.participant.profile.image_name !== null && this.participant.profile.video_url !== null
    },
    lang() {
      return this.$store.state.lang
    },
  },
}
</script>

<template>
  <div class="w-full flex">
    <div class="mr-1 sm:mr-4">
      <a :href="editProfileLink">
        <AvatarImage
          :alt="participant.first_name"
          :src="avatarSrc"
        />
      </a>
    </div>
    <div class="flex-1 self-center">
      <h2>
        {{ participant.first_name }}
      </h2>
    </div>
    <div class="self-center text-right">
      <span
        v-if="inProgress"
        class="text-tertiary font-bold"
      >
        {{ lang.student_star_video.video_in_progress }}
      </span>
      <span
        v-else-if="readyToShare"
        class="text-primary font-bold"
      >
        {{ lang.student_star_video.ready_to_share }}
      </span>
      <NuxtLink
        v-else
        :to="{ name: 'edit-participant', params: { id: participant.id } }"
        class="bg-secondary whitespace-no-wrap inline-block rounded-full px-4 py-1 font-semibold text-white shadow sm:px-6 sm:py-2 hover:text-white"
        @click="gaEvent('Parent Dashboard', 'Student Star Video Section', 'Upload Photo')"
      >
        {{ lang.student_star_video.upload_photo }}
      </NuxtLink>
    </div>
  </div>
</template>
