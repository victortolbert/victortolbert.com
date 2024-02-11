<script setup>
import moment from 'moment'

const startDate = ref(new Date(moment().add(14, 'days').toISOString()))
const endDate = ref(new Date(moment().add(5, 'days').toISOString()))
const showUnmatchedSpotsOnly = ref(false)

function onSubmit() {}
</script>

<template>
  <form
    class="vui-grid vui-grid--vertical-align-end vui-wrap"
    name="filterForm"
    novalidate=""
  >
    <fieldset class="vui-form-element">
      <label class="vui-form-element__label">Start Date</label>
      <div class="vui-form-element__control vui-m-right--x-small">
        <VuiDatepicker v-model="startDate" name="startDate" placeholder="MM/dd/yyyy" />
      </div>
    </fieldset>

    <fieldset class="vui-form-element">
      <label class="vui-form-element__label">End Date</label>
      <div class="vui-form-element__control vui-m-right--x-small">
        <VuiDatepicker v-model="endDate" name="endDate" placeholder="MM/dd/yyyy" />
      </div>
    </fieldset>

    <fieldset class="vui-form-element">
      <div class="vui-m-right--large">
        <input class="vui-button vui-button--brand" type="submit" value="Search" @click.prevent="onSubmit">
      </div>
    </fieldset>

    <fieldset class="vui-form-element">
      <label class="vui-checkbox">
        <input v-model="showUnmatchedSpotsOnly" name="unmatchedSpots" type="checkbox" value="false"><span class="vui-checkbox--faux" /><span class="vui-form-element__label">Unmatched Spots</span>
      </label>
    </fieldset>
  </form>
</template>
