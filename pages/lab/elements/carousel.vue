<script setup>
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// const creativeEffect = { prev: { shadow: false, translate: ['-20%', 0, -1] }, next: { translate: ['100%', 0, 0] } }
// const effect = 'creative'

function onSwiper(swiper) {
  console.log(swiper)
}

function onSlideChange() {
  console.log('slide change')
}

console.log('2022-01-25 12:00:00'.split(' ')[0])
// console.log(nanoid())
</script>

<template>
  <article class="overflow-hidden">
    <Swiper
      :autoplay="{ delay: 8000, disableOnInteraction: true }"
      :loop="true"
      :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation, SwiperPagination, SwiperScrollbar]"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slide-change="onSlideChange"
    >
      <SwiperSlide>
        <div class="border border-red-700 p-16 flex items-center justify-center">
          Slide 1
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="border border-green-700 p-16 flex items-center justify-center">
          Slide 2
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="border border-blue-700 p-16 flex items-center justify-center">
          Slide 3
        </div>
      </SwiperSlide>
    </Swiper>
  </article>
</template>
