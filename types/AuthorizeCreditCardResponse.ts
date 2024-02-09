export interface AuthorizeCreditCardResponse {
  transactionResponse: TransactionResponse
  refId: string
  messages: Messages
}

interface TransactionResponse {
  responseCode: string
  authCode: string
  avsResultCode: string
  cvvResultCode: string
  cavvResultCode: string
  transId: string
  refTransID: string
  transHash: string
  testRequest: string
  accountNumber: string
  accountType: string
  messages: TransactionResponseMessage[]
  userFields: UserField[]
  networkTransId: string
}

interface TransactionResponseMessage {
  code: string
  description: string
}

interface UserField {
  name: string
  value: string
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
//   "transactionResponse": {
//     "responseCode": "1",
//     "authCode": "HH5414",
//     "avsResultCode": "Y",
//     "cvvResultCode": "S",
//     "cavvResultCode": "6",
//     "transId": "2149186848",
//     "refTransID": "",
//     "transHash": "FE3CE11E9F7670D3ECD606E455B7C222",
//     "accountNumber": "XXXX0015",
//     "accountType": "Mastercard",
//     "messages": [
//       {
//         "code": "1",
//         "description": "This transaction has been approved."
//       }
//     ],
//     "userFields": [
//       {
//         "name": "MerchantDefinedFieldName1",
//         "value": "MerchantDefinedFieldValue1"
//       },
//       {
//         "name": "favorite_color",
//         "value": "blue"
//       }
//     ],
//     "networkTransId": "123456789NNNH"
//   },
//   "refId": "123456",
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
