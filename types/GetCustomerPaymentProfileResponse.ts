export interface GetCustomerPaymentProfileResponse {
  paymentProfile: PaymentProfile
  messages: Messages
}

interface PaymentProfile {
  customerProfileId: string
  customerPaymentProfileId: string
  payment: Payment
  originalNetworkTransId: string
  originalAuthAmount: number
  billTo: BillTo
}

interface Payment {
  creditCard: CreditCard
}

interface BillTo {
  phoneNumber: string
  firstName: string
  lastName: string
  company: string
  address: string
  city: string
  state: string
  zip: string
  country: string
}

interface CreditCard {
  cardNumber: string
  expirationDate: string
  cardType: string
  issuerNumber: string
}

interface Messages {
  resultCode: string
  message: Message[]
}

interface Message {
  code: string
  text: string
}

// Example:
// {
//   "paymentProfile": {
//     "customerProfileId": "527262",
//     "customerPaymentProfileId": "87",
//     "payment": {
//       "creditCard": {
//         "cardNumber": "XXXX1111",
//         "expirationDate": "XXXX",
//         "cardType": "Visa",
//         "issuerNumber": "411111"
//       }
//     },
//     "originalNetworkTransId": "0TN1VE648DFCJSHQ81GZH9F",
//     "originalAuthAmount": 0,
//     "billTo": {
//       "phoneNumber": "000-000-0000",
//       "firstName": "John",
//       "lastName": "Doe",
//       "address": "123 Main St.",
//       "city": "Bellevue",
//       "state": "WA",
//       "zip": "98004",
//       "country": "US"
//     }
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
