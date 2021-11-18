/**
 * TreePath
 * @param {Array<Node>} pathNodes list of nodes in path from root to selection
 * @private
 */
export function Format_for_treeview(data, arr) {
  for (const key in data) {
    if (Array.isArray(data[key]) || data[key].toString() === '[object Object]') {
      // when data[key] is an array or object
      const nodes = []
      const completedNodes = Format_for_treeview(data[key], nodes)
      arr.push({
        text: key,
        nodes: completedNodes,
      })
    } else {
      // when data[key] is just strings or integer values
      arr.push({
        text: key + ' : ' + data[key],
      })
    }
  }
  return arr
}

/**
 * TreePath
 * @param {Array<Node>} pathNodes list of nodes in path from root to selection
 * @private
 */
export function TreePath(pathNodes: any[]) {
  console.log('TreePath pathNodes', pathNodes)

  if (pathNodes && pathNodes.length) {
    const pathObjs = []
    pathNodes.forEach(node => {
      const pathObj = {
        name: getName(node),
        node: node,
        children: [],
      }
      console.log('TreePath pathObj', pathObj)
      if (node.childs && node.childs.length) {
        node.childs.forEach(childNode => {
          pathObj.children.push({
            name: getName(childNode),
            node: childNode,
          })
        })
      }
      pathObjs.push(pathObj)
      console.log('TreePath pathObjs', pathObjs)
    })
  }

  function getName(node) {
    return node.parent
      ? node.parent.type === 'array'
        ? node.index
        : node.field
      : node.field || node.type
  }
}
