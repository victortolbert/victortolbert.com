import type { FlatTreeItem, TreeItem, TreeItemId } from '~/env'

export function addLeadingZeros(number: number | string, width = 3) {
  return number.toString().padStart(width, '0')
}

export function capitalize(str: string) {
  if (typeof str !== 'string')
    return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const clamp: (value: number, min: number, max: number) => number = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

export const flattened = (arr: any[]) => [].concat(...arr)

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

export function isEq(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b)
}

export function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
}

export const strip = (html: string) => html.replace(/<[^>]*>/g, '')

export const truncate = (str: string) => `${strip(str).substr(0, 50)}...`
