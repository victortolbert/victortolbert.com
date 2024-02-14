<script setup>
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import { PledgingStatus } from '~/utils/PledgingStatus'

const props = defineProps({
  participantUserId: {
    type: Number,
    default: null,
  },
})
const { t } = useI18n()
const store = useStore()
const contactsTable = ref(null)
const active = ref(false)
const update = ref(0)
const allSelected = ref(true)
const isEditing = ref(false)
const hasPreviousSponsors = ref(true)
const EMAIL = ref(3)
const EMAIL_VIDEO = ref(10)
const EMAIL_SSV_DISABLED = ref(22)

const participant = computed(() => {
  return store.getters.participantForPreviousSponsors
})

const participantProgram = computed(() => {
  return store.getters.participantProgram
})

const tooltipOptions = computed(() => {
  return {
    classes: ['info'],
    content: 'Removing a contact will remove them from this list for the current email campaign.<br><br> Unsubscribed means a sponsor has decided to stop receiving these emails.',
    placement: 'left-start',
    trigger: 'hover click focus',
  }
})

const allSelectedTest = computed(() => {
  return allSelected.value
})

const emailShareLink = computed(() => {
  const referrerId = hasVideo() ? EMAIL_VIDEO.value : EMAIL.value
  const specialUrl = participant.value.special_urls.find(specialUrl => specialUrl.referrer.id === referrerId)
  const overrideReferrerId = hasVideo() ? '' : `/${EMAIL_SSV_DISABLED.value}`
  return `${window.location.protocol}//${window.location.hostname}/v3/dash/${specialUrl.short_key}${overrideReferrerId}`
})

const getContacts = computed(() => {
  const potentialSponsors = getPotentialSponsors(props.participantUserId)
  const previousSponsors = store.getters.getPreviousSponsors
  const currentSponsorEmails = store.getters.getCurrentSponsorEmails

  const sponsors = previousSponsors.concat(potentialSponsors)

  // Set statuses & opt out
  sponsors.forEach((sponsor) => {
    const isCurrentSponsor = currentSponsorEmails.includes(sponsor.email)
    const isPotentialSponsor = potentialSponsors.find(potentialSponsor => potentialSponsor.email === sponsor.email)
    if (isPotentialSponsor)
      sponsor.deleted = isPotentialSponsor.deleted

    sponsor.isSelectable = false
    sponsor.isSelected = false

    if (sponsor.optOut) {
      sponsor.status = PledgingStatus.UNSUBSCRIBED
    }
    else if (isCurrentSponsor) {
      sponsor.status = PledgingStatus.PLEDGED
    }
    else if (isPotentialSponsor) {
      sponsor.status = PledgingStatus.ACTIVE
    }
    else {
      sponsor.status = PledgingStatus.NOT_ENROLLED
      sponsor.isSelectable = true
      sponsor.isSelected = true
    }
  })

  const uniqueMap = new Map()
  return sponsors.filter(sponsor => sponsor.deleted !== 1)
    .filter((sponsor) => {
      if (!uniqueMap.has(sponsor.email)) {
        uniqueMap.set(sponsor.email, true)
        return true
      }
      else {
        return false
      }
    })
})

function hasVideo() {
  const participantCount = store.getters.participants.length
  const hasVideoCount = store.getters.participants.filter(participant => participant.profile.video_url).length
  return hasVideoCount === participantCount
}

function addContactsToDisplay(contacts) {
  contacts.forEach((contact) => {
    store.dispatch(
      'addPotentialSponsor',
      {
        ...contact,
        participant_user_id: Number.parseInt(contact.participant_user_id),
        deleted: 0,
        enrollment: 1,
        day_before_run: 0,
        day_after_run: 0,
        sender_user_id: store.state.User.id,
        opt_out: 0,
        email_opt_out: [],
      },
    )
  })
}

function viewEmailTemplates() {
  // modal.open({
  //   parent: this,
  //   component: BoosterEmailTemplatesModal,
  //   hasModalCard: true,
  //   canCancel: ['escape', 'outside'],
  //   onCancel: unBlur,
  //   scroll: 'clip',
  // })
  blur()
}

function isPPLTemplate() {
  const participantHasLaps = participant.value.laps
  const flatOnlyProgram = (participantProgram.value.program_pledge_setting.flat_donate_only
    && participantProgram.value.program_pledge_setting.flat_donate_only !== '0')
  if (participantHasLaps || flatOnlyProgram)
    return false

  return true
}

function getPreWrittenEmailTemplateSubject() {
  if (hasVideo())
    return encodeURIComponent(parseLanguage(t('email_template_student_star_subject'), getPreWrittenEmailTemplateArgs()))

  return encodeURIComponent(parseLanguage(t('email_template_subject'), getPreWrittenEmailTemplateArgs()))
}
function parseLanguage(lang, vals) {
  for (const value in vals)
    lang = lang.replace(new RegExp(`:${value}`, 'g'), vals[value])

  return lang
}

function participantDisplayNames(participants) {
  if (participants.length === 1)
    return participants[0].first_name

  if (participants.length === 2)
    return `${participants[0].first_name} & ${participants[1].first_name}`

  const names = participants.map((participant) => {
    return participant.first_name
  })
  const last = names.pop()
  return `${names.join(', ')} & ${last}`
}

