import { describe, expect, it } from 'vitest'

import { UrlEncoderDecoder } from './UrlEncoderDecoder'

describe('urlEncoderDecoder', () => {
  it('should encode and decode a URL with query parameters', () => {
    const url = 'https://example.com/search?q=query%20parameter&sort=asc'
    const encodedUrl = UrlEncoderDecoder.encode(url)
    const decodedUrl = UrlEncoderDecoder.decode(encodedUrl)
    expect(decodedUrl).toBe(url)
  })

  it('should encode and decode a URL without query parameters', () => {
    const url = 'https://example.com/page'
    const encodedUrl = UrlEncoderDecoder.encode(url)
    const decodedUrl = UrlEncoderDecoder.decode(encodedUrl)
    expect(decodedUrl).toBe(url)
  })

  it('should handle reserved characters', () => {
    const url = 'https://example.com/path with spaces?query=value#fragment'
    const encodedUrl = UrlEncoderDecoder.encode(url)
    const decodedUrl = UrlEncoderDecoder.decode(encodedUrl)
    expect(decodedUrl).toBe(url)
  })

  it('should handle double encoding', () => {
    const url = 'https://example.com/encoded%20url'
    const encodedUrl1 = UrlEncoderDecoder.encode(url)
    const encodedUrl2 = UrlEncoderDecoder.encode(encodedUrl1)
    const decodedUrl1 = UrlEncoderDecoder.decode(encodedUrl2)
    const decodedUrl2 = UrlEncoderDecoder.decode(decodedUrl1)
    expect(decodedUrl2).toBe(url)
  })

  it('should throw an error when decoding an invalid URL', () => {
    const encodedUrl = 'https://example.com/invalid%2url'
    expect(() => UrlEncoderDecoder.decode(encodedUrl)).toThrowError()
  })
})
