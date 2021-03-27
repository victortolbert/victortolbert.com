<script lang="ts">
// https://github.com/apertureless/vue-cookie-law
import * as Cookie from 'tiny-cookie'
const STORAGE_TYPES = {
  local: 'localStorage',
  cookies: 'cookies',
}
export default {
  name: 'CookieConsent',
  props: {
    buttonText: {
      type: String,
      default: 'Got it!',
    },
    buttonDecline: {
      type: Boolean,
      default: false,
    },
    buttonDeclineText: {
      type: String,
      default: 'Decline',
    },
    buttonLink: {
      type: [String, Object],
      required: false,
    },
    buttonLinkText: {
      type: String,
      default: 'More info',
    },
    buttonLinkNewTab: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default:
        'This website uses cookies to ensure you get the best experience on our website.',
    },
    theme: {
      type: String,
      default: 'base',
    },
    /**
     * Cookie Container position
     * bottom, top
     * @type {Object}
     */
    position: {
      type: String,
      default: 'bottom',
    },
    /**
     * Transition name has following possibilities
     * slideFromBottom
     * slideFromTop
     * fade
     * @type {Object}
     */
    transitionName: {
      type: String,
      default: 'slideFromBottom',
    },
    buttonClass: {
      type: String,
      default: 'Cookie__button',
    },
    buttonDeclineClass: {
      type: String,
      default: 'Cookie__button--decline',
    },
    storageName: {
      type: String,
      default: 'cookie:accepted',
    },
    storageType: {
      type: String,
      default: STORAGE_TYPES.local,
    },
    cookieOptions: {
      type: Object,
      default: () => {},
      required: false,
    },
  },
  data() {
    return {
      supportsLocalStorage: true,
      isOpen: false,
    }
  },
  computed: {
    containerPosition() {
      return `Cookie--${this.position}`
    },
    cookieTheme() {
      return `Cookie--${this.theme}`
    },
    externalButtonLink() {
      return typeof this.buttonLink === 'string' && this.buttonLink.length
    },
    internalButtonLink() {
      return (
        typeof this.buttonLink === 'object' &&
        this.buttonLink != null &&
        Object.keys(this.buttonLink).length
      )
    },
    target() {
      return this.buttonLinkNewTab ? '_blank' : '_self'
    },
    canUseLocalStorage() {
      return (
        this.storageType === STORAGE_TYPES.local && this.supportsLocalStorage
      )
    },
  },
  created() {
    if (this.storageType === STORAGE_TYPES.local) {
      // Check for availability of localStorage
      try {
        const test = '__vue-cookielaw-check-localStorage'
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(test, test)
          window.localStorage.removeItem(test)
        }
      } catch (e) {
        console.info(
          'Local storage is not supported, falling back to cookie use',
        )
        this.supportsLocalStorage = false
      }
    }
    if (!this.getVisited()) {
      this.isOpen = true
    }
  },
  mounted() {
    if (this.isAccepted()) {
      this.$emit('accept')
    }
  },
  methods: {
    setVisited() {
      if (this.canUseLocalStorage) {
        localStorage.setItem(this.storageName, true)
      } else {
        Cookie.set(this.storageName, true, {
          ...this.cookieOptions,
          expires: '1Y',
        })
      }
    },
    setAccepted() {
      if (this.canUseLocalStorage) {
        localStorage.setItem(this.storageName, true)
      } else {
        Cookie.set(this.storageName, true, {
          ...this.cookieOptions,
          expires: '1Y',
        })
      }
    },
    setDeclined() {
      if (this.canUseLocalStorage) {
        localStorage.setItem(this.storageName, false)
      } else {
        Cookie.set(this.storageName, false, {
          ...this.cookieOptions,
          expires: '1Y',
        })
      }
    },
    getVisited() {
      let visited = false
      if (this.canUseLocalStorage) {
        visited = localStorage.getItem(this.storageName)
      } else {
        visited = Cookie.get(this.storageName)
      }
      if (typeof visited === 'string') {
        visited = JSON.parse(visited)
      }
      return !(visited === null || visited === undefined)
    },
    isAccepted() {
      let accepted = false
      if (this.canUseLocalStorage) {
        accepted = localStorage.getItem(this.storageName)
      } else {
        accepted = Cookie.get(this.storageName)
      }
      if (typeof accepted === 'string') {
        accepted = JSON.parse(accepted)
      }
      return accepted
    },
    accept() {
      this.setVisited()
      this.setAccepted()
      this.isOpen = false
      this.$emit('accept')
    },
    close() {
      this.isOpen = false
      this.$emit('close')
    },
    decline() {
      this.setVisited()
      this.setDeclined()
      this.isOpen = false
      this.$emit('decline')
    },
    revoke() {
      if (this.canUseLocalStorage) {
        localStorage.removeItem(this.storageName)
      } else {
        Cookie.remove(this.storageName)
      }
      this.isOpen = true
      this.$emit('revoke')
    },
    open() {
      if (!this.getVisited()) {
        this.isOpen = true
      }
    },
  },
}
</script>

<template>
  <Transition appear :name="transitionName">
    <div class="Cookie" :class="[containerPosition, cookieTheme]" v-if="isOpen">
      <slot :accept="accept" :close="close" :decline="decline" :open="open">
        <div class="Cookie__content">
          <slot name="message">{{ message }}</slot>
        </div>
        <div class="Cookie__buttons">
          <a
            :target="target"
            :href="buttonLink"
            v-if="externalButtonLink"
            :class="buttonClass"
          >
            {{ buttonLinkText }}
          </a>
          <OButton
            tag="router-link"
            :to="buttonLink"
            v-if="internalButtonLink"
            :class="buttonClass"
          >
            {{ buttonLinkText }}
          </OButton>
          <button
            v-if="buttonDecline"
            :class="buttonDeclineClass"
            @click="decline"
          >
            {{ buttonDeclineText }}
          </button>
          <button :class="buttonClass" @click="accept">{{ buttonText }}</button>
        </div>
      </slot>
    </div>
  </Transition>
</template>
