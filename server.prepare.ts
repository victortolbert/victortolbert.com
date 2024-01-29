import process from 'node:process'
import { z } from 'zod'
import { defineNuxtPrepareHandler } from 'nuxt-prepare/config'

export default defineNuxtPrepareHandler(() => {
  const schema = z.object({
    NUXT_UI_PRO_LICENSE: z.string(),
  })

  const result = schema.safeParse(process.env)

  if (!result.success) {
    console.error(`Invalid environment variables:\n${result.error.errors.map(issue => `  - ${issue.path}: ${JSON.stringify(issue)}`).join('\n')
      }`)
  }

  return {
    ok: result.success,
  }
})
