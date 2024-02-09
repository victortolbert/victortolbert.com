import type { PaymentProfile } from '~/types'

export interface GetCustomerProfileResponse {
  profile: Profile
  messages: Messages
}

export interface Profile {
  paymentProfiles: PaymentProfile[]
  profileType: string
  customerProfileId: string
  merchantCustomerId: string
  description: string
  email: string
}

export interface CreditCard {
  cardNumber: string
  expirationDate: string
  cardType: string
  issuerNumber: string
}

export interface BillTo {
  firstName?: string
  lastName?: string
  company?: string
  address?: string
  city?: string
  state?: string
  zip?: string
  country?: string
  phoneNumber?: string
  faxNumber?: string
}

export interface Messages {
  resultCode: string
  message: Message[]
}

export interface Message {
  code: string
  text: string
}

// Example:
// {
//   "profile": {
//     "paymentProfiles": [
//        {
//          "customerPaymentProfileId": "87",
//          "payment": {
//            "creditCard": {
//              "cardNumber": "XXXX1111",
//              "expirationDate": "XXXX",
//              "cardType": "Visa",
//              "issuerNumber": "411111"
//            }
//          },
//          "originalNetworkTransId": "0TN1VE648DFCJSHQ81GZH9F",
//          "originalAuthAmount": 0,
//          "billTo": {
//            "phoneNumber": "000-000-0000",
//            "firstName": "John",
//             "lastName": "Doe",
//             "address": "123 Main St.",
//             "city": "Bellevue",
//             "state": "WA",
//             "zip": "98004",
//             "country": "US"
//          }
//        },
//        {
//          "customerPaymentProfileId": "86",
//          "payment": {
//            "creditCard": {
//              "cardNumber": "XXXX1111",
//              "expirationDate": "XXXX",
//              "cardType": "Visa",
//              "issuerNumber": "411111"
//            }
//          },
//          "originalNetworkTransId": "0STSMT7WLO5D80U0KJR4Z9A",
//          "originalAuthAmount": 0,
//          "customerType": "individual",
//          "billTo": {
//            "phoneNumber": "123-123-1235",
//            "firstName": "Customer FirstName",
//            "lastName": "Customer LastName",
//            "address": "123 Main St.",
//            "city": "Bellevue",
//            "state": "WA",
//            "zip": "98004",
//            "country": "US"
//          }
//        }
//     ],
//     "profileType": "regular",
//     "customerProfileId": "527262",
//     "merchantCustomerId": "MerchantCustID",
//     "description": "Profile description here",
//     "email": "customer-profile-email@here.com"
//   },
//   "messages": {
//     "resultCode": "Ok",
//     "message": [
//       {
//         "code": "I00001",
//         "text": "Successful."
//       }
//     ]
//   }
// }
