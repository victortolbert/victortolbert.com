<template>
  <div class="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-20">
    <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
      Changelog
    </h1>
    <p class="mt-4 text-base leading-7 text-slate-600">
      Stay up to date with all of the latest additions and improvements we've made to Frontier.
    </p>
    <!-- https://app.convertkit.com/forms/1074308/subscriptions -->
    <form action="" method="post" class="mt-6 flex justify-center">
      <h2 class="sr-only">
        Subscribe via email
      </h2>
      <div class="relative w-64 shrink">
        <label for="subscribe-email" class="sr-only">Email address</label>
        <input id="subscribe-email" type="email" name="email_address" required class="block h-10 w-full rounded-md bg-white pl-12 pr-3 text-slate-900 shadow-md shadow-black/5 ring-1 ring-slate-900/5 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 sm:text-sm sm:leading-6" placeholder="Subscribe via email">
        <svg class="pointer-events-none absolute left-3 top-2 h-6 w-6 stroke-slate-400" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 7.92C5 6.86 5.865 6 6.931 6h10.138C18.135 6 19 6.86 19 7.92v8.16c0 1.06-.865 1.92-1.931 1.92H6.931A1.926 1.926 0 0 1 5 16.08V7.92Z" /><path d="m6 7 6 5 6-5" /></svg>
      </div>
      <button type="submit" class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 ml-4 flex-none">
        <span>Subscribe</span>
      </button>
    </form>
  </div>

  <section id="2024-01-09" aria-labelledby="2022-08-12-heading" class="md:flex">
    <h2 id="2022-08-12-heading" class="pl-7 text-sm leading-6 text-slate-500 md:w-1/4 md:pl-0 md:pr-12 md:text-right">
      <a href="#2024-01-09">January 9, 2024</a>
    </h2>
    <div class="relative pl-7 pt-2 md:w-3/4 md:pl-12 md:pt-0 pb-16">
      <div class="absolute bottom-0 left-0 w-px bg-slate-200 -top-6 md:top-0" />
      <div class="absolute -left-1 -top-[1.0625rem] h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-slate-300 bg-white md:top-[0.4375rem]" />
      <div class="max-w-none prose-h3:mb-4 prose-h3:text-base prose-h3:leading-6 prose-sm prose prose-slate prose-a:font-semibold prose-a:text-primary-500 hover:prose-a:text-primary-600">
        <h3>New Dashboard template</h3>

        <p>Today we're happy to announce the launch of our new <a href="/templates/dashboard" inertia="">Dashboard template</a>, the perfect website template for your exciting new mobile app.</p>

        <p>Built with Tailwind CSS and Next.js, Dashboard is loaded with tons of fun animations and interactions powered by the Framer Motion library. Be sure to check out the <a href="https://dashboard.designcoder.net">live preview</a> for the full experience.</p>

        <a href="/templates/spotlight" inertia="">
          <img class="rounded-xl ring-1 ring-offset-[-1px] ring-slate-700/10" src="" alt="The new Dashboard app marketing template">
        </a>
      </div>
    </div>
  </section>
  <section id="2022-02-18" aria-labelledby="2022-02-18-heading" class="md:flex">
    <h2 id="2022-02-18-heading" class="pl-7 text-sm leading-6 text-slate-500 md:w-1/4 md:pl-0 md:pr-12 md:text-right">
      <a href="#2022-02-18">February 18, 2022</a>
    </h2><div class="relative pl-7 pt-2 md:w-3/4 md:pl-12 md:pt-0 pb-16">
      <div class="absolute bottom-0 left-0 w-px bg-slate-200 -top-6 md:top-0" /><div class="absolute -left-1 -top-[1.0625rem] h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-slate-300 bg-white md:top-[0.4375rem]" /><div class="max-w-none prose-h3:mb-4 prose-h3:text-base prose-h3:leading-6 prose-sm prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600">
        <h3>New additions</h3>
        <ul>
          <li>Added new <a href="/components/application-ui/forms/comboboxes" inertia="">Comboboxes</a> category to the Application UI package with 5 examples</li>
          <li>Added new <a href="/components/application-ui/navigation/command-palettes" inertia="">Command Palettes</a> category to the Application UI package with 9 examples</li>
        </ul>
      </div>
    </div>
  </section>
</template>
