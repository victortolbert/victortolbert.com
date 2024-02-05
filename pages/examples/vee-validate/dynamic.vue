<script>
import * as Yup from 'yup'
import DynamicForm from '~/components/DynamicForm.vue'

export default {
  components: {
    DynamicForm,
  },
  data: () => {
    const formSchema = {
      fields: [
        {
          label: 'Your Name',
          name: 'name',
          as: 'input',
          rules: Yup.string().required(),
        },
        {
          label: 'Your Email',
          name: 'email',
          as: 'input',
          rules: Yup.string().email().required(),
        },
        {
          label: 'Your Password',
          name: 'password',
          as: 'input',
          type: 'password',
          rules: Yup.string().min(6).required(),
        },
        {
          label: 'Favorite Drink',
          name: 'drink',
          as: 'select',
          children: [
            {
              tag: 'option',
              value: '',
              text: '',
            },
            {
              tag: 'option',
              value: 'coffee',
              text: 'Coffeee',
            },
            {
              tag: 'option',
              value: 'tea',
              text: 'Tea',
            },
            {
              tag: 'option',
              value: 'coke',
              text: 'Coke',
            },
          ],
        },
      ],
    }
    return {
      formSchema,
    }
  },
}
</script>

<template>
  <DynamicForm :schema="formSchema" />
</template>
