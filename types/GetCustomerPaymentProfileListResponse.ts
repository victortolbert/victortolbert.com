import type { PaymentProfile } from '~/types'

export interface GetCustomerPaymentProfileListRespsone {
  totalNumInResultSet: number
  paymentProfiles: PaymentProfile[]
  messages: Messages
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
//   "totalNumInResultSet": 7,
//     "paymentProfiles": [
//       {
//         "customerPaymentProfileId": 3,
//         "customerProfileId": 527195,
//         "billTo": {
//           "phoneNumber": "000-000-0000",
//           "firstName": "John",
//           "lastName": "Doe",
//           "address": "123 Main St.",
//           "city": "Bellevue",
//           "state": "WA",
//           "zip": "98004",
//           "country": "US"
//         },
//         "payment": {
//           "creditCard": {
//             "cardNumber": "XXXX5100",
//             "expirationDate": "XXXX",
//             "cardType": "MasterCard"
//           }
//         }
//       },
//       {
//         "customerPaymentProfileId": 26,
//         "customerProfileId": 527197,
//         "billTo": {
//           "firstName": "name1",
//           "lastName": "name2",
//           "address": "1 main st",
//           "zip": "98006"
//         },
//         "payment": {
//           "creditCard": {
//             "cardNumber": "XXXX5100",
//             "expirationDate": "XXXX",
//             "cardType": "MasterCard"
//           }
//         }
//       },
//       {
//         "customerPaymentProfileId": 27,
//         "customerProfileId": 527197,
//         "billTo": {
//           "firstName": "Satish",
//           "lastName": "2025-12Kumar",
//           "address": "1 main st",
//           "zip": "98006"
//         },
//         "payment": {
//           "creditCard": {
//             "cardNumber": "XXXX5100",
//             "expirationDate": "XXXX",
//             "cardType": "MasterCard"
//           }
//         }
//       },
//       {
//         "customerPaymentProfileId": 78,
//         "customerProfileId": 527257,
//         "billTo": {
//           "firstName": "Abhi",
//           "lastName": "Prakash"
//         },
//         "payment": {
//           "creditCard": {
//             "cardNumber": "XXXX5100",
//             "expirationDate": "XXXX",
//             "cardType": "MasterCard"
//           }
//         },
//         "originalNetworkTransId": "0TIQH5NXVD3RGQ0IR81FE2C",
//         "originalAuthAmount": 10.21
//       },
//       {
//         "customerPaymentProfileId": 84,
//         "customerProfileId": 527260,
//         "billTo": {
//           "phoneNumber": "123-123-1235",
//           "firstName": "aasoos",
//           "lastName": "df",
//           "address": "123 Main St.",
//           "city": "Bellevue",
//           "state": "WA",
//           "zip": "98004",
//           "country": "US"
//         },
//         "payment": {
//           "creditCard": {
//             "cardNumber": "XXXX1111",
//             "expirationDate": "XXXX",
//             "cardType": "Visa"
//           }
//         },
//         "originalNetworkTransId": "0CN7Q94G6SLC47ZNHYZXNGJ",
//         "originalAuthAmount": 0
//       },
//       {
//         "customerPaymentProfileId": 85,
//         "customerProfileId": 527261,
//         "billTo": {
//           "phoneNumber": "123-123-1235",
//           "firstName": "asda aasoos",
//           "lastName": "df",
//           "address": "123 Main St.",
//           "city": "Bellevue",
//           "state": "WA",
//           "zip": "98004",
//           "country": "US"
//         },
//         "payment": {
//           "creditCard": {
//             "cardNumber": "XXXX1111",
//             "expirationDate": "XXXX",
//             "cardType": "Visa"
//           }
//         },
//         "originalNetworkTransId": "02N5L0V5DWWO8ZR2LCX7XUY",
//         "originalAuthAmount": 0
//       },
//       {
//         "customerPaymentProfileId": 86,
//         "customerProfileId": 527262,
//         "billTo": {
//           "phoneNumber": "123-123-1235",
//           "firstName": "Customer FirstName",
//           "lastName": "Customer LastName",
//           "address": "123 Main St.",
//           "city": "Bellevue",
//           "state": "WA",
//           "zip": "98004",
//           "country": "US"
//         },
//         "payment": {
//           "creditCard": {
//             "cardNumber": "XXXX1111",
//             "expirationDate": "XXXX",
//             "cardType": "Visa"
//           }
//         },
//         "originalNetworkTransId": "0STSMT7WLO5D80U0KJR4Z9A",
//         "originalAuthAmount": 0
//       }
//     ],
//     "messages": {
//       "resultCode": "Ok",
//       "message": [
//         {
//           "code": "I00001",
//           "text": "Successful."
//         }
//       ]
//   }
// }
