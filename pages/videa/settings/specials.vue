<script setup>
// import moment from 'moment'

const newpassword = ref('')
const activeTab = ref('#specials-settings')
const newProgram = ref({})

const specials = ref([
  {
    name: 'Electronic Music Awards Show',
  },
  {
    name: 'Nascar: Charlotte',
  },
  {
    name: 'MLB: Braves v Nationals',
  },
  {
    name: 'Empire Finale',
  },
  {
    name: 'American Idol Series Finale Night 1',
  },
])

// const airDate = ref(new Date(moment().toISOString()))
const airDate = ref(new Date())
const searchKey = ref('')

// validators: {
//   confirm(val) {
//     return this.newpassword === val
//   },
// }

function onKeyup() {
  alert('on keyup')
}

function addNewProgram(program) {
  specials.value.push(program)
}

function onSubmit(event) {
  // // validate manually
  // this.$validate(true)

  // if (this.$validation.invalid)
  //   event.preventDefault()
}
</script>

<template>
  <div v-show="activeTab == &quot;#specials-settings&quot;" class="page settings specials vui-p-around--x-large vui-tabs--scoped__content" aria-labelledby="tab-scoped-3__item" role="tabpanel">
    <div class="vui-container--x-large">
      <p class="vui-text-longform vui-m-bottom--large">
        Please add an upcoming program for your station, and click submit for Videa to review.
      </p>
      <p>Fields marked <sup>*</sup> are required</p>
      <div class="vui-m-bottom--large">
        <table class="vui-table vui-no-row-hover">
          <thead>
            <tr>
              <th>Program Name <sup>*</sup></th>
              <th>Air Date <sup>*</sup></th>
              <th>Time Period <sup>*</sup></th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="special in specials">
              <td>
                <fieldset class="vui-form-element">
                  <div class="vui-form-element__control" />
                  <input class="vui-input" type="text">
                </fieldset>
              </td>
              <td>
                <form>
                  <fieldset class="vui-form-element">
                    <div class="vui-form-element__control vui-m-right--small">
                      <vui-datepicker id="fromDate" v-model="airDate" name="airDate" style="white-space: normal" />
                    </div>
                  </fieldset>
                </form>
              </td>
              <td>
                <fieldset class="vui-form-element">
                  <div class="vui-form-element__control">
                    <input class="vui-input" type="text">
                  </div>
                </fieldset>
              </td>
              <td>
                <fieldset class="vui-form-element">
                  <div class="vui-form-element__control">
                    <input class="vui-input" type="text">
                  </div>
                </fieldset>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="vui-grid vui-grid--align-end">
        <button class="vui-button vui-button--brand" @click.prevent="">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
