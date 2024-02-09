import type { MerchantAuthentication } from '~/types'

export interface GetTransactionListRequest {
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
 *  Get Transaction List
 *  Use this function to return data for all transactions in a specified batch.
 *  The function will return data for up to 1000 of the most recent transactions
 *  in a single request. Paging options can be sent to limit the result set or
 *  to retrieve additional transactions beyond the 1000 transaction limit. No
 *  input parameters are required other than the authentication information and
 *  a batch ID. However, you can add the sorting and paging options shown below
 *  to customize the result set.
 */

// {
//   "getTransactionListRequest": {
//     "merchantAuthentication": {
//       "name": "5KP3u95bQpv",
//       "transactionKey": "346HZ32z3fP4hTG2"
//     },
//     "batchId" : "6680535",
//     "sorting": {
//       "orderBy": "submitTimeUTC",
//       "orderDescending": "true"
//     },
//     "paging": {
//       "limit": "100",
//       "offset": "1"
//     }
//   }
// }
