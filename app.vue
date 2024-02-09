<script setup>
useHead({
  htmlAttrs: { class: 'h-full' },
  bodyAttrs: { class: 'h-full antialiased font-sans bg-gray-50 dark:bg-gray-950' },
})

onMounted(() => {
  // document.documentElement.classList.add('dark')
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="var(--react)" />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  scrollbar-gutter: stable;
  /* scrollbar-gutter: stable both-edges; */
}

html {
  overflow-y: scroll;
  scrollbar-gutter: stable;
}

#__nuxt {
  height: 100vh;
}

/* html.dark {
  background: #222;
  color: white;
} */

/* a {
  @apply font-medium hover:underline text-blue-500;
} */

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}

/* .page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
} */

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}

.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
.animate-text-slide {
  animation: text-slide 15s cubic-bezier(0.83, 0, 0.17, 1) infinite;
}

/* @keyframes text-slide {
  0%,
  16% {
    transform: translateY(0%);
  }

  20%,
  36% {
    transform: translateY(-16.66%);
  }

  40%,
  56% {
    transform: translateY(-33.33%);
  }

  60%,
  76% {
    transform: translateY(-50%);
  }

  80%,
  96% {
    transform: translateY(-66.66%);
  }

  100% {
    transform: translateY(-83.33%);
  }
} */

@keyframes text-slide {
  0%,
  100% {
    transform: translateY(0%);
  }

  16% {
    transform: translateY(-16.66%);
  }

  32% {
    transform: translateY(-33.33%);
  }

  48% {
    transform: translateY(-50%);
  }

  64% {
    transform: translateY(-66.66%);
  }

  80% {
    transform: translateY(-83.33%);
  }
}
</style>
