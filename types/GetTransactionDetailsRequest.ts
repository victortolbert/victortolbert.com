import type { MerchantAuthentication } from '~/types'

export interface GetTransactionDetailsRequest {
  merchantAuthentication: MerchantAuthentication
  transId: string
}

/**
 *  Get Transaction Details
 *
 *  Use this function to get detailed information about a specific transaction.
 *
 */

// {
//   "getTransactionDetailsRequest": {
//     "merchantAuthentication": {
//       "name": "5KP3u95bQpv",
//       "transactionKey": "346HZ32z3fP4hTG2"
//     },
//     "transId": "12345"
//   }
// }
