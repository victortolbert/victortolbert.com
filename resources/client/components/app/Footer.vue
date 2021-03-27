<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { isDark, toggleDark } from '~/logics'
import TypeScriptIcon from '~/assets/svg/typescript.svg'

const { t, availableLocales, locale } = useI18n()
const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav class="flex mt-6 text-xl">
    <TypeScriptIcon class="w-5 h-5" />
    <button
      class="mx-2 icon-btn"
      :title="t('button.toggle_dark')"
      @click="toggleDark"
    >
      <CarbonMoon v-if="isDark" />
      <CarbonSun v-else />
    </button>

    <button
      class="mx-2 icon-btn"
      :title="t('button.toggle_langs')"
      @click="toggleLocales"
    >
      <CarbonLanguage />
    </button>

    <RouterLink class="mx-2 icon-btn" to="/about" :title="t('button.about')">
      <CarbonDicomOverlay />
    </RouterLink>
  </nav>
</template>