function getPreWrittenEmailSubjectArgs() {
  const preWrittenEmailSubjectArgs = {
    participantFirstNames: participantDisplayNames(store.getters.participants),
    eventName: participantProgram.value.event_name,
    areIs: (store.getters.participants.length > 1) ? 'are' : 'is',
  }
  return preWrittenEmailSubjectArgs
}

function getPreWrittenEmailTemplate() {
  if (hasVideo())
    return getShareStudentStarEmailTemplate()

  return getBasePreWrittenEmailTemplate()
}

function getShareStudentStarEmailTemplate() {
  const emailTemplate = parseLanguage(t('lang.student_star_email_template'), getPreWrittenEmailTemplateArgs())
  return encodeURIComponent(emailTemplate)
}

function getBasePreWrittenEmailTemplate() {
  const emailTemplate = parseLanguage(t('email_template'), getPreWrittenEmailTemplateArgs())
  return encodeURIComponent(emailTemplate)
}

function getPreWrittenEmailTemplateArgs() {
  const preWrittenEmailTemplateArgs = {
    participantFirstNames: participantDisplayNames(store.getters.participants),
    areIs: (store.getters.participants.length > 1) ? 'are' : 'is',
    eventName: participantProgram.value.decoded_event_name,
    theyName: (store.getters.participants.length > 1) ? 'they' : participant.value.first_name,
    shareLink: emailShareLink.value,
    fundsRaisedForText: getFormatedFundsRaisedFor(),
    unitExpectationLang: getUnitExpectationLang(),
    schoolName: participant.value.school.name,
  }
  return preWrittenEmailTemplateArgs
}

function getFormatedFundsRaisedFor() {
  const fundsRaisedFor = participantProgram.value.microsite.decoded_funds_raised_for
  return fundsRaisedFor ? ` ${t('for')} ${fundsRaisedFor}` : ''
}

function getUnitExpectationLang() {
  if (isPPLTemplate()) {
    const unitExpectationLangArgs = {
      unitExpectationRange: `${participantProgram.value.unit_range_low} ${t('email_template_to')} ${participantProgram.value.unit_range_high}`,
      unitPlural: participantProgram.value.unit.name_plural,
    }
    return parseLanguage(t('email_template_ppl_expectation'), unitExpectationLangArgs)
  }
  return t('email_template_flat_expectation')
}

function sendPreWrittenTemplateEmail() {
  gaTrack('Intro Paragraph Section', 'Pre Written Template Link')
}

function gaTrack(label, action) {
  gaEvent('Easy Emailer', label, action)
}

function getPotentialSponsors(participantUserId) {
  if (!participant.value)
    return []

  let potentialSponsors = store.getters.getFamilyPledgePotentialSponsors(props.participantUserId)

  if (!participant.value.participant_info.family_pledging_enabled
    || !store.getters.participantProgram.program_pledge_setting.family_pledging_enabled) {
    potentialSponsors = potentialSponsors
      .filter(sponsor => sponsor.participant_user_id === participantUserId)
  }

  return potentialSponsors.map((potentialSponsor) => {
    const optOut = potentialSponsor.opt_out || potentialSponsor.email_opt_out.length > 0

    return {
      ...potentialSponsor,
      isSelected: false,
      isPreviousSponsor: false,
      optOut,
    }
  })
}

function blur() {
  document.getElementById('app').style.filter = 'blur(4px)'
}

function unBlur() {
  update.value++
  forceUpdate()
  document.getElementById('app').style.filter = 'none'
}
</script>

<template>
  <section
    :class="participantProgram.microsite.microsite_color_theme.theme_name"
    class="page min-h-screen"
  >
    <BoosterAppHeader :program="participantProgram">
      <div class="flex flex-col">
        <BoosterPageHeader>
          {{ t('easy_emailer') }}
        </BoosterPageHeader>
        <p class="sub-header text-white sm:text-xl md:text-2xl">
          {{ participantProgram.event_name }}
        </p>
      </div>
    </BoosterAppHeader>
    <main class="pt-24 lg:pt-40">
      <div class="mx-auto max-w-lg">
        <div class="p-8 bg-grey-lightest md:bg-white text-lg md:text-2xl mb-8">
          <p class="mb-8">
            {{ t('add_contacts_to_send_emails') }}
            <a
              class="font-semibold"
              @click="viewEmailTemplates"
            >{{ t('view_emails_here') }}</a>
          </p>

          <p>
            {{ t('send_your_own_email_intro') }}
            <br class="sm:hidden">
            <a
              id="pre-written-template"
              :href="`mailto:?body=${getPreWrittenEmailTemplate()}&subject=${getPreWrittenEmailTemplateSubject()}`"
              class="font-semibold"
              @click="sendPreWrittenTemplateEmail"
            >{{ t('pre_written_template') }}</a>
          </p>
        </div>
        <BoosterAddContactsButtons
          @add-contacts-to-display="addContactsToDisplay"
        />
        <BoosterContactsTable
          ref="contactsTable"
          :all-selected="allSelectedTest"
          :contacts="getContacts"
          :participant-user-id="participant.participant_info.user_id"
          @toggle-select-all="allSelected = !allSelected"
        />
      </div>
    </main>
  </section>
</template>
