// https://github.com/Nijikokun/generate-schema
// Modules
import Type from './type-of-is'

// Constants
// var DRAFT = 'http://json-schema.org/draft-04/schema#'

function getPropertyFormat(value) {
  console.log(
    '\n',
    '***** FUNCTION ***** ',
    '\n',
    '\n',
    'getPropertyFormat(value)',
    '\n',
    '\n',
    'Value:',
    value,
    '\n',
    '\n'
  )

  var type = Type.string(value).toLowerCase()

  if (type === 'date') return 'date-time'

  return null
}

function getPropertyType(value) {
  console.log(
    '\n',
    '***** FUNCTION ***** ',
    '\n',
    '\n',
    'getPropertyType(value)',
    '\n',
    '\n',
    'Value:',
    value,
    '\n',
    'Typeof Value:',
    typeof value,
    '\n',
    '\n'
  )
  var type = Type.string(value).toLowerCase()
  if (type === 'date') return 'string'
  if (type === 'regexp') return 'string'
  if (type === 'function') return 'string'

  return type
}

function getUniqueKeys(a, b, c) {
  console.log(
    ' ***** FUNCTION ***** ',
    '\n',
    ' ***** getUniqueKeys(a, b, c) ***** ',
    '\n',
    'A:',
    a,
    '\n',
    'B:',
    b,
    '\n',
    'C:',
    c
  )
  a = Object.keys(a)
  b = Object.keys(b)
  c = c || []

  var value
  var cIndex
  var aIndex

  for (var keyIndex = 0, keyLength = b.length; keyIndex < keyLength; keyIndex++) {
    value = b[keyIndex]
    aIndex = a.indexOf(value)
    cIndex = c.indexOf(value)
    console.log(
      ' ***** getUniqueKeys ***** ',
      '\n',
      ' ***** FOR LOOP ***** ',
      '\n',
      'Value:',
      value,
      '\n',
      'A Index:',
      aIndex,
      '\n',
      'B Length:',
      b.length,
      '\n',
      'C Length:',
      cIndex
    )

    if (aIndex === -1) {
      if (cIndex !== -1) {
        // Value is optional, it doesn't exist in A but exists in B(n)
        c.splice(cIndex, 1)
      }
    } else if (cIndex === -1) {
      // Value is required, it exists in both B and A, and is not yet present in C
      c.push(value)
    }
  }
  console.log(' ***** getUniqueKeys ***** ', '\n', ' ***** RETURN VALUE ***** ', '\n', 'C:', c)

  return c
}

