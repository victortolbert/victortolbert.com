<script setup lang="ts">
const showLoader = ref(false)
const showMobileMenu = ref(false)

const state = reactive({
  isIndependentAdjuster: false,
  isInCoverageArea: false,
  claimNumber: '',
  companyId: null,
  InsuredLastName: 'Tolbert',
})

const enteredPostalCode = ref('')
const errors = ref([])
const companyServiceTypes = ref([])

const adjusterInCollections = ref(false)
const formSubmitted = ref(false)
const formSuccessful = ref(false)

const isCompanyUSAA = ref(false)
const isOtherCustomer = ref(false)
const isCCDetailsAvailable = ref(false)
const isAdditionalClaim = ref(false)
const isClaimNumberInValid = ref(false)
const invalidClaimMessage = ref('')
const showOtherCarrierName = ref(false)
const showUnableToSaveErrorMessage = ref(false)

function handleZipCodeChange() { }
function handleServiceTypeChecked() { }
function submitClaim() { }
</script>

<template>
  <div id="external-claim-form" class="relative flex flex-col h-full min-h-screen bg-primary-50">
    <header class="sticky w-full text-lg uppercase bg-white">
      <nav class="flex items-center justify-between pr-8 mx-auto max-w-7xl whitespace-nowrap md:pr-0" aria-label="Global">
        <div class="flex flex-shrink-0 w-36">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Hancock Claims Consultants</span>
            <!-- <img class="w-auto h-20" src="@ViewData["ExemplarCoreUrl"]/images/ExternalForm/logo.png" alt="Hancock Logo"> -->
          </a>
        </div>
        <div class="flex justify-end md:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex gap-1 font-bold items-center uppercase justify-center rounded-md p-2.5 text-primary-500"
            @click="showMobileMenu = !showMobileMenu"
          >
            Menu
            <span class="sr-only">Open main menu</span>
            <!-- <icon icon="carbon:menu" class="w-6 h-6" /> -->
          </button>
        </div>
        <div class="hidden md:flex md:flex-1 md:justify-center">
          <a
            class="px-4 py-6 hover:bg-primary-500 hover:text-white"
            href="/services/"
          > Services </a>
          <a
            class="px-4 py-6 hover:bg-primary-500 hover:text-white"
            href="/process/"
          > Process </a>
          <a
            class="px-4 py-6 hover:bg-primary-500 hover:text-white"
            href="/payments"
          > Make a Payment </a>

          <a
            class="px-4 py-6 hover:bg-primary-500 hover:text-white"
            href="/about"
          > About </a>
          <a
            class="px-4 py-6 hover:bg-primary-500 hover:text-white"
            href="/contact"
          > Contact </a>
        </div>
        <div class="flex-shrink-0 hidden w-36 md:block" />
      </nav>

      <!-- Mobile menu -->
      <div v-if="showMobileMenu" id="mobile-menu">
        <div class="pt-2 pb-3 space-y-1">
          <a
            href="/services/"
            class="block py-2 pl-8 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
          >Services</a>
          <a
            href="/process/"
            class="block py-2 pl-8 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
          >Process</a>
          <a
            href="/payments"
            class="block py-2 pl-8 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
          >Make a Payment</a>
          <a
            href="/about"
            class="block py-2 pl-8 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
          >About</a>
          <a
            href="/contact"
            class="block py-2 pl-8 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
          >Contact</a>
        </div>
      </div>
    </header>

    <main class="flex-1 mt-44">
      <div v-if="errors.length > 0" class="w-full max-w-screen-lg p-4 mx-auto md:p-8">
        <div class="flex w-full p-4 border border-red-800 rounded shadow bg-red-50">
          <div class="flex-shrink-0">
            <!-- <icon
              icon="carbon:warning"
              class="w-5 h-5 text-red-800"
            /> -->
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-bold text-red-800">
              <p>Form validation has failed. Please address the issue(s) below:</p>
            </h3>
            <div class="mt-2 text-sm text-red-800">
              <ol role="list" class="pl-5 space-y-1 list-disc">
                <li v-for="error in errors" :key="error">
                  {{ error.Error }}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div id="edit-form" class="w-full p-8 mx-auto">
        <div v-if="showLoader" id="page-loader">
          Loading&#8230;
        </div>

        <div v-show="!formSubmitted && !showLoader" class="w-full">
          <section id="hero-section" class="flex flex-col w-full max-w-screen-md gap-8 mx-auto text-xl font-light text-center">
            <div class="flex flex-col gap-8 text-primary-500">
              <h2 class="text-4xl">
                Schedule A Claim
              </h2>
              <p>
                Welcome to <b class="font-semibold">EXEMPLAR</b> - Hancock’s premier scheduling and logistics tool accelerating
                data into business insight
              </p>
              <p>
                <b class="font-semibold">Note:</b> If you do not receive a confirmation email within 2 hours of submission please
                call <b class="font-bold text-black">770-569-1669</b>.
              </p>
            </div>
            <p class="text-black">
              Please note that Hancock partners with insurance carriers and their adjuster
              affiliates only.
            </p>
            <p>
              For questions regarding other service offerings please contact us at 770.569.1669.
            </p>
            <div>
              <p class="warning">
                <b>NOTE: </b>To prevent any issues, we recommend using Chrome as your browser.
              </p>
            </div>
          </section>

          <section
            id="submit-claim-section"
            class="w-full max-w-screen-lg pt-8 mx-auto mt-8 border-t border-primary-500"
          >
            <div>
              <ul class="w-full">
                <li class="mx-auto mb-8">
                  <div class="flex flex-col w-full gap-2 mt-1 text-center">
                    <label for="postal-code" class="block m-2">
                      Please enter your ZIP Code to get started
                    </label>
                    <div class="flex flex-col justify-center w-full gap-4 sm:flex-row sm:items-end sm:gap-2">
                      <div>
                        <input
                          id="postal-code"
                          v-model="enteredPostalCode"
                          type="search"
                          autocomplete="off"
                          class="w-full text-center border border-gray-300 rounded shadow sm:text-left focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                          @keyup.enter="handleZipCodeChange"
                        >
                      </div>
                      <button
                        class="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm sm:block sm:w-64 bg-primary-600 hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 whitespace-nowrap"
                        @click="handleZipCodeChange"
                      >
                        Check for Coverage
                      </button>
                    </div>
                    <div v-if="state.isInCoverageArea" class="text-center">
                      We've got you covered!
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <!-- <b-modal
              id="outOfCoverageModal"
              v-model="outOfCoverageModal.open"
              ok-title="Request Coverage"
              title="ZIP Code out of published coverage area"
              scrollable
              @ok="RequestCoverage"
            >
              <div class="grid gap-4 form-group">
                <p>
                  To request coverage in your area, please click the button below.
                </p>
                <p>
                  Additionally, please email us at <a class="text-blue-500 underline" href="mailto:claims@hancockclaims.com?subject=new Out of Coverage Claim&body=">claims@hancockclaims.com</a> with your claim details.
                  We will review the request and provide any potential availability to you.
                </p>
                <p>
                  Thank you for choosing Hancock Claims Consultants for comprehensive claims lifecycle support.
                </p>
              </div>
            </b-modal> -->

            <div v-show="state.isInCoverageArea" class="grid gap-12 mt-4 md:grid-cols-2">
              <ul class="flex flex-col gap-4">
                <li>
                  <label for="claim-number" class="block">
                    Claim Number
                  </label>
                  <div class="mt-1">
                    <!-- <textbox-component
                      id="claim-number"
                      :current-value="state.claimNumber"
                      :text-area="false"
                      :max-characters="50"
                      :min-characters="1"
                      placeholder="Type claim number (letters, numbers and dashes only)"
                      hide-margin
                      @on-changed="onClaimNumberChange($event)"
                    /> -->
                  </div>
                  <div v-if="isClaimNumberInValid">
                    <div v-html="invalidClaimMessage" />
                  </div>
                </li>

                <li>
                  <label for="company" class="block">
                    Company
                  </label>
                  <div class="mt-1">
                    <!-- <company-dropdown-component
                      id="company"
                      :selected-value="state.companyId === null ? '' : state.companyId.toString()"
                      :bind-list="bindCompany"
                      :uri="getCompanyUri"
                      hide-margin
                      @on-changed="OnCompanyChange"
                    /> -->
                  </div>
                </li>

                <li v-if="state.companyId === 384 || showOtherCarrierName">
                  <label for="other-company" class="block">
                    Please enter carrier name
                  </label>
                  <div class="mt-1">
                    <!-- <textbox-component
                      id="other-company"
                      :current-value="state.CompanyName"
                      :text-area="false"
                      :max-characters="50"
                      :min-characters="1"
                      hide-margin
                      @onblurcallback="OnOtherCompanyNameChange($event)"
                    /> -->
                  </div>
                </li>
                <li v-if="isCompanyUSAA">
                  <label for="preferred-salutation-or-rank" class="block">
                    Military Rank or Preferred Salutation
                  </label>
                  <div class="mt-1">
                    <!-- <textbox-component
                      id="preferred-salutation-or-rank"
                      :current-value="state.MilitaryRankSalutation"
                      :text-area="false"
                      :max-characters="50"
                      :min-characters="1"
                      onpaste="event.preventDefault()"
                      hide-margin
                      @on-changed="state.MilitaryRankSalutation = $event"
                    /> -->
                  </div>
                </li>
                <li>
                  <label v-if="!isCompanyUSAA" for="insured-first-name" class="block">
                    Insured First Name
                  </label>
                  <label v-if="isCompanyUSAA" for="insured-first-name" class="block">
                    Member First Name
                  </label>
                  <div class="mt-1">
                    <!-- <textbox-component
                      id="insured-first-name"
                      :current-value="state.InsuredFirstName"
                      :text-area="false"
                      :max-characters="50"
                      :min-characters="1"
                      hide-margin
                      @on-changed="state.InsuredFirstName = $event"
                    /> -->
                  </div>
                </li>

                <li>
                  <label v-if="!isCompanyUSAA" for="insured-last-name" class="block">
                    Insured Last Name
                  </label>
                  <label v-if="isCompanyUSAA" for="insured-last-name" class="block">
                    Member Last Name
                  </label>
                  <div class="mt-1">
                    <textbox-component
                      id="insured-last-name"
                      :current-value="state.InsuredLastName"
                      :text-area="false"
                      :max-characters="50"
                      :min-characters="1"
                      hide-margin
                      @on-changed="state.InsuredLastName = $event"
                    />
                  </div>
                </li>

                <li>
                  <label v-if="!isCompanyUSAA" for="insured-primary-phone" class="block">
                    Insured Phone
                  </label>
                  <label v-if="isCompanyUSAA" for="insured-primary-phone" class="block">
                    Member Phone
                  </label>
                  <div class="mt-1">
                    <!-- <phone-number-component
                      :current-value="state.InsuredPrimaryPhone"
                      @on-changed="state.InsuredPrimaryPhone = $event"
                    /> -->
                  </div>
                </li>
              </ul>

              <ul class="flex flex-col gap-4">
                <li>
                  <label for="street-address" class="block">
                    Street Address
                  </label>
                  <div class="mt-1">
                    <!-- <textbox-component
                      id="street-address1"
                      :current-value="state.StreetAddress1"
                      :max-characters="50"
                      :min-characters="0"
                      hide-margin
                      @on-changed="OnStreetAddressChange($event)"
                    /> -->
                  </div>
                </li>
                <li>
                  <label for="street-address-2" class="block">
                    Suite
                  </label>
                  <div class="mt-1">
                    <!-- <textbox-component
                      id="street-address2"
                      :current-value="state.StreetAddress2"
                      :max-characters="50"
                      :min-characters="0"
                      hide-margin
                      @on-changed="state.StreetAddress2 = $event"
                    /> -->
                  </div>
                </li>
                <li>
                  <label form="city" class="block">
                    City
                  </label>
                  <div class="mt-1">
                    <!-- <textbox-component
                      id="city"
                      :current-value="state.City"
                      :text-area="false"
                      :max-characters="50"
                      :min-characters="1"
                      hide-margin
                      @on-changed="state.City = $event"
                    /> -->
                  </div>
                </li>
                <li>
                  <label for="state" class="block">
                    State
                  </label>
                  <div class="mt-1">
                    <!-- <state-dropdown-component
                      v-if="isMounted"
                      id="state"
                      :bind-list="true"
                      :selected-value="state.StateId?.toString() ?? ''"
                      @on-state-change="OnStateChange"
                    /> -->
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <!--
            <div v-if="state.isInCoverageArea">
              <section
                id="service-information-section"
                class="w-full max-w-screen-lg pt-8 mx-auto mt-8 border-t border-primary-500"
              >
                <h3 class="text-lg font-medium">
                  Please indicate the type of service required
                </h3>

                <ul class="grid gap-12 mt-4 md:grid-cols-2">
                  <li v-if="companyServiceTypes.length">
                    <div class="flex flex-col gap-4 mt-1">
                      <div v-for="companyServiceType in companyServiceTypes" :key="companyServiceType">
                        <div
                          v-if="!state.UseClaimBillingContact"
                          class="flex items-center gap-2"
                        >
                          <div
                            class="e-checkbox box-label"
                            :class="ServiceTypeExists(companyServiceType.AvailableServiceTypeId) ? 'answered' : '' "
                            @click="handleServiceTypeChecked(companyServiceType.AvailableServiceTypeId)"
                          />
                          <span class="text-lg font-medium choice-text whitespace-nowrap">
                            {{ companyServiceType.AvailableServiceTypeName }}
                          </span>
                        </div>

                        <div class="pl-14">
                          {{ companyServiceType.Description }}
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="flex flex-col gap-4">
                    <div>
                      <label
                        for="catastrophic-event"
                        class="block"
                      >
                        Catastrophic Event  {{ state.CatastrophicEvent }}
                      </label>
                      <div class="mt-1">
                        <check-box-component
                          id="catastrophic-event"
                          :current-value="CatastrophicEvent"
                          :choices="catastrophicEventChoices"
                          @onchanged="CatastrophicEvent = $event"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        for="is-reinspect"
                        class="block"
                      >Re-inspect</label>
                      <div class="mt-1">
                        <boolean-component
                          id="is-reinspect"
                          :current-value="state.IsReinspect"
                          :choices="['Yes', 'No']"
                          @on-changed="state.IsReinspect = $event"
                        />
                      </div>
                    </div>

                    <div v-if="showAppointmentDatePicker">
                      <label
                        for="appointment-date"
                        class="flex flex-col gap-1"
                      >
                        Please select an Appointment Date {{ validationRequirement }}
                      </label>
                      <div class="mt-1">
                        <date-picker
                          id="appointmentDate" style="width: 100%; background-color: white; min-width: 320px"
                          :value="appointmentDate"
                          :min="new Date(minDate())"
                          format="MM/dd/yyyy"
                          @change="OnAppointmentDateChange"
                        />
                        <div class="text-sm">
                          <span class="italic">
                            Please contact the office directly at <span class="font-bold text-black">770-569-1669</span>
                            for same day requests.
                          </span>
                          <p class="mt-1" style="color:red">
                            {{ appointmentMessage }}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div v-if="showTimeSlots">
                      <label for="time-slot" class="block">Please select a time</label>
                      <div class="mt-1">
                        <time-slot-dropdown-component
                          id="time-slot"
                          :uri="getTimeSlotsUri"
                          :bind-list="bindTimeSlot"
                          hide-margin
                          @on-changed="OnTimeSlotChange"
                          @@timeslotcallback="TimeSlotSuccessfullCallBack"
                        />
                      </div>
                    </div>

                    <div v-if="showDamageTypes">
                      <label
                        for="is-reinspect"
                        class="block"
                      >Please indicate the Damage Type</label>
                      <div
                        v-if="!state.UseClaimBillingContact"
                        class="flex items-center mt-1"
                      >
                        <div
                          class="e-checkbox box-label"
                          :class="DamageTypeExists(1) ? 'answered' : '' "
                          @click="ProcessDamageTypes(1)"
                        />
                        <label class="choice-text whitespace-nowrap">
                          Wind / Hail
                        </label>
                      </div>
                      <div
                        v-if="!state.UseCompanyBillingContact"
                        class="flex items-center"
                      >
                        <div
                          class="e-checkbox box-label"
                          :class="DamageTypeExists(2) ? 'answered' : '' "
                          @click="ProcessDamageTypes(2)"
                        />
                        <label class="choice-text whitespace-nowrap">
                          Winter Peril
                        </label>
                      </div>
                      <div
                        v-if="!state.UseCompanyBillingContact"
                        class="flex items-center"
                      >
                        <div
                          class="e-checkbox box-label"
                          :class="DamageTypeExists(3) ? 'answered' : '' "
                          @click="ProcessDamageTypes(3)"
                        />
                        <label class="choice-text whitespace-nowrap">
                          Driving Rain / Leak Detection
                        </label>
                      </div>
                      <div
                        v-if="!state.UseCompanyBillingContact"
                        class="flex items-center"
                      >
                        <div
                          class="e-checkbox box-label"
                          :class="DamageTypeExists(4) ? 'answered' : '' "
                          @click="ProcessDamageTypes(4)"
                        />
                        <div class="flex items-center gap-4">
                          <label
                            for="other-damage-type"
                            class="block"
                          >Other</label>
                          <div class="mt-1">
                            <textbox-component
                              id="other-damage-type"
                              :current-value="GetOtherValue()"
                              :text-area="false"
                              :max-characters="50"
                              :min-characters="1"
                              :disabled="false"
                              hide-margin
                              @on-changed="SetOtherValue($event)"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <weather-widget
                      v-if="state && state.ProjectInspection && state.ProjectInspection.ServiceAreaId !== 0"
                      :city="state.City"
                      :state-id="state.StateId"
                      :date="appointmentDate"
                      :longitude="longitude"
                      :latitude="latitude"
                    />
                  </li>
                </ul>
              </section>

              <section
                id="adjuster-information-section"
                class="w-full max-w-screen-lg pt-8 mx-auto mt-8 border-t border-primary-500"
              >
                <h3 class="text-lg font-medium">
                  Adjuster Information
                </h3>

                <section class="grid gap-12 mt-4 lg:grid-cols-2">
                  <ul class="grid gap-8">
                    <li>
                      <label for="is-independent-adjuster" class="block"> Is Independent Adjuster </label>
                      <div class="mt-1">
                        <check-box-component
                          id="is-independent-adjuster"
                          :current-value="isIndependentAdjuster"
                          :choices="['No', 'Yes']"
                          @on-changed="OnIndependentAdjusterChange"
                        />
                      </div>
                    </li>
                    <li>
                      <label for="adjuster-first-name" class="block"> Adjuster First Name </label>
                      <div class="mt-1">
                        <textbox-component
                          id="adjuster-first-name"
                          :current-value="state.AdjusterFirstName"
                          :text-area="false"
                          :max-characters="50"
                          :min-characters="1"
                          hide-margin
                          @on-changed="state.AdjusterFirstName = $event"
                        />
                      </div>
                    </li>
                    <li>
                      <label for="adjuster-last-name" class="block"> Adjuster Last Name </label>
                      <div class="mt-1">
                        <textbox-component
                          id="adjuster-last-name"
                          :current-value="state.AdjusterLastName"
                          :text-area="false"
                          :max-characters="50"
                          :min-characters="1"
                          hide-margin
                          @on-changed="state.AdjusterLastName = $event"
                        />
                      </div>
                    </li>
                    <li>
                      <label for="adjuster-email" class="block"> Adjuster Email </label>
                      <div class="mt-1">
                        <textbox-component
                          id="adjuster-email"
                          :current-value="state.AdjusterEmail"
                          :text-area="false"
                          :max-characters="50"
                          :min-characters="1"
                          onpaste="event.preventDefault()"
                          hide-margin
                          @on-changed="state.AdjusterEmail = $event"
                          @onblurcallback="CheckIfAdjusterEmailMatches"
                        />
                      </div>
                    </li>
                    <li v-if="adjusterId == 0">
                      <label for="confirm-email" class="block"> Confirm Email </label>
                      <div class="mt-1">
                        <textbox-component
                          id="confirm-email"
                          :current-value="state.AdjusterConfirmEmail"
                          :text-area="false"
                          :max-characters="50"
                          :min-characters="1"
                          onpaste="event.preventDefault()"
                          hide-margin
                          @on-changed="state.AdjusterConfirmEmail = $event"
                          @onblurcallback="CheckIfAdjusterEmailMatches"
                        />
                      </div>
                      <div v-show="showAdjusterMessage" class="mt-1 warning">
                        Please ensure the adjuster's email address matches in the email and confirm textboxes.
                      </div>
                    </li>
                    <li v-if="isCompanyUSAA">
                      <label for="claim-specific-email" class="block"> Claim Specific Email </label>
                      <div class="mt-1">
                        <textbox-component
                          id="claim-specific-email"
                          :text-area="false"
                          :max-characters="150"
                          :min-characters="1"
                          onpaste="event.preventDefault()"
                          hide-margin
                          @on-changed="state.ClaimSpecificEmail = $event"
                          @onblurcallback="ValidateClaimSpecificEmail"
                        />
                      </div>
                      <div v-show="showClaimSpecificEmailMessage" class="mt-1 warning">
                        Please add USAA claim-specific email ID in order to proceed with this submission. If you are an independent adjuster submitting the claim for USAA, please choose "Other customer" as the carrier to proceed. Thank you.
                      </div>
                    </li>
                    <li>
                      <div>
                        <label for="adjuster-phone" class="block">Adjuster Phone</label>
                        <div class="mt-1">
                          <phone-number-component
                            :disabled="false"
                            :current-value="state.AdjusterPhone"
                            @on-changed="state.AdjusterPhone = $event"
                          />
                        </div>
                      </div>
                    </li>

                    <li v-if="state.isIndependentAdjuster">
                      <ul class="grid gap-8">
                        <li>
                          <label for="billing-first-name" class="block"> Billing Contact First Name </label>
                          <div class="mt-1">
                            <textbox-component
                              id="billing-first-name"
                              :current-value="state.BillingContactFirstName"
                              :text-area="false"
                              :max-characters="100"
                              :min-characters="1"
                              hide-margin
                              @on-changed="state.BillingContactFirstName = $event"
                            />
                          </div>
                        </li>
                        <li>
                          <label for="billing-contact-last-name" class="block"> Billing Contact Last Name </label>
                          <div class="mt-1">
                            <textbox-component
                              id="billing-contact-last-name"
                              :current-value="state.BillingContactLastName"
                              :text-area="false"
                              :max-characters="100"
                              :min-characters="1"
                              hide-margin
                              @on-changed="state.BillingContactLastName = $event"
                            />
                          </div>
                        </li>
                        <li>
                          <label id="billing-contact-email" class="block"> Billing Email </label>
                          <div class="mt-1">
                            <textbox-component
                              id="billing-contact-email"
                              :current-value="state.BillingContactEmail"
                              :text-area="false"
                              :max-characters="50"
                              :min-characters="1"
                              hide-margin
                              @on-changed="state.BillingContactEmail = $event"
                            />
                          </div>
                        </li>
                        <li>
                          <label id="billing-phone" class="block"> Billing Phone </label>
                          <div class="mt-1">
                            <phone-number-component
                              :current-value="state.BillingContactPhone"
                              @on-changed="state.BillingContactPhone = $event"
                            />
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <div>
                    <label for="notes" class="block"> Notes </label>
                    <div class="mt-1">
                      <textbox-component
                        id="notes"
                        :current-value="state.AddressComments"
                        :text-area="true"
                        :max-characters="500"
                        :min-characters="5"
                        hide-margin
                        @on-changed="state.AddressComments = $event"
                      />
                    </div>
                  </div>
                </section>

                <div v-if="state.isIndependentAdjuster && isIndependentAdjusterUser && isCreditCardInformation" class="mt-8">
                  <claim-payment-information-form
                    :api-login-id="apiLoginId"
                    :api-transaction-key="apiTransactionKey"
                    :api-client-key="apiClientKey"
                    :api-validation-mode="apiValidationMode"
                    :customer-profile-id="customerProfileId"
                    :customer-payment-profile-id="customerPaymentProfileId"
                    :api-url="apiUrl"
                  />
                </div>
                <div class="mt-8">
                  <label for="is-additional-claim" class="block">
                    Would you like to create another claim after submitting this one?
                  </label>
                  <div class="flex items-center mt-1">
                    <div
                      class="e-checkbox box-label"
                      :class="isAdditionalClaim ? 'answered' : '' "
                      @click="isAdditionalClaim = !isAdditionalClaim"
                    />
                    <span class="choice-text whitespace-nowrap">Yes</span>
                  </div>
                </div>
              </section>
            </div>
          -->

          <div v-if="state.isInCoverageArea && ((!isOtherCustomer || !state.isIndependentAdjuster) || (isOtherCustomer && state.isIndependentAdjuster && isCCDetailsAvailable))" class="w-full mx-auto my-12 md:max-w-sm">
            <button
              class="flex items-center justify-center w-full p-4 text-lg font-medium text-white transition-transform duration-100 border shadow-lg bg-primary-400 hover:bg-primary-500 active:scale-95 active:bg-primary-600"
              @click="submitClaim"
            >
              Submit
            </button>
          </div>

          <div v-if="showUnableToSaveErrorMessage" class="flex flex-col items-center justify-center w-full max-w-screen-md gap-8 p-8 mx-auto text-xl font-light text-center warning">
            Alert! This claim cannot be submitted on this page.  Please contact our office at 770.569.1669 and our customer service team will provide you with your local regional management contact for additional options.
          </div>
        </div>

        <div
          v-if="formSuccessful && state.isInCoverageArea"
          class="flex flex-col items-center justify-center w-full max-w-screen-md gap-8 p-8 mx-auto text-xl font-light text-center"
        >
          <h2 class="text-4xl text-primary-500">
            Thank you for your request
          </h2>
          <p>If you do not receive a confirmation email within 2 hours of submission please call <b class="font-bold text-black">770-569-1669</b></p>
          <p>After 7:00PM – If you have a claim for tomorrow morning. Please call 770-569-1669.</p>
        </div>

        <div v-if="adjusterInCollections" class="flex flex-col items-center justify-center w-full max-w-screen-md gap-8 p-8 mx-auto text-xl font-light text-center">
          <p>We apologize for the inconvenience, however we are unable to complete your request at this time. Please contact our billing department at your earliest convenience at <b class="font-bold text-black">770-800-6582</b>. Thank you for considering Hancock for your roof inspection service.</p>
        </div>
      </div>

      <!-- <b-modal
        v-model="displayStateFarmModal"
        class="card-view-modal-container"
        size="lg"
        :no-close-on-backdrop="true"
        :no-close-on-esc="true"
        :ok-only="showOkOnly"
        :title="stateFarmModalTitle"
        @ok="RedirectStateFarmUsers"
        @hide="RedirectOnHide"
      >
        <h2 class="text-lg-center">
          {{ modalMessage }}
        </h2>

        <template #modal-footer="{ ok, cancel }">
          <div class="flex item-center justify-end gap-4">
            <b-button @click="cancel()">
              Cancel
            </b-button>
            <b-button
              variant="primary"
              @click="ok()"
            >
              Login
            </b-button>
          </div>
        </template>
      </b-modal> -->
    </main>

    <footer class="flex flex-col w-full max-w-screen-lg gap-4 p-4 mx-auto text-primary-400 md:p-8">
      <nav>
        <div class="flex flex-wrap items-center justify-around uppercase whitespace-nowrap">
          <a class="p-2 hover:underline" href="/services">
            Services
          </a>
          <a class="p-2 hover:underline" href="/process/">
            Process
          </a>
          <a class="p-2 hover:underline" href="/about/">
            About
          </a>
          <a class="p-2 hover:underline" href="/corporate-careers">
            Corporate Careers
          </a>
          <a class="p-2 hover:underline" href="/become-a-technician">
            Become a Technician
          </a>
          <a class="p-2 hover:underline" href="/payments">
            Make a Payment
          </a>
        </div>
      </nav>

      <div class="flex flex-col items-center justify-between pt-4 text-sm border-t sm:flex-row border-primary-200">
        <div class="flex flex-col items-center justify-center text-primary-300 sm:items-start">
          <span>
            Copyright 2023
            <span class="font-medium text-primary-400">
              Hancock Claims Consultants
            </span>
          </span>
          <span>All Rights Reserved.</span>
        </div>
        <nav class="flex flex-col items-center gap-2 mt-4 sm:mt-0 sm:flex-row">
          <a class="text-primary-300 hover:underline hover:text-primary-500" href="/terms-conditions">
            Terms & Conditions
          </a>
          <a class="text-primary-300 hover:underline hover:text-primary-500" href="/privacy-policy">
            Privacy Policy
          </a>
          <a class="text-primary-300 hover:underline hover:text-primary-500" href="/contact">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  </div>
</template>
