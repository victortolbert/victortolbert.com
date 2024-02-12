export interface CreateCustomerProfileFromTransactionResponse {
  customerProfileId: string
  customerPaymentProfileIdList: string[]
  customerShippingAddressIdList: string[]
  validationDirectResponseList: string[]
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
//   "customerProfileId": "190179",
//   "customerPaymentProfileIdList": [
//       "157500"
//   ],
//   "customerShippingAddressIdList": [
//       "126407"
//   ],
//   "validationDirectResponseList": [],
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
