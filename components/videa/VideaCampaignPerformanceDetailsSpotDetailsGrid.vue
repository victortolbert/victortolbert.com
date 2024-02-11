<script>
import moment from 'moment'

const itemsLoaded = ref(true)
const itemsPresented = ref(true)
const items = ref([
  {
    buyLineNumber: 1,
    purchasedProgram: '7am News',
    formattedAirDate: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
    formattedAirDay: 'Tuesday',
    formattedAirTime: '7:07:39 AM',
    orderedTimePeriod: 'M-F 07:00 AM - 08:00 AM',
    orderedDates: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
    formattedSpotLength: ':30',
    rate: 350,
    hhRatingsIMPs: 2.5,
    actualRating: 1.3,
    purchasedRating: 1.5,
    plusMinus: -0.2,
    isciCode1: 'GIFW29755H',
  },
  {
    buyLineNumber: 1,
    purchasedProgram: '7am News',
    formattedAirDate: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
    formattedAirDay: 'Thursday',
    formattedAirTime: '7:57:57 AM',
    orderedTimePeriod: 'M-F 07:00 AM - 08:00 AM',
    orderedDates: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
    formattedSpotLength: ':30',
    rate: 350,
    hhRatingsIMPs: 1.9,
    actualRating: 1.0,
    purchasedRating: 1.5,
    plusMinus: -0.5,
    isciCode1: 'GIFW29755H',
  },
  {
    buyLineNumber: 1,
    purchasedProgram: '7am News',
    formattedAirDate: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
    formattedAirDay: 'Friday',
    formattedAirTime: '6:59:08 AM',
    orderedTimePeriod: 'M-F 07:00 AM - 08:00 AM',
    orderedDates: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
    formattedSpotLength: ':30',
    rate: 350,
    hhRatingsIMPs: 2.7,
    actualRating: 1.4,
    purchasedRating: 1.5,
    plusMinus: -0.1,
    isciCode1: 'GIFW29755H',
  },
  {
    buyLineNumber: 2,
    purchasedProgram: '7am News',
    formattedAirDate: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
    formattedAirDay: 'Monday',
    formattedAirTime: '7:27:58 AM',
    orderedTimePeriod: 'M-F 07:00 AM - 08:00 AM',
    orderedDates: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
    formattedSpotLength: ':30',
    rate: 350,
    hhRatingsIMPs: 2.3,
    actualRating: 1.2,
    purchasedRating: 1.5,
    plusMinus: -0.3,
    isciCode1: 'GIFW29755H',
  },
  {
    buyLineNumber: 2,
    purchasedProgram: '7am News',
    formattedAirDate: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
    formattedAirDay: 'Wednesday',
    formattedAirTime: '7:32:08 AM',
    orderedTimePeriod: 'M-F 07:00 AM - 08:00 AM',
    orderedDates: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
    formattedSpotLength: ':30',
    rate: 350,
    hhRatingsIMPs: 2.5,
    actualRating: 1.3,
    purchasedRating: 1.5,
    plusMinus: -0.2,
    isciCode1: 'GIFW29755H',
  },
  {
    buyLineNumber: 2,
    purchasedProgram: '7am News',
    formattedAirDate: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
    formattedAirDay: 'Thursday',
    formattedAirTime: '7:28:51 AM',
    orderedTimePeriod: 'M-F 07:00 AM - 08:00 AM',
    orderedDates: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
    formattedSpotLength: ':30',
    rate: 350,
    hhRatingsIMPs: 1.7,
    actualRating: 0.9,
    purchasedRating: 1.5,
    plusMinus: -0.6,
    isciCode1: 'GIFW29755H',
  },
  {
    isRunNotOrdered: true,
    buyLineNumber: 8,
    purchasedProgram: '7am News',
    formattedAirDate: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
    formattedAirDay: 'Tuesday',
    formattedAirTime: '8:07:20 AM',
    orderedTimePeriod: 'M-F 07:00 AM - 08:00 AM',
    orderedDates: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
    formattedSpotLength: ':30',
    rate: 350,
    hhRatingsIMPs: 2.1,
    actualRating: 1.1,
    purchasedRating: 1.5,
    plusMinus: -0.4,
    isciCode1: 'GIFW29755H',
  },
  {
    buyLineNumber: 23,
    purchasedProgram: '8am News',
    formattedAirDate: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
    formattedAirDay: 'Monday',
    formattedAirTime: '8:55:30 AM',
    orderedTimePeriod: 'M-F 08:00 AM - 09:00 AM',
    orderedDates: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
    formattedSpotLength: ':30',
    rate: 350,
    hhRatingsIMPs: 2.1,
    actualRating: 1.1,
    purchasedRating: 1.7,
    plusMinus: -0.6,
    isciCode1: 'GIFW29755H',
  },
  {
    buyLineNumber: 23,
    purchasedProgram: '8am News',
    formattedAirDate: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
    formattedAirDay: 'Wednesday',
    formattedAirTime: '8:44:59 AM',
    orderedTimePeriod: 'M-F 08:00 AM - 09:00 AM',
    orderedDates: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
    formattedSpotLength: ':30',
    rate: 350,
    hhRatingsIMPs: 2.5,
    actualRating: 1.3,
    purchasedRating: 1.7,
    plusMinus: -0.4,
    isciCode1: 'GIFW29755H',
  },
])

const footer = ref({
  rate: 2800,
  hhRatingsIMPs: 18.2,
  actualRating: 9.5,
  purchasedRating: 12.4,
  plusMinus: -2.9,
})
</script>

