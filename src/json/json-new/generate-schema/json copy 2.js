export default function Process(object) {
  // increament value for nodeId
  var nodeCount = (n => {
    return function () {
      n += 1
      return n
    }
  })(0)

  function objToIterate(object) {
    // increament value for nodeLevel
    var nodeLevel = (n => {
      return function () {
        n += 1000
        return n
      }
    })(0)

    const results = []
    var children = []

    function iterateObj(object, guardian, depth) {
      if (depth === undefined) {
        depth = 0
      }
      console.log('ITERATEOBJ object:', object)
      console.log('ITERATEOBJ guardian:', guardian)
      console.log('ITERATEOBJ depth:', depth)

      if (guardian) {
        const stringDepth = depth.toString()
        results.push({
          key: guardian,
          id: stringDepth,
          nodeLevel: stringDepth,
          children: children,
        })
        console.log('OUTSIDE OUTPUT results', results)
      }
      for (const prop in object) {
        console.log('typeof obj[prop]:', typeof object[prop])

        if (typeof object[prop] === 'object') {
          const objectDepth = nodeLevel()

          console.log('OBJECT')
          console.log('OBJECT object[prop]:', object[prop])
          console.log('OBJECT prop:', prop)
          console.log('OBJECT Object.keys(object[prop]):', Object.keys(object))
          children[prop] = iterateObj(object[prop], prop, objectDepth)
        }

        if (typeof object[prop] !== 'object' && guardian === undefined) {
          const node = nodeCount()
          const levelNode = depth ? parseInt(depth) + node : node
          const stringLevelNode = levelNode.toString()
          const stringDepth = depth.toString()
          results.push({
            parent: guardian !== undefined ? guardian : null,
            key: prop,
            id: stringLevelNode,
            nodeLevel: stringDepth,
            value: object[prop],
          })
          console.log('KEY VALUE results', results)
        } else if (typeof object[prop] !== 'object' && guardian !== undefined) {
          const childDepth = depth + 1000
          const stringChildDepth = childDepth.toString()
          const node = nodeCount()
          const levelNode = childDepth + node
          const stringLevelNode = levelNode.toString()
          children.push({
            parent: guardian !== undefined ? guardian : null,
            key: prop,
            id: stringLevelNode,
            nodeLevel: stringChildDepth,
            value: object[prop],
          })
          console.log('KEY VALUE children', children)
        }
        console.log('END FOR IN')
      }
      console.log('END iterateObj(object, guardian, depth) ')
    }
    console.log('END objToIterate(object) ')
    iterateObj(object)
    return results
  }

  const iterateObjResults = objToIterate(object)

  const parentContainer = {
    id: 'root',
    key: 'Parent',
    children: iterateObjResults,
  }

  var output
  output = parentContainer
  // console.log('output:', output)

  console.log(' ***** PROCESS ENDS ***** ')
  return output
}