function processArray(array, output, nested) {
  console.log('(A) ***** PROCESS ARRAY ***** ')
  console.log('(A) > BEGINNING > ARRAY', array)
  console.log('(A) > BEGINNING > OUTPUT', output)
  console.log('(A) > BEGINNING > NESTED', nested)
  var format
  var oneOf
  var type

  if (nested && output) {
    console.log('(B1) NESTED & OUTPUT')
    console.log('(B1) NESTED', nested)
    console.log('(B1) OUTPUT BEFORE', output)
    output = { items: output }
    console.log('(B1) OUTPUT = {ITEMS: OUTPUT}')
    console.log('(B1) OUTPUT AFTER', output)
  } else {
    console.log('(B2) ELSE')
    output = output || {} // {} or [] ?
    console.log('(B2) OUTPUT', output)
    console.log('(B2) ARRAY > getPropertyType', array)
    // output.type = getPropertyType(array)
    // console.log('(B2) OUTPUT TYPE', output.type)
    output.items = output.items || {} // {} or [] ?
    console.log('(B2) OUTPUT ITEMS', output.items)
    type = output.items.type || null
    console.log('(B2) TYPE', type)
  }

  // Determine whether each item is different
  console.log('(C) DETERMINE WHETHER EACH ITEM IS DIFFERENT')
  console.log('(C) ARRAY LENGTH', array.length)
  for (var arrIndex = 0, arrLength = array.length; arrIndex < arrLength; arrIndex++) {
    console.log('(C) EACH ITEM IS DIFFERENT')
    console.log('(C) ARRAY INDEX', arrIndex)

    var elementType = getPropertyType(array[arrIndex])
    console.log('(C) GET PROPERTY TYPE for', array[arrIndex], elementType)
    // console.log('(C) ELEMENT TYPE', elementType)
    var elementFormat = getPropertyFormat(array[arrIndex])
    console.log('(C) ELEMENT FORMAT', elementFormat)

    if (type && elementType !== type) {
      console.log('(C2) TYPE AND ELEMENT TYPE DO NOT EQUAL TYPE')
      console.log('(C2) TYPE', type)
      output.items.oneOf = []
      console.log('(C2) OUTPUT ITEMS ONEOF', output.items.oneOf)
      oneOf = true
      console.log('(C2) ONEOF', oneOf)
      console.log('(C2) BREAK')
      break
    } else {
      console.log('(C3) ELSE')
      type = elementType
      console.log('(C3) TYPE', type)
      format = elementFormat
      console.log('(C3) FORMAT', format)
    }
  }

  // Setup type otherwise
  if (!oneOf && type) {
    console.log('(D) OTHERWISE SETUP TYPE')
    console.log('(D) !ONEOF', !oneOf)
    console.log('(D) TYPE', type)
    output.items.type = type

    if (format) {
      console.log('(D) FORMAT')
      console.log('(D) FORMAT', format)
      output.items.format = format
      console.log('(D) OUTPUT ITEMS FORMAT', output.items.format)
    }
  } else if (oneOf && type !== 'object') {
    console.log('(E) ELSE IF - NOT AN OBJECT')
    console.log('(E) ONEOF', oneOf)
    console.log('(E) Type', type)

    output.items = {
      oneOf: { type: type },
      required: output.items.required,
    }
    // console.log('(E) OUTPUT ITEMS', output.items)
  }

  // Process each item depending
  if (typeof output.items.oneOf !== 'undefined' || type === 'object') {
    console.log('(F) typeof output.items.oneOf', typeof output.items.oneOf)
    console.log('(F) TYPE', type)

    for (var itemIndex = 0, itemLength = array.length; itemIndex < itemLength; itemIndex++) {
      console.log('(F) SET ITEM INDEX = 0')
      console.log('(F) ARRAY', array)
      console.log('(F) SET ITEM LENGTH = ARRAY.LENGTH')
      console.log('(F) ARRAY LENGTH', array.length)
      console.log('(F) IF ITEM INDEX IS LESS THAN ITEM LENGTH, ADD ONE TO ITEM INDEX')
      console.log('(F) ITEM INDEX', itemLength)
      var value = array[itemIndex]
      console.log('(F) VALUE', value)

      var itemType = getPropertyType(value)
      console.log('(F) ITEM TYPE', itemType)
      var itemFormat = getPropertyFormat(value)
      console.log('(F) ITEM FORMAT', itemFormat)
      var arrayItem
      if (itemType === 'object') {
        console.log('(G) ITEM TYPE IS OBJECT')
        console.log('(G) ITEM TYPE', itemType)

        if (output.items.children) {
          console.log('(G) OUTPUT ITEMS PROPERTIES IS TRUE')

          output.items.required = getUniqueKeys(output.items.children, value, output.items.required)
          console.log('(G) OUTPUT ITEMS REQUIRED', output.items.required)
        }
        //
        // PROCESS CHANGE
        // arrayItem = processObject(value, oneOf ? {} : output.items.children, true)
        let returnedValue = processObject(value, oneOf ? {} : output.items.children, true)
        arrayItem = [returnedValue]

        console.log('(G) ARRAY ITEM', arrayItem)
      } else if (itemType === 'array') {
        console.log('(H) ITEM TYPE IS ARRAY')
        console.log('(H) ITEM TYPE', itemType)
        console.log('(H) > > > BACK TO START OF PROCESS ARRAY')
        console.log('(H) PROCESS ARRAY PAYLOAD : VALUE', value)
        console.log('(H) PROCESS ARRAY PAYLOAD : ONEOF', oneOf)
        console.log('(H) PROCESS ARRAY PAYLOAD : OUTPUT ITEMS PROPERTIES', output.items.children)
        console.log('(H) PROCESS ARRAY PAYLOAD : NESTED = TRUE')
        arrayItem = processArray(value, oneOf ? {} : output.items.children, true)
        console.log('(H) ARRAY ITEM', arrayItem)
      } else {
        console.log('(I) ELSE')
        console.log('(I) ITEM TYPE', itemType)
        arrayItem = {}
        arrayItem.type = itemType
        if (itemFormat) {
          console.log('(I) ITEM FORMAT IS TRUE')
          console.log('(I) ITEM FORMAT', itemFormat)
          arrayItem.format = itemFormat
        }
      }
      if (oneOf) {
        console.log('(J) ONEOF IS TRUE')
        console.log('(J) ONEOF', oneOf)
        var childType = Type.string(value).toLowerCase()
        console.log('(J) CHILD TYPE', childType)

        var tempObj = {}
        console.log('(J) ARRAY ITEM TYPE', arrayItem.type)
        if (!arrayItem.type && childType === 'object') {
          console.log('(J) ARRAY ITEM TYPE & CHILD TYPE ARE OBJECTS')
          tempObj.children = arrayItem
          console.log('(J) ARRAY ITEM', arrayItem)
          console.log('(J) TEMP OBJ', tempObj)
          tempObj.type = 'object'
          console.log('(J) SET ARRAY ITEM = TEMP OBJ')
          arrayItem = tempObj
        }
        console.log('(J) ***** PUSH ***** ')
        console.log('(J) OUTPUT ITEMS ONEOF', output.items.oneOf)
        output.items.oneOf.push(arrayItem)
      } else {
        console.log('(K) ELSE')
        console.log('(K) OUTPUT ITEMS TYPE', output.items.type)
        if (output.items.type !== 'object') {
          console.log('(K) OUTPUT ITEMS TYPE IS NOT AN OBJECT')
          console.log('(K) CONTINUE')
          continue
        }
        console.log('(L) SET OUTPUT PROPERTIES = ARRAY ITEM')
        output.items.children = arrayItem
      }
    }
  }
  console.log('(M) > > RETURN > > ')
  console.log('(M) NESTED', nested)
  console.log('(M) OUTPUT ITEMS', output.items)
  console.log('(M) OUTPUT', output)
  return nested ? output.items : output
}

