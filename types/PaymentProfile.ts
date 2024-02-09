export interface PaymentProfile {
  customerPaymentProfileId: number
  customerProfileId: number
  billTo: BillTo
  payment: Payment
  originalNetworkTransId?: string
  originalAuthAmount?: number
}

interface BillTo {
  phoneNumber?: string
  firstName: string
  lastName: string
  address?: string
  city?: string
  state?: string
  zip?: string
  country?: string
}

export interface Payment {
  creditCard?: CreditCard
  opaqueData?: OpaqueData
}

interface CreditCard {
  cardNumber: string
  expirationDate: string
  cardType: string
}

export interface OpaqueData {
  dataValue: string
  dataDescriptor: string
}

// export interface Profile {
//   description?: string
//   email?: string
//   profileType?: string
//   paymentProfiles?: PaymentProfile[]
// }

// interface CreditCard {
//   cardNumber: string
//   expirationDate: string
//   cardType: string
//   issuerNumber: string
// }

// interface BankData {
//   accountType: string
//   routingNumber: string
//   accountNumber: string
//   nameOnAccount: string
//   echeckType: string
//   bankName: string
// }

// interface Payment {
//   creditCard: CreditCard
//   opaqueData?: OpaqueData
//   bankData?: BankData
// }

// interface BillTo {
//   firstName: string
//   lastName: string
//   company: string
//   address: string
//   city: string
//   state: string
//   zip: string
//   country: string
// }

// interface PaymentProfile {
//   customerPaymentProfileId: string
//   customerType: string
//   billTo: BillTo
//   payment: Payment
// }
