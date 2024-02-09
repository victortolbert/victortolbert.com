<script setup>
import Tree from 'vue3-tree'
import 'vue3-tree/dist/style.css'

const data = ref([
  {
    id: 1,
    label: 'Animal',
    nodes: [
      {
        id: 2,
        label: 'Dog',
      },
      {
        id: 3,
        label: 'Cat',
        nodes: [
          {
            id: 4,
            label: 'Egyptian Mau Cat',
          },
          {
            id: 5,
            label: 'Japanese Bobtail Cat',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    label: 'People',
  },
])

const searchText = ref('')

function onNodeExpanded(node, state) {
  console.log('state: ', state)
  console.log('node: ', node)
}

function onUpdate(nodes) {
  console.log('nodes:', nodes)
}

function onNodeClick(node) {
  console.log(node)
}

// import treeview from 'vue3-treeview'
// import 'vue3-treeview/dist/style.css'

// export default {
//   data() {
//     return {
//       config: {
//         roots: [
//           'id1',
//           'id2',
//         ],
//       },
//       nodes: {
//         id1: {
//           text: 'text1',
//           children: ['id11', 'id12'],
//         },
//         id11: {
//           text: 'text11',
//         },
//         id12: {
//           text: 'text12',
//         },
//         id2: {
//           text: 'text2',
//         },
//       },
//     }
//   },
// }
</script>

<template>
  <div>
    <!-- <Tree :nodes="nodes" :config="config" /> -->
    <input v-model="searchText" type="text">
    <Tree v-model:nodes="data" />
    <Tree
      :nodes="data"
      :search-text="searchText"
      :use-checkbox="true"
      :use-icon="false"
      use-row-delete
      show-child-count
      @node-expanded="onNodeExpanded"
      @update:nodes="onUpdate"
      @node-click="onNodeClick"
    />
  </div>
</template>
