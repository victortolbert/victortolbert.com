/**
 * Represents merchant authentication information.
 *
 * @remarks
 * This interface contains authentication details required for merchant transactions.
 *
 * @see {@link https://developer.authorize.net/api/reference/index.html#transaction-reporting-get-merchant-details|Authorize.Net API Reference}
 *
 * @example
 * ```typescript
 * const merchantAuth: MerchantAuthentication = {
 *   name: "8dzC8Xb48hf",
 *   transactionKey: "5s59CE9D9Jb4Cmwr"
 * };
 * ```
 *
 * @public
 */
export interface MerchantAuthentication {
  /**
   * Merchant’s unique API Login ID.
   */
  name: string

  /**
   * Merchant’s unique Transaction Key.
   */
  transactionKey: string

  /**
   * Merchant-assigned reference ID for the request.
   *
   * If included in the request, this value is included in the response.
   * This feature might be especially useful for multi-threaded applications.
   */
  refId?: string
}
