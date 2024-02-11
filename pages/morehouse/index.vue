<script setup>
// let videoId = VueYouTubeEmbed.getIdFromURL(url)
// let startTime = VueYouTubeEmbed.getTimeFromURL(url)
const player = ref(null)
const videoId = ref('ZcIsol3yY4Y')

const videos = ref([
  {
    id: 'ZcIsol3yY4Y',
    headline: 'Celebrating Morehouse Men and the Legacy of Civil and Human Rights',
  },
  {
    id: 'qVQKTPHBdVg',
    headline: 'President Barack Obama Delivers Morehouse Commencement Address',
  },
])

const goals = ref({
  classGift: { label: 'Class Gift', now: 160000, goal: 300000 },
  recurringGifts: { label: 'Recurring Gifts', now: 10, goal: 47 },
  firstTimeDonors: { label: 'First Time Donors', now: 5, goal: 93 },
  registrations: { label: 'Registrations', now: 9, goal: 47 },
  classParticipation: { label: 'Class Participation', now: 43, goal: 93 },
})

function method(url) {
  // this.videoId = this.$youtube.getIdFromURL(url)
  // this.startTime = this.$youtube.getTimeFromURL(url)
}

function ready(player) {
  player.value = player
}

function playing(player) {
  // The player is playing a video.
  console.log('playing...')
}

function change() {
  // when you change the value, the player will also change.
  // If you would like to change `playerVars`, please change it before you change `videoId`.
  // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
  // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
  videoId.value = 'another video id'
}

function stop() {
  player.value.stopVideo()
}

function pause() {
  player.value.pauseVideo()
}
</script>

<template>
  <main class="main">
    <MorehouseArticleGreetings />
    <MorehouseArticleGoals />

    <article class="article">
      <h2 class="article__headline">
        {{ videos[0].headline }}
      </h2>
      <div class="s-embed s-embed--widescreen">
        <Youtube :id="videos[0].id" player-height="750" player-width="1280" @playing="playing" />
      </div>
    </article>

    <article class="article">
      <h2 class="article__headline">
        {{ videos[1].headline }}
      </h2>
      <div class="s-embed s-embed--widescreen">
        <Youtube :id="videos[1].id" />
      </div>
    </article>
  </main>
</template>

<style lang="stylus">
  .s-embed
    height 0
    max-width 100%
    overflow hidden
    padding-bottom 75% /* 4:3 */
    position relative

    iframe
      height 100%
      left 0
      position absolute
      top 0
      width 100%

  .s-embed--widescreen
    padding-bottom 56.25% /* 16:9 */
</style>
