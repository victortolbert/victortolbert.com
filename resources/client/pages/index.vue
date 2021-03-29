<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
const text = ref('textarea text')

const name = ref('')
const router = useRouter()
const go = () => {
  if (name.value) router.push(`/hi/${encodeURIComponent(name.value)}`)
}
const { t } = useI18n()
</script>

<template>
  <PageWrapper>
      <PageHeading>Home Page</PageHeading>
      <SectionWrapper>
        <HelloWorld msg="Hello Vue 3, Vite, Tailwind CSS, and Laravel" />
        <OButton>Testing</OButton>
        <OField label="Auto sizing textarea">
            <TextareaAutosize v-model="text"></TextareaAutosize>
        </OField>
        <OField label="Name">
            <OInput
                id="input"
                v-model="name"
                :placeholder="t('intro.whats-your-name')"
                :aria-label="t('intro.whats-your-name')"
                type="text"
                autocomplete="false"
                class="px-4 py-2 text-sm bg-transparent border border-gray-200 rounded outline-none active:outline-none dark:border-gray-700"
                style="width: 250px"
                @keydown.enter="go"
            />
        </OField>
        <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>
        <div>
          <OButton
            class="m-3 text-sm btn"
            :disabled="!name"
            @click="go"
          >{{ t('button.go') }}</OButton>
        </div>
      </SectionWrapper>
  </PageWrapper>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
