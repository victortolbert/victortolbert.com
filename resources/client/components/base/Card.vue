<script lang="ts">
import {css} from '@emotion/css'

const getThemeStyles = theme => ({
  light: {
    color: theme.colors.indigo['700'],
    backgroundColor: theme.colors.yellow['50'],
  },
  dark: {
    backgroundColor: theme.colors.indigo['700'],
    color: theme.colors.yellow['50'],
  },
})

export default {
  inject: ['$colorMode', '$toggleColorMode', '$theme'],
  computed: {
    colorMode() {
      return this.$colorMode()
    },
    theme() {
      return this.$theme()
    },
    cardClass() {
      return css({
        padding: '10px',
        boxShadow:
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        transition: 'all 0.2s ease-in-out',
        ...getThemeStyles(this.theme)[this.colorMode],
      })
    },
  },
}
</script>

<template>
  <div :class="cardClass">
    <BaseButton @click.native="$toggleColorMode">Toggle Color Mode</BaseButton>
  </div>
</template>
