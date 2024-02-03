import { QueryClient, VueQueryPlugin, dehydrate } from '@tanstack/vue-query'
import type { DehydratedState, VueQueryPluginOptions } from '@tanstack/vue-query'
import { persistQueryClient } from '@tanstack/query-persist-client-core'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'

import { useState } from '#app'

export default defineNuxtPlugin((nuxt) => {
  const vueQueryState = useState<DehydratedState | null>('vue-query')

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5000,
      },
    },

  })

  const options: VueQueryPluginOptions = {
    queryClient,
    clientPersister: (queryClient: any) => {
      return persistQueryClient({
        queryClient,
        persister: createSyncStoragePersister({
          storage: undefined,
        }),
      })
    },
  }

  nuxt.vueApp.use(VueQueryPlugin, options)

  nuxt.hooks.hook('app:rendered', () => {
    vueQueryState.value = dehydrate(queryClient)
  })
})
