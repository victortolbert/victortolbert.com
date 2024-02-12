<script setup>
import moment from 'moment'

defineProps({
  avails: {
    type: Array,
  },
  availRoute: {
    type: String,
    default: 'sellers-avails-id',
  },
})

const testDate = ref(new Date('05 October 2011 14:48 UTC').toISOString())
const releasedDate = ref(moment().format('MM/DD/YY'))
const lastUpdated = ref(moment().startOf('day').hour(7).format('MM/DD/YY HH:mm A'))
const dateSubmitted = ref(moment().add(-1, 'days').format('MM/DD/YY'))

function toggleDetail(avail) {
  avail.expanded = !avail.expanded
}
</script>

<template>
  <div class="avails-summary-grid vui-scrollable--x">
    <table class="vui-table vui-no-row-hover">
      <thead>
        <tr>
          <th>
            <a class="vui-grid vui-grid--align-spread" href="#" @click.prevent=""><span class="vui-align-middle">Avail #</span><span class="vui-align-middle">
              <VuiIcon name="sort-asc" style="color: hsla(192, 9%, 89%, 1)" /></span></a>
          </th>
          <th>
            <a class="vui-grid vui-grid--align-spread" href="#" @click.prevent=""><span class="vui-align-middle">Status</span><span class="vui-align-middle">
              <VuiIcon name="sort-asc" style="color: hsla(192, 9%, 89%, 1)" /></span></a>
          </th>
          <th>
            <a class="vui-grid vui-grid--align-spread" href="#" @click.prevent=""><span class="vui-align-middle">Released Date</span><span class="vui-align-middle">
              <VuiIcon name="sort-asc" style="color: hsla(192, 9%, 89%, 1)" /></span></a>
          </th>
          <th>
            <a class="vui-grid vui-grid--align-spread" href="#" @click.prevent=""><span class="vui-align-middle">Advertiser</span><span class="vui-align-middle">
              <VuiIcon name="sort" style="color: hsla(192, 9%, 89%, .5)" /></span></a>
          </th>
          <th>
            <a class="vui-grid vui-grid--align-spread" href="#" @click.prevent=""><span class="vui-align-middle">Product</span><span class="vui-align-middle">
              <VuiIcon name="sort" style="color: hsla(192, 9%, 89%, .5)" /></span></a>
          </th>
          <th>
            <a class="vui-grid vui-grid--align-spread" href="#" @click.prevent=""><span class="vui-align-middle">Estimate #</span><span class="vui-align-middle">
              <VuiIcon name="sort" style="color: hsla(192, 9%, 89%, .5)" /></span></a>
          </th>
          <th>
            <a class="vui-grid vui-grid--align-spread" href="#" @click.prevent=""><span class="vui-align-middle">Start</span><span class="vui-align-middle">
              <VuiIcon name="sort" style="color: hsla(192, 9%, 89%, .5)" /></span></a>
          </th>
          <th>
            <a class="vui-grid vui-grid--align-spread" href="#" @click.prevent=""><span class="vui-align-middle">End</span><span class="vui-align-middle">
              <VuiIcon name="sort" style="color: hsla(192, 9%, 89%, .5)" /></span></a>
          </th>
          <th>
            <a class="vui-grid vui-grid--align-spread" href="#" @click.prevent=""><span class="vui-align-middle">Agency</span><span class="vui-align-middle">
              <VuiIcon name="sort" style="color: hsla(192, 9%, 89%, .5)" /></span></a>
          </th>
          <th>
            <a class="vui-grid vui-grid--align-spread" href="#" @click.prevent=""><span class="vui-align-middle">Last Updated</span><span class="vui-align-middle">
              <VuiIcon name="sort" style="color: hsla(192, 9%, 89%, .5)" /></span></a>
          </th>
        </tr>
      </thead>
      <tbody v-for="avail in avails" :key="avail">
        <tr>
          <td :style="!avail.versions ? 'padding-left: 1.5rem' : ''">
            <a v-if="avail.versions" href="#" @click.prevent="toggleDetail(avail)">
              <VuiIcon class="VuiIcon--small vui-align-middle" :name="avail.expanded ? 'caret-lower-right' : 'caret-right'" style="margin-left: -0.5rem" /></a>
            <router-link :to="{ name: 'sellers-avails-id', params: { id: avail.id } }">
              {{ avail.id }}
            </router-link>
          </td>
          <td><span class="vui-badge" :class="avail.availStatus">{{ avail.availStatus }}</span></td>
          <td>{{ avail.id === 65733 ? releasedDate : avail.releasedDate }}</td>
          <td>{{ avail.advertiser }}</td>
          <td>{{ avail.product }}</td>
          <td>{{ avail.estimateNumber }}</td>
          <td>{{ avail.flightStartDate }}</td>
          <td>{{ avail.flightEndDate }}</td>
          <td>{{ avail.agency }}</td>
          <td>{{ avail.id === 65733 ? lastUpdated : avail.lastUpdated }}</td>
        </tr>
        <tr v-show="avail.expanded">
          <td class="expanded" colspan="10">
            <div class="vui-box vui-theme--shade vui-grid vui-grid--align-spread vui-m-top--medium">
              <h3 class="vui-text-heading--small">
                Version History
              </h3>
            </div>
            <table class="vui-table vui-no-row-hover vui-m-bottom--large" style="background: white">
              <thead>
                <tr>
                  <th>Version</th>
                  <th>Date Submitted</th>
                  <th>Time Submitted</th>
                  <th>Submitted by</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr v-for="version in avail.versions" :key="version">
                  <td>{{ version.id }}</td>
                  <td>{{ avail.id === 65733 ? dateSubmitted : version.dateSubmitted }}</td>
                  <td>{{ version.timeSubmitted }}</td>
                  <td>{{ version.submittedBy }}</td>
                  <td>
                    <router-link :to="{ name: 'sellers-avails-id', params: { id: avail.id }, query: { version: version.id } }">
                      View
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
