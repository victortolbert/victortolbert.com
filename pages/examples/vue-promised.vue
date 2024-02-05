<script setup>
import { Promised } from 'vue-promised'
import { useRandomJoke } from '~/apis/jokes'

definePageMeta({
  title: 'Vue Promised',
  breadcrumb: 'Vue Promised',
  layout: 'hancock',
})

const texts = {
  loading: 'Fetching the joke...',
  waiting: 'Wait for it...',
  ready: 'Another one?',
}

const promise = ref(null)
const state = ref('waiting')

const buttonText = computed(() => {
  return texts[state.value]
})

function delay(timeout) {
  return new Promise(
    resolve => setTimeout(resolve, timeout),
  )
}

function getRandomJoke() {
  state.value = 'loading'
  promise.value = useRandomJoke()
  promise.value.finally(() => {
    state.value = 'waiting'
  })
}

function trySuccess() {
  getRandomJoke()
}

function tryError() {
  state.value = 'ready'
  promise.value = delay(500).then(() => {
    return Promise.reject(new Error('🔥'))
  })
}

trySuccess()
</script>

<template>
  <article class="mt-4">
    <UContainer>
      <p class="buttons">
        <UButton
          :disabled="state !== 'ready'"
          style="margin-bottom: 4px"
          @click="trySuccess"
        >
          {{ buttonText }}
        </UButton>
        <br>
        <UButton @click="tryError">
          Purposely fail
        </UButton>
      </p>
      <div style="min-height: 9rem">
        <div class="relative">
          <Promised :promise="promise">
            <template #pending>
              <div class="spinner" />
            </template>

            <template #default="joke">
              <blockquote :key="joke.id">
                <i>{{ joke.setup }}</i>
                <br>
                <br>
                <p class="appear" @animationend="state = 'ready'">
                  {{ joke.delivery }}
                </p>
              </blockquote>
            </template>

            <template #rejected="error">
              <p>Error: {{ error.message }}</p>
            </template>
          </Promised>
        </div>
      </div>

      <Promised :promise="promise" :pending-delay="1000">
        <template #combined="props">
          <pre class="code">
      isPending: {{ props.isPending }}
      isDelayElapsed:{{ props.isDelayElapsed }}
      error:{{ props.error && props.error.message }}
      data: {{ props.data }}</pre>
        </template>
      </Promised>
    </UContainer>
  </article>
</template>

<style>
@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.appear {
  opacity: 0;
  animation: appear 1s ease-in-out 3s;
  animation-fill-mode: forwards;
}
</style>
