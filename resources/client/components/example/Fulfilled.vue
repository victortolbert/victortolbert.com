<!-- @vue-ignore -->
<script lang="ts">
export default {
  mounted() {
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
    const getSomeTacos = new Promise((resolve, reject) => {
      console.log("Initial state: Excuse me can I have some 🌮s")

      resolve()
    }).then(() => {
      console.log("Order some 🌮s")
    }).then(() => {
      console.log("Here are your 🌮s")
    }).catch(err => {
      console.error("Nope! No 🌮s for you.")
    })
  }
}
</script>

<template>
<section>
  <h2>Check the console!</h2>
  <pre><code class="language-javascript">
const getSomeTacos = new Promise((resolve, reject) => {
  console.log("Initial state: Excuse me can I have some 🌮s");

  resolve();
})
  .then(() => {
    console.log("Order some 🌮s");
  })
  .then(() => {
    console.log("Here are your 🌮s");
  })
  .catch(err => {
    console.error("Nope! No 🌮s for you.");
  });
  </code></pre>
</section>
</template>
