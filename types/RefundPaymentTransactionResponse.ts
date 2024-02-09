export interface RefundPaymentTransactionResponse {
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
  messages: TransactionResponseMessage[]
}

interface TransactionResponseMessage {
  code: string
  description: string
}

// Example:
// {
//   "transactionResponse": {
//     "responseCode": "1",
//     "authCode": "HW617E",
//     "avsResultCode": "P",
//     "cvvResultCode": "",
//     "cavvResultCode": "",
//     "transId": "1234569999",
//     "refTransID": "1234567890",
//     "transHash": "D04B060066BA442AFF73A31B97A4693F",
//     "accountNumber": "XXXX0015",
//     "accountType": "Mastercard",
//     "messages": [
//       {
//         "code": "1",
//         "description": "This transaction has been approved."
//       }
//     ]
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
