export interface CreateAcceptPaymentTransactionResponse {
  transactionResponse: TransactionResponse
  refId: string
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

interface TransactionResponse {
  responseCode: string
  authCode: string
  avsResultCode: string
  cvvResultCode: string
  cavvResultCode: string
  transId: string
  refTransID: string
  transHash: string
  accountNumber: string
  accountType: string
  messages: TransactionMessage[]
  userFields: UserField[]
  transHashSha2: string
}

interface UserField {
  name: string
  value: string
}

interface TransactionMessage {
  code: string
  description: string
}

// Example:
// {
//   "transactionResponse": {
//     "responseCode": "1",
//     "authCode": "2768NO",
//     "avsResultCode": "Y",
//     "cvvResultCode": "P",
//     "cavvResultCode": "2",
//     "transId": "60006537898",
//     "refTransID": "",
//     "transHash": "B3BDC21A6B341938D8F1927492F4D516",
//     "accountNumber": "XXXX0005",
//     "accountType": "AmericanExpress",
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
//     "transHashSha2": ""
//   },
//   "refId": "123456",
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
