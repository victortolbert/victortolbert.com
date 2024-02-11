<script setup>
const newpassword = ref('')
const activeTab = ref('#reps-settings')
const showEditSalesRepsModal = ref(false)

const reps = ref([
  {
    name: 'John Adamy',
    phone: '770-145-3867',
    email: 'john.adamy@coxreps.com',
  },
  {
    name: 'Tony Admire',
    phone: '770-145-3937',
    email: 'tony.admire@coxreps.com',
  },
  {
    name: 'Phil Akens',
    phone: '770-145-7364',
    email: 'phil.akens@coxreps.com',
  },
])

const settings = ref({
})

// validators: {
//   confirm(val) {
//     return this.newpassword === val
//   },
// },

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
  <div
    v-show="activeTab === '#reps-settings'"
    class="page settings reps vui-p-around--x-large vui-tabs--scoped__content"
    aria-labelledby="tab-scoped-1__item"
    role="tabpanel"
  >
    <div class="vui-container--x-large">
      <h2 class="vui-text-heading--medium vui-m-bottom--medium">
        Current Sales Reps
      </h2>
      <div class="vui-scrollable--x vui-m-bottom--medium">
        <table class="vui-table">
          <thead>
            <tr>
              <th>Sales Rep</th>
              <th>Phone</th>
              <th>Email</th>
              <th class="vui-text-align--center">
                Price Guide Access
              </th>
              <th>Makegood Access</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="rep in reps" :key="rep.name">
              <td>{{ rep.name }}</td>
              <td>{{ rep.phone }}</td>
              <td><a href="mailto:you@example.com">{{ rep.email }}</a></td>
              <td class="vui-text-align--center">
                <label class="vui-checkbox">
                  <input id="checkbox-01" name="options" type="checkbox"><span class="vui-checkbox--faux" />
                </label>
              </td>
              <td>
                <div class="vui-form-element">
                  <label class="switch">
                    <input type="checkbox">
                    <div class="slider round" /><span class="option1">Read only</span><span class="option2">Create</span>
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button class="vui-button vui-button--brand">
        Submit
      </button>
      <VideaEditSalesRepsModal
        v-show="showEditSalesRepsModal"
        @close="showEditSalesRepsModal = false"
      />
    </div>
  </div>
</template>
