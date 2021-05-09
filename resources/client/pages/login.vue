<script>
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  // auth: 'guest',
  layout: 'home',
  setup() {
    const { t } = useI18n()
    return { t }
  },
})
</script>

<route lang="yaml">
meta:
  layout: 'home'
</route>

<template>
  <div>
    <div class="flex min-h-screen bg-white">
      <div
        class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
      >
        <div class="w-full max-w-sm mx-auto lg:w-96">
          <div>
            <AppLogo :name="$store.state.affiliate.slug" class="w-11 h-11 text-primary-500" />

            <h2 class="mt-6 text-xl font-medium text-gray-800">{{ t('sign_in') }}</h2>

            <p v-if="false" class="mt-2 text-sm text-gray-600 max-w">
              Or
              <a
                href="#"
                class="font-medium text-primary-600 hover:text-primary-500"
              >start your 14-day free trial</a>
            </p>
          </div>

          <div class="mt-8">
            <div v-if="false">
              <div>
                <p class="text-sm font-medium text-gray-700">{{ t('sign_in_with') }}</p>

                <div class="grid grid-cols-3 gap-3 mt-1">
                  <div>
                    <a
                      href="#"
                      class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                    >
                      <span class="sr-only">{{ t('sign_in_with') }} Facebook</span>
                      <vti-IconSolid name="facebook" />
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                    >
                      <span class="sr-only">{{ t('sign_in_with') }} Twitter</span>
                      <vti-IconSolid name="twitter" />
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                    >
                      <span class="sr-only">{{ t('sign_in_with') }} GitHub</span>
                      <vti-IconSolid name="tiktok" />
                    </a>
                  </div>
                </div>
              </div>

              <div class="relative mt-6">
                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                  <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 text-gray-500 bg-white">{{ t('or_continue_with') }}</span>
                </div>
              </div>
            </div>

            <div class="mt-6">
              <form action="#" method="POST" class="space-y-6">
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                  >{{ t('email_address') }}</label>
                  <div class="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      required
                      class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div class="space-y-1">
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700"
                  >{{ t('password') }}</label>
                  <div class="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autocomplete="current-password"
                      required
                      class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      class="w-4 h-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
                    />
                    <label
                      for="remember_me"
                      class="block ml-2 text-sm text-gray-900"
                    >{{ t('remember_me') }}</label>
                  </div>

                  <div class="text-sm">
                    <a
                      href="#"
                      class="font-medium text-primary-600 hover:text-primary-500"
                    >{{ t('forgot_password') }}</a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >{{ t('login') }}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="relative flex-1 hidden w-0 lg:block">
        <BaseImage class="absolute inset-0 object-cover w-full h-full" />
      </div>
    </div>
  </div>
</template>
