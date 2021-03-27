<script lang="ts">
export default {
  props: {
    period: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    when: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <li
    v-scroll-reveal
    :class="{'period my-2 md:my-12 py-12 md:mt-0': period}"
    class="relative pl-8 timeline-item md:block md:pl-0"
  >
    <div
      v-if="!period"
      class="mb-2 text-xs font-bold tracking-wide uppercase whitespace-no-wrap timeline-info md:w-1/2 md:block md:mb-0 md:mt-1 md:p-0"
    >
      <span class="mt-1" v-text="when" />
    </div>
    <div
      v-if="!period"
      class="absolute inset-y-0 left-0 w-8 timeline-marker md:block md:m-0 md:p-0"
    />
    <div
      :class="{'md:w-1/2': !period}"
      class="pb-8 timeline-content md:block md:m-0 md:p-0"
    >
      <component
        :is="period ? 'h2' : 'h3'"
        :class="{'text-xl font-bold': period, 'text-lg': !period}"
        class="font-bold text-black"
        v-text="title"
      />
      <p :class="{'mt-2': period}">
        <slot />
      </p>
    </div>
  </li>
</template>

<style lang="postcss">
.timeline-marker {
  &:before {
    @apply absolute left-0 block h-4 w-4 bg-gray-400;
    content: '';
    top: 4px;
    transition: background 0.2s ease-in-out;
  }

  &:after {
    @apply absolute bottom-0 block bg-gray-400;
    content: '';
    width: 3px;
    top: 24px;
    left: 6px;
  }
}

.timeline-item:not(.period):hover .timeline-marker:before {
  @apply bg-red-600;
}

.timeline-item:not(.period):hover .timeline-info,
.timeline-item:not(.period):hover .timeline-content {
  @apply text-gray-900;
}

@screen md {
  .timeline-item {
    @apply overflow-hidden;
    padding-bottom: 40px;
  }

  .timeline-marker {
    @apply absolute;
    left: 50%;
    margin-left: -7.5px;
  }

  .timeline-item:nth-child(odd) .timeline-info,
  .timeline-item:nth-child(even) .timeline-content {
    @apply float-left text-right;
    padding-right: 30px;
  }

  .timeline-item:nth-child(odd) .timeline-content,
  .timeline-item:nth-child(even) .timeline-info {
    @apply float-right text-left;
    padding-left: 30px;
  }

  .timeline-item.period .timeline-content {
    @apply float-none p-0 w-full text-center;
  }

  .period .timeline-marker:after {
    @apply bottom-0 h-16;
    top: auto;
  }
}
</style>
