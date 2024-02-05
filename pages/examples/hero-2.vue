<script setup lang="ts">
useHead({
  bodyAttrs: {
    // class: 'overflow-hidden',
  },
})

onMounted(() => {
  scaleVideoContainer()

  initBannerVideoSize('.video-container .poster img')
  initBannerVideoSize('.video-container .filter')
  initBannerVideoSize('.video-container video')

  // $(window).on('resize', () => {
  //   scaleVideoContainer()
  //   scaleBannerVideoSize('.video-container .poster img')
  //   scaleBannerVideoSize('.video-container .filter')
  //   scaleBannerVideoSize('.video-container video')
  // })
})

function scaleVideoContainer() {
  // const height = $(window).height() + 5
  // const unitHeight = `${Number.parseInt(height)}px`
  // $('.homepage-hero-module').css('height', unitHeight)
}

function initBannerVideoSize(element) {
  // $(element).each(function () {
  //   $(this).data('height', $(this).height())
  //   $(this).data('width', $(this).width())
  // })

  // scaleBannerVideoSize(element)
}

function scaleBannerVideoSize(element) {
  // const windowWidth = $(window).width()
  // const windowHeight = $(window).height() + 5
  // let videoWidth
  // let videoHeight

  // // console.log(windowHeight);

  // $(element).each(function () {
  //   const videoAspectRatio = $(this).data('height') / $(this).data('width')

  //   $(this).width(windowWidth)

  //   if (windowWidth < 1000) {
  //     videoHeight = windowHeight
  //     videoWidth = videoHeight / videoAspectRatio
  //     $(this).css({ 'margin-top': 0, 'margin-left': `${-(videoWidth - windowWidth) / 2}px` })

  //     $(this).width(videoWidth).height(videoHeight)
  //   }

  //   $('.homepage-hero-module .video-container video').addClass('fadeIn animated')
  // })
}
</script>

<template>
  <div>
    <video loop muted autoplay playsinline class="background-video">
      <source src="/assets/video/coverr/coverr.mp4" type="video/mp4">
    </video>
    <!-- <video loop muted autoplay playsinline poster="/assets/video/coverr/love-coding.jpeg" class="background-video">
      <source src="/assets/video/coverr/love-coding.mp4" type="video/mp4">
      <source src="/assets/video/coverr/love-coding.webm" type="video/webm">
    </video> -->

    <!-- <div class="background-video-content">
      Your Element content in here.
    </div>

    <div class="homepage-hero-module">
      <div class="video-container">
        <div class="filter">
          <div class="content">
            <h1 style="color: #fff; font-family: sans-serif; padding: 1rem; margin: 4rem">
              Video Background
            </h1>
          </div>
        </div>
        <video autoplay loop class="fillWidth">
          <source src="/assets/coverr/love-coding.mp4" type="video/mp4">Your browser does not support the video tag. I suggest you upgrade your browser.
          <source src="/assets/coverr/love-coding.webm" type="video/webm">Your browser does not support the video tag. I suggest you upgrade your browser.
        </video>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
.background-video {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.5;
}

.page-hero {
  position: relative;
  overflow: hidden;
}

.background-video-content {
  position: relative;
  z-index: 1;
}

video[poster] {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.homepage-hero-module {
  border-right: none;
  border-left: none;
  position: relative;
}

.no-video .video-container video,
.touch .video-container video {
  display: none;
}

.no-video .video-container .poster,
.touch .video-container .poster {
  display: block !important;
}

.video-container {
  position: relative;
  bottom: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: #000;
}

.video-container .poster img {
  width: 100%;
  bottom: 0;
  position: absolute;
}

.video-container .filter {
  z-index: 100;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
}

.video-container video {
  position: absolute;
  z-index: 0;
  bottom: 0;
}

.video-container video.fillWidth {
  width: 100%;
}
</style>
