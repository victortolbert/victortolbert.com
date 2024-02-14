import process from 'node:process'
import { SES } from '@aws-sdk/client-ses'
import { useCompiler } from '#vue-email'

const ses = new SES({ region: process.env.AWS_SES_REGION })

export default defineEventHandler(async (event) => {
  const template = await useCompiler('welcome.vue', {
    props: {
      url: 'https://victortolbert.com/',
    },
  })

  const params = {
    Source: 'victor.tolbert@outlook.com',
    Destination: {
      ToAddresses: ['victor.tolbert@gmail.com'],
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: template.html,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'hello world',
      },
    },
  }

  await ses.sendEmail(params)
  return { message: 'Email sent' }
})
