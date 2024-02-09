import type { MerchantAuthentication } from '~/types'

export interface GetCustomerProfileIDsRequest {
  merchantAuthentication: MerchantAuthentication
  refId?: string
}

// Example:
// {
//   "getCustomerProfileIdsRequest": {
//     "merchantAuthentication": {
//       "name": "5KP3u95bQpv",
//       "transactionKey": "346HZ32z3fP4hTG2"
//     }
//   }
// }
