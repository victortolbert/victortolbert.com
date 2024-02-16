<script lang="ts" setup>
import { SidebarMenu } from 'vue-sidebar-menu'
import type { SidebarHeaderItem, SidebarItem } from 'vue-sidebar-menu'

const isReady = ref(true)
const collapsed = ref(false)

const menu = ref([
  {
    header: 'Main Navigation',
    hiddenOnCollapse: true,
  } as SidebarHeaderItem,
  {
    href: '/dashboard',
    title: 'Dashboard',
    icon: {
      element: 'icon',
      class: 'text-primary-100 w-6 h-6',
      attributes: {
        icon: 'carbon:dashboard',
      },
    },
  } as SidebarItem,
  {
    href: '/projects',
    title: 'Projects',
    icon: {
      element: 'icon',
      class: 'text-primary-100 w-6 h-6',
      attributes: {
        icon: 'carbon:folders',
      },
    },
  } as SidebarItem,
] as SidebarMenu['menu'])

function onToggleCollapse() { }
function onItemClick() { }
</script>

<template>
  <ClientOnly>
    <SidebarMenu
      v-if="isReady"
      width="320px"
      width-collapsed="64px"
      :menu="menu"
      :collapsed="collapsed"
      :show-one-child="true"
      @toggle-collapse="onToggleCollapse"
      @item-click="onItemClick"
    >
      <template #header>
        <div class="h-16 bg-white">
          <NuxtLink
            href="/dashboard"
            class="app-sidebar-header text-primary-500 h-16 flex items-center space-x-2"
          >
            <LogoHancockMark class="ml-2" />
            <span v-if="!collapsed">
              <LogoHancockMark class="ml-2" />
            </span>
          </NuxtLink>
        </div>
      </template>

      <template #toggle-icon>
        <span class="app-sidebar-toggle-icon">
          <icon
            icon="mdi:arrow-collapse-left"
            class="text-primary-200 h-6 w-6 origin-center transition duration-300 ease-in-out group-hover:text-white"
            :class="[collapsed ? '-rotate-180 ' : '']"
          />
        </span>
      </template>
    </SidebarMenu>
  </ClientOnly>
</template>
