<script setup>
// Hooray! Here comes YNAB!
import * as YNAB from 'ynab'

// Import our config for YNAB
// import config from './config.json'

const config = {
  clientId: 'a56948bc5fe6e80c1a241151611a53350518c119ea413de4375694ebebbd68e0',
  redirectUri: 'https://ynab.github.io/ynab-api-starter-kit/',
}

const ynab = ref({
  clientId: config.clientId,
  redirectUri: config.redirectUri,
  token: null,
  api: null,
})

const loading = ref(false)
const error = ref(null)
const budgetId = ref(null)
const budgets = ref([])
const transactions = ref([])

onBeforeMount(() => {
  ynab.value.token = findYNABToken()

  if (ynab.value.token) {
    // eslint-disable-next-line new-cap
    ynab.value.api = new YNAB.api(ynab.value.token)
    if (!budgetId.value)
      getBudgets()
    else
      selectBudget(budgetId.value)
  }
})

// This uses the YNAB API to get a list of budgets
function getBudgets() {
  loading.value = true
  error.value = null

  ynab.value.api.budgets.getBudgets().then((res) => {
    budgets.value = res.data.budgets
  }).catch((err) => {
    error.value = err.error.detail
  }).finally(() => {
    loading.value = false
  })
}

// This selects a budget and gets all the transactions in that budget
function selectBudget(id) {
  loading.value = true
  error.value = null
  budgetId.value = id
  transactions.value = []

  ynab.value.api.transactions.getTransactions(id).then((res) => {
    transactions.value = res.data.transactions
  }).catch((err) => {
    error.value = err.error.detail
  }).finally(() => {
    loading.value = false
  })
}

// This builds a URI to get an access token from YNAB
// https://api.ynab.com/#outh-applications
function authorizeWithYNAB(event) {
  event.preventDefault()

  const uri = `https://app.ynab.com/oauth/authorize?client_id=${ynab.value.clientId}&redirect_uri=${ynab.value.redirectUri}&response_type=token`
  location.replace(uri)
}

// Method to find a YNAB token
// First it looks in the location.hash and then sessionStorage
function findYNABToken() {
  let token = null
  const search = window.location.hash.substring(1).replace(/&/g, '","').replace(/=/g, '":"')

  if (search && search !== '') {
    // Try to get access_token from the hash returned by OAuth
    const params = JSON.parse(`{"${search}"}`, (key, value) => {
      return key === '' ? value : decodeURIComponent(value)
    })
    token = params.access_token
    sessionStorage.setItem('ynab_access_token', token)
    window.location.hash = ''
  }
  else {
    // Otherwise try sessionStorage
    token = sessionStorage.getItem('ynab_access_token')
  }
  return token
}

// Clear the token and start authorization over
function resetToken() {
  sessionStorage.removeItem('ynab_access_token')
  ynab.value.token = null
  error.value = null
}
</script>

<template>
  <article>
    <BudgetNavbar />

    <div class="container">
      <!-- Display a loading message if loading -->
      <h1 v-if="loading" class="display-4">
        Loading...
      </h1>

      <!-- Display an error if we got one -->
      <div v-if="error">
        <h1 class="display-4">
          Oops!
        </h1>
        <p class="lead">
          {{ error }}
        </p>
        <button class="btn btn-primary" @click="resetToken">
          Try Again &gt;
        </button>
      </div>

      <!-- Otherwise show our app contents -->
      <div v-else>
        <!-- If we dont have a token ask the user to authorize with YNAB -->
        <form v-if="!ynab.token">
          <h1 class="display-4">
            Congrats!
          </h1>
          <p class="lead">
            You have successfully initialized a new YNAB API Application!
          </p>
          <p>
            The next step is the OAuth configuration, you can
            <a href="https://github.com/ynab/ynab-api-starter-kit#step-2-obtain-an-oauth-client-id-so-the-app-can-access-the-ynab-api">read
              detailed instructions in the README.md</a>. Essentially:
          </p>
          <ul>
            <li>Make sure to be logged into your YNAB account, go to your <a href="https://app.ynab.com/settings/developer" target="_blank" rel="noopener noreferrer">YNAB Developer Settings</a> and create a new OAuth Application.</li>
            <li>Enter the URL of this project as a Redirect URI (in addition to the existing three options), then "Save Application."</li>
            <li>Copy your Client ID and Redirect URI into the <em>src/config.json</em> file of your project.</li>
            <li>Then build your amazing app!</li>
          </ul>
          <p>If you have any questions please reach out to us at <strong>api@ynab.com</strong>.</p>
          <p>&nbsp;</p>

          <div class="form-group">
            <h2>Hello!</h2>
            <p class="lead">
              If you would like to use this App, please authorize with YNAB!
            </p>
            <button class="btn btn-primary" @click="authorizeWithYNAB">
              Authorize This App With YNAB &gt;
            </button>
          </div>
        </form>

        <!-- Otherwise if we have a token, show the budget select -->
        <BudgetList v-else-if="!budgetId" :budgets="budgets" :select-budget="selectBudget" />

        <!-- If a budget has been selected, display transactions from that budget -->
        <div v-else>
          <BudgetTransactions :transactions="transactions" />

          <button class="btn btn-info" @click="budgetId = null">
            &lt; Select Another Budget
          </button>
        </div>
      </div>

      <BudgetFooter />
    </div>
  </article>
</template>
