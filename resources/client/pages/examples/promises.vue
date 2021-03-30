<!-- @vue-ignore -->
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  data() {
    return {
      selected: '',
      options: [
        { value: 'ExampleFulfilled' },
        { value: 'ExampleRejected' },
        { value: 'ExamplePending' }
      ]
    }
  },
  methods: {
    changeConsole() {
      if (!this.selected) return
      console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
      const getSomeTacos = new Promise((resolve, reject) => {
        console.log('Initial state: Excuse me can I have some 🌮s')

        if (this.selected === 'Rejected') {
          reject()
        } else {
          resolve()
        }
      }).then(() => {
        console.log("Order some 🌮s")
      }).then(() => {
        console.log("Here are your 🌮s")
      }).catch(err => {
        console.error("Nope! No 🌮s for you.")
      })

       if (this.selected === 'Pending') console.log(getSomeTacos)
    }
  }
})
</script>

<template>
  <main>
    <fieldset>
      <span v-for="option in options">
        <input @change.native="changeConsole" v-model="selected" :id="option.value" :key="option.value" :value="option.value" type="radio" name="promisetype">
        <label for="option.value"> {{option.value}}</label><br>
      </span>
    </fieldset>

    <component v-if="selected" :is="selected"></component>
  </main>
</template>
