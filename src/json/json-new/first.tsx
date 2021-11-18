import { TypeDetermination } from '../../editor/objects/types'

interface SerializeNode {
  value: any
  path: Array<string | number>
}
/**
 * @typedef {{value: String|Object|Number|Boolean, path: Array.<String|Number>}} SerializableNode
 * Returns serializable representation for the node
 * @return {SerializableNode}
 */
export function Serialize(value): SerializeNode {
  return {
    value: getValue(value),
    path: getPath(value),
  }
}

/**
 * Get value. Value is a JSON structure
 * @return {*} value
 */
function getValue(value) {
  if (TypeDetermination(value) === 'array') {
    const arr = value.forEach(child => {
      arr.push(child.getValue())
    })
    return arr
  } else if (TypeDetermination(value) === 'object') {
    const obj = value.forEach(child => {
      obj[child.getField()] = child.getValue()
    })
    return obj
  }
}

/**
 * Get the path of this node
 * @return {{string|number}[]} Array containing the path to this node.
 * Element is a number if is the index of an array, a string otherwise.
 */
function getPath(node) {
  const path = []
  while (node) {
    const field = node.getName()
    if (field !== undefined) {
      path.unshift(field)
    }
    node = node.parent
  }
  return path
}
