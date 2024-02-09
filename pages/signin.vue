<template>
  <div class="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div class="w-full max-w-sm space-y-10">
      <div>
        <!-- <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=primary&shade=600" alt="Your Company"> -->
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
          Sign in to your account
        </h2>
      </div>
      <form class="space-y-6" action="#" method="POST">
        <div class="relative -space-y-px rounded-md shadow-sm">
          <div class="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300 dark:ring-gray-700" />
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full rounded-t-md border-0 py-2 px-4 text-gray-900 dark:text-gray-100 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:bg-gray-900" placeholder="Email address">
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full rounded-b-md border-0 py-2 px-4 text-gray-900 dark:text-gray-100 ring-1 ring-inset ring-gray-100 dark:ring-gray-700 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:bg-gray-900" placeholder="Password">
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600">
            <label for="remember-me" class="ml-3 block text-sm leading-6 text-gray-900 dark:text-gray-100">Remember me</label>
          </div>

          <div class="text-sm leading-6">
            <a href="#" class="font-semibold text-primary-600 dark:text-primary-500 hover:text-primary-500">Forgot password?</a>
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-primary-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
            Sign in
          </button>
        </div>
      </form>

      <p class="text-center text-sm leading-6 text-gray-500 dark:text-gray-400">
        Not a member?
        {{ ' ' }}
        <a href="#" class="font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-500">Start a 14-day free trial</a>
      </p>
    </div>
  </div>
</template>
