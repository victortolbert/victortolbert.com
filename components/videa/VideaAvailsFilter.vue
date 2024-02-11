<script setup>
const selectedStatus = ref('All Avails')
const statuses = ref([
  'All Avails',
  'Pending Buyer Request',
  'Released',
])
</script>

<template>
  <form class="vui-grid vui-grid--vertical-align-end" action="">
    <fieldset class="vui-form-element vui-m-right--small">
      <label class="vui-form-element__label">Advertiser</label>
      <div class="vui-form-element__control">
        <input class="vui-input" name="advertiser" placeholder="Advertiser" type="text">
      </div>
    </fieldset>
    <fieldset class="vui-form-element vui-m-right--small">
      <label class="vui-form-element__label">Agency</label>
      <div class="vui-form-element__control">
        <input class="vui-input" name="agency" placeholder="Agency" type="text">
      </div>
    </fieldset>
    <fieldset class="vui-form-element vui-m-right--small">
      <label class="vui-form-element__label">Avail Number</label>
      <div class="vui-form-element__control" />
      <input class="vui-input" name="availNumber" placeholder="Avail #" type="text">
    </fieldset>
    <fieldset class="vui-form-element vui-m-right--small">
      <label class="vui-form-element__label">Status</label>
      <div class="vui-form-element__control">
        <div class="vui-select_container">
          <select v-model="selectedStatus" class="vui-select">
            <option value="">
              All Avails
            </option>
            <option v-for="status in statuses" :key="status">
              {{ status }}
            </option>
          </select>
        </div>
      </div>
    </fieldset>
    <fieldset class="vui-form-element">
      <button class="vui-button vui-button--brand vui-m-right--x-small" @click.prevent="">
        Search
      </button>
    </fieldset>
    <fieldset class="vui-form-element">
      <button class="vui-button vui-button--neutral vui-m-right--x-small" @click.prevent="">
        Clear
      </button>
    </fieldset>
  </form>
</template>
