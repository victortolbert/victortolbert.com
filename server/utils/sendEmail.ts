import { Resend } from 'resend'

const resend = new Resend('re_GoJwfKRh_7daGKK268qs6mkCu71T7x4aA')

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'victor.tolbert@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
})
