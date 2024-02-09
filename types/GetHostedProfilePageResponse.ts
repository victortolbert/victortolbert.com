export interface GetHostedProfilePageResponse {
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
//   "token": "e3X1JmlCM01EV4HVLqJhdbfStNUmKMkeQ/bm+jBGrFwpeLnaX3E6wmquJZtLXEyMHlcjhNPx471VoGzyrYF1/VIDKk/qcDKT9BShN64Noft0toiYq07nn1CD+w4AzK2kwpSJkjS3I92h9YompnDXSkPKJWopwUesi6n/trJ96CP/m4rf4Xv6vVQqS0DEu+e+foNGkobJwjop2qHPYOp6e+oNGNIYcGYc06VkwE3kQ+ZbBpBhlkKRYdjJdBYRwdSRtcE7YPia2ENTFGNuMYZvFv7rBaoBftWMvapK7Leb1QcE1uQ+t/9X0wlamazbJmubdiE4Gg5GSiFFeVMcMEhUGJyloDCkTzY/Yv1tg0kAK7GfLXLcD+1pwu+YAR4MasCwnFMduwOc3sFOEWmhnU/cvQ==",
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
