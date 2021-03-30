<!-- @vue-ignore -->
<script lang="ts">
export default {
  mounted() {
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
    const getSomeTacos = new Promise((resolve, reject) => {
      console.log("Initial state: Excuse me can I have some 🌮s");
      resolve()
    }).then(() => {
      console.log("Order some 🌮s")
    }).then(() => {
      console.log("Here are your 🌮s")
    }).catch(err => {
      console.error("Nope! No 🌮s for you.");
    })

    console.log(getSomeTacos)
  }
}
</script>

<template>
<section>
  <h2>Check the console!</h2>
  <p>This one is the same as the fulfilled option, but we're logging the promise when we call it, which will show it in the pending state.</p>
  <pre><code class="language-javascript">
const getSomeTacos = new Promise((resolve, reject) => {
  console.log('Initial state: Excuse me can I have some 🌮s')

  resolve()
})
.then(() => {
  console.log('Order some 🌮s')
})
.then(() => {
  console.log('Here are your 🌮s')
})
.catch((err) => {
  console.error('Nope! No 🌮s for you.')
});

//logging this will show us the getSomeTacos promise in the pending state
console.log(getSomeTacos)
  </code></pre>
</section>
</template>
