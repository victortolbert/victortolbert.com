<script setup>
import { TreeNode } from '~/utils/Tree.js'

const props = defineProps({
  model: {
    type: Object,
  },
  defaultLeafNodeName: {
    type: String,
    default: 'Leaf Node',
  },
  defaultTreeNodeName: {
    type: String,
    default: 'Tree Node',
  },
  defaultAddTreeNodeTitle: {
    type: String,
    default: 'Add Tree Node',
  },
  defaultAddLeafNodeTitle: {
    type: String,
    default: 'Add Leaf Node',
  },
  defaultExpanded: {
    type: Boolean,
    default: true,
  },
})

const compInOperation = ref(null)

const isHover = ref(false)
const editable = ref(false)
const isDragEnterUp = ref(false)
const isDragEnterBottom = ref(false)
const isDragEnterNode = ref(false)
const expanded = ref(props.defaultExpanded)

const rootNode = computed(() => {
  let node = this.$parent
  while (node._props.model.name !== 'root')
    node = node.$parent

  return node
})

const caretClass = computed(() => {
  return expanded.value ? 'vtl-icon-caret-down' : 'vtl-icon-caret-right'
})

const isFolder = computed(() => {
  return props.model.children && props.model.children.length
})

const treeNodeClass = computed(() => {
  const {
    model: {
      dragDisabled,
      disabled,
    },
    isDragEnterNode,
  } = this

  return {
    'vtl-node-main': true,
    'vtl-active': isDragEnterNode.value,
    'vtl-drag-disabled': dragDisabled,
    'vtl-disabled': disabled,
  }
})

// onBeforeCreate(() => {
//   this.$options.components.item = require('./VueTreeList').default
// })

// onBeforeUnmount(() => {
//   removeHandler(window, 'keyup')
// })

function updateName(event) {
  const oldName = props.model.name
  props.model.changeName(event.target.value)

  console.log('update Name')

  this.rootNode.$emit('changeName', {
    id: props.model.id,
    oldName,
    newName: event.target.value,
    node: props.model,
  })
}

function delNode() {
  this.rootNode.$emit('deleteNode', props.model)
}

function setEditable() {
  editable.value = true

  this.$nextTick(() => {
    const $input = this.$refs.nodeInput

    $input.focus()
    $input.setSelectionRange(0, $input.value.length)
  })
}

function setUnEditable(event) {
  if (editable.value === false)
    return
  editable.value = false

  const oldName = props.model.name
  props.model.changeName(event.target.value)

  this.rootNode.$emit('changeName', {
    id: props.model.id,
    oldName,
    newName: event.target.value,
    eventType: 'blur',
  })
  this.rootNode.$emit('endEdit', {
    id: props.model.id,
    oldName,
    newName: event.target.value,
  })
}

function toggle() {
  if (isFolder.value)
    expanded.value = !expanded.value
}

function mouseOver() {
  if (props.model.disabled)
    return
  isHover.value = true
}

function mouseOut() {
  isHover.value = false
}

function click() {
  this.rootNode.$emit('click', {
    toggle,
    ...props.model,
  })
}

function addChild(isLeaf) {
  const name = isLeaf ? props.defaultLeafNodeName : props.defaultTreeNodeName
  expanded.value = true
  const node = new TreeNode({ name, isLeaf })
  props.model.addChildren(node, true)
  this.rootNode.$emit('addNode', node)
}

function dragStart(event) {
  if (!(props.model.dragDisabled || props.model.disabled)) {
    // compInOperation = this

    // for firefox
    event.dataTransfer.setData('data', 'data')
    event.dataTransfer.effectAllowed = 'move'
    return true
  }
  return false
}

function dragEnd() {
  compInOperation.value = null
}

function dragOver(event) {
  event.preventDefault()

  return true
}

function dragEnter() {
  if (!compInOperation.value)
    return

  if (compInOperation.value.model.id === props.model.id || !compInOperation.value || props.model.isLeaf)
    return

  isDragEnterNode.value = true
}

function dragLeave() {
  isDragEnterNode.value = false
}

function drop() {
  if (!compInOperation.value)
    return

  const oldParent = compInOperation.value.model.parent
  compInOperation.value.model.moveInto(props.model)

  isDragEnterNode.value = false

  this.rootNode.$emit('drop', {
    target: props.model,
    node: compInOperation.value.model,
    src: oldParent,
  })
}

