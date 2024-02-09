import type { MerchantAuthentication } from '~/types'

export interface RefundPaymentTransactionRequest {
  merchantAuthentication: MerchantAuthentication
  refId?: string
  transactionRequest: TransactionRequest
}

interface TransactionRequest {
  transactionType: string
  amount: string
  payment: Payment
  refTransId: string
}

interface Payment {
  creditCard?: CreditCard
  opaqueData?: {
    dataDescriptor: string
    dataValue: string
  }
}

interface CreditCard {
  cardNumber?: string
  expirationDate?: string
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
//       "transactionType": "refundTransaction",
//       "amount": "5.00",
//       "payment": {
//         "creditCard": {
//           "cardNumber": "0015",
//           "expirationDate": "XXXX"
//         }
//       },
//       "refTransId": "1234567890"
//     }
//   }
// }
