import type { MerchantAuthentication } from '~/types'

export interface GetCustomerProfileTransactionListRequest {
  merchantAuthentication: MerchantAuthentication
  customerProfileId: string
  customerPaymentProfileId: string
  sorting: {
    orderBy: string
    orderDescending: boolean
  }
  paging: {
    limit: string
    offset: string
  }
}

/**
 *
 *  Get Customer Profile Transaction List
 *
 *  Use this method to retrieve transactions for a specific customer profile
 *  or customer payment profile. The function will return data for up to 1000
 *  of the most recent transactions in a single request. Paging options can be
 *  sent to limit the result set or to retrieve additional transactions beyond
 *  the 1000 transaction limit. If no customer payment profile is supplied then
 *  this function will return transactions for all customer payment profiles
 *  associated with the specified customer profile. This allows you to retrieve
 *  all transactions for that customer regardless of card type (such as Visa or
 *  Mastercard) or payment type (such as credit card or bank account). You can
 *  add the sorting and paging options shown below to customize the result set.
 *
 *  Important: The proper response to `getTransactionListForCustomerRequest` is
 *  `getTransactionListResponse`. Failure to observe this behavior may cause
 *  parsing issues.
 *
 */

// {
//   "getTransactionListForCustomerRequest": {
//     "merchantAuthentication": {
//       "name": "5KP3u95bQpv",
//       "transactionKey": "346HZ32z3fP4hTG2"
//     },
//     "customerProfileId": "40025205",
//     "customerPaymentProfileId": "40027471",
//     "sorting": {
//       "orderBy": "submitTimeUTC",
//       "orderDescending": false
//     },
//     "paging": {
//       "limit": "100",
//       "offset": "1"
//     }
//   }
// }
