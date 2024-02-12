import type { FlatTreeItem, TreeItem, TreeItemId } from '~/env'

const digitsRE = /(\d{3})(?=\d)/g

export function addLeadingZeros(number: number | string, width = 3) {
  return number.toString().padStart(width, '0')
}

export function capitalize(str: string) {
  if (typeof str !== 'string')
    return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const clamp: (value: number, min: number, max: number) => number = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

export function currencyRounded(value, currency) {
  value = Number.parseFloat(value)
  if (!Number.isFinite(value) || (!value && value !== 0))
    return ''
  currency = currency != null ? currency : '$'
  const stringified = Math.abs(value).toFixed(0)
  const _int = stringified.slice(0, -3)
  const i = _int.length % 3
  const head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
    : ''
  const _float = stringified.slice(-3)
  const sign = value < 0 ? '-' : ''
  return sign + currency + head
    + _int.slice(i).replace(digitsRE, '$1,')
    + _float
}

export function decimalToPercent(num) {
  return `${(num * 100).toFixed(0)}%`
}

export const flattened = (arr: any[]) => [].concat(...arr)

export function formatDate(value) {
  const date = new Date(value)
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}

export function formatMoney(val) {
  const num = (val)
  // return '$ ' + num.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  return `$${num}`
}

export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
}

export function formatRating(val) {
  const num = Number.parseFloat(val)
  return num.toFixed(1)
}

export const getFlatTreeWithAncestors: (nodes: TreeItem[]) => FlatTreeItem[] = (nodes: TreeItem[]) => {
  const result: FlatTreeItem[] = []

  const traverse: (node: TreeItem, parentIds?: TreeItemId[]) => void = (node: TreeItem, parentIds: TreeItemId[] = []) => {
    result.push({
      ...node,
      __vue_dnd_tree_ancestors: parentIds,
    })
    for (const child of node.children)
      traverse(child, [...parentIds, node.id])
  }

  nodes.forEach((node) => {
    traverse(node)
  })
  return result
}

export function getRangeValue(value: number, minAllowedValue: number, maxAllowedValue: number): number {
  if (value < minAllowedValue || !value)
    return minAllowedValue

  if (value > maxAllowedValue)
    return maxAllowedValue

  return value
}

export function humanizeURL(url) {
  return url
    .replace(/^https?:\/\//, '')
    .replace(/\/$/, '')
}

export function isEq(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b)
}

export function numberWithCommas(num) {
  num = `${num}`
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

// export function orderBy(arr, sortKey, reverse) {
//   if (!sortKey)
//     return arr

//   const order = (reverse && reverse < 0) ? -1 : 1
//   // sort on a copy to avoid mutating original array
//   return arr.slice().sort((a, b) => {
//     if (sortKey !== '$key') {
//       if (Vue.util.isObject(a) && '$value' in a)
//         a = a.$value
//       if (Vue.util.isObject(b) && '$value' in b)
//         b = b.$value
//     }
//     a = Vue.util.isObject(a) ? Vue.parsers.path.getPath(a, sortKey) : a
//     b = Vue.util.isObject(b) ? Vue.parsers.path.getPath(b, sortKey) : b

//     a = (typeof a === 'string') ? a.toLowerCase() : a
//     b = (typeof b === 'string') ? b.toLowerCase() : b

//     return a === b ? 0 : a > b ? order : -order
//   })
// }

export function pluck(value, plucked) {
  return value.map((item) => {
    return item[plucked]
  })
}

export function reverse(value, wordsOnly) {
  let separator = ''
  wordsOnly && (separator = ' ')
  return value.split(separator).reverse().join(separator)
}

export function slugify(str) {
  return str.toString().toLowerCase().trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

export function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
}

export const strip = (html: string) => html.replace(/<[^>]*>/g, '')

export const truncate = (str: string) => `${strip(str).substr(0, 50)}...`

export function twoDigits(value) {
  if (value.toString().length <= 1)
    return `0${value.toString()}`

  return value.toString()
}

export function toTitleCase(str) {
  return str
    .replace(/-/g, ' ')
    .replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
}
