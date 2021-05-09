<template>
  <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
    <section aria-labelledby="payment_details_heading">
      <form action="#" method="POST">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="bg-white py-6 px-4 sm:p-6">
            <div>
              <h2
                id="payment_details_heading"
                class="text-lg leading-6 font-medium text-gray-900"
              >Payment details</h2>
              <p
                class="mt-1 text-sm text-gray-500"
              >Update your billing information. Please note that updating your location could affect your tax rates.</p>
            </div>

            <div class="mt-6 grid grid-cols-4 gap-6">
              <div class="col-span-4 sm:col-span-2">
                <label for="first_name" class="block text-sm font-medium text-gray-700">First name</label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autocomplete="cc-given-name"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                />
              </div>

              <div class="col-span-4 sm:col-span-2">
                <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  autocomplete="cc-family-name"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                />
              </div>

              <div class="col-span-4 sm:col-span-2">
                <label
                  for="email_address"
                  class="block text-sm font-medium text-gray-700"
                >Email address</label>
                <input
                  type="text"
                  name="email_address"
                  id="email_address"
                  autocomplete="email"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                />
              </div>

              <div class="col-span-4 sm:col-span-1">
                <label
                  for="expiration_date"
                  class="block text-sm font-medium text-gray-700"
                >Expration date</label>
                <input
                  type="text"
                  name="expiration_date"
                  id="expiration_date"
                  autocomplete="cc-exp"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                  placeholder="MM / YY"
                />
              </div>

              <div class="col-span-4 sm:col-span-1">
                <label
                  for="security_code"
                  class="flex items-center text-sm font-medium text-gray-700"
                >
                  <span>Security code</span>
                  <vti-IconSolid
                    name="question-mark-circle"
                    class="flex-shrink-0 ml-1 text-gray-300"
                  />
                </label>
                <input
                  type="text"
                  name="security_code"
                  id="security_code"
                  autocomplete="cc-csc"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                />
              </div>

              <div class="col-span-4 sm:col-span-2">
                <label
                  for="country"
                  class="block text-sm font-medium text-gray-700"
                >Country / Region</label>
                <select
                  id="country"
                  name="country"
                  autocomplete="country"
                  class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>

              <div class="col-span-4 sm:col-span-2">
                <label
                  for="postal_code"
                  class="block text-sm font-medium text-gray-700"
                >ZIP / Postal</label>
                <input
                  type="text"
                  name="postal_code"
                  id="postal_code"
                  autocomplete="postal-code"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              class="bg-gray-800 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >Save</button>
          </div>
        </div>
      </form>
    </section>

    <!-- Plan -->
    <section aria-labelledby="plan_heading">
      <form action="#" method="POST">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
            <div>
              <h2 id="plan_heading" class="text-lg leading-6 font-medium text-gray-900">Plan</h2>
            </div>

            <fieldset
              x-data="window.Components.radioGroup({ initialCheckedIndex: 1 })"
              x-init="init()"
            >
              <legend class="sr-only">Pricing plans</legend>
              <div class="relative bg-white rounded-md -space-y-px">
                <label
                  x-radio-group-option
                  class="border-gray-200 rounded-tl-md rounded-tr-md relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3"
                  x-state:on="Checked"
                  x-state:off="Not Checked"
                  :class="{ 'bg-orange-50 border-orange-200 z-10': value === 'Startup', 'border-gray-200': !(value === 'Startup') }"
                >
                  <div class="flex items-center text-sm">
                    <input
                      type="radio"
                      x-model="value"
                      name="pricing_plan"
                      value="Startup"
                      class="h-4 w-4 text-orange-500 border-gray-300 focus:ring-gray-900"
                      aria-labelledby="pricing-plans-0-label"
                      aria-describedby="pricing-plans-0-description-0 pricing-plans-0-description-1"
                    />
                    <span id="pricing-plans-0-label" class="ml-3 font-medium text-gray-900">Startup</span>
                  </div>
                  <p
                    id="pricing-plans-0-description-0"
                    class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center"
                  >
                    <span
                      class="text-gray-900 font-medium"
                      x-state:on="Checked"
                      x-state:off="Not Checked"
                      :class="{ 'text-orange-900': value === 'Startup', 'text-gray-900': !(value === 'Startup') }"
                    >$29 / mo</span>
                    <!-- space -->
                    <span
                      x-state:on="Checked"
                      x-state:off="Not Checked"
                      class="text-gray-500"
                      :class="{ 'text-orange-700': value === 'Startup', 'text-gray-500': !(value === 'Startup') }"
                    >($290 / yr)</span>
                  </p>
                  <p
                    id="pricing-plans-0-description-1"
                    class="text-gray-500 ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right"
                    x-state:on="Checked"
                    x-state:off="Not Checked"
                    :class="{ 'text-orange-700': value === 'Startup', 'text-gray-500': !(value === 'Startup') }"
                  >Up to 5 active job postings</p>
                </label>

                <label
                  x-radio-group-option
                  class="relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 bg-orange-50 border-orange-200 z-10"
                  x-state:on="Checked"
                  x-state:off="Not Checked"
                  :class="{ 'bg-orange-50 border-orange-200 z-10': value === 'Business', 'border-gray-200': !(value === 'Business') }"
                >
                  <div class="flex items-center text-sm">
                    <input
                      type="radio"
                      x-model="value"
                      name="pricing_plan"
                      value="Business"
                      class="h-4 w-4 text-orange-500 border-gray-300 focus:ring-gray-900"
                      aria-labelledby="pricing-plans-1-label"
                      aria-describedby="pricing-plans-1-description-0 pricing-plans-1-description-1"
                    />
                    <span id="pricing-plans-1-label" class="ml-3 font-medium text-gray-900">Business</span>
                  </div>
                  <p
                    id="pricing-plans-1-description-0"
                    class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center"
                  >
                    <span
                      class="font-medium text-orange-900"
                      x-state:on="Checked"
                      x-state:off="Not Checked"
                      :class="{ 'text-orange-900': value === 'Business', 'text-gray-900': !(value === 'Business') }"
                    >$99 / mo</span>
                    <!-- space -->
                    <span
                      x-state:on="Checked"
                      x-state:off="Not Checked"
                      class="text-orange-700"
                      :class="{ 'text-orange-700': value === 'Business', 'text-gray-500': !(value === 'Business') }"
                    >($990 / yr)</span>
                  </p>
                  <p
                    id="pricing-plans-1-description-1"
                    class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right text-orange-700"
                    x-state:on="Checked"
                    x-state:off="Not Checked"
                    :class="{ 'text-orange-700': value === 'Business', 'text-gray-500': !(value === 'Business') }"
                  >Up to 25 active job postings</p>
                </label>

                <label
                  x-radio-group-option
                  class="border-gray-200 rounded-bl-md rounded-br-md relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3"
                  x-state:on="Checked"
                  x-state:off="Not Checked"
                  :class="{ 'bg-orange-50 border-orange-200 z-10': value === 'Enterprise', 'border-gray-200': !(value === 'Enterprise') }"
                >
                  <div class="flex items-center text-sm">
                    <input
                      type="radio"
                      x-model="value"
                      name="pricing_plan"
                      value="Enterprise"
                      class="h-4 w-4 text-orange-500 border-gray-300 focus:ring-gray-900"
                      aria-labelledby="pricing-plans-2-label"
                      aria-describedby="pricing-plans-2-description-0 pricing-plans-2-description-1"
                    />
                    <span
                      id="pricing-plans-2-label"
                      class="ml-3 font-medium text-gray-900"
                    >Enterprise</span>
                  </div>
                  <p
                    id="pricing-plans-2-description-0"
                    class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center"
                  >
                    <span
                      class="text-gray-900 font-medium"
                      x-state:on="Checked"
                      x-state:off="Not Checked"
                      :class="{ 'text-orange-900': value === 'Enterprise', 'text-gray-900': !(value === 'Enterprise') }"
                    >$249 / mo</span>
                    <!-- space -->
                    <span
                      x-state:on="Checked"
                      x-state:off="Not Checked"
                      class="text-gray-500"
                      :class="{ 'text-orange-700': value === 'Enterprise', 'text-gray-500': !(value === 'Enterprise') }"
                    >($2490 / yr)</span>
                  </p>
                  <p
                    id="pricing-plans-2-description-1"
                    class="text-gray-500 ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right"
                    x-state:on="Checked"
                    x-state:off="Not Checked"
                    :class="{ 'text-orange-700': value === 'Enterprise', 'text-gray-500': !(value === 'Enterprise') }"
                  >Unlimited active job postings</p>
                </label>
              </div>
            </fieldset>

            <div class="flex items-center" x-data="{ on: true }">
              <button
                type="button"
                class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors ease-in-out duration-200 bg-orange-500"
                aria-pressed="true"
                x-ref="switch"
                x-state:on="Enabled"
                x-state:off="Not Enabled"
                :class="{ 'bg-orange-500': on, 'bg-gray-200': !(on) }"
                aria-labelledby="annual-billing-label"
                :aria-pressed="on.toString()"
                @click="on = !on"
              >
                <span class="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  class="inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 translate-x-5"
                  x-state:on="Enabled"
                  x-state:off="Not Enabled"
                  :class="{ 'translate-x-5': on, 'translate-x-0': !(on) }"
                ></span>
              </button>
              <span class="ml-3" id="annual-billing-label" @click="on = !on; $refs.switch.focus()">
                <span class="text-sm font-medium text-gray-900">Annual billing</span>
                <span class="text-sm text-gray-500">(Save 10%)</span>
              </span>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              class="bg-gray-800 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >Save</button>
          </div>
        </div>
      </form>
    </section>

    <!-- Billing history -->
    <section aria-labelledby="billing_history_heading">
      <div class="bg-white pt-6 shadow sm:rounded-md sm:overflow-hidden">
        <div class="px-4 sm:px-6">
          <h2
            id="billing_history_heading"
            class="text-lg leading-6 font-medium text-gray-900"
          >Billing history</h2>
        </div>
        <div class="mt-6 flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden border-t border-gray-200">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >Date</th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >Description</th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >Amount</th>
                      <!--
                            `relative` is added here due to a weird bug in Safari that causes `sr-only` headings to introduce overflow on the body on mobile.
                      -->
                      <th
                        scope="col"
                        class="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        <span class="sr-only">View receipt</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200" x-max="1">
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <time datetime="2020-01-01">1/1/2020</time>
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >Business Plan - Annual Billing</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">CA$109.00</td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" class="text-orange-600 hover:text-orange-900">View receipt</a>
                      </td>
                    </tr>

                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <time datetime="2019-01-01">1/1/2019</time>
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >Business Plan - Annual Billing</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">CA$109.00</td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" class="text-orange-600 hover:text-orange-900">View receipt</a>
                      </td>
                    </tr>

                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <time datetime="2018-01-01">1/1/2018</time>
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >Business Plan - Annual Billing</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">CA$109.00</td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" class="text-orange-600 hover:text-orange-900">View receipt</a>
                      </td>
                    </tr>

                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <time datetime="2017-01-01">1/1/2017</time>
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >Business Plan - Annual Billing</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">CA$109.00</td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" class="text-orange-600 hover:text-orange-900">View receipt</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
