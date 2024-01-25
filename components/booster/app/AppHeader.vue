<script setup lang="ts">
import { useStore } from 'vuex'

// import AppHeaderNavLink from '~/components/template/AppHeaderNavLink'
// import AppHeaderNavSection from '~/components/template/AppHeaderNavSection'
// import NotificationAccordionModal from '~/components/template/NotificationAccordionModal'
// import AlertBadge from '~/components/element/AlertBadge'

import type { Program } from '~/types'

const props = defineProps<{
  program: Program
  index: number
}>()

const { t } = useI18n()
const store = useStore()
const router = useRouter()
const route = useRoute()
const isOpen = ref(false)
const openButton = ref(null)

const orgAdmin = 50
const linkClasses = 'm-0 p-4 px-4 font-medium text-blue-dark border-grey-light focus:text-blue-darker hover:text-blue-darker active:text-blue-darker hover:bg-grey-lighter border-b'

const isOrgAdmin = computed(() => {
  return store.state.user.group_membership.includes(orgAdmin)
})

const activePrograms = computed(() => store.getters.activePrograms)
const programNotifications = computed(() => store.getters.programNotifications)
const unReadNotifications = computed(() => store.getters.unReadNotifications)
const isRead = computed(() => store.getters.isRead)
const programHasNotifications = computed(() => store.getters.programHasNotifications)

// watch: {
//   isOpen: {
//     immediate: true,
//     handler(isOpen) {
//       if (isOpen) {
//         // Disable scrolling.
//         document.body.style.setProperty('overflow', 'hidden')
//         document.documentElement.style.setProperty('overflow', 'hidden')
//       }
//       else {
//         // Enable scrolling.
//         document.body.style.removeProperty('overflow')
//         document.documentElement.style.removeProperty('overflow', 'hidden')
//       }
//     },
//   },
// }

function getMinIdParticipant(program) {
  return program.participants.reduce((min, current) => min.id < current.id ? min : current)
}

// function open() {
//   isOpen.value = true
// }

function close() {
  isOpen.value = false
}

function toggle() {
  isOpen.value = !isOpen.value
}

function navTo(index, routeName, id, eventName = props.program.event_name) {
  router.push({
    name: routeName,
    query: {
      p: index,
    },
    params: {
      participantUserId: id,
    },
  })

  close()
  store.dispatch('setActiveTab', index)
  store.state.activeEventName = eventName
}

function isPageActive(index, routeName, id) {
  if (route)
    return route.name === routeName && (route.params.participantUserId === id || store.state.activeTab === index)

  return false
}

function isTeacherDashoardLink(program) {
  if (store.state.user.teacher_participant_ids && store.state.user.teacher_participant_ids.length > 0) {
    return program.participants.some((participant) => {
      return store.state.user.teacher_participant_ids.includes(participant.id)
    })
  }

  return false
}

function isFinishLineEligible(program) {
  let isEligible = false
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  program.participants.forEach((participant) => {
    if (new Date(program.fun_run) < tomorrow && participant.laps !== null)
      isEligible = true
  })

  return isEligible
}

function handleScroll(_, el) {
  if (window.scrollY > 50)
    el.classList.add('shrink')
  else
    el.classList.remove('shrink')
}

function goToTeacherRegistration() {
  // this.gaEvent('Parent Dashboard', 'Register Teacher', 'View')
  window.location.href = '/v3/register/teacher'
}

function openProgramNotifications(program) {
  isOpen.value = false

  // this.$modal.open({
  //   parent: this,
  //   component: NotificationAccordionModal,
  //   hasModalCard: true,
  //   width: 'auto',
  //   onCancel: this.unBlur,
  //   canCancel: ['escape', 'outside'],
  //   props: {
  //     program,
  //   },
  // })

  // this.blur()
}
</script>

