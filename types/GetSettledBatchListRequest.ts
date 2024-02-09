import type { MerchantAuthentication } from '~/types'

export interface GetSettledBatchListRequest {
  merchantAuthentication: MerchantAuthentication
  firstSettlementDate: string
  lastSettlementDate: string
}

// {
//   "getSettledBatchListRequest": {
//     "merchantAuthentication": {
//       "name": "5KP3u95bQpv",
//       "transactionKey": "346HZ32z3fP4hTG2"
//     },
//     "firstSettlementDate": "2020-05-01T16:00:00Z",
//     "lastSettlementDate": "2020-05-31T16:00:00Z"
//   }
// }
