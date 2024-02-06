<script>
export default {
  props: {
    program: {
      type: Object,
      default: () => {},
    },
  },
  emits: ['close'],
  computed: {
    lang() {
      return this.$store.state.lang.how_to_get_pledges.phone_script
    },
  },
  methods: {
    close() {
      this.$emit('close')
      this.unBlur()
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
  <div class="m-4 overflow-hidden rounded-xl shadow-lg">
    <div class="bg-white">
      <header class="modal-card-head relative items-start bg-white">
        <p class="modal-card-title text-center text-xl font-bold">
          {{ lang.header }}
          <!-- <span class="script-header text-center">{{ lang.header }}</span> -->
        </p>
      </header>
      <section class="modal-card-body has-text-centered">
        <p
          class="script-body"
          v-html="lang.p1"
        />
        <br>
        <p
          class="script-body"
          v-html="lang.p2"
        />
        <br>
        <p
          class="script-body"
          v-html="parseLanguage(lang.p3, { event_name: program.event_name })"
        />
        <br>
        <p
          class="script-body"
          v-html="parseLanguage(lang.p4, {
            event_name: program.event_name,
            range_low: program.unit_range_low,
            range_high: program.unit_range_high,
            unit_max: program.unit_max_charge,
            unit_types: program.unit.name_plural,
          })"
        />
        <br>
        <p
          class="script-body"
          v-html="lang.p5"
        />
        <br>
        <p
          class="script-body"
          v-html="parseLanguage(lang.p6, { unit_type: program.unit.name.toUpperCase() })"
        />
        <br>
        <p
          class="script-body"
          v-html="parseLanguage(lang.p7, { unit_type: program.unit.name })"
        />
        <br>
        <p
          class="script-body"
          v-html="parseLanguage(lang.p8, { unit_types: program.unit.name_plural })"
        />
        <br>
        <p
          class="script-body"
          v-html="lang.p9"
        />
        <br>
        <button
          class="button is-secondary centered close-button inline-block rounded-full px-8 font-bold shadow-md"
          @click="close()"
        >
          {{ lang.close }}
        </button>
      </section>
    </div>
  </div>
</template>

<style scoped>
    .modal .modal-card {
  border-radius: 16px;
  margin: 0;
}
.modal-card-body {
  padding: 20px;
}
.script-body {
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: normal;
  text-align: center;

  color: #4a4a4a;
}
</style>
