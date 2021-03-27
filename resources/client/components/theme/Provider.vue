<script lang="ts">
/**
 * ThemeProvider component
 * This exposes the theme object to all it's
 * children and grandchildren and great grandchildren and so on
 * and so forth.
 */
export default {
  name: 'ThemeProvider',
  props: {
    theme: {
      type: Object,
      default: () => null,
    },
    // colorMode: {
    //   type: String,
    //   default: 'light',
    // },
  },
  data() {
    return {
      colorMode: 'light',
    }
  },
  /*
   * Here we provide the theme and colorMode we received
   * from the props
   */
  provide() {
    return {
      $theme: () => this.theme,
      $colorMode: () => this.colorMode,
      $toggleColorMode: this.toggleColorMode,
    }
  },
  methods: {
    toggleColorMode() {
      this.colorMode = this.colorMode === 'light' ? 'dark' : 'light'
    },
  },
  render() {
    return this.$slots.default[0]
  },
}
</script>
