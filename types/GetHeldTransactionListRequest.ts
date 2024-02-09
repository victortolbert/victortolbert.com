import type { MerchantAuthentication } from '~/types'

export interface GetHeldTransactionListRequest {
  merchantAuthentication: MerchantAuthentication
  batchId: string
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
 *
 *  Get Held Transaction List
 *
 *  Use this function to get data for suspicious transactions. The function
 *  will return data for up to 1000 of the most recent transactions in a single
 *  request. Paging options can be sent to limit the result set or to retrieve
 *  additional transactions beyond the 1000 transaction limit. You can add the
 *  sorting and paging options shown below to customize the result set.
 *
 */

// {
//   "getUnsettledTransactionListRequest": {
//     "merchantAuthentication": {
//       "name": "5KP3u95bQpv",
//         "transactionKey": "346HZ32z3fP4hTG2"
//     },
//     "refId": "12345",
//       "status": "pendingApproval",
//         "sorting": {
//       "orderBy": "submitTimeUTC",
//         "orderDescending": false
//     },
//     "paging": {
//       "limit": "100",
//         "offset": "1"
//     }
//   }
// }