// increament value for nodeId
var increment = (function (n) {
  return function () {
    n += 1
    return n
  }
})(0)
// increament value for nodeId
var increment2 = (function (n) {
  return function () {
    n += 1
    return n
  }
})(0)
// increament value for nodeId
var increment3 = (function (n) {
  return function () {
    n += 1
    return n
  }
})(0)

function processObject(object, output, nested) {
  const levelIncrement = increment()
  console.log(
    '\n',
    '***** Process Object Function ***** ',
    '\n',
    '\n',
    'processObject(object, output, nested)',
    '\n',
    '\n',
    'Object value:',
    object,
    '\n',
    'nested & output have values?',
    nested && output ? true : false,

    nested && output && '\n',
    'output value:',
    output,
    '\n',
    'nested value:',
    nested,
    '\n',
    '\n',
    `start # ${levelIncrement}`,
    '\n',
    '\n',
    '\n'
  )

  if (nested && output) {
    output = { children: output }
    console.log(
      '\n',
      '(2A) Values passed to Nexted & Output',
      '\n',
      '\n',
      'NESTED =',
      nested,
      '\n',
      'OUTPUT =',
      output,
      '\n',
      '\n'
    )
  } else {
    // console.log(
    //   '\n',
    //   '(2B - 1) ELSE',
    //   '\n',
    //   '\n',
    //   'output = output || {}',
    //   '\n',
    //   '\n',
    //   'output:',
    //   output,
    //   '\n',
    //   'output.children:',
    //   output.children,
    //   '\n',
    //   '\n'
    // )

    output = output || {}
    output.type = getPropertyType(object)
    output.children = output.children || {}
    output.required = Object.keys(object)

    console.log(
      '\n',
      '(2B - 2)',
      '\n',
      '\n',
      'output.children = {}',
      '\n',
      '\n',
      'output.children:',
      output.children,
      '\n',
      '\n'
    )
  }

  // The for...in statement iterates over all enumerable properties of an object
  // that are keyed by strings (ignoring ones keyed by Symbols), including
  // inherited enumerable properties

  for (var key in object) {
    console.log(
      '\n',
      '(3) For (var key in object)',
      '\n',
      '\n',
      'object:',
      object,
      '\n',
      '\n',
      `${key} passed as key in object[key] returns:`,
      object[key],
      '\n',
      '\n'
    )
    for (const [objectKey, objectValue] of Object.entries(object)) {
      console.log(
        '\n',
        '(3A) For (const [objectKey, objectValue] of Object.entries(object)',
        '\n',
        '\n',
        'object:',
        object,
        '\n',
        '\n',
        `${objectKey} passed as key in object[key] returns:`,
        object[objectKey],
        '\n',
        '\n'
      )

      var value = object[key]
      var type = getPropertyType(value)
      var format = getPropertyFormat(value)

      type = type === 'undefined' ? 'null' : type

      console.log(
        '\n',
        '(3B) set Type',
        '\n',
        '\n',
        'type === undefined ? null : type',
        '\n',
        '\n',
        'type:',
        type,
        '\n',
        '\n'
      )

      if (type === 'object') {
        console.log(
          '\n',
          '(4) Type = Object',
          '\n',
          '\n',
          'object[key] passed to processObject():',
          object[key],
          '\n',
          'output.children[key] passed to processObject():',
          output.children[key],
          '\n',
          '\n'
        )
        for (const [objectKey, objectValue] of Object.entries(object)) {
          console.log(
            '\n',
            '(4A) For of',
            '\n',
            '\n',
            'const [objectKey, objectValue] of Object.entries(object)',
            '\n',
            '\n',
            `object(objectKey): ${objectKey} type:`,
            typeof objectKey,
            '\n',
            `object(objectValue): ${objectValue} type:`,
            typeof objectValue,
            '\n',
            '\n'
          )
          const objectValueObjObj = objectValue === '[object Object]' ? true : false
          console.log(
            '\n',
            `(4A - 1) Set objectValueObjObj based on ${objectValue}`,
            '\n',
            '\n',
            `objectValue === [object Object]? ${objectValueObjObj}`,
            '\n',
            '\n'
          )
          if (objectValueObjObj) {
            const childIncrement = increment()
            console.log(
              '\n',
              `(4B) If ${objectValueObjObj} = [object Object]`,
              '\n',
              '\n',
              `turn# ${childIncrement}`,
              '\n',
              `Set output.children[key].key: ${objectKey}`,
              '\n',
              `Set output.children[key].id: ${levelIncrement + childIncrement}`,
              '\n',
              '\n',
              'processObject(object[key], output.children[key])',
              '\n',
              'Set output.children[key]:',
              processObject(object[key], output.children[key]),
              '\n',
              '\n'
            )
            output.children[key].key = objectKey
            output.children[key].id = levelIncrement + childIncrement
            output.children[key] = processObject(object[key], output.children[key])
          }

          // Value property of k/v pair when there are children  wrapped in []
          console.log(
            '\n',
            '(4C) ***** Process Object ***** ',
            '\n',
            '\n',
            `processObject(object[${key}], output.children[${key}])`,
            '\n',
            '\n',
            `key: ${key}`,
            '\n',
            `object[${key}]:`,
            object[key],
            '\n',
            `output.children[${key}]:`,
            output.children[key],
            '\n',
            '\n'
          )
          output.children[key] = processObject(object[key], output.children[key])
          console.log(
            '\n',
            '(4D) Returned Value:',
            '\n',
            '\n',
            `output.children[${key}]`,
            '\n',
            output.children[key],
            '\n',
            '\n',
            'Continue',
            '\n',
            '\n'
          )
          continue
        }
      }

      if (type === 'array') {
        console.log('(4B) TYPE > ARRAY')
        console.log('(4B) > > > > PROCESS ARRAY')
        output.children[key] = processObject(value, output.children[key])
        console.log('(4B) OUTPUT PROPERTIES', output.children)
        console.log('(4B) OUTPUT PROPERTIES [KEY]', output.children[key])
        console.log('(4B) CONTINUE')
        continue
      }

      if (output.children[key]) {
        var entry = output.children[key]
        var hasTypeArray = Array.isArray(entry.type)
        console.log(
          '\n',
          '(5)',
          '\n',
          '\n',
          ' * If * ',
          '\n',
          `output.children[${key}] has a value`,
          '\n',
          `output.children[${key}]:`,
          output.children[key],
          '\n',
          '\n',
          ' * Set * ',
          '\n',
          `entry = output.children[${key}]:`,
          '\n',
          `output.children[${key}]:`,
          output.children[key],
          '\n',
          'entry:',
          entry,
          '\n',
          '\n',
          ' * Set * ',
          '\n',
          'hasTypeArray = Array.isArray(entry.type)',
          '\n',
          'hasTypeArray?',
          hasTypeArray,
          '\n',
          '\n'
        )

        // When an array already exists, we check the existing
        // type array to see if it contains our current property
        // type, if not, we add it to the array and continue
        if (hasTypeArray && entry.type.indexOf(type) < 0) {
          console.log(
            '\n',
            '(6) If ',
            '\n',
            '\n',
            'hasTypeArray && entry.type.indexOf(type) < 0:',
            hasTypeArray && entry.type.indexOf(type) < 0,
            '\n',
            'hasTypeArray:',
            hasTypeArray,
            '\n',
            'entry.type.indexOf(type):',
            entry.type.indexOf(type),
            '\n',
            '\n',
            'entry.type.push(type)',
            '\n',
            'type:',
            type,
            '\n',
            '\n'
          )
          entry.type.push(type)
        }

        // When multiple fields of differing types occur, json schema states that the
        // field must specify the primitive types the field allows in array format.
        if (!hasTypeArray && entry.type !== type) {
          console.log(
            '\n',
            '(7) If ',
            '\n',
            '\n',
            '!hasTypeArray && entry.type !== type:',
            !hasTypeArray && entry.type !== type,
            '\n',
            '!hasTypeArray:',
            !hasTypeArray,
            '\n',
            'entry.type:',
            entry.type,
            '\n',
            'type:',
            type,
            '\n',
            '\n',
            'entry.type = [entry.type, type]:',
            [entry.type, type],
            '\n',
            '\n'
          )
          entry.type = [entry.type, type]
        }
        console.log(
          '\n',
          '(8) Continue',
          '\n',
          '\n',
          'End > for (var key in object)',
          '\n',
          'Goto > return',
          '\n',
          '\n'
        )
        continue
      }
      const nodeIdIncrement = increment3()
      output.children[key] = {}
      output.children[key].nodeId = nodeIdIncrement
      output.children[key].key = key
      output.children[key].value = objectValue
      output.children[key].valuetype = type

      const combined = {
        levelIncrement,
        key,
        objectValue,
        type,
      }
      console.log(
        '\n',
        '(10) ***** Output Object ***** ',
        '\n',
        '\n',
        'output.children[key].id:',
        levelIncrement,
        '\n',
        'output.children[key].key:',
        key,
        '\n',
        'output.children[key].value:',
        objectValue,
        '\n',
        'output.children[key].valuetype:',
        type,
        '\n',
        '{}:',
        combined,
        '\n',

        `nodeId # ${nodeIdIncrement}`,
        '\n',
        '\n'
      )

      if (format) {
        console.log(
          '\n',
          '(11) If',
          '\n',
          '\n',
          'format:',
          format,
          '\n',
          '\n',
          'output.children[key].format = format',
          (output.children[key].format = format),
          '\n',
          '\n'
        )
        output.children[key].format = format
      }
    }
  }
  const returnIncrement = increment2()
  console.log(
    '\n',
    '(12) ***** Return ***** ',
    '\n',
    '\n',
    'nested ? output.children : output',
    '\n',
    nested ? output.children : output,
    '\n',
    'nested:',
    '\n',
    nested,
    '\n',
    '\n',
    'nested:',
    nested,
    '\n',
    'output.children:',
    output.children,
    '\n',
    'output:',
    output,
    '\n',
    '\n',
    'key:',
    key,
    '\n',
    '\n',
    `return # ${returnIncrement}`,
    '\n',
    '\n',
    '\n'
  )
  return nested ? output.children : output
}

