<script>
import { ErrorMessage, Field, Form } from 'vee-validate'

export default {
  name: 'DynamicForm',
  components: {
    AppForm: Form,
    Field,
    ErrorMessage,
  },
  props: {
    schema: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <AppForm>
    <div
      v-for="{ as, name, label, children, ...attrs } in schema.fields"
      :key="name"
    >
      <label :for="name">{{ label }}</label>
      <Field :id="name" :as="as" :name="name" v-bind="attrs">
        <template v-if="children && children.length">
          <component
            :is="tag"
            v-for="({ tag, text, ...childAttrs }, idx) in children"
            :key="idx"
            v-bind="childAttrs"
          >
            {{ text }}
          </component>
        </template>
      </Field>
      <ErrorMessage :name="name" />
    </div>
    <button>Submit</button>
  </AppForm>
</template>
