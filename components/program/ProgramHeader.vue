<script>
import EventInfo from '~/components/Event/EventInfo.vue'

export default {
  components: {
    EventInfo,
  },
  props: {
    program: {
      type: Object,
      default: null,
    },
  },
  computed: {
    hasSchoolImage() {
      // return !!this.program.microsite.school_image_name
      return false
    },
    imgSrc() {
      return `https://${this.$store.state.s3Bucket}.s3.amazonaws.com/program_logos/${this.program.microsite.school_image_name}`
    },
    displayProgramEventNameDesktop() {
      if (this.program.event_name && this.program.event_name.length > 70)
        return `${this.program.event_name.substring(0, 70)}...`

      return this.program.event_name
    },
    displayProgramEventNameMobile() {
      if (this.program.event_name && this.program.event_name.length > 50)
        return `${this.program.event_name.substring(0, 50)}...`

      return this.program.event_name
    },
  },
}
</script>

<template>
  <div class="flex flex-1 items-center bg-transparent">
    <img
      v-if="hasSchoolImage"
      :src="imgSrc"
      :alt="program.microsite.school_image_name"
      class="mb-0 mr-8 h-16 w-16 rounded-full shadow-md lg:h-24 lg:w-24"
    >
    <div class="text-white lg:w-2/3">
      <!-- Display longer header text when screen is larger than mobile -->
      <span
        :title="program.event_name"
        class="is-hidden-mobile text-xl font-medium leading-tight lg:text-4xl sm:text-2xl"
      >
        {{ displayProgramEventNameDesktop }}
      </span>

      <!-- Display shorter header text for mobile -->
      <span
        :title="program.event_name"
        class="is-hidden-tablet text-xl font-medium leading-tight lg:text-4xl sm:text-2xl"
      >
        {{ displayProgramEventNameMobile }}
      </span>
      <EventInfo
        :fun-run="program.fun_run"
        class="hidden lg:flex"
      />
    </div>
  </div>
</template>
