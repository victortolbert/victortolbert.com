import type { MerchantAuthentication } from '~/types'

export interface GetAccountUpdaterJobDetailsRequest {
  merchantAuthentication: MerchantAuthentication
  refId?: string
  month: string
  modifiedTypeFilter: string
  paging: {
    limit: string
    offset: string
  }
}

/**
 *
 *  Get Account Updater Job Details
 *
 *  Use this function to get details of each card updated or deleted by the
 *  Account Updater process for a particular month. The function will return
 *  data for up to 1000 of the most recent transactions in a single request.
 *  Paging options can be sent to limit the result set or to retrieve additional
 *  transactions beyond the 1000 transaction limit. No input parameters are
 *  required other than the authentication information and a batch ID. However,
 *  you can add the sorting and paging options shown below to customize the
 *  result set.
 *
 */

// {
//   "getAUJobDetailsRequest": {
//     "merchantAuthentication": {
//       "name": "5KP3u95bQpv",
//       "transactionKey": "346HZ32z3fP4hTG2"
//     },
//     "refId": "123456",
//     "month": "2017-06",
//     "modifiedTypeFilter": "all",
//     "paging": {
//       "limit": "100",
//       "offset": "1"
//     }
//   }
// }