// export default function Process(title, object) {
//   var processOutput
//   var output = {
//     id: 'root',
//     key: 'Parent',
//   }
//   var objectType
//   console.log('\n', '***** Begin Process(title, object) ***** ', '\n', '\n')

//   // Determine if title exists
//   if (typeof title !== 'string') {
//     object = title
//     objectType = typeof title
//     title = undefined
//   } else {
//     console.log('TITLE', title)
//     output.title = title
//   }
export default function Process(object) {
  // var processOutput
  // var output = {
  //   id: 'root',
  //   key: 'Parent',
  // }
  // var objectType

  // increament value for nodeId
  var nodeCount = (n => {
    return function () {
      n += 1
      return n
    }
  })(0)

  //
  // const array1 = [sample2]
  // array1.filter(item => {
  //   iterateObj(item)
  // })

  const testing = ObjToIterate(object)
  console.log('testing:', testing)

  const parentContainer = {
    id: 'root',
    key: 'Parent',
    children: testing,
  }
  console.log('parentContainer:', parentContainer)
  var output
  output = parentContainer
  console.log('output:', output)

  // array1.forEach(element => iterateObj(element))

  // iterateObj(sample2)

  //
  function ObjToIterate(obj) {
    const results = []
    const childResults = []

    function iterateObj(object, output, lvl, guardian) {
      console.log('ITERATEOBJ output:', output)

      if (output) {
        results.push({
          key: output,
          nodeLevel: jsonLevel,
          children: childResults,
        })
        console.log('OUTPUT results', results)
      }

      const jsonLevel = lvl === undefined ? 1 : lvl + 1

      for (const prop in object) {
        // const nodeCount = node === undefined ? 1 : node + 1
        const node = nodeCount()
        console.log('typeof obj[prop]:', typeof object[prop])

        if (typeof object[prop] === 'object') {
          console.log('OBJECT')

          iterateObj(object[prop], prop, jsonLevel, prop)
          continue
        }

        if (guardian !== undefined) {
          childResults.push({
            parent: guardian !== undefined ? guardian : null,
            key: prop,
            nodeLevel: jsonLevel,
            nodeId: node,
            value: object[prop],
          })
          console.log('KEY VALUE childResults results', results)
        } else {
          results.push({
            parent: guardian !== undefined ? guardian : null,
            key: prop,
            nodeLevel: jsonLevel,
            nodeId: node,
            value: object[prop],
          })
          console.log('KEY VALUE results', results)
        }
      }
      return results
    }
    iterateObj(obj)

    console.log('OUTPUT parent', parent)
    console.log('FINAL results', results)
    console.log('FINAL parent', parent)
    return results
  }

  // Set initial object type
  // output.type = Type.string(object).toLowerCase()
  // console.log('(PROCESS) INITIAL OBJECT TYPE', output.type)

  // Process object
  // if (objectType === 'object') {
  //   console.log(
  //     '\n',
  //     '***** Process Object ***** ',
  //     '\n',
  //     '\n',
  //     'object passed to processObject(object):',
  //     '\n',
  //     object,
  //     '\n',
  //     '\n'
  //   )

  //   processOutput = processObject2(object)
  //   console.log('(PROCESS) < < < BACK TO PROCESS : OBJECT')
  //   // output.type = processOutput.type
  //   // console.log('(PROCESS) OBJECT OUTPUT TYPE', output.type)
  //   console.log('(PROCESS) OBJECT > PROCESS OUTPUT', processOutput)
  //   // console.log('(PROCESS) OBJECT > PROCESS OUTPUT CHILDREN', processOutput.children)
  //   // output.children = [processOutput.children]
  //   console.log('(PROCESS) OBJECT > OUTPUT CHILDREN', output.children)
  // }

  // if (objectType === 'array') {
  //   console.log('(PROCESS) > ARRAY', object)
  //   console.log('(PROCESS) > > > processArray')
  //   // processOutput = processArray(object)
  //   processOutput = none
  //   console.log('(PROCESS) < < < BACK TO PROCESS : ARRAY')
  //   // output.type = processOutput.type
  //   // console.log('(PROCESS) ARRAY OUTPUT TYPE', output.type)
  //   console.log('(PROCESS) ARRAY > PROCESS OUTPUT ITEMS', processOutput.items)
  //   output.items = processOutput.items
  //   console.log('(PROCESS) ARRAY > OUTPUT ITEMS', output.items)

  //   // if (output.title) {
  //   //   console.log('(PROCESS) OUTPUT TITLE')
  //   //   output.items.title = output.title
  //   //   console.log('(PROCESS) OUTPUT ITEMS TITLE', output.items.title)
  //   //   output.title += ' Set'
  //   //   console.log('(PROCESS) OUTPUT TITLE', output.title)
  //   // }
  // }

  // Output
  console.log('(PROCESS) OUTPUT', output)
  console.log(' ***** PROCESS ENDS ***** ')
  return output
}

