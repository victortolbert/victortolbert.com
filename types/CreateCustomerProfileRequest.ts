import type { MerchantAuthentication } from '~/types'

type ValidationMode = 'none' | 'testMode' | 'liveMode' | undefined

export interface CreateCustomerProfileRequest {
  merchantAuthentication: MerchantAuthentication
  refId?: string
  profile: Profile
  validationMode?: ValidationMode
}

interface Profile {
  merchantCustomerId: string
  description?: string
  email?: string
  paymentProfiles?: PaymentProfile
}

interface PaymentProfile {
  customerType: 'individual' | 'business'
  payment: Payment
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

// Example:
// {
//   "createCustomerProfileRequest": {
//     "merchantAuthentication": {
//       "name": "5KP3u95bQpv",
//       "transactionKey": "346HZ32z3fP4hTG2"
//     },
//     "profile": {
//       "merchantCustomerId": "Merchant_Customer_ID",
//       "description": "Profile description here",
//       "email": "customer-profile-email@here.com",
//       "paymentProfiles": {
//         "customerType": "individual",
//         "payment": {
//           "creditCard": {
//             "cardNumber": "4111111111111111",
//             "expirationDate": "2025-12"
//           }
//         }
//       }
//     },
//     "validationMode": "testMode"
//   }
// }
