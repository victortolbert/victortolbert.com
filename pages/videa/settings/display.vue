<script setup>
import { demographics } from '~/data'

const newpassword = ref('')
const stationAudienceShare = ref('0.31')
const activeTab = ref('#display-settings')
const demographics2 = ref([
  {
    teen: [
      {
        group: '12+',
        checked: false,
      },
      {
        group: '12-17',
        checked: false,
      },
      {
        group: '12-20',
        checked: false,
      },
    ],
  },
  {
    'young-adult': [
      {
        group: '18+',
        checked: false,
      },
      {
        group: '18-24',
        checked: false,
      },
      {
        group: '18-34',
        checked: true,
      },
      {
        group: '18-49',
        checked: true,
      },
      {
        group: '18-54',
        checked: false,
      },
      {
        group: '18-64',
        checked: false,
      },
    ],
  },
  {
    adult: [
      {
        group: '21+',
        checked: false,
      },
      {
        group: '21-24',
        checked: false,
      },
      {
        group: '21-34',
        checked: false,
      },
      {
        group: '21-49',
        checked: false,
      },
      {
        group: '21-54',
        checked: false,
      },
      {
        group: '21-64',
        checked: false,
      },
      {
        group: '25-49',
        checked: true,
      },
      {
        group: '25-54',
        checked: true,
      },
      {
        group: '25-64',
        checked: false,
      },
    ],
  },
  {
    'older-adult': [
      {
        group: '35+',
        checked: false,
      },
      {
        group: '35-54',
        checked: false,
      },
      {
        group: '35-64',
        checked: false,
      },
    ],
  },
  {
    senior: [
      {
        group: '50+',
        checked: false,
      },
      {
        group: '55+',
        checked: false,
      },
      {
        group: '65+',
        checked: false,
      },
    ],
  },
])

function onKeyup() {
  alert('on keyup')
}

function onSubmit(event) {
  // // validate manually
  // this.$validate(true)

  // if (this.$validation.invalid)
  //   event.preventDefault()
}
</script>

<template>
  <div v-show="activeTab === '#display-settings'" class="page settings display vui-p-around--x-large vui-tabs--scoped__content" aria-labelledby="tab-scoped-3__item" role="tabpanel">
    <form class="vui-container--medium">
      <div class="vui-grid vui-grid--align-spread">
        <div class="vui-col vui-size--12-of-12 vui-medium-size--1-of-2 vui-large-size--1-of-2 vui-p-right--xx-large">
          <fieldset class="vui-form-element vui-m-bottom--large">
            <label class="vui-form-element__label" for="stationAudienceShare">Station Share Goal</label>
            <div class="vui-form-element__control">
              <input id="stationAudienceShare" v-model="$store.state.settings.stationAudienceShare" class="vui-input" type="text">
            </div>
            <div class="vui-form-element__help">
              Format xx.xx%
            </div>
          </fieldset>
          <fieldset class="vui-form-element vui-m-bottom--large">
            <label class="vui-form-element__label" for="numberOfTableRows">Default number of table rows</label>
            <div class="vui-form-element__control">
              <div class="vui-select_container">
                <select id="numberOfTableRows" class="vui-select">
                  <option>25</option>
                </select>
              </div>
            </div>
          </fieldset>
        </div>
        <div class="vui-size--12-of-12 vui-medium-size--1-of-2 vui-large-size--1-of-2">
          <fieldset class="vui-form-element vui-m-bottom--large">
            <label class="vui-form-element__label" for="primaryDemographic">Primary Demographic</label>
            <div class="vui-form-element__control">
              <div class="vui-select_container">
                <select id="primaryDemographic" class="vui-select">
                  <option>P25-54</option>
                </select>
              </div>
            </div>
          </fieldset>
          <legend class="vui-form-element__label">
            Additional Demographics
          </legend>
          <div class="vui-grid vui-grid--align-spread vui-p-around--x-large">
            <div v-for="(demoGroup, i) in demographics" :key="`demographic-${i}`">
              <fieldset v-for="(value, j) in demoGroup" :key="`demo-${j}`" class="vui-form-element vui-m-bottom--small">
                <div v-for="item in value" :key="`item-${item.group}`" class="vui-form-element__control">
                  <label class="vui-checkbox">
                    <input id="checkbox-01" :checked="item.checked" name="options" type="checkbox"><span class="vui-checkbox--faux" /><span class="vui-form-element__label">{{ item.group }}</span>
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <div class="vui-form-element">
        <button class="vui-button vui-button--brand vui-m-right--xx-small" @click.prevent="">
          Save
        </button>
        <button class="vui-button vui-button--neutral" @click.prevent="">
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>
