<script setup>
</script>

<template>
  <section aria-labelledby="billing_history_heading">
    <div class="bg-white pt-6 shadow sm:overflow-hidden sm:rounded-md dark:bg-gray-900">
      <div class="px-4 sm:px-6">
        <h2
          id="billing_history_heading"
          class="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100"
        >
          Billing history
        </h2>
      </div>
      <div class="mt-6 flex flex-col">
        <div class="overflow-x-auto -my-2 lg:-mx-8 sm:-mx-6">
          <div
            class="inline-block min-w-full py-2 align-middle lg:px-8 sm:px-6"
          >
            <div class="overflow-hidden border-t border-gray-200 dark:border-gray-800">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                <thead class="bg-gray-50 dark:bg-gray-900">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-gray-400"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-gray-400"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-gray-400"
                    >
                      Amount
                    </th>
                    <!--
                            `relative` is added here due to a weird bug in Safari that causes `sr-only` headings to introduce overflow on the body on mobile.
                          -->
                    <th
                      scope="col"
                      class="relative px-6 py-3 text-left text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-gray-400"
                    >
                      <span class="sr-only">View receipt</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-800" x-max="1">
                  <tr>
                    <td
                      class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      1/1/2020
                    </td>
                    <td
                      class="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400"
                    >
                      Business Plan - Annual Billing
                    </td>
                    <td
                      class="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400"
                    >
                      CA$109.00
                    </td>
                    <td
                      class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium"
                    >
                      <a
                        href="#"
                        class="text-primary-600 hover:text-primary-900 dark:text-primary-300 hover:dark:text-primary-100"
                      >View receipt</a>
                    </td>
                  </tr>

                  <tr>
                    <td
                      class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      1/1/2019
                    </td>
                    <td
                      class="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400"
                    >
                      Business Plan - Annual Billing
                    </td>
                    <td
                      class="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400"
                    >
                      CA$109.00
                    </td>
                    <td
                      class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium"
                    >
                      <a
                        href="#"
                        class="text-primary-600 dark:text-primary-300 hover:text-primary-900 hover:dark:text-primary-100"
                      >View receipt</a>
                    </td>
                  </tr>

                  <tr>
                    <td
                      class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      1/1/2018
                    </td>
                    <td
                      class="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400"
                    >
                      Business Plan - Annual Billing
                    </td>
                    <td
                      class="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400"
                    >
                      CA$109.00
                    </td>
                    <td
                      class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium"
                    >
                      <a
                        href="#"
                        class="text-primary-600 dark:text-primary-300 hover:text-primary-900 hover:dark:text-primary-100"
                      >View receipt</a>
                    </td>
                  </tr>

                  <tr>
                    <td
                      class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      1/1/2017
                    </td>
                    <td
                      class="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400"
                    >
                      Business Plan - Annual Billing
                    </td>
                    <td
                      class="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400"
                    >
                      CA$109.00
                    </td>
                    <td
                      class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium"
                    >
                      <a
                        href="#"
                        class="text-primary-600 dark:text-primary-300 hover:text-primary-900 hover:dark:text-primary-100"
                      >View receipt</a>
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
</template>
