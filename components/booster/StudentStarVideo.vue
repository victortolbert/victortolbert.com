<script setup lang="ts">
// import { onMounted, ref } from 'vue'
// import { ListSlickMethods, VueSlickCarousel } from 'vue-slick-ts'
// import type { SlickInstance } from 'vue-slick-ts'
// import 'vue-slick-ts/dist/css/slick.css'

import { useStore } from 'vuex'

import BoosterShareModalButton from '~/components/booster/share/ShareModalButton.vue'
import BoosterVideoIframe from '~/components/booster/VideoIframe.vue'
import BoosterStudentStarVideoCard from '~/components/booster/StudentStarVideoCard.vue'

const props = defineProps({
  program: {
    type: Object,
    default: null,
  },
  videoId: {
    type: [String, Number],
    default: '440308119',
  },
})

// const carousel = ref<SlickInstance | null>(null)

// function handleInit(e: JQuery.Event, instance: SlickInstance) {
//   console.log(e, instance)
// }

const store = useStore()

const slickOptions = reactive({
  slidesToShow: 1,
  dots: true,
  autoplay: false,
  arrows: true,
  mobileFirst: true,
  prevArrow: '<button type="button" class="slick-prev"><i class=\'fas fa-chevron-left\'></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class=\'fas fa-chevron-right\'></i></button>',
})

const slickRefreshKey = ref(0)
const slickWatcher = ref(null)

const lang = computed(() => {
  return store.state.lang
})

const canShare = computed(() => {
  return props.program.participants
    .find((participant: any) => participant.profile.image_name !== null)
})

const participantVideoIds = computed(() => {
  return props.program.participants
    .filter((participant: any) => participant.profile.video_url != null)
    .map((participant: any) => participant.profile.video_url)
})

onMounted(() => {
  // carousel.value!(ListSlickMethods.SLICK_METHODS_PLAY)
  // Force refresh Slick when going between pages
  //   this.$nextTick(() => {
  //     slickWatcher.value = store.watch((state, getters) => state.activeTab, (newVal, oldVal) => {
  //       slickRefreshKey.value += 1
  //     })
  //   })

//   window.addEventListener('reslicked', reSlick)
})

// onBeforeUnmount(() => {
//   // Prevent watcher memory leak
//   if (slickWatcher.value !== null)
//     slickWatcher()

//   window.removeEventListener('reslicked', reSlick)
// })

// function slickBeforeChange() {
//   pauseAllJWPlayers()
// }

// function pauseAllJWPlayers() {
//   let playerIndex = 0

//   while (jwplayer(playerIndex).play) {
//     if (jwplayer(playerIndex).getState() === 'playing')
//       jwplayer(playerIndex).pause()

//     playerIndex++
//   }
// }

// function next() {
//   carousel.value.slick.next()
// }

// function prev() {
//   carousel.value.slick.prev()
// }

// function reSlick() {
//   if (carousel.value.slick)
//     carousel.value.slick.reSlick()
// }
</script>

<template>
  <div class="card-content student-star-video px-0 py-4">
    <div class="px-8">
      <!-- <VueSlickCarousel
        v-if="participantVideoIds.length"
        ref="carousel"
        :key="slickRefreshKey"
        :options="slickOptions"
        @beforeChange="slickBeforeChange()"
      >
        <div
          v-for="(videoId, index) in participantVideoIds"
          :key="index"
        >
          <BoosterVideoIframe
            v-if="videoId"
            :video-id="videoId"
            source="jwplayer"
          />
        </div>
      </VueSlickCarousel> -->

      <div v-if="participantVideoIds.length">
        Carousel
      </div>

      <figure
        v-else
        class="image is-16by9 mb-8"
      >
        <BoosterVideoIframe :video-id="videoId" />
      </figure>

      <h2 class="text-lg font-semibold">
        {{ lang.student_star_video.get_pledges }}
      </h2>

      <p
        v-if="canShare"
        class="mb-8"
      >
        {{ lang.student_star_video.can_share_msg }}
      </p>

      <p
        v-else
        class="mb-8"
      >
        {{ lang.student_star_video.upload_msg }}
      </p>
    </div>
    <div class="grid mx-auto mb-10 px-8">
      <div
        v-for="participant in program.participants"
        :key="participant.id"
        class="student-info has-background-white-bis relative mb-4 w-full border rounded-lg p-2 sm:p-4"
      >
        <BoosterStudentStarVideoCard :participant="participant" />
      </div>
    </div>

    <div
      v-if="canShare"
      class="mx-auto max-w-sm text-center lg:max-w-lg"
    >
      <BoosterShareModalButton
        :program="program"
        class="m-2"
      />
    </div>
  </div>
</template>

<style lang="scss">
.student-star-video .grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit);

  @media (min-width: 576px) {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }
}
.student-star-video .slick-prev,
.student-star-video .slick-next {
  font-size: initial;
  color: currentColor;
}
.student-star-video .slick-dots li button:before {
  font-size: 3rem;
}
</style>
