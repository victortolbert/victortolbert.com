<script lang="ts">
import {css} from '@emotion/css'

const getButtonThemeStyles = theme => ({
  light: {
    backgroundColor: theme.colors.flamePea['700'],
    color: theme.colors.flamePea['50'],
  },
  dark: {
    backgroundColor: theme.colors.flamePea['50'],
    color: theme.colors.flamePea['700'],
  },
})

export default {
  inject: ['$theme', '$colorMode'],
  computed: {
    buttonClass() {
      return css({
        padding: '8px 12px',
        fontSize: '1rem',
        borderRadius: '3px',
        border: 'none',
        transition: 'all 0.2s ease-in-out',
        ...getButtonThemeStyles(this.theme)[this.colorMode],
      })
    },
    theme() {
      return this.$theme()
    },
    colorMode() {
      return this.$colorMode()
    },
  },
}
</script>

<template>
  <button :class="buttonClass">
    <slot>Button</slot>
  </button>
</template>
