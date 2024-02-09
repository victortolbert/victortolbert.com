import type { MerchantAuthentication } from '~/types'

export interface GetUnsettledTransactionListRequest {
  merchantAuthentication: MerchantAuthentication
  sorting: {
    orderBy: string
    orderDescending: string
  }
  paging: {
    limit: string
    offset: string
  }
}

/**
 *  Get Unsettled Transaction List
 *
 *  Use this function to get data for unsettled transactions. The function will
 *  return data for up to 1000 of the most recent transactions in a single
 *  request. Paging options can be sent to limit the result set or to retrieve
 *  additional transactions beyond the 1000 transaction limit. No input
 *  parameters are required other than the authentication information. However,
 *  you can add the sorting and paging options shown below to customize the
 *  result set.
 *
 */

// {
//   "getUnsettledTransactionListRequest": {
//     "merchantAuthentication": {
//       "name": "5KP3u95bQpv",
//       "transactionKey": "346HZ32z3fP4hTG2"
//     },
//     "sorting": {
//       "orderBy": "submitTimeUTC",
//       "orderDescending": true
//     },
//     "paging": {
//       "limit": "100",
//       "offset": "1"
//     }
//   }
// }
