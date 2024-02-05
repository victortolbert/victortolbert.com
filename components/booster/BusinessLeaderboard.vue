<script>
import axios from 'axios'

const VIEW_LESS_NUMBER = 5

export default {
  props: {
    program: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      showAll: false,
      businessPledges: [],
    }
  },
  computed: {
    lang() {
      return this.$store.state.lang
    },
    fr_code() {
      return this.program.participants.find(participant => participant.deleted !== 1).fr_code
    },
    business_leaderboard_heading_1() {
      return this.parseLanguage(
        this.lang.business_leaderboard_heading_1,
        {
          event_name: this.program.event_name,
        },
      )
    },
    hasBusinessPledges() {
      return this.businessPledges.length > 0
    },
    businessPledgesToShow() {
      return this.showAll ? this.businessPledges : this.businessPledges.slice(0, VIEW_LESS_NUMBER)
    },
    shouldShowViewMore() {
      return this.businessPledges.length > VIEW_LESS_NUMBER
    },
  },
  created() {
    axios.get(`/v3/api/business-leaderboard-pledges/${this.program.id}`)
      .then((response) => {
        this.businessPledges = response.data
      }).catch((error) => {
        console.error(error)
      })
  },
  methods: {
    currency(val, addCommas, currencySymbol) {
      let value = Number.parseFloat(val)
      if (Math.floor(value) === value)
        value = value.toFixed(0)

      else
        value = value.toFixed(2)

      if (typeof (addCommas) !== 'undefined' && addCommas)
        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

      if (typeof (currencySymbol) !== 'undefined')
        value = currencySymbol + value

      return value
    },
    toggle() {
      this.showAll = !this.showAll
    },
    pledgeTotal(pledge) {
      const totals = { low: 0, high: 0 }
      if (pledge.laps) {
        totals.low = pledge.total_est
        totals.high = pledge.total_est
      }
      else if (pledge.pledge_type_id === 1) {
        totals.low = Number.parseFloat(pledge.amount) * this.program.unit_range_low
        totals.high = Number.parseFloat(pledge.amount) * this.program.unit_range_high
      }
      else {
        totals.low = Number.parseFloat(pledge.amount)
        totals.high = Number.parseFloat(pledge.amount)
      }
      let totalsString = currency(totals.low, true, '$')
      if (totals.low !== totals.high)
        totalsString += ` to ${currency(totals.high, true, '$')}`

      return totalsString
    },
  },
}
</script>

<template>
  <div class="business-leaderboard card-content px-7 py-4">
    <p class="mb-8">
      {{ business_leaderboard_heading_1 }} <a
        :href="`/v3/tkdashboard/?redirect=auth/login/${fr_code}/view-participant/pledge`"
        class="text-secondary font-bold"
      >{{ lang.business_leaderboard_heading_2 }}</a> {{ lang.business_leaderboard_heading_3 }}
    </p>

    <table class="is-fullwidth mb-8 table -mx-3">
      <tbody v-if="hasBusinessPledges">
        <tr
          v-for="(businessPledge, index) in businessPledgesToShow"
          :key="businessPledge.id"
        >
          <td>
            <h3>
              {{ index + 1 }}.
              <a
                v-if="businessPledge.business_website"
                :href="businessPledge.business_website"
                target="_blank"
              >{{ businessPledge.business_name }}</a>
              <span v-else>{{ businessPledge.business_name }}</span>
            </h3>
            <h4 v-if="businessPledge.comment && businessPledge.show_comment === 1">
              {{ businessPledge.comment }}
            </h4>
          </td>
          <td class="whitespace-no-wrap text-right">
            {{ pledgeTotal(businessPledge) }}
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td>
            <h3>{{ lang.top_business_pledge }}</h3>
            <h4>{{ lang.note_goes_here }}</h4>
          </td>
          <td class="text-right">
            {{ lang.pledge_placeholder_amount }}
          </td>
        </tr>
      </tbody>
    </table>

    <div
      v-if="shouldShowViewMore"
      class="text-center"
    >
      <button
        class="button is-white has-text-secondary has-text-weight-bold"
        @click.prevent="toggle"
      >
        {{ showAll ? `${lang.show} ${lang.less}` : `${lang.show} ${lang.more}` }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.text-right {
  text-align: right !important;
}
.table tbody tr:last-child td {
  border-bottom-width: 1px;
}
</style>
