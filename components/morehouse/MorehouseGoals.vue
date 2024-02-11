<script>
export default {
  props: {
    goals: {
      type: Object,
      default() {
        return {
          goal: {
            title: 'The Goal',
            description: 'Widgets Bought',
            currently: 1,
            target: 10,
            isCurrency: false,
          },
        }
      },
    },
  },
}
</script>

<template>
  <div class="goals">
    <div v-for="(goal, key) in goals" :key="goal" class="goal">
      <div class="goal__title">
        {{ goals[key].title }}
      </div>
      <div v-if="goals[key].isCurrency" class="goal__currently">
        <!-- {{ goals[key].currently | numberWithCommas | formatMoney }} -->
        {{ goals[key].currently }}
      </div>
      <div v-else class="goal__currently">
        {{ goals[key].currently }}
      </div>
      <div class="goal__progress-bar">
        <span class="goal__percent-complete" style="width: 50%" />
      </div>
      <div v-if="goals[key].isCurrency" class="goal__description">
        <!-- Goal {{ goals[key].target | numberWithCommas | formatMoney }} {{ goals[key].description }} -->
        Goal {{ goals[key].target }} {{ goals[key].description }}
      </div>
      <div v-else class="goal__description">
        Goal {{ goals[key].target }} {{ goals[key].description }}
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
  .goals
    display flex
    flex-wrap wrap
    justify-content space-between

  .goal
    margin-bottom 32px
    width 250px

  .goal__title
    color color-black
    font-family font-family-body
    font-size 28px

  .goal__currently
    color color-black
    font-family font-family-strong
    font-size 52px
    text-align center
    // line-height 4 // 64px

  .goal__progress-bar
    background-color color-alto
    box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3)
    height 48px
    // padding 0.5rem
    position relative

  .goal__progress-bar > span
    background-color color-claret
    background-image linear-gradient(center bottom, rgb(43,194,83) 37%, rgb(84,240,84) 69%)
    box-shadow inset 0 2px 9px  rgba(255,255,255,0.3), inset 0 -2px 6px rgba(0,0,0,0.4)
    display block
    height 100%
    overflow hidden
    position relative

  .goal__description
    color color-french-gray
    font-family font-family-body
    font-size 24px
    line-height 32px
</style>
