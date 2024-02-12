<script setup>
</script>

<template>
  <header class="site-header">
    <section class="site-header__left">
      <MorehouseSiteLogo />
      <MorehouseSiteBanner />
    </section>
    <section class="site-header__right">
      <MorehouseSiteHero />
      <MorehouseSiteNavigation />
    </section>
  </header>
</template>

<style lang="stylus">
  .site-header
    display flex

  .site-header__left
    background-color color-black
    display flex
    flex-direction column
    height 656px
    padding 28px 32px
    width 376px

  .site-header__right
    background-image url('/morehouse/assets/images/hero-background.jpeg')
    background-position 100% 0
    background-repeat no-repeat
    display flex
    flex-direction column
    height 656px
    // height 100%
    // justify-content flex-end
    width 1064px
</style>
