<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<script setup>
const posts = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    description:
      'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
  },
  {
    title: 'Writing effective landing page copy',
    href: '#',
    description:
      'Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.',
    date: 'Jan 29, 2020',
    datetime: '2020-01-29',
  },
]
</script>

<template>
  <article class="relative mx-auto divide-y-2 divide-gray-200 dark:divide-gray-700">
    <div>
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
        Articles
      </h2>
      <div class="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
        <p class="text-xl text-gray-500 dark:text-gray-400 lg:col-span-2">
          Learn how to grow your business with our expert advice.
        </p>
      </div>
    </div>
    <div class="mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
      <div v-for="post in posts" :key="post.title">
        <p class="text-sm text-gray-500">
          <time :datetime="post.datetime">{{ post.date }}</time>
        </p>
        <a href="#" class="mt-2 block">
          <p class="text-xl font-semibold text-gray-900">{{ post.title }}</p>
          <p class="mt-3 text-base text-gray-500">{{ post.description }}</p>
        </a>
        <div class="mt-3">
          <a :href="post.href" class="text-base font-semibold text-primary-600 hover:text-primary-500">Read full story</a>
        </div>
      </div>
    </div>
  </article>
</template>
