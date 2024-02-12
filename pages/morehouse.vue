<script setup lang="ts">
import { useStore } from 'vuex'

definePageMeta({
  layout: false,
})

const store = useStore()

const metrics = ref({
  classGift: { label: 'Class Gift', now: 160000, goal: 300000 },
  recurringGifts: { label: 'Recurring Gifts', now: 10, goal: 47 },
  firstTimeDonors: { label: 'First Time Donors', now: 5, goal: 93 },
  registrations: { label: 'Registrations', now: 9, goal: 47 },
  classParticipation: { label: 'Class Participation', now: 43, goal: 93 },
})

// beforeCreate() {
//   store.state.activeApp = 'morehouse1987'
// }
</script>

<template>
  <div class="container">
    <MorehouseSiteHeader />

    <section class="section">
      <NuxtPage />
      <MorehouseSiteAside class="aside" />
    </section>

    <MorehouseSiteFooter class="footer" />
  </div>
</template>

<style lang="stylus">
  .container
    max-width 1440px
    width 1440px

  .section
    display flex

  .main
    background-color color-white
    padding 32px 60px
    width 1004px

  .vui-main
    // margin-bottom 0
    // background-color color-black
    // background-image url('/static/shared/morehouse1987/morehouse-block.jpg')
    // background-repeat repeat
</style>

<style lang="stylus">
  .h1, .h2, .h3
    font-family Raleway
    text-transform uppercase

  .h1
    font-family Roboto Slab
    font-size 30px
    text-transform capitalize

  .h2
    font-size 24px

  .h3
    font-size 18px

  p
    font-family Roboto
    letter-spacing .02em
</style>

<!-- Flex Demo -->
<style lang="stylus">
  .items
    background-color color-heathered-gray
    display flex
    flex-wrap wrap
    justify-content flex-start

  .item
    background rgba(255, 255, 255, .6)
    font-size 16px
    margin 10px
    padding 20px

  .item
    flex 0 1 calc(33.33% - 20px)
</style>
