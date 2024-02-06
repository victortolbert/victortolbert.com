<script>
import BoosterVideoPlayerModal from '~/components/booster/VideoPlayerModal.vue'

export default {
  components: {
    // VideoPlayerModal,
  },
  props: {
    sumPledgesFlat: {
      type: Number,
      default: 0,
    },
    reward: {
      type: Object,
      default() {
        return {}
      },
    },
    program: {
      type: Object,
      default: null,
    },
    isFullWidth: {
      type: Boolean,
      default: false,
    },
    displayPrice: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    lang() {
      return this.$store.state.lang
    },
    isFlatOnly() {
      return this.program.program_pledge_setting.flat_donate_only !== '0'
    },
  },
  methods: {
    getDisplayAmount(reward) {
      let amount = reward.prizeBound.actual_amount
      if (!this.isFlatOnly)
        amount = reward.prizeBound.display_amount / this.program.unit_flat_conversion

      return Number.parseFloat(amount).toFixed(2).replace('.00', '')
    },
    getAmountRemaining(reward) {
      let amount = reward.prizeBound.actual_amount
      if (!this.isFlatOnly)
        amount = reward.prizeBound.display_amount

      let amountRemaining = Number.parseFloat(amount - this.sumPledgesFlat)
      if (!this.isFlatOnly)
        amountRemaining /= this.program.unit_flat_conversion

      amountRemaining = Math.max(0, amountRemaining)
      return Number.parseFloat(amountRemaining).toFixed(2).replace('.00', '')
    },
    getPictureUrl(reward) {
      return `https://${this.$store.state.s3Bucket}.s3.amazonaws.com/prizes/${reward.prize.picture}`
    },
    colorClassFor(status) {
      if (status === 'unassigned')
        return 'border-red'
      else if (status === 'pending')
        return 'border-orange'
      else if (status === 'giveaway')
        return 'border-blue'
      else if (status === 'delivered')
        return 'border-green'

      return 'black'
    },
    showRewardVideo(videoId) {
      if (videoId) {
        this.$modal.open({
          parent: this,
          component: BoosterVideoPlayerModal,
          props: { videoId },
          events: {
            close: (evt) => {
              this.unBlur()
            },
          },
          onCancel: this.unBlur,
          canCancel: true,
        })

        this.blur()
      }
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
  <button
    class="card-container w-full p-2 px-0" :class="[isFullWidth ? '' : 'sm:w-1/2 md:w-1/3 lg:w-1/4', reward.prize.video.toString().length === 0 ? 'cursor-not-allowed' : '']"
    @click.prevent="showRewardVideo(reward.prize.video)"
  >
    <div class="card overflow-hidden border-2 rounded" :class="[colorClassFor(reward.status)]">
      <header class="card-header font-semibold">
        <div
          v-if="reward.status === 'unassigned'"
          :title="`$${getAmountRemaining(reward)} ${program.unit.modifier} ${program.unit.name} ${lang.more}`"
          class="w-full truncate bg-red p-4 capitalize text-white"
        >
          <span v-if="displayPrice">
            ${{ getAmountRemaining(reward) }}<span v-if="!isFlatOnly"> {{ program.unit.modifier }} {{ program.unit.name }}</span> {{ lang.more }}
          </span>
          <span v-else>
            {{ reward.prizeBound.display_name }}
          </span>
        </div>
        <div
          v-if="reward.status === 'pending'"
          :title="lang.pending"
          class="w-full truncate bg-orange p-4 capitalize text-white"
        >
          {{ lang.pending }}
        </div>
        <div
          v-if="reward.status === 'giveaway'"
          :title="lang.giveaway"
          class="bg-secondary w-full truncate p-4 capitalize text-white"
        >
          {{ lang.giveaway }}
        </div>
        <div
          v-if="reward.status === 'delivered'"
          :title="lang.delivered"
          class="bg-primary w-full truncate p-4 capitalize text-white"
        >
          {{ lang.delivered }}
        </div>
      </header>
      <div class="card-content p-0">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              :src="getPictureUrl(reward)"
              :alt="reward.prizeBound.display_name"
              class="object-contain"
            >
            <div
              v-if="reward.prize.video.toString().length > 0"
              class="play-icon"
            >
              <svg
                viewBox="0 0 34 34"
                class="block h-8 w-8 lg:h-10 lg:w-10"
              >
                <path
                  d="M17 33.8624C26.3888 33.8624 34 26.282 34 16.9312C34 7.58035 26.3888 0 17 0C7.61116 0 0 7.58035 0 16.9312C0 26.282 7.61116 33.8624 17 33.8624Z"
                  fill="#384351"
                  fill-opacity="0.866593"
                />
                <path
                  d="M27.6301 16.587C28.027 16.8134 28.027 17.1839 27.6301 17.4103L12.0634 26.2911C11.6665 26.5175 11.3418 26.3323 11.3418 25.8794V8.11769C11.3418 7.66484 11.6665 7.47959 12.0634 7.70601L27.6301 16.587Z"
                  fill="white"
                />
              </svg>
            </div>
          </figure>
        </div>
      </div>
      <footer class="card-footer bg-gray-300est block">
        <div class="p-4 text-center">
          <h2
            v-if="displayPrice && isFlatOnly"
            :title="`$${getDisplayAmount(reward)}`"
            class="truncate capitalize"
          >
            ${{ getDisplayAmount(reward) }}
          </h2>
          <h2
            v-else-if="displayPrice"
            :title="`$${getDisplayAmount(reward)} ${program.unit.modifier} ${program.unit.name}`"
            class="truncate capitalize"
          >
            ${{ getDisplayAmount(reward) }} {{ program.unit.modifier }} {{ program.unit.name }}
          </h2>
          <h3
            :title="reward.prizeBound.display_name"
            class="truncate font-semibold"
          >
            {{ reward.prizeBound.display_name }}
          </h3>
        </div>
      </footer>
    </div>
  </button>
</template>

<style lang="scss" scoped>
.card-container:focus {
  outline: none;
}
.image {
  position: relative;
}

img {
  display: block;
  width: 100%;
  height: auto;
  &.is-variant {
    opacity: 1;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }
}

.play-icon {
  transition: 0.5s ease;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
