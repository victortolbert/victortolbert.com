import type { MerchantAuthentication } from '~/types'

export interface getBatchStatisticsRequest {
  merchantAuthentication: MerchantAuthentication
  batchId: string
}

/**
 *  Get Batch Statistics
 *
 *  A call to getBatchStatisticsRequest returns statistics for a single batch,
 *  specified by the batch ID.
 *
 */

// {
//   "getBatchStatisticsRequest": {
//     "merchantAuthentication": {
//       "name": "5KP3u95bQpv",
//       "transactionKey": "346HZ32z3fP4hTG2"
//     },
//     "batchId": "12345"
//   }
// }
