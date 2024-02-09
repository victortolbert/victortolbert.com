export interface ChargeCreditCardResponse {
  transactionResponse: TransactionResponse
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
  transHashSha2: string
  SupplementalDataQualificationIndicator: number
  networkTransId: string
}

interface TransactionResponseMessage {
  code: string
  description: string
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
//     "authCode": "HW617E",
//     "avsResultCode": "Y",
//     "cvvResultCode": "",
//     "cavvResultCode": "",
//     "transId": "2157047189",
//     "refTransID": "",
//     "transHash": "E7CEB0A9F1BECA32A02493E1B31D5955",
//     "testRequest": "0",
//     "accountNumber": "XXXX1111",
//     "accountType": "Visa",
//     "messages": [
//       {
//         "code": "1",
//         "description": "This transaction has been approved."
//       }
//     ],
//     "transHashSha2": "D0C4FFF5648511A5862B917CFD9BB78ABF8A6E1D90C119CBBC4C0B454F4FF40DED15B204E042F36ECA5FB15D02588E4E4A7B85B94E7279599CE6020462CB7DEE",
//     "SupplementalDataQualificationIndicator": 0,
//     "networkTransId": "123456789NNNH"
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
