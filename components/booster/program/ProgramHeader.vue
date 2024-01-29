<script setup lang="ts">
import BoosterEventInfo from '~/components/booster/event/EventInfo.vue'
import type { Program } from '~/types'

const props = defineProps<{
  program: Program
}>()

// const store = useStore()

const hasSchoolImage = computed(() => {
  return !!props.program.microsite.school_image_name
})

const imgSrc = computed(() => {
  // return `https://${store.state.s3Bucket}.s3.amazonaws.com/program_logos/${props.program.microsite.school_image_name}`
  return `/booster/assets/images/logos/${props.program.microsite.school_image_name}`
})

const displayProgramEventNameDesktop = computed(() => {
  if (props.program.event_name && props.program.event_name.length > 70)
    return `${props.program.event_name.substring(0, 70)}...`

  return props.program.event_name
})

const displayProgramEventNameMobile = computed(() => {
  if (props.program.event_name && props.program.event_name.length > 50)
    return `${props.program.event_name.substring(0, 50)}...`

  return props.program.event_name
})
</script>

<template>
  <div class="bg-transparent flex items-center flex-1">
    <img
      v-if="hasSchoolImage"
      :src="imgSrc"
      :alt="program.microsite.school_image_name"
      class="rounded-full shadow-md w-16 h-16 lg:w-24 lg:h-24 mb-0 mr-8"
    >
    <div class="text-white lg:w-2/3">
      <!-- Display longer header text when screen is larger than mobile -->
      <span
        :title="program.event_name"
        class="text-xl sm:text-2xl lg:text-4xl font-medium leading-tight is-hidden-mobile hidden sm:block"
      >
        {{ displayProgramEventNameDesktop }}
      </span>

      <!-- Display shorter header text for mobile -->
      <span
        :title="program.event_name"
        class="text-xl sm:text-2xl lg:text-4xl font-medium leading-tight  display:block sm:hidden is-hidden-tablet"
      >
        {{ displayProgramEventNameMobile }}
      </span>

      <BoosterEventInfo
        :fun-run="program.fun_run"
        class="hidden lg:flex"
      />
    </div>
  </div>
</template>