function dragEnterUp() {
  if (!compInOperation.value)
    return

  isDragEnterUp.value = true
}

function dragOverUp(event) {
  event.preventDefault()

  return true
}

function dragLeaveUp() {
  if (!compInOperation.value)
    return

  isDragEnterUp.value = false
}

function dropBefore() {
  if (!compInOperation.value)
    return

  const oldParent = compInOperation.value.model.parent
  compInOperation.value.model.insertBefore(props.model)
  isDragEnterUp.value = false

  this.rootNode.$emit('dropBefore', {
    target: props.model,
    node: compInOperation.value.model,
    src: oldParent,
  })
}

function dragEnterBottom() {
  if (!compInOperation.value)
    return

  this.isDragEnterBottom = true
}

function dragOverBottom(event) {
  event.preventDefault()

  return true
}

function dragLeaveBottom() {
  if (!compInOperation.value)
    return

  isDragEnterBottom.value = false
}

function dropAfter() {
  if (!compInOperation.value)
    return

  const oldParent = compInOperation.value.model.parent
  compInOperation.value.model.insertAfter(props.model)

  isDragEnterBottom.value = false

  this.rootNode.$emit('dropAfter', {
    target: props.model,
    node: compInOperation.value.model,
    src: oldParent,
  })
}
</script>

<template>
  <div class="vtl">
    <div
      v-if="model.name !== 'root'"
      :id="model.id"
      class="vtl-node"
      :class="{
        'vtl-leaf-node': model.isLeaf,
        'vtl-tree-node': !model.isLeaf,
      }"
    >
      <div
        class="vtl-border vtl-up"
        :class="{
          'vtl-active': isDragEnterUp,
        }"
        @drop="dropBefore"
        @dragenter="dragEnterUp"
        @dragover="dragOverUp"
        @dragleave="dragLeaveUp"
      />
      <div
        :class="treeNodeClass"
        :draggable="!model.dragDisabled"
        @dragstart="dragStart"
        @dragover="dragOver"
        @dragenter="dragEnter"
        @dragleave="dragLeave"
        @drop="drop"
        @dragend="dragEnd"
        @mouseover="mouseOver"
        @mouseout="mouseOut"
        @click.stop="click"
      >
        <span v-if="model.children && model.children.length > 0" class="vtl-caret vtl-is-small">
          <i class="vtl-icon" :class="caretClass" @click.prevent.stop="toggle" />
        </span>

        <span v-if="model.isLeaf">
          <slot name="leafNodeIcon" :expanded="expanded" :model="model" :root="rootNode">
            <i class="vtl-icon vtl-menu-icon vtl-icon-file" />
          </slot>
        </span>
        <span v-else>
          <slot name="treeNodeIcon" :expanded="expanded" :model="model" :root="rootNode">
            <i class="vtl-icon vtl-menu-icon vtl-icon-folder" />
          </slot>
        </span>

        <div v-if="!editable" class="vtl-node-content">
          <slot name="leafNameDisplay" :expanded="expanded" :model="model" :root="rootNode">
            {{ model.name }}
          </slot>
        </div>
        <input
          v-else
          ref="nodeInput"
          class="vtl-input"
          type="text"
          :value="model.name"
          @input="updateName"
          @blur="setUnEditable"
          @keyup.enter="setUnEditable"
        >
        <div v-show="isHover" class="vtl-operation">
          <span
            v-if="!model.isLeaf && !model.addTreeNodeDisabled"
            :title="defaultAddTreeNodeTitle"
            @click.stop.prevent="addChild(false)"
          >
            <slot name="addTreeNodeIcon" :expanded="expanded" :model="model" :root="rootNode">
              <i class="vtl-icon vtl-icon-folder-plus-e" />
            </slot>
          </span>
          <span
            v-if="!model.isLeaf && !model.addLeafNodeDisabled"
            :title="defaultAddLeafNodeTitle"
            @click.stop.prevent="addChild(true)"
          >
            <slot name="addLeafNodeIcon" :expanded="expanded" :model="model" :root="rootNode">
              <i class="vtl-icon vtl-icon-plus" />
            </slot>
          </span>
          <span v-if="!model.editNodeDisabled" title="edit" @click.stop.prevent="setEditable">
            <slot name="editNodeIcon" :expanded="expanded" :model="model" :root="rootNode">
              <i class="vtl-icon vtl-icon-edit" />
            </slot>
          </span>
          <span v-if="!model.delNodeDisabled" title="delete" @click.stop.prevent="delNode">
            <slot name="delNodeIcon" :expanded="expanded" :model="model" :root="rootNode">
              <i class="vtl-icon vtl-icon-trash" />
            </slot>
          </span>
        </div>
      </div>

      <div
        v-if="model.children && model.children.length > 0 && expanded"
        class="vtl-border vtl-bottom"
        :class="{ 'vtl-active': isDragEnterBottom }"
        @drop="dropAfter"
        @dragenter="dragEnterBottom"
        @dragover="dragOverBottom"
        @dragleave="dragLeaveBottom"
      />
    </div>

    <div
      v-show="model.name === 'root' || expanded"
      v-if="isFolder"
      :class="{ 'vtl-tree-margin': model.name !== 'root' }"
    >
      <TreeList
        v-for="model in model.children"
        :key="model.id"
        :default-tree-node-name="defaultTreeNodeName"
        :default-leaf-node-name="defaultLeafNodeName"
        :default-expanded="defaultExpanded"
        :model="model"
      >
        <template #leafNameDisplay="slotProps">
          <slot name="leafNameDisplay" v-bind="slotProps" />
        </template>
        <template #addTreeNodeIcon="slotProps">
          <slot name="addTreeNodeIcon" v-bind="slotProps" />
        </template>
        <template #addLeafNodeIcon="slotProps">
          <slot name="addLeafNodeIcon" v-bind="slotProps" />
        </template>
        <template #editNodeIcon="slotProps">
          <slot name="editNodeIcon" v-bind="slotProps" />
        </template>
        <template #delNodeIcon="slotProps">
          <slot name="delNodeIcon" v-bind="slotProps" />
        </template>
        <template #leafNodeIcon="slotProps">
          <slot name="leafNodeIcon" v-bind="slotProps" />
        </template>
        <template #treeNodeIcon="slotProps">
          <slot name="treeNodeIcon" v-bind="slotProps" />
        </template>
      </TreeList>
    </div>
  </div>
