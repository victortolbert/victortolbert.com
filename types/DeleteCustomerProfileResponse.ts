export interface DeleteCustomerProfileResponse {
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
//   "messages": {
//     "resultCode": "Ok",
//       "message": [
//         {
//           "code": "I00001",
//           "text": "Successful."
//         }
//       ]
//   }
// }
