import type { TreeItem, TreeItemId, FlatTreeItem } from '~/types'

export function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
}

export function addLeadingZeros(number: number | string, width = 3) {
  return number.toString().padStart(width, '0')
}

export function isEq(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b)
}


export const getFlatTreeWithAncestors: (nodes: TreeItem[]) => FlatTreeItem[] = (nodes: TreeItem[]) => {
  const result: FlatTreeItem[] = []

  const traverse: (node: TreeItem, parentIds?: TreeItemId[]) => void = (node: TreeItem, parentIds: TreeItemId[] = []) => {
    result.push({
      ...node,
      __vue_dnd_tree_ancestors: parentIds
    })
    for (const child of node.children) {
      traverse(child, [...parentIds, node.id])
    }
  }

  nodes.forEach(node => { traverse(node) })
  return result
}

export const clamp: (value: number, min: number, max: number) => number = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)
