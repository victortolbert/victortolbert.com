<script setup>
const slides = ref([
  {
    title: 'Slide 1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
    src: 'http://placehold.it/360x270',
  },
  {
    title: 'Slide 2',
    desc: 'Lorem ipsum dolor sit amet ',
    src: 'http://placehold.it/360x270',
  },
  {
    title: 'Slide 3',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
    src: 'http://placehold.it/360x270',
  },
  {
    title: 'Slide 4',
    desc: 'Lorem ipsum dolor sit amet,  Enim, maxime.',
    src: 'http://placehold.it/360x270',
  },
  {
    title: 'Slide 5',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.',
    src: 'http://placehold.it/360x270',
  },
])
</script>

<template>
  <main class="main">
    <article class="article">
      <h2 class="article__headline">
        Photos
      </h2>
      <div>
        <div v-for="(slide, i) in slides" :key="slide.title" :index="i">
          <h1>{{ slide.title }}</h1>
          <p>{{ slide.desc }}</p>
        </div>
      </div>
    </article>
  </main>
</template>
