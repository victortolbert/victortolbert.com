<template>
  <p class="site-banner">
    <span class="site-banner__group">Class of 1987</span>
    <span class="site-banner__milestone">30</span>
    <span class="site-banner__year">Year</span>
    <span class="site-banner__event">Reunion</span>
    <span class="site-banner__date">May 17-19, 2017</span>
  </p>
</template>

<style lang="stylus">
  .site-banner
    // align-items flex-end
    display flex
    flex-direction column
    font-family font-family-serif
    justify-content center
    text-align center

  .site-banner__group
    color color-white
    font-size 36px
    // line-height 2.625 // 42px
    margin 32px 0 16px 0
    letter-spacing 0.1875rem
    line-height 1
    text-transform uppercase

  .site-banner__milestone
    color color-white
    font-size 320px
    // line-height 22.125 // 354px
    letter-spacing -32px
    line-height 1
    margin -32px 0 0 -32px
    text-align center

  .site-banner__year
    color color-white
    font-size 106px
    // line-height 7.635 // 122px
    line-height 1
    margin-top -32px
    text-transform uppercase

  .site-banner__event
    color color-white
    font-size 4rem // 64px
    // line-height 4.625 // 74px
    line-height 1
    margin-bottom 8px 0 32px 0
    text-transform uppercase
    margin-bottom 16px

  .site-banner__date
    color color-white
    font-size 36px
    font-weight 200
    // line-height 2.625 // 42px
    letter-spacing 0.125rem
    line-height 1
    margin-bottom 8px
    text-transform uppercase
</style>
