// import { atom, useRecoilState } from 'recoil'

// export const nodeIdCountAtom = atom<number>({
//   key: 'nodeIdCount',
//   default: 0,
// })

/**
 * Get the child paths of an array
 * @param {JSON} json
 * @param {boolean} [includeObjects=false] If true, object and array paths are returned as well
 * @return {string[]}
 */

export default function GetChildPaths(json: string | any[], includeObjects: boolean): string[] {
  const MAX_ITEMS_FIELDS_COLLECTION = 10000
  const pathsMap = {}

  const deepCopy = JSON.parse(JSON.stringify(json))
  // const funCount = 0
  const newArr = []

  console.log('START ***************************************** START ')

  // Test whether a value is an Object
  function isObject(value) {
    console.log('FUNCTION CALL to test whether a value is an object [ isObject(value) ]')
    console.log(
      ' > NESTED TEST: Is Value an object?',
      typeof value === 'object' && value !== null && !Array.isArray(value)
    )
    return typeof value === 'object' && value !== null && !Array.isArray(value)
  }

  function buildNewArray(newObject) {
    newArr.push(newObject)

    console.log('NEW ARRAY', newArr)
  }

  function getObjectChildPaths(
    deepCopy: { [x: string]: any },
    pathsMap: Record<string, unknown>,
    rootPath: string,
    includeObjects: boolean
  ) {
    console.warn(' >>>>> >>>>> BEGIN  >>>>> >>>>> ')
    // if (typeof json === typeof 'string') {
    //   funCount += 1
    //   newArr.push([rootPath, json, funCount])
    //   console.log('ChildPath:  newArr ', newArr)
    // }

    // funCount += 1
    // console.log('ChildPath: funCount ', funCount)

    const isValue = !Array.isArray(deepCopy) && !isObject(deepCopy)
    console.log('TEST: Is Value an array or typeof Array? FALSE')
    // console.log(' > NESTED TEST: Is Value an array?', Array.isArray(deepCopy))

    // determine whether the passed value is not an array or typeof array
    // and paths are returned
    if (isValue || includeObjects) {
      console.log('IF STATEMENT: Value is NOT array or typeof Array AND paths are returned')

      pathsMap[rootPath || ''] = true
      console.log(' -> pathsMap[rootPath ||] ', pathsMap[rootPath || ''])
    }

    // determine whether the passed value is an Object
    if (isObject(deepCopy)) {
      console.log('IF STATEMENT: Value is an OBJECT')

      // Object.assign(newArr, deepCopy[0], { nodeId: 1 })
      // console.log('newArr', newArr)

      // if (typeof deepCopy[key] !== typeof {}) {
      //   // if (typeof deepCopy[field] !== typeof {}) {
      //   newArr.push({ nodeId: (funCount += 1), key: key, value: deepCopy[key] })
      //   console.log('ChildPath:  newArr ', newArr)
      //   // } else if (typeof deepCopy[field] === typeof {}) {
      // } else {
      //   newArr.push({ nodeId: (funCount += 1), key: key, children: key })
      //   console.log('ChildPath:  newArr ', newArr)
      // }

      Object.keys(deepCopy).forEach(field => {
        console.log(' -> OBJECT: field deepCopy[field] ', field, deepCopy[field])
        console.log(' -> OBJECT: typeof deepCopy[field] ', typeof deepCopy[field])

        const newObject = {
          key: field,
          value: deepCopy[field],
          // nodeId: (funCount += 1),
        }
        console.log('newObject ', newObject)

        buildNewArray(newObject)

        console.warn(' <<<<< <<<<< RETURN <<<<< <<<<< ')
        getObjectChildPaths(deepCopy[field], pathsMap, rootPath + '.' + field, includeObjects)
      })
    }
  }

  // determine whether the passed value is an Array
  if (Array.isArray(deepCopy)) {
    console.log('IF STATEMENT: Value is an ARRAY')

    const max = Math.min(deepCopy.length, MAX_ITEMS_FIELDS_COLLECTION)
    console.log(' ARRAY length', max)

    for (let i = 0; i < max; i++) {
      console.log(' -> FOR LOOP interates', max, 'time(s)')

      const item = deepCopy[i]
      console.log(' -> ARRAY item', item)

      console.warn(' <<<<< <<<<< RETURN <<<<< <<<<< ')
      getObjectChildPaths(item, pathsMap, '', includeObjects)
    }
  } else {
    console.log(' ELSE')
    pathsMap[''] = true
    console.log(' -> ChildPath: pathsMap[] ', pathsMap[''])
  }

  // console.log('ChildPath:  Object.keys(pathsMap)  ', Object.keys(pathsMap))
  // console.log('ChildPath:  Object.keys(pathsMap).sort ', Object.keys(pathsMap).sort)

  return Object.keys(pathsMap) // .sort
}
