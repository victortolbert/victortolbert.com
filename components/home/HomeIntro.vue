<script setup>
useSeoMeta({
  title: 'Victor Tolbert',
  description:
    'I\'m Victor, your friendly neighborhood software engineer and designer from Atlanta, GA. I specialize in building web applications and sites using JavaScript, Vue.js, React, Node, Laravel, & .NET',
})
</script>

<template>
  <div class="space-y-6">
    <!-- <NuxtImg
      src="https://avatars.githubusercontent.com/u/2476?v=4" alt="Victor Tolbert"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
      sizes="48px sm:64px" placeholder format="webp"
    /> -->
    <h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
      👋🏼 Hi!
    </h1>
    <div>
      <img src="/assets/images/me/headshot.jpeg" class="w-48 float-right rounded-lg ml-8 mb-8 grayscale" alt="Victor Tolbert Headshot">
      <p class="text-gray-900 dark:text-gray-400">
        I'm Victor, a self-taught, web applications consultant and experienced UI/UX designer from Atlanta, Georgia.
        I specialize in building SaaS web applications and marketing websites using <NuxtLink to="/csharp">
          C#,
        </NuxtLink><NuxtLink to="/aspnetcore">
          ASP.NET Core,
        </NuxtLink><NuxtLink to="/php">
          PHP,
        </NuxtLink><NuxtLink to="/laravel">
          Laravel,
        </NuxtLink><NuxtLink to="/javascript">
          JavaScript,
        </NuxtLink><NuxtLink to="/vue">
          Vue.js,
        </NuxtLink>&amp;<NuxtLink to="/nodejs">
          Node.
        </NuxtLink> Here, I share my experiments, nifty <NuxtLink to="/projects">
          projects,
        </NuxtLink> and maybe my <NuxtLink to="/articles">
          thoughts
        </NuxtLink> (mostly about tech and design).
      </p>
      <p class="mt-4 text-gray-900 dark:text-gray-400">
        By day, I'm a fullstack software engineer at <a href="https://hancockclaims.com" target="_blank">Hancock Claims Consultants</a>, and by night (and weekends), I'm busy tinkering working on some random tool or app, or learning a new framework.
      </p>
    </div>
  </div>
</template>
