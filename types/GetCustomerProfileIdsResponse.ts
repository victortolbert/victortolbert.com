export interface GetCustomerProfileIdsResponse {
  ids: string[]
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
//   "ids": [
//     "47988",
//     "47997",
//     "48458",
//     "48468",
//     "189118",
//     "190178"
//   ],
//     "messages": {
//     "resultCode": "Ok",
//       "message": [
//         {
//           "code": "I00001",
//           "text": "Successful."
//         }
//       ]
//   }
// }
