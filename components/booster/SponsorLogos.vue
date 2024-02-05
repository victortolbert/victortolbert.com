<script setup lang="ts">
// import { ListSlickMethods, VueSlickCarousel } from 'vue-slick-ts'
// import type { SlickInstance } from 'vue-slick-ts'
// import 'vue-slick-ts/dist/css/slick.css'

import { useStore } from 'vuex'

const props = defineProps({
  program: {
    type: Object,
    default: () => {},
  },
})

const store = useStore()

const slickOptions = reactive({
  slidesToShow: 1,
  dots: true,
  autoplay: true,
  arrows: false,
  mobileFirst: true,
  autoplaySpeed: 3000,
})

// const slickRefreshKey = ref(null)
// const slickRefreshKey = ref(0)

// const carousel = ref<SlickInstance | null>(null)

// function handleInit(e: JQuery.Event, instance: SlickInstance) {
//   console.log(e, instance)
// }

// const slickWatcher = ref(null)

// const sponsorLogos = computed(() => {
//   return props.program.sponsor_logos
// })

// const sponsorLogoPath = computed(() => {
//   return store.getters.sponsorLogosPath
// })

// onMounted(() => {
//   reSlick() // Needed for images to display on initial pageload
//   carousel.value!(ListSlickMethods.SLICK_METHODS_PLAY)
// })

function reSlick() {
  // if (carousel.value)
  // carousel.value.reSlick()
}
</script>

<template>
  <div>
    Sponsor Logos
    <!-- <VueSlickCarousel
      v-if="sponsorLogos.length > 0"
      ref="carousel"
      :key="slickRefreshKey"
      :autoplay-speed="4000"
      :options="slickOptions"
      @init="handleInit"
    >
      <div
        v-for="(sponsorLogo, index) in sponsorLogos"
        :key="index"
        :data-index="index"
      >
        <a
          v-if="sponsorLogo.url"
          :href="sponsorLogo.url"
          target="_blank"
        >
          <figure class="relative aspect-ratio-16/9 w-full">
            <img
              :src="sponsorLogoPath + sponsorLogo.image_name"
              class="pin absolute h-full w-full object-contain"
            >
          </figure>
        </a>
        <figure
          v-else
          class="relative aspect-ratio-16/9 w-full"
        >
          <img
            :src="sponsorLogo.image_name"
            class="pin absolute h-full w-full object-contain"
          >
        </figure>
      </div>
    </VueSlickCarousel> -->
  </div>
</template>

<style scoped>
.slick-dots li button:before {
  font-size: 20px;
  line-height: 20px;
}
</style>
