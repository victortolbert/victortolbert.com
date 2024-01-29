<script setup>
// import { camelCase, flatCase, kebabCase, lowerFirst, pascalCase, snakeCase, splitByCase, trainCase, upperFirst } from 'scule'

definePageMeta({
  title: 'Snippets',
  breadcrumb: 'Snippets',
})

const open = ref(true)

defineShortcuts({
  o: () => open.value = !open.value,
})

const skills = ref([
  { icon: 'i-logos-javascript', label: 'JavaScript', url: '/javascript' },
  { icon: 'i-logos-typescript-icon', label: 'TypeScript', url: '/typescript' },
  { icon: 'i-logos-c-sharp', label: 'C#', url: '/csharp' },
  { icon: 'i-logos-dotnet', label: '.NET', url: '/dotnet' },
  { icon: 'i-logos-html-5', label: 'HTML', url: '/html' },
  { icon: 'i-logos-sass', label: 'Sass', url: '/sass' },
  { icon: 'i-logos-css-3', label: 'CSS', url: '/css' },
  { icon: 'i-logos-salesforce', label: 'SLDS', url: '/slds' },
  { icon: 'i-logos-tailwindcss-icon', label: 'Tailwind', url: '/tailwind' },
  { icon: 'i-logos-bootstrap', label: 'Bootstrap', url: '/bootstrap' },
  { icon: 'i-logos-bulma', label: 'Bulma', url: '/bulma' },
  { icon: 'i-logos-vue', label: 'Vue.js', url: '/vue' },
  { icon: 'i-logos-nuxt-icon', label: 'Nuxt', url: '/nuxt' },
  { icon: 'i-logos-react', label: 'React', url: '/react' },
  { icon: 'i-logos-angular-icon', label: 'Angular', url: '/angular' },
  { icon: 'i-logos-laravel', label: 'Laravel', url: '/laravel' },
  { icon: 'i-logos-codeigniter-icon', label: 'CodeIgniter', url: '/codeigniter' },
  { icon: 'i-logos-drupal-icon', label: 'Drupal', url: '/drupal' },
  { icon: 'i-logos-wordpress-icon', label: 'WordPress', url: '/wordpress' },
  { icon: 'i-logos-ruby', label: 'Ruby', url: '/ruby' },
])
</script>

<template>
  <div class="flex flex-wrap gap-1.5">
    <UButton
      v-for="skill in skills"
      :key="skill.label"
      :to="skill.url"
      :icon="skill.icon"
      size="sm"
      color="white"
      variant="solid"
      :label="skill.label"
      :trailing="false"
    />
  </div>
</template>
