import process from 'node:process'
import nodemailer from 'nodemailer'
import { useCompiler } from '#vue-email'

export default defineEventHandler(async () => {
  const template = await useCompiler('welcome.vue', {
    props: {
      url: 'https://victortolbert.com/',
    },
  })

  const testAccount = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: process.env.HOST || 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  })

  const options = {
    from: 'victor.tolbert@gmail.com',
    to: 'victor.tolbert@outlook.com',
    subject: 'Hello world',
    html: template,
  }

  await transporter.sendMail(options)
  return { message: 'Email sent' }
})
