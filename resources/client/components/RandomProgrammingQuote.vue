<script setup lang="ts">
import { ref } from 'vue'
const quote = ref({})

const getQuote = async () => {
  const url = 'https://raw.githubusercontent.com/skolakoda/programming-quotes-api/master/backup/quotes.json'
  const response = await fetch(url)
  let json = await response.json()

  json = json[Math.floor(Math.random() * (json.length + 1))]

  quote.value = { text: json['en'], author: json['author']}
}
</script>

<template>
  <div class="prose">
    <p>{{ quote.text}}</p>
    <button @click="getQuote">Get Random Programming Quote</button>
  </div>
</template>
