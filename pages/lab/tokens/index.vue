<script setup>
definePageMeta({
  title: 'Design Tokens',
  description: 'Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development.',
  breadcrumb: {
    title: 'Design Tokens',
    ariaLabel: 'Design Tokens',
    hideCurrent: true,
  },
})
</script>

<template>
  <section class="grid gap-4">
    <header class="border-b pb-4">
      <h3 class="font-medium">
        Color Palette
      </h3>
    </header>

    <ColorPalette />

    <header class="border-b pb-4">
      <h3 class="font-medium">
        Typography
      </h3>
    </header>

    <section class="grid gap-8 font-serif">
      <blockquote>
        <p> &ldquo;Donuts? I told you I don't like ethnic food.&rdquo;</p>
        <footer>
          &mdash; <cite>C. Montgomery Burns</cite>
        </footer>
      </blockquote>

      <p>"For once, maybe someone will call me 'sir' without adding, 'you're making a scene.'"</p>

      <p>&ldquo;For once, maybe someone will call me &lsquo;sir&rsquo; without adding, &lsquo;you&rsquo;re making a scene.&rsquo;&rdquo;</p>

      <p>“For once, maybe someone will call me ‘sir’ without adding, ‘you’re making a scene.’”</p>

      <ul>
        <li>‒</li>
        <li>&#8210;</li>
        <li>‒</li>
        <li>‐</li>
        <li>&#8208;</li>
        <li>−</li>
        <li>&minus;</li>
      </ul>

      <p>May&ndash;June</p>

      <p>It takes two to lie &ndash; one to lie and one to listen.</p>

      <p>It takes two to lie&mdash;one to lie and one to listen.</p>
    </section>
  </section>
</template>
