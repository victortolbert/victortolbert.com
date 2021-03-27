<!-- @vue-ignore -->
<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import {kebabCase} from 'lodash'

export default defineComponent({
  props: {
    paths: {
      type: Array,
      default() {
        return ['dashboard']
      },
    },
    person: {
        type: Object,
        default: () => ({
            name: 'Victor Tolbert',
            profilePhotoUrl: '',
        })
    },
    options: {
      type: Array,
      default() {
        return []
      },
    },
  },
  setup: () => {
    const { t, availableLocales, locale } = useI18n()
    return { t, availableLocales, locale }
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    show(path) {
      // .push({ path: 'register', query: { plan: 'private' } })
      this.$router.push(`/${kebabCase(path)}/`)
    },
    onClickAway(event) {
      console.log(event)
    },
    open() {
      this.isOpen = true
      // this.$nextTick(() => {
      //   this.$refs.search.focus()
      // })
    },
    close() {
      this.isOpen = false
      // this.$nextTick(() => {
      //   this.$refs.input.focus()
      // })
    },
    cancel() {
      this.close()
    },
  },
})
</script>

<template>
  <ODropdown aria-role="list">
    <div class="whitespace-nowrap" slot="trigger" slot-scope="{active}">
      <slot />
      <!-- <FontAwesomeIcon
        :icon="['fas', active ? 'caret-up' : 'caret-down']"
        class="inline-block ml-1 text-gray-400"
      /> -->
      <!-- <OIcon :icon="active ? 'caret-up' : 'caret-down'" class="text-gray-400" /> -->
    </div>
    <ODropdownItem
      v-for="path in paths"
      :key="path"
      @click="show(path)"
      aria-role="listitem"
    >
      {{ t(path) }}
    </ODropdownItem>
  </ODropdown>
</template>
