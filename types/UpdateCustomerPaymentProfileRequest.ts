import type { BillTo, MerchantAuthentication } from '~/types'

export interface UpdateCustomerPaymentProfileRequest {
  merchantAuthentication: MerchantAuthentication
  customerProfileId: string
  paymentProfile: PaymentProfile
  validationMode: string
}

interface PaymentProfile {
  billTo?: BillTo
  payment?: Payment
  defaultPaymentProfile?: boolean
  customerPaymentProfileId?: string
}

interface Payment {
  creditCard?: CreditCard
  opaqueData?: OpaqueData
}

interface CreditCard {
  cardNumber: string
  expirationDate: string
}

interface OpaqueData {
  dataDescriptor: string
  dataValue: string
}

// interface BillTo {
//   firstName: string
//   lastName: string
//   company: string
//   address: string
//   city: string
//   state: string
//   zip: string
//   country: string
//   phoneNumber: string
//   faxNumber: string
// }

// Example:
// {
//   "updateCustomerPaymentProfileRequest": {
//     "merchantAuthentication": {
//       "name": "5KP3u95bQpv",
//       "transactionKey": "346HZ32z3fP4hTG2"
//     },
//     "customerProfileId": "10000",
//     "paymentProfile": {
//       "billTo": {
//         "firstName": "John",
//         "lastName": "Doe",
//         "company": "",
//         "address": "123 Main St.",
//         "city": "Bellevue",
//         "state": "WA",
//         "zip": "98004",
//         "country": "US",
//         "phoneNumber": "000-000-0000",
//         "faxNumber": ""
//       },
//       "payment": {
//         "creditCard": {
//           "cardNumber": "4111111111111111",
//           "expirationDate": "2026-01"
//         }
//       },
//       "defaultPaymentProfile": false,
//       "customerPaymentProfileId": "20000"
//     },
//     "validationMode": "liveMode"
//   }
// }
