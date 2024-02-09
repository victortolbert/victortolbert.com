import type { MerchantAuthentication } from '~/types'

export interface GetCustomerPaymentProfileListRequest {
  merchantAuthentication: MerchantAuthentication
  searchType: string
  month: string
  sorting: {
    orderBy: string
    orderDescending: string
  }
  paging: {
    limit: string
    offset: string
  }
}

// Example:
// {
//   "getCustomerPaymentProfileListRequest": {
//     "merchantAuthentication": {
//       "name": "5KP3u95bQpv",
//       "transactionKey": "346HZ32z3fP4hTG2"
//     },
//     "searchType": "cardsExpiringInMonth",
//     "month": "2025-12",
//     "sorting": {
//       "orderBy": "id",
//       "orderDescending": "false"
//     },
//     "paging": {
//       "limit": "10",
//       "offset": "1"
//     }
//   }
// }