<template>
  <header
    v-scroll="handleScroll"
    class="app-header fixed w-full px-6 shadow text-white bg-blue bg-cover bg-center z-10"
  >
    <div class="container flex items-center justify-between w-full mx-auto max-w-xl">
      <slot />
      <div class="flex">
        <button
          ref="openButton"
          :class="[!isOpen ? 'visible' : 'invisible']"
          type="button"
          class="inline-block text-white focus:outline-none focus:text-white"
          aria-label="Menu"
          @click="toggle"
        >
          <FontAwesomeIcon
            :icon="['far', 'bars']"
            class="fa-2x text-white"
          />
        </button>
        <AlertBadge
          v-if="unReadNotifications.length > 0"
          :class="[!isOpen ? 'visible' : 'invisible']"
          :number="unReadNotifications.length"
          @toggle="toggle"
        />
      </div>
    </div>
    <div>
      <Transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
        appear
      >
        <div
          v-show="isOpen"
          class="z-10 fixed pin transition-opacity"
        >
          <div
            class="absolute pin bg-black opacity-50"
            tabindex="-1"
            @click="close"
          />
        </div>
      </Transition>
      <Transition
        enter-class="translate-x-full"
        enter-active-class="ease-out transition-slow"
        enter-to-class="translate-x-0"
        leave-class="translate-x-0"
        leave-active-class="ease-in transition-medium"
        leave-to-class="translate-x-full"
        appear
      >
        <nav
          v-show="isOpen"
          class="ocm z-10 absolute  max-w-xs pin-t pin-r right-0 mr-0 w-full bg-white transition-transform shadow-lg"
        >
          <button
            type="button"
            class="absolute mt-4 -ml-8 inline-block text-white focus:outline-none focus:text-white"
            aria-label="Close"
            @click="close"
          >
            <FontAwesomeIcon
              :icon="['fal', 'times']"
              class="fa-2x text-white"
            />
          </button>
          <div class="max-h-screen overflow-y-auto">
            <!-- Program(s) Section -->
            <div class="relative z-10 bg-white">
              <div
                v-for="(program, index) in activePrograms"
                :key="index"
                :class="program.microsite.microsite_color_theme.theme_name"
              >
                <div class="nav-section themed flex items-baseline justify-between m-0 p-2 px-4 leading-tight text-grey-darker font-bold border-t-8 bg-grey-light">
                  <div
                    :class="[{
                      'w-2/3': !getMinIdParticipant(program).participant_info.family_pledging_enabled,
                    }]"
                    class="mr-1"
                  >
                    {{ program.event_name }}
                  </div>
                  <span
                    v-if="!getMinIdParticipant(program).participant_info.family_pledging_enabled"
                    class="w-1/3 ml-1 pr-1 inline-block text-xs text-grey-darker font-medium text-right truncate"
                  >
                    {{ getMinIdParticipant(program).first_name }}
                  </span>
                </div>

                <a
                  v-if="isTeacherDashoardLink(program)"
                  :class="[
                    linkClasses,
                    { 'is-active': isPageActive(index, 'teacher-dashboard', program.participants[0].id) },
                  ]"
                  @click="navTo(index, 'teacher-dashboard', program.participants[0].id, program.event_name)"
                >
                  {{ t('teacher_dashboard') }}
                </a>
                <a
                  v-else
                  :class="[
                    linkClasses,
                    { 'is-active': isPageActive(index, 'parent-dashboard', getMinIdParticipant(program).id) },
                  ]"
                  @click="navTo(index, 'parent-dashboard', getMinIdParticipant(program).id, program.event_name)"
                >
                  {{ t('home') }}
                </a>

                <a
                  :class="[
                    linkClasses,
                    { 'is-active': isPageActive(index, 'easy-emailer', getMinIdParticipant(program).id) },
                  ]"
                  @click="navTo(index, 'easy-emailer', getMinIdParticipant(program).id)"
                >
                  {{ t('easy_emailer') }}
                </a>

                <a
                  v-if="programHasNotifications(program.id)"
                  :class="[
                    linkClasses,
                    { 'is-active': isPageActive(index, 'easy-emailer', program.participants[0].id) },
                  ]"
                  class="capitalize"
                  @click.prevent="openProgramNotifications(program)"
                >
                  {{ t('alerts') }}
                  <AlertBadge
                    v-if="store.getters.unReadNotificationsByProgram(program.id).length > 0"
                    :number="store.getters.unReadNotificationsByProgram(program.id).length"
                    :static-position="true"
                    class="ml-1 inline-block"
                    @toggle="toggle"
                  />
                </a>

                <a
                  v-if="isFinishLineEligible(program)"
                  :class="[
                    linkClasses,
                    { 'is-active': isPageActive(index, 'finish-line', getMinIdParticipant(program).id) },
                  ]"
                  class="m-0 p-4 px-4 font-medium text-blue-dark border-grey-light focus:text-blue-darker hover:text-blue-darker active:text-blue-darker hover:bg-grey-lighter border-b"
                  @click="navTo(index, 'finish-line', getMinIdParticipant(program).id)"
                >
                  {{ t('finish_line') }}
                </a>
              </div>
            </div>

            <!-- Registration Section -->
            <div class="relative z-10 bg-white">
              <AppHeaderNavSection>
                {{ t('registration') }}
              </AppHeaderNavSection>
              <AppHeaderNavLink href="/v3/register/participant">
                {{ t('register_student') }}
              </AppHeaderNavLink>
              <AppHeaderNavLink
                href="#"
                @click="goToTeacherRegistration"
              >
                {{ t('register_teacher') }}
              </AppHeaderNavLink>
            </div>

            <!-- My Settings Section -->
            <div class="relative z-10 bg-white pb-32 lg:pb-0">
              <AppHeaderNavSection>
                {{ t('my_settings') }}
              </AppHeaderNavSection>
              <AppHeaderNavLink
                v-if="isOrgAdmin"
                href="/v3/tkdashboard/?redirect=/admin"
                class="org-admin-link"
              >
                {{ t('admin_dashboard') }}
              </AppHeaderNavLink>
              <RouterLink
                :to="{ name: 'edit-profile' }"
                class="m-0 p-4 px-4 font-medium text-gray-dark border-b border-grey-light hover:text-blue-darker hover:bg-grey-lighter"
              >
                {{ t('my_profile') }}
              </RouterLink>
              <AppHeaderNavLink href="/v3/support">
                {{ t('help_center') }}
              </AppHeaderNavLink>
              <AppHeaderNavLink href="/v3/logout">
                {{ t('logout') }}
              </AppHeaderNavLink>
            </div>
          </div>
        </nav>
      </Transition>
    </div>
  </header>
</template>

<style lang="scss" scoped>
a {
  @apply block;
}
.is-active {
  @apply underline text-secondary font-bold;
}
</style>
