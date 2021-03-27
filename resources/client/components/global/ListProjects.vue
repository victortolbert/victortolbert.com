<script setup lang="ts">
import { defineProps } from 'vue'
const { projects } = defineProps<{ projects: any }>()
</script>

<template>
    <template v-for="key in Object.keys(projects)" :key="key">
    <h4 class="mt-10 font-bold">
        {{ key }}
    </h4>
    <div class="gap-2 py-2 -mx-3 project-grid">
        <a
        v-for="item, idx in projects[key]"
        :key="idx"
        class="relative flex item"
        :href="item.link"
        target="_blank"
        :class="!item.link ? &quot;opacity-0 pointer-events-none h-0 -mt-8 -mb-4&quot; : &quot;&quot;"
        >
        <div v-if="item.icon" class="pt-2 pr-5">
            <Icon class="text-3xl opacity-50" :icon="item.icon || 'carbon:unknown'" />
        </div>
        <div class="flex-auto">
            <div cla ss="text-normal">{{ item.name }}</div>
            <div
            class="text-sm font-normal opacity-50 desc"
            v-html="item.desc"
            />
        </div>
        </a>
    </div>
    </template>
    <div class="mt-10 markdown">
    <p class="opacity-75">
        <em>Thanks for getting intersted in my works! If like them or find them useful, consider<a href="https://github.com/sponsors/antfu" target="_blank" rel="nofollow noopener noreferrer">&nbsp;sponsoring me&nbsp;</a>to support me keeping them sustainable. Cheers! :)</em>
    </p>
    </div>
</template>
