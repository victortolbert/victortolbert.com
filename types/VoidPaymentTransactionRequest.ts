import type { MerchantAuthentication } from '~/types'

export interface VoidPaymentTransactionRequest {
  merchantAuthentication: MerchantAuthentication
  refId?: string
  transactionRequest: TransactionRequest
}

interface TransactionRequest {
  transactionType: string
  refTransId: string
}

// Example:
// {
//   "createTransactionRequest": {
//     "merchantAuthentication": {
//       "name": "5KP3u95bQpv",
//       "transactionKey": "346HZ32z3fP4hTG2"
//     },
//     "refId": "123456",
//     "transactionRequest": {
//       "transactionType": "voidTransaction",
//       "refTransId": "1234567890"
//     }
//   }
// }
