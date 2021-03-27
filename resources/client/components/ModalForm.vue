<script lang="ts">
export default {
  props: {
    email: {
      type: String,
      default: '',
    },
    password: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <form action="">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Login</p>
        <OIcon
          clickable
          native-type="button"
          icon="times"
          @click.native="$emit('close')"
        />
      </header>
      <section class="modal-card-body">
        <OField label="Email">
          <OInput
            type="email"
            :value="email"
            placeholder="Your email"
            required
          />
        </OField>

        <OField label="Password">
          <OInput
            type="password"
            :value="password"
            password-reveal
            placeholder="Your password"
            required
          />
        </OField>

        <OField>
          <OCheckbox>Remember me</OCheckbox>
        </OField>
      </section>
      <footer class="modal-card-foot">
        <OButton type="button" @click="$emit('close')"> Close </OButton>
        <OButton variant="primary"> Login </OButton>
      </footer>
    </div>
  </form>
</template>

<style>
.modal-card {
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 40px);
  overflow: hidden;
}
@media screen and (min-width: 769px) {
  .modal-card {
    margin: 0 auto;
    max-height: calc(100vh - 40px);
    width: 640px;
  }
}
.modal-card {
  margin: 0 20px;
  max-height: calc(100vh - 160px);
  overflow: auto;
  position: relative;
  width: 100%;
}
.modal-card-foot,
.modal-card-head {
  align-items: center;
  background-color: #f5f5f5;
  display: flex;
  flex-shrink: 0;
  justify-content: flex-start;
  padding: 20px;
  position: relative;
}
.modal-card-head {
  border-bottom: 1px solid #dbdbdb;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.modal-card-body {
  -webkit-overflow-scrolling: touch;
  background-color: #fff;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: auto;
  padding: 20px;
}
.modal-card-foot {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top: 1px solid #dbdbdb;
}
.modal-card-title {
  color: #363636;
  flex-grow: 1;
  flex-shrink: 0;
  font-size: 1.5rem;
  line-height: 1;
  margin: 0;
}
.modal-card-foot .OButton:not(:last-child) {
  margin-right: 0.5em;
}
</style>