</template>

<style lang="less">
// @font-face {
//   font-family: 'icomoon';
//   src: url('fonts/icomoon.eot?ui1hbx');
//   src:
//     url('fonts/icomoon.eot?ui1hbx#iefix') format('embedded-opentype'),
//     url('fonts/icomoon.ttf?ui1hbx') format('truetype'),
//     url('fonts/icomoon.woff?ui1hbx') format('woff'),
//     url('fonts/icomoon.svg?ui1hbx#icomoon') format('svg');
//   font-weight: normal;
//   font-style: normal;
// }

.vtl-icon {
  /* use !important to prevent issues with browser extensions that change fonts */
  // font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  &.vtl-menu-icon {
    margin-right: 4px;
    &:hover {
      color: inherit;
    }
  }
  &:hover {
    color: blue;
  }
}

.vtl-icon-file:before {
  content: '\e906';
}
.vtl-icon-folder:before {
  content: '\e907';
}
.vtl-icon-caret-down:before {
  content: '\e901';
}
.vtl-icon-caret-right:before {
  content: '\e900';
}
.vtl-icon-edit:before {
  content: '\e902';
}
.vtl-icon-folder-plus-e:before {
  content: '\e903';
}
.vtl-icon-plus:before {
  content: '\e904';
}
.vtl-icon-trash:before {
  content: '\e905';
}

.vtl-border {
  height: 5px;
  &.vtl-up {
    margin-top: -5px;
    background-color: transparent;
  }
  &.vtl-bottom {
    background-color: transparent;
  }
  &.vtl-active {
    border-bottom: 3px dashed blue;
    /*background-color: blue;*/
  }
}

.vtl-node-main {
  display: flex;
  align-items: center;
  padding: 5px 0 5px 1rem;
  .vtl-input {
    border: none;
    max-width: 150px;
    border-bottom: 1px solid blue;
  }
  &:hover {
    background-color: #f0f0f0;
  }
  &.vtl-active {
    outline: 2px dashed pink;
  }
  .vtl-caret {
    margin-left: -1rem;
  }
  .vtl-operation {
    margin-left: 2rem;
    letter-spacing: 1px;
  }
}

.vtl-item {
  cursor: pointer;
}
.vtl-tree-margin {
  margin-left: 2em;
}
</style>
