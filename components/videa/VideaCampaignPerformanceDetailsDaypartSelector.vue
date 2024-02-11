<script setup>
const dayparts = ref([
  { dayPartName: 'Early Morning', isActive: true },
  { dayPartName: 'Daytime', isActive: true },
  { dayPartName: 'Early Fringe', isActive: true },
  { dayPartName: 'Prime Access', isActive: true },
  { dayPartName: 'Prime', isActive: true },
  { dayPartName: 'Late News', isActive: true },
  { dayPartName: 'Late Fringe', isActive: true },
  { dayPartName: 'Overnight', isActive: true },
])
</script>

<template>
  <div class="vui-grid vui-grid--vertical vui-container--fluid">
    <div id="daypart-selector" class="vui-grid vui-m-bottom--small vui-container--fluid">
      <button
        v-if="dayParts"
        class="vui-col vui-button vui-max-small-buttons--stretch vui-button--brand"
        :class="{ 'vui-button--brand': isSelectedAllDayParts, 'vui-button--neutral': !isSelectedAllDayParts }" @click="selectAllDayParts"
      >
        All Dayparts
      </button>
      <button
        v-for="dayPart in dayParts"
        :key="dayPart.dayPartName"
        class="vui-col vui-button vui-max-small-buttons--stretch vui-button--neutral"
        :class="{
          'vui-button--brand': isSelectedDayPart(dayPart) && !isSelectedAllDayParts,
          'vui-button--neutral': !isSelectedDayPart(dayPart) || isSelectedAllDayParts,
        }"
        :disabled="!dayPart.isActive"
        @click="selectDayPart(dayPart)"
      >
        {{ dayPart.dayPartName }}
      </button>
    </div>
  </div>
</template>