<template>
  <div class="vui-scrollable--x">
    <table class="vui-table vui-m-bottom--small">
      <thead>
        <tr>
          <th data-column-name="buyLineNumber">
            <VuiSortingColumn title="Buy Line" />
          </th>
          <th data-column-name="purchasedProgram">
            <VuiSortingColumn title="Program" />
          </th>
          <th data-column-name="airDate">
            <VuiSortingColumn title="Air Date" />
          </th>
          <th data-column-name="airDay">
            <VuiSortingColumn title="Day" />
          </th>
          <th data-column-name="airTime">
            <VuiSortingColumn title="Air Time" />
          </th>
          <th data-column-name="orderedTimePeriod">
            <VuiSortingColumn title="Ordered Time Period" />
          </th>
          <th data-column-name="orderedDates">
            <VuiSortingColumn title="Ordered Dates" />
          </th>
          <th data-column-name="spotLength">
            <VuiSortingColumn title="Spot Length" />
          </th>
          <th data-column-name="rate">
            <VuiSortingColumn title="Rate" />
          </th>
          <th data-column-name="hhRatingsIMPs">
            <VuiSortingColumn title="HH RTG/IMP &lt;sup&gt;1&lt;/sup&gt;" />
          </th>
          <th data-column-name="actualRating">
            <VuiSortingColumn title="Actual RTG/IMP &lt;sup&gt;1&lt;/sup&gt;" />
          </th>
          <th data-column-name="purchasedRating">
            <VuiSortingColumn title="Purchased RTG/IMP" />
          </th>
          <th data-column-name="difference">
            <VuiSortingColumn title="+/-" />
          </th>
          <th data-column-name="isciCode1">
            <VuiSortingColumn title="Ad ID" />
          </th>
        </tr>
      </thead>
      <tbody v-if="itemsLoaded && itemsPresented">
        <tr v-for="item in items" :key="item">
          <td class="vui-truncate vui-text-align--right" :title="item.buyLineNumber" data-column-name="buyLineNumber">
            {{ item.buyLineNumber }}
          </td>
          <td class="vui-truncate" :title="item.purchasedProgram" data-column-name="purchasedProgram">
            {{ item.purchasedProgram }}
          </td>
          <td class="vui-truncate" :title="item.formattedAirDate" data-column-name="airDate">
            {{ item.formattedAirDate }}
          </td>
          <td class="vui-truncate" :title="item.formattedAirDay" data-column-name="airDay">
            {{ item.formattedAirDay }}
          </td>
          <td class="vui-truncate" :title="item.formattedAirTime " data-column-name="airTime">
            <div class="vui-grid--align-spread">
              <span>{{ item.formattedAirTime }}</span><span v-if="item.isRunNotOrdered">
                <vui-icon class="vui-m-left--x-small" name="stop" style="color: #C5103D" /></span>
            </div>
          </td>
          <td class="vui-truncate" data-column-name="orderedTimePeriod">
            {{ item.orderedTimePeriod }}
          </td>
          <td class="vui-truncate" data-column-name="orderedDates">
            {{ item.orderedDates }}
          </td><td class="vui-truncate vui-text-align--right" :title="item.formattedSpotLength" data-column-name="spotLength">
            {{ item.formattedSpotLength }}
          </td>
          <!-- </td> -->
          <td class="vui-truncate vui-text-align--right" :title="item.rate" data-column-name="rate">
            ${{ item.rate }}
          </td>
          <td class="vui-truncate vui-text-align--right" :title="item.hhRatingsIMPs" data-column-name="hhRatingsIMPs">
            {{ item.hhRatingsIMPs }}
          </td>
          <td class="vui-truncate vui-text-align--right" :title="item.actualRating" data-column-name="actualRating">
            {{ item.actualRating }}
          </td>
          <td class="vui-truncate vui-text-align--right" :title="item.purchasedRating" data-column-name="purchasedRating">
            {{ item.purchasedRating }}
          </td>
          <td class="vui-truncate vui-text-align--right" data-column-name="difference">
            <span :title="item.plusMinus" difference-text-color="" value="item.plusMinus">{{ item.plusMinus }}</span>
          </td>
          <td class="vui-truncate" :title="item.isciCode1" data-column-name="isciCode1">
            {{ item.isciCode1 }}
          </td>
        </tr>
      </tbody>
      <tfoot ng-show="itemsLoaded && itemsPresented">
        <tr>
          <td class="vui-truncate" colspan="8" title="TOTAL">
            TOTAL
          </td>
          <td class="vui-truncate" :title="footer.rate">
            <!-- ${{ footer.rate | numberWithCommas }} -->
            ${{ footer.rate }}
          </td>
          <td class="vui-text-align--right vui-truncate" :title="footer.hhRatingsIMPs">
            {{ footer.hhRatingsIMPs }}
          </td>
          <td class="vui-text-align--right vui-truncate" :title="footer.actualRating">
            {{ footer.actualRating }}
          </td>
          <td class="vui-text-align--right vui-truncate" :title="footer.purchasedRating">
            {{ footer.purchasedRating }}
          </td>
          <td class="vui-text-align--right vui-truncate">
            <span :title="footer.plusMinus" difference-text-color="" style="color: rgb(197, 32, 62)" value="footer.plusMinus">{{ footer.plusMinus }}</span>
          </td>
          <td />
        </tr>
      </tfoot>
    </table>
  </div>
</template>