export function processObject2(object, output, nested) {
  if (nested && output) {
    output = { children: output }
  } else {
    output = output || {}
    output.type = getPropertyType(object)
    output.children = output.children || {}
    // output.required = Object.keys(object)
  }

  for (var key in object) {
    var value = object[key]
    var type = getPropertyType(value)
    var format = getPropertyFormat(value)

    type = type === 'undefined' ? 'null' : type

    if (type === 'object') {
      output.children[key] = processObject2(value, output.children[key])
      continue
    }

    if (type === 'array') {
      output.children[key] = processArray(value, output.children[key])
      continue
    }

    if (output.children[key]) {
      var entry = [output.children[key]]
      var hasTypeArray = Array.isArray(entry.type)

      // When an array already exists, we check the existing
      // type array to see if it contains our current property
      // type, if not, we add it to the array and continue
      if (hasTypeArray && entry.type.indexOf(type) < 0) {
        entry.type.push(type)
      }

      // When multiple fields of differing types occur,
      // json schema states that the field must specify the
      // primitive types the field allows in array format.
      if (!hasTypeArray && entry.type !== type) {
        entry.type = [entry.type, type]
      }

      continue
    }

    output.children[key] = {}
    output.children[key].type = type
    output.children[key].nodeId = 1

    if (format) {
      output.children[key].format = format
    }
  }

  return nested ? output.children : output
}
