<script lang="ts" setup>
definePageMeta({
  layout: false,
})
</script>

<template>
  <div class="example">
    <article>
      <h1 class="article__title">
        A really interesting article
      </h1>
      <p class="article__subtitle">
        More info about it here
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quam!</p>
      <p>Dolorem impedit est ab laborum quisquam atque a sit debitis!</p>
      <p class="example">
        Delectus inventore corrupti veritatis voluptates ipsam earum a rem praesentium.
      </p>
    </article>

    <article>
      <h1 class="article__title">
        Another article
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quam!</p>
      <p>Dolorem impedit est ab laborum quisquam atque a sit debitis!</p>
      <p>Delectus inventore corrupti veritatis voluptates ipsam earum a rem praesentium.</p>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.example {
  font-family: system-ui;
  font-size: 1.5rem;
  padding: 2rem;
  background-color: hsl(200 50% 5%);
  color: hsl(200 10% 98%);
}

article {
  max-width: 50rem;
  margin-inline: auto;
}

article + article {
  border-block-start: 2px solid hsl(200 10% 20%);
  margin-block-start: 4rem;
  padding-block-start: 4rem;
}

.article__title {
  color: hsl(250 75% 80%);
  margin: 0;
}

.article__subtitle {
  margin: 0;
  font-size: 1.75rem;
  font-weight: 600;
  margin-block-end: 5rem;
}

.article__title:has(+ .article__subtitle) {
  color: lime;
}

.article__title:not(:has(+ .article__subtitle)) {
  color: pink;
  margin-block-end: 5rem;
}
</style>
