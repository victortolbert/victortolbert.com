<template>
  <nav class="site-navigation">
    <ul>
      <li>
        <NuxtLink to="/morehouse" exact="exact">
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/morehouse/events">
          Events
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/morehouse/photos">
          Photos
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/morehouse/contact">
          Contact
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/morehouse/resources">
          Resources
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="stylus">
  .site-navigation
    background-color color-fiord
    height 80px

    ul
      align-items stretch
      color: color-white
      display: flex
      font-size 24px
      height: 100%
      justify-content: space-around
      text-transform: uppercase

    li
      // outline 1px solid red
      align-items center
      display flex
      flex 1
      justify-content center
      text-align center

    a
      color color-alto
      display block
      padding 1rem
      text-decoration none
      width 100%
      color #bbb
      &:hover
        color white
        text-decoration none
      &.v-link-active
      &:active
        color white !important

  .navigation__link
    color color-white
    font-family Roboto-Regular
    font-size 1.5rem // 24px
    line-height 2 // 32px
</style>
