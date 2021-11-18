// retrieve the child paths of an array
export function GetChildPaths(json: string | any[], includeObjects: boolean): string[] {
  const MAX_ITEMS_FIELDS_COLLECTION = 10000
  const pathsMap = {}
  const deepCopy = JSON.parse(JSON.stringify(json))

  // Test whether the value is an Object
  function isObject(value: { [x: string]: any }) {
    return typeof value === 'object' && value !== null && !Array.isArray(value)
  }

  function getObjectChildPaths(
    deepCopy: { [x: string]: any },
    pathsMap: Record<string, unknown>,
    rootPath: string,
    includeObjects: boolean
  ) {
    const isValue = !Array.isArray(deepCopy) && !isObject(deepCopy)

    // determine whether the passed value is not an array or typeof array
    // or return paths is set to true
    if (isValue || includeObjects) {
      // setTotal({
      //   parent:
      //     rootPath.split('.')[1] === rootPath.slice(rootPath.lastIndexOf('.') + 1)
      //       ? null
      //       : rootPath.split('.')[1],
      //   id: idNodeCount + 1,
      //   key: rootPath.slice(rootPath.lastIndexOf('.') + 1),
      //   value: typeof deepCopy === typeof {} ? 'parent' : deepCopy,
      //   nodeId: idNodeCount + 1,
      //   children: typeof deepCopy === typeof {} ? true : Array.isArray(deepCopy),
      // })
      // setIdNodeCount(idNodeCount + 1)

      pathsMap[rootPath || ''] = true
    }

    // determine whether the passed value is an Object
    if (isObject(deepCopy)) {
      Object.keys(deepCopy).forEach(field => {
        // setTotal({
        //   parent:
        //     rootPath.split('.')[1] === rootPath.slice(rootPath.lastIndexOf('.') + 1)
        //       ? null
        //       : rootPath.split('.')[1],
        //   id: idNodeCount + 1,
        //   key: rootPath.slice(rootPath.lastIndexOf('.') + 1),
        //   value: typeof deepCopy === typeof {} ? 'parent' : deepCopy,
        //   nodeId: idNodeCount + 1,
        //   children: typeof deepCopy === typeof {} ? true : Array.isArray(deepCopy),
        // })
        // setIdNodeCount(idNodeCount + 1)

        getObjectChildPaths(deepCopy[field], pathsMap, rootPath + '.' + field, includeObjects)
      })
    }
  }

  // determine whether the passed value is an Array
  if (Array.isArray(deepCopy)) {
    const max = Math.min(deepCopy.length, MAX_ITEMS_FIELDS_COLLECTION)
    for (let i = 0; i < max; i++) {
      const item = deepCopy[i]
      getObjectChildPaths(item, pathsMap, '', includeObjects)
    }
  } else {
    pathsMap[''] = true
  }
  return Object.keys(pathsMap) // .sort
}
