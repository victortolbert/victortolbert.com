export interface GetHostedPaymentPageResponse {
  token: string
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

// {
//   "token": "FCfc6VbKGFztf8g4sI0B1bG35quHGGlnJx7G8zRpqV0gha2862KkqRQ/NaGa6y2SIhueCAsP/CQKQDQ0QJr8mOfnZD2D0EfogSWP6tQvG3xlv1LS28wFKZHt2U/DSH64eA3jLIwEdU+++++++++++++shortened_for_brevity++++++++WC1mNVQNKv2Z+ 1msH4oiwoXVleb2Q7ezqHYl1FgS8jDAYzA7ls+AYf05s=.89nE4Beh",
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
