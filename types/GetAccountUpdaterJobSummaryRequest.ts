import type { MerchantAuthentication } from '~/types'

export interface GetAccountUpdaterJobSummaryRequest {
  merchantAuthentication: MerchantAuthentication
  refId?: string
  month: string
}

/**
 *  Get Account Updater Job Summary
 *
 *  Use this function to get a summary of the results of the Account Updater
 *  process for a particular month.
 *
 */

// {
//   "getAUJobSummaryRequest": {
//     "merchantAuthentication": {
//       "name": "5KP3u95bQpv",
//       "transactionKey": "346HZ32z3fP4hTG2"
//     },
//     "refId": "123456",
//     "month": "2017-06"
//   }
// }
