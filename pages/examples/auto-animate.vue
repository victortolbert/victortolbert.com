<script setup>
import { ref } from 'vue'
import { useAutoAnimate } from '@formkit/auto-animate/vue'
import autoAnimate from '@formkit/auto-animate'

import { HTTP } from '~/utils/http'

definePageMeta({
  title: 'Auto Animate',
  breadcrumb: 'Auto Animate',
  layout: 'hancock',
})

const fruitItems = ref(['🍎 Apple', '🍌 Banana', '🍒 Cherry'])

const fruitList = ref(null)

const fruitBasket = [
  '🍓 Strawberry',
  '🥥 Coconut',
  '🥝 Kiwi',
  '🍇 Grape',
  '🍉 Watermelon',
  '🍍 Pineapple',
  '🍐 Pear',
  '🍑 Peach',
  '🫐 Blueberry',
  '🍊 Orange',
  '🥭 Mango',
]

function removeFruit(item) {
  fruitItems.value = fruitItems.value.filter((fruit) => {
    if (fruit === item) {
      fruitBasket.push(fruit)
      return false
    }
    return true
  })
}

function addFruit() {
  if (fruitBasket.length) {
    fruitItems.value.splice(
      Math.round(Math.random() * fruitItems.value.length - 1),
      0,
      fruitBasket.shift(),
    )
  }
  else {
    alert('Out of fruit!')
  }
}

const randomizeFruit = () => fruitItems.value.sort(() => (Math.random() > 0.5 ? 1 : -1))

const posts = await HTTP.get('https://dummyjson.com/posts')

console.log(posts)

const faq = ref([
  {
    id: 'why',
    question: 'Why did you create it?',
    answer: `We needed a way to animate DOM elements without adding to the
    virtual DOM in Vue and React. And it turned out our solution was gonna work
    great for lots of other use cases as well.`,
  },
  {
    id: 'license',
    question: 'Is it open source?',
    answer: `It sure is! AutoAnimate is MIT licensed, which basically means you
    are free to take it and do whatever you want with it. If you find it useful
    consider <a href="https://github.com/sponsors/formkit">supporting our open source efforts</a>.`,
  },
  {
    id: 'who',
    question: 'Who made this?',
    answer: `AutoAnimate is a team effort 💪 . Most of the code was written by
      <a href='https://twitter.com/jpschroeder'>Justin Schroeder</a>,
      <a href='https://twitter.com/0xBOYD'>Andrew Boyd</a> played a key
      role on the docs, and the rest of the <a href='https://formkit.com'>FormKit</a>
      team held down the fort.`,
  },
])

const current = ref(faq.value[0].id)

const frameworks = ref([
  'Vue',
  'Svelte',
  'React',
  'Qwik',
  'Angular',
  'AngularJS',
  'Solid',
])

function sortAsc() {
  frameworks.value.sort()
}

function sortDesc() {
  frameworks.value.sort().reverse()
}

const [parent] = useAutoAnimate()

const emojis = ref(['😏', '😐', '😑', '😒', '😕'])
function removeItem(toRemove) {
  emojis.value = emojis.value.filter(item => item !== toRemove)
}

const numbers = ref(Array.from({ length: 50 }).fill('').map((_, i) => i))

function randomize() {
  numbers.value.sort(() => (Math.random() > 0.5 ? 1 : -1))
}
onMounted(() => autoAnimate(fruitList.value))
</script>

<template>
  <UArticle>
    <USection>
      <div class="example list-example">
        <div class="mb-2 flex items-center gap-2">
          <UButton icon="i-carbon-add" class="button button--add button--alt" @click="addFruit">
            Add Fruit
          </UButton>
          <UButton class="button button--alt button--random" @click="randomizeFruit">
            Randomize
          </UButton>
        </div>

        <ul ref="fruitList" class="">
          <li v-for="item in fruitItems" :key="item" class="mb-1 rounded bg-white px-4 py-2 dark:bg-gray-900">
            <div class="flex items-center justify-between">
              <span>{{ item }}</span>
              <UButton variant="soft" square icon="i-carbon-close" aria-label="Remove Fruit" @click.prevent="removeFruit(item)" />
            </div>
          </li>
        </ul>
      </div>
    </USection>

    <USection>
      <div class="example accordion-example">
        <ul class="accordion">
          <li v-for="q in faq" :key="q.id" v-auto-animate class="accordion-item">
            <div
              class="question"
              @click="current = current === q.id ? false : q.id"
            >
              {{ q.question }}
            </div>
            <p v-if="q.id === current" class="answer" v-html="q.answer" />
          </li>
        </ul>
      </div>
    </USection>

    <USection>
      <div class="example boxes-example">
        <UButton @click="randomize">
          Randomize
        </UButton>

        <div v-auto-animate="{ duration: 500 }" class="my-8 flex flex-wrap -mx-1">
          <div
            v-for="number in numbers"
            :key="number"
            class="box m-1 flex items-center justify-center border rounded bg-white text-sm font-light dark:border-gray-800 dark:bg-gray-900"
            v-text="number"
          />
        </div>
      </div>
    </USection>

    <USection>
      <h5>Click emojis to remove them.</h5>
      <ul v-auto-animate class="item-center flex cursor-pointer gap-2">
        <li
          v-for="emoji in emojis"
          :key="`emoji-${emoji}`"
          @click="removeItem(emoji)"
        >
          {{ emoji }}
        </li>
      </ul>
    </USection>

    <USection>
      <div>
        <UButton trailing-icon="i-carbon-arrow-up" variant="link" @click="sortAsc">
          Sort A-Z
        </UButton>
        <UButton trailing-icon="i-carbon-arrow-down" variant="link" @click="sortDesc">
          Sort Z-A
        </UButton>
      </div>

      <table class="w-full border bg-white">
        <tbody ref="parent">
          <tr
            v-for="framework in frameworks"
            :key="`framework-${framework}`"
          >
            <td class="border p-1 px-3">
              {{ framework }}
            </td>
          </tr>
        </tbody>
      </table>
    </USection>
  </UArticle>
</template>

<style scoped>
.box {
  width: calc(10% - 0.5em);
  aspect-ratio: 1;
}

/* li {
  display: block;
  background-color: var(--ui-light);
  border-radius: 0.5em;
  overflow: hidden;
}
[data-dark-mode="true"] li {
  background-color: var(--purple-d);
}

.question {
  padding: 1em;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.question::before {
  content: "Q";
  font-size: 1.5em;
  margin-right: 0.5em;
  color: var(--primary);
}
[data-dark-mode="true"] .question::before {
  color: var(--purple-m);
}
.answer {
  margin: 0 1rem;
  padding: 0 0 1rem 0;
  font-size: 0.875em;
}

} */
</style>
