<script lang="ts" setup>
definePageMeta({
  title: 'Add Project',
  breadcrumb: 'Add Project',
  layout: 'hancock',
})
const countries = ['United States', 'Canada', 'Mexico']

const country = ref(countries[0])
</script>

<template>
  <div class="space-y-10 divide-y divide-gray-900/10">
    <!--
      Claim Information
      - Company
      - Claim Number
      Insured Information
      - Last Name
      - First Name
      - Primary Phone Number
      - Secondary Phone Number
      - Email Address
      - Claim Comments
      Address of the Loss Location
        Street
        Suite
        City
        State, Please select from list...
        Zip
        Address Comments
    -->
    <div class="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
      <div class="px-4 sm:px-0">
        <h2 class="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
          Personal Information
        </h2>
        <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
          Use a permanent address where you can receive mail.
        </p>
      </div>

      <form class="bg-white ring-1 ring-gray-900/5 md:col-span-2 sm:rounded dark:bg-gray-900">
        <div class="px-4 py-6 sm:p-8">
          <div class="grid grid-cols-1 max-w-2xl gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <UFormGroup label="First Name">
                <UInput />
              </UFormGroup>
            </div>

            <div class="sm:col-span-3">
              <UFormGroup label="Last Name">
                <UInput />
              </UFormGroup>
            </div>

            <div class="sm:col-span-4">
              <UFormGroup label="Email Address">
                <UInput />
              </UFormGroup>
            </div>

            <div class="sm:col-span-4">
              <UFormGroup label="Country">
                <USelect v-model="country" :options="countries" />
              </UFormGroup>
            </div>

            <div class="col-span-full">
              <UFormGroup label="Street Address">
                <UInput />
              </UFormGroup>
            </div>

            <div class="sm:col-span-2 sm:col-start-1">
              <UFormGroup label="City">
                <UInput />
              </UFormGroup>
            </div>

            <div class="sm:col-span-2">
              <UFormGroup label="State / Province">
                <UInput />
              </UFormGroup>
            </div>

            <div class="sm:col-span-2">
              <UFormGroup label="ZIP / Postal code">
                <UInput />
              </UFormGroup>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 dark:border-gray-50/10 sm:px-8">
          <UButton variant="ghost">
            Cancel
          </UButton>
          <UButton color="primary" type="submit">
            Save
          </UButton>
        </div>
      </form>
    </div>

    <div class="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
      <div class="px-4 sm:px-0">
        <h2 class="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
          Notifications
        </h2>
        <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
          We'll always let you know about important changes, but you pick what else you want to hear about.
        </p>
      </div>

      <form class="bg-white ring-1 ring-gray-900/5 md:col-span-2 sm:rounded dark:bg-gray-900">
        <div class="px-4 py-6 sm:p-8">
          <div class="max-w-2xl space-y-10">
            <fieldset>
              <legend class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                By Email
              </legend>
              <div class="mt-6 space-y-6">
                <UCheckbox label="Comments" help="Get notified when someones posts a comment on a posting." />

                <UCheckbox label="Candidates" help="Get notified when a candidate applies for a job." />

                <UCheckbox label="Offers" help="Get notified when a candidate accepts or rejects an offer." />
              </div>
            </fieldset>

            <fieldset>
              <legend class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                Push Notifications
              </legend>
              <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                These are delivered via SMS to your mobile phone.
              </p>
              <div class="mt-6 space-y-6">
                <URadio label="Everything" />
                <URadio label="Same as email" />
                <URadio label="No push notifications" />
              </div>
            </fieldset>
          </div>
        </div>

        <div class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 dark:border-gray-50/10 sm:px-8">
          <UButton variant="ghost">
            Cancel
          </UButton>
          <UButton color="primary" type="submit">
            Save
          </UButton>
        </div>
      </form>
    </div>
  </div>
</template>
