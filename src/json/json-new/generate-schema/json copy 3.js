import Type from '../../../lib/type-of-is'

function getPropertyType(value) {
  // console.log(
  //   '\n',
  //   '***** FUNCTION ***** ',
  //   '\n',
  //   '\n',
  //   'getPropertyType(value)',
  //   '\n',
  //   '\n',
  //   'Value:',
  //   value,
  //   '\n',
  //   'Typeof Value:',
  //   typeof value,
  //   '\n',
  //   '\n'
  // )

  var type = Type.string(value).toLowerCase()
  if (type === 'date') return 'string'
  if (type === 'regexp') return 'string'
  if (type === 'function') return 'string'

  return type
}

export default function Process(object) {
  var output
  const results = []
  var children = []

  function iterateObj(object, output, guardian) {
    console.log(
      '\n',
      'START iterateObj(object):',
      '\n',
      '\n',
      object,
      '\n',
      '\n',
      'output:',
      output,
      '\n',
      '\n',
      'guardian:',
      guardian,
      '\n',
      '\n'
    )

    if (guardian && output) {
      console.log('guardian && output: children', children, 'output', output)
      // children[guardian] = { children: output }
      output = { children: output }
    } else {
      console.log('guardian && output: ELSE')
      output = output || {}
      // output.type = getPropertyType(object)
      output.children = output.children || {}
      // output.required = Object.keys(object)
      // children = children || {}
    }

    for (const prop in object) {
      console.log(
        '\n',
        '(1) typeof obj[prop]:',
        typeof object[prop],
        '\n',
        '\n',
        '(2) object:',
        object,
        '\n',
        '\n'
      )
      var value = object[prop]
      var type = getPropertyType(value)
      console.log('\n', '(3) type of:', object[prop], type, '\n', '\n')

      if (type === 'object') {
        // console.log(
        //   '\n',
        //   'type Object:',
        //   object[prop],
        //   '\n',
        //   '\n',
        //   'prop:',
        //   prop,
        //   '\n',
        //   '\n',
        //   'children[prop]',
        //   children[prop],
        //   '\n',
        //   '\n'
        // )
        console.log('\n', '(4) value:', value, '\n', '\n')
        console.log('\n', '(5) children[prop]:', children[prop], '\n', '\n')
        console.log('\n', '(6) prop:', prop, '\n', '\n') // Parent Name
        console.log('\n', '(7) guardian:', guardian, '\n', '\n') // Parent Name

        output.children[prop] = iterateObj(value, output.children[prop], prop)

        // if (guardian) {
        // }
        // // if property name is equal to exisiting child property
        // // children[prop] have a parent
        // // construct a new parent based on parent
        // // add new child

        // // value a type of string (obj)
        // // else (obj)
        // // an object (recursion)

        // results.push({
        //   key: guardian,
        //   children: output.children,
        // })
        // console.log('\n', 'OBJECT After results', '\n', results, '\n', '\n')
      }

      if (typeof object[prop] !== 'object' && guardian === undefined) {
        console.log('PUSH key/value Object', prop, ':', object[prop])
        // output.children[prop] = {}
        // output.children[prop].parent = guardian !== undefined ? guardian : null
        // output.children[prop].key = prop
        // output.children[prop].value = object[prop]
        output.children[prop] = {}
        output.children[prop].parent = guardian !== undefined ? guardian : null
        output.children[prop].key = prop
        output.children[prop].value = object[prop]
        // results.push(children[prop])
      } else if (typeof object[prop] !== 'object' && guardian !== undefined) {
        console.log('PUSH key/value CHILD Object', prop, ':', object[prop])
        output.children[prop] = {}
        output.children[prop].parent = guardian !== undefined ? guardian : null
        output.children[prop].key = prop
        // output.children[prop].value = object[prop]
        // output.children.push(output.children[prop])
      }
    }
    return guardian ? output.children : output
  }

  const iterateObjResults = iterateObj(object)

  const parentContainer = {
    id: 'root',
    key: 'Parent',
    children: iterateObjResults,
  }

  results.push(parentContainer)
  // output = parentContainer
  console.log('parentContainer:', parentContainer)

  console.log(' ***** PROCESS ENDS ***** ')
  return output
}
