export function GetNestedChildren(arr, guardian) {
  const nestedOutput = []
  for (const index in arr) {
    if (arr[index].parent == guardian) {
      const descendant = GetNestedChildren(arr, arr[index].name)

      if (descendant.length) {
        arr[index].children = descendant
      }
      nestedOutput.push(arr[index])
    }
  }
  return nestedOutput
}

export function DestObjects(object) {
  const expandedId = []
  // push first number to account for Parent object
  expandedId.push('1')
  // increament id
  const increamentIdCount = (n => {
    return function () {
      n += 1
      expandedId.push(n.toString())
      return n
    }
  })(1)

  const objOutput = []

  const objProps = function (obj, parent) {
    //
    const isObject = function (val) {
      if (val === null) {
        return false
      }
      return typeof val === 'object'
    }
    for (const val in obj) {
      const node = increamentIdCount()
      if (isObject(obj[val])) {
        objOutput.push({
          id: node.toString(),
          parent: parent,
          name: val,
        })
        objProps(obj[val], val)
      } else {
        objOutput.push({
          id: node.toString(),
          name: val,
          parent: parent,
        })
      }
    }
  }

  objProps(object, undefined)

  const objectsDestructured = { objOutput, expandedId }

  return objectsDestructured
}
