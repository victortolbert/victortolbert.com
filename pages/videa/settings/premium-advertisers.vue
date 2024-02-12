<script setup>
const newpassword = ref('')
const activeTab = ref('#premium-advertisers')

const account = ref({
  clients: [
    {
      agency: 'Zone Group Advertising',
      advertiser: 'Papa John\'s Pizza',
      premium: true,
    },
    {
      agency: 'Auto Advertising Partners',
      advertiser: 'Southeast Ford',
      premium: true,
    },
    {
      agency: 'Vanthrop and Associates',
      advertiser: 'Community Loans, Inc.',
      premium: true,
    },
    {
      agency: 'The Media Masters Group',
      advertiser: 'Metro Wireless',
      premium: true,
    },
    {
      agency: 'Huges-Martin Agency',
      advertiser: 'Piedmont Healthcare',
      premium: false,
    },
    {
      agency: 'Mullberry Way Group',
      advertiser: 'Sun Valley Bank',
      premium: true,
    },
  ],
})

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
  <div v-show="activeTab === '#premium-advertisers'" class="page settings premium-advertisers vui-p-around--x-large vui-tabs--scoped__content" aria-labelledby="tab-scoped-3__item" role="tabpanel">
    <h2 class="vui-text-heading--medium vui-m-bottom--medium">
      Premium Advertisers
    </h2>
    <p class="vui-text-longform vui-m-bottom--large">
      Manage your premium advertisers. Premium clients will be affected by the premium pricing on the price guide.
    </p>
    <form class="vui-form--inline vui-m-bottom--large">
      <fieldset class="vui-form-element">
        <label class="vui-form-element__label" for="search" />
        <div class="vui-form-element__control">
          <input id="search" class="vui-input" placeholder="Search" style="width: 24rem" type="text">
        </div>
      </fieldset>
      <fieldset class="vui-form-element">
        <button class="vui-button vui-button--brand" type="submit">
          Search
        </button>
      </fieldset>
    </form>
    <div class="vui-scrollable--x">
      <table class="vui-table vui-no-row-hover">
        <thead>
          <tr>
            <th>Agency</th>
            <th>Client</th>
            <th class="vui-text-align--center">
              Premium
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="client in account.clients" :key="client.agency">
            <td>{{ client.agency }}</td>
            <td>{{ client.advertiser }}</td>
            <td class="vui-text-align--center">
              <label class="vui-checkbox">
                <input id="checkbox-01" :checked="client.premium" name="options" type="checkbox"><span class="vui-checkbox--faux" />
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
