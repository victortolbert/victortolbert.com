<script setup lang="ts">
// Index
const user = useSupabaseUser()
const { auth } = useSupabaseClient()

const email = ref('')

const redirectTo = `${useRuntimeConfig().public.baseUrl}/confirm`

async function signInWithOtp() {
  const { error } = await auth.signInWithOtp({
    email: email.value,
    options: {
      emailRedirectTo: 'https://localhost:8589/confirm',
    },
  })
  if (error)
    console.log(error)
}

watchEffect(() => {
  if (user.value)
    navigateTo('/')
})
</script>

<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <h2 class="my-6 text-center text-3xl font-extrabold u-text-white">
      Sign in to your account
    </h2>

    <UButton
      class="mt-3"
      icon="i-mdi-github"
      block
      label="Github"
      color="black"
      @click="auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo,
        },
      })"
    />
    <UButton @click="signInWithOtp">
      Sign In with E-Mail
    </UButton>
    <UInput v-model="email" type="email" />
  </div>
</template>
