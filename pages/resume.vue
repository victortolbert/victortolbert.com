<script setup lang="ts">
// https://github.com/buk0vec/jcv
definePageMeta({
  title: 'Resume',
  breadcrumb: 'Resume',
  // layout: false,
})

interface Resume {
  basics: {
    name: string
    label: string
    url: string
    location: {
      address: string
      city: string
      region: string
      postalCode: string
      countryCode: string
    }
    summary: string
  }
  work: {
    name: string
    location: string
    position: string
    startDate: string
    endDate: string
    description: string
    summary: string
    highlights: string[]
  }[]
  education: {
    institution: string
    studyType: string
    endDate: string
    area: string
  }[]
  skills: {
    name: string
    level: string
    keywords: string[]
  }[]
  languages: {
    language: string
    fluency: string
  }[]
  interests: {
    name: string
    keywords: string[]
  }[]
  references: {
    name: string
    reference: string
  }[]
}

const { data: resume } = await useAsyncData(
  'home',
  () => queryContent('/resume').findOne(),
)
</script>

<template>
  <UArticle class="mt-8">
    <UContainer>
      <div class="max-w-3xl prose">
        <!-- <h2> -->
        <!-- , {{ resume.basics.label }} -->
        <!-- </h2> -->
        <!-- <address>
            {{ resume.basics.location.address }}<br>
            {{ resume.basics.location.city }}
            {{ resume.basics.location.region }}
            {{ resume.basics.location.postalCode }}
            {{ resume.basics.location.countryCode }}
          </address> -->

        <div>
          <span class="text-lg font-bold">{{ resume?.basics.name }}</span><br>
          <NuxtLink :to="resume?.basics.url">
            {{ resume?.basics.url }}
          </NuxtLink>
        </div>

        <!-- <div class="mt-8">
          {{ resume.basics.summary }}
        </div>

        <h3>Experience</h3>

        <ul>
          <li v-for="job in resume.work" :key="job.startDate">
            {{ job.name }}
            {{ job.location }}
            {{ job.position }}
            {{ job.startDate }}
            {{ job.description }}
            {{ job.summary }}
            <ul>
              <li v-for="(highlight, i) in job.highlights" :key="i" />
            </ul>
          </li>
        </ul>

        <h3>Education</h3>
        <ul>
          <li v-for="study in resume.education" :key="study.area" class="flex justify-between">
            <span>{{ study.institution }} {{ study.studyType }} </span>
            <span>{{ study.endDate }}</span>
          </li>
        </ul>
      </div> -->

        <!-- <pre>
          {{ resume }}
      </pre> -->
      </div>
    </UContainer>
  </UArticle>
</template>
