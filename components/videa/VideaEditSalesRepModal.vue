<script setup>
const comment = ref('')
const reps = ref([
  {
    name: 'Adamy, John',
    office: 'New York, NY',
    checked: false,
  },
  {
    name: 'Admire, Tony',
    office: 'Austin, TX',
    checked: false,
  },
  {
    name: 'Akens, Phil',
    office: 'New York, NY',
    checked: false,
  },
  {
    name: 'Aden, Michael',
    office: 'Chicago, IL',
    checked: false,
  },
  {
    name: 'Adel, Joe',
    office: 'Atlanta, GA',
    checked: false,
  },
])
</script>

<template>
  <VuiModal size="large">
    <div class="modal-header vui-m-bottom--large">
      <h3 class="vui-text-heading--medium">
        Edit Sales Rep
      </h3>
    </div>
    <div class="modal-body">
      <p class="vui-m-bottom--small">
        Check the box next to the Sales rep you would like to add. Uncheck the box to remove a Sales Rep.
      </p>
      <form>
        <fieldset class="vui-form-element vui-m-bottom--large">
          <input class="vui-input" placeholder="Search">
        </fieldset>
        <div class="vui-scrollable--x">
          <table class="vui-table vui-m-bottom--medium">
            <thead>
              <tr>
                <th />
                <th>Sales Rep</th>
                <th>Office</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(index, rep) in reps" :key="rep.name">
                <td class="u-width-xx-small vui-text-align--center">
                  <div class="vui-form-element">
                    <div class="vui-form-element__control">
                      <div class="vui-checkbox">
                        <input type="checkbox" :checked="rep.checked"><span class="vui-checkbox--faux" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{{ rep.name }}</td>
                <td>{{ rep.office }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="vui-grid vui-grid--align-end">
          <fieldset class="vui-form-element">
            <button class="vui-button vui-button--neutral vui-m-right--xx-small" @click.prevent="close">
              Cancel
            </button>
            <button class="vui-button vui-button--brand">
              Save
            </button>
          </fieldset>
        </div>
      </form>
    </div>
  </VuiModal>
</template>
