// server/api/send-email.post.ts
import { Resend } from 'resend'
import { useCompiler } from '#vue-email'

const resend = new Resend('re_BKQ7wAiM_PLkJwj8hFVMeAoKMJVXcDxz2')

export default defineEventHandler(async (event) => {
  const template = await useCompiler('welcome.vue', {
    props: {
      url: 'https://victortolbert.com/',
    },
  })

  const options = {
    from: 'victor.tolbert@outlook.com',
    to: 'victor.tolbert@gmail.com',
    subject: 'hello world',
    html: template.html,
  }

  await resend.emails.send(options)
  return { message: 'Email sent' }
})
