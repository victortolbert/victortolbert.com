<script setup lang="ts">
import { SidebarMenu } from 'vue-sidebar-menu'
import { appMenu } from '~/app.config'

withDefaults(defineProps<{
  initialState: 'collapsed' | 'expanded'
  title?: string
}>(), {
  initialState: 'collapsed',
  title: 'Vue',
})

const emit = defineEmits(['toggle'])

const menu = ref(appMenu)

const isCollapsed = ref(false)

function toggle() {
  emit('toggle', isCollapsed.value)
}

const onItemClick = (event: any, item: any) => console.log({ event, item })
</script>

<template>
  <SidebarMenu
    v-model:collapsed="isCollapsed"
    :relative="false"
    :disable-hover="false"
    :hide-toggle="false"
    width-collapsed="64px"
    width="320px"
    :menu="menu"
    :show-one-child="false"
    :show-child="false"
    @update:collapsed="toggle"
    @item-click="onItemClick"
  >
    <template #header>
      <div>
        <router-link
          to="/"
          tabindex="-1"
          class="flex items-center bg-white dark:bg-primary-900 text-primary dark:text-primary-50 group"
        >
          <div class="flex items-center justify-center h-16 shrink-0">
            <div class="flex items-center space-x-2">
              <hancock-logo name="vti" />
            </div>
          </div>
        </router-link>
      </div>
    </template>

    <template #toggle-icon>
      <i-mdi-arrow-collapse-left
        class="w-6 h-6 text-primary-200 group-hover:text-white transition origin-center duration-300 ease-in-out" :class="[isCollapsed ? '-rotate-180 ' : '']"
      />
    </template>
  </SidebarMenu>
</template>
