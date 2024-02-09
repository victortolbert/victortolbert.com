import type { MerchantAuthentication } from '~/types'

export interface CreateCustomerPaymentProfileRequest {
  merchantAuthentication: MerchantAuthentication
  customerProfileId: string
  paymentProfile: PaymentProfile
  validationMode: string
}

interface PaymentProfile {
  billTo?: BillTo
  payment: Payment
  defaultPaymentProfile: boolean
}

interface BillTo {
  firstName?: string
  lastName?: string
  address?: string
  city?: string
  state?: string
  zip?: string
  country?: string
  phoneNumber?: string
}

interface Payment {
  creditCard?: CreditCard
  opaqueData?: OpaqueData
}

interface OpaqueData {
  dataDescriptor: string
  dataValue: string
}

interface CreditCard {
  cardNumber: string
  expirationDate: string
}

// Example:
// {
//   "createCustomerPaymentProfileRequest": {
//     "merchantAuthentication": {
//       "name": "5KP3u95bQpv",
//       "transactionKey": "346HZ32z3fP4hTG2"
//     },
//     "customerProfileId": "10000",
//       "paymentProfile": {
//       "billTo": {
//         "firstName": "John",
//         "lastName": "Doe",
//         "address": "123 Main St.",
//         "city": "Bellevue",
//         "state": "WA",
//         "zip": "98004",
//         "country": "US",
//         "phoneNumber": "000-000-0000"
//       },
//       "payment": {
//         "creditCard": {
//           "cardNumber": "4111111111111111",
//           "expirationDate": "2023-12"
//         }
//       },
//       "defaultPaymentProfile": false
//     },
//     "validationMode": "liveMode"
//   }
// }
