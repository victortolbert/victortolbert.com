<script>
import BoosterAddContactsButtons from '~/components/booster/AddContactsButtons'
import BoosterAccordion from '~/components/booster/Accordion'
import BoosterAccordionModal from '~/components/booster/AccordionModal'

export default {
  components: {
    BoosterAddContactsButtons,
    BoosterAccordion,
    BoosterAccordionModal,
  },
  data() {
    return {
      EE_ENROLLMENT: 6,
      EE_DAY_BEFORE: 7,
      EE_DAY_AFTER: 8,
    }
  },
  computed: {
    lang() {
      return this.$store.state.lang
    },
    isFlatOnly() {
      return Number.parseInt(this.program.program_pledge_setting.flat_donate_only) !== 0
    },
    templates() {
      const afterContactAdded = {
        id: 1,
        identifier: 'after_contact_added',
        isOpen: false,
        link: this.enrollmentLink,
      }

      if (this.isFlatOnly)
        afterContactAdded.identifier = 'after_contact_added_flat'

      return [
        afterContactAdded,
        {
          id: 2,
          identifier: 'one_day_before_event',
          isOpen: false,
          link: this.dayBeforeLink,
        },
        {
          id: 3,
          identifier: 'one_day_after_event',
          isOpen: false,
          link: this.dayAfterLink,
        },
      ]
    },
    enrollmentLink() {
      let link = ''
      this.participant.special_urls.forEach((specialUrl) => {
        if (specialUrl.referrer.id === this.EE_ENROLLMENT)
          link = `/a/s/${specialUrl.short_key}`
      })
      return link
    },
    dayBeforeLink() {
      let link = ''
      this.participant.special_urls.forEach((specialUrl) => {
        if (specialUrl.referrer.id === this.EE_DAY_BEFORE)
          link = `/a/s/${specialUrl.short_key}`
      })
      return link
    },
    dayAfterLink() {
      let link = ''
      this.participant.special_urls.forEach((specialUrl) => {
        if (specialUrl.referrer.id === this.EE_DAY_AFTER)
          link = `/a/s/${specialUrl.short_key}`
      })
      return link
    },
    participants() {
      return this.program.participants
    },
    participant() {
      return this.participants.find((participant) => {
        return participant.id === Number.parseInt(this.$route.params.participantUserId)
      })
    },
    user() {
      return this.$store.state.User
    },
    program() {
      return this.user.programs.find((program) => {
        return program.participants.find(participant => participant.id === Number.parseInt(this.$route.params.participantUserId)) !== undefined
      })
    },
    participantLength() {
      return this.participants.length
    },
    formattedNames() {
      let names = ''
      if (this.participantLength > 2) {
        this.participants.forEach((participant, index) => {
          // Check if is last participant
          if (index + 1 === this.participantLength)
            names += `and ${participant.first_name}`
          else
            names += `${participant.first_name}, `
        })
      }
      else if (this.participantLength === 2) {
        names = `${this.participants[0].first_name} & ${this.participants[1].first_name}`
      }
      else if (this.participantLength === 1) {
        names = this.participants[0].first_name
      }

      return names
    },
  },
  methods: {
    openAndCloseOthers(index) {
      this.templates.forEach((template) => {
        template.isOpen = false
      })
      this.templates[index].isOpen = true
    },
    closeModal() {
      this.$emit('close')
      this.unBlur()
    },
    getFullLink(relativeLink) {
      return `${window.location.protocol}//${window.location.hostname}${relativeLink}`
    },
    blur() {
      document.getElementById('app').style.filter = 'blur(4px)'
    },
    unBlur() {
      document.getElementById('app').style.filter = 'none'
    },
  },
}
</script>

<template>
  <BoosterAccordionModal
    :header="lang.emails_we_send"
    class="mx-4"
  >
    <template>
      <BoosterAccordion
        v-for="(template, index) in templates"
        :key="template.id"
        :open="template.isOpen"
        animation="zoom-out"
        @open="openAndCloseOthers(index)"
      >
        <template #title>
          <p class="text-sm sm:text-base md:text-lg text-left">
            <span class="font-semibold">{{ template.id }}. {{ lang.easy_emailer_template_description[template.identifier] }}</span><br>
            {{
              parseLanguage(
                lang.easy_emailer_template_subject[template.identifier],
                {
                  names: formattedNames,
                },
              )
            }}
          </p>
        </template>
        <template>
          <div class="modal-card-body bg-white p-4 md:p-6 text-sm sm:text-base md:text-lg">
            <p class="mb-4">
              Hey, {{ lang.sponsor_name }}!
            </p>
            <p
              v-for="(content, index) in lang.easy_emailer_template_content_lines[template.identifier]"
              :key="index"
              class="mb-4"
            >
              {{
                parseLanguage(
                  content,
                  {
                    event_name: program.event_name,
                    names: formattedNames,
                    unit_range_low: program.unit_range_low,
                    unit_range_high: program.unit_range_high,
                    unit_plural: program.unit.name_plural,
                    school_name: participants[0].school.name,
                  },
                )
              }}
            </p>
            <p
              v-if="lang.easy_emailer_template_call_to_actions[template.identifier]"
              class="mb-4"
            >
              {{ lang.easy_emailer_template_call_to_actions[template.identifier] }}
              <a
                :href="template.link"
                target="_blank"
              >
                {{ getFullLink(template.link) }}
              </a>
            </p>
            <p
              v-if="lang.easy_emailer_template_thanks[template.identifier]"
              class="mb-4"
            >
              {{ lang.easy_emailer_template_thanks[template.identifier] }}
            </p>
            <p class="mb-4">
              -{{ user.first_name }}
            </p>
          </div>
        </template>
      </BoosterAccordion>
    </template>

    <template #footer>
      <BoosterAddContactsButtons />
    </template>
  </BoosterAccordionModal>
</template>
