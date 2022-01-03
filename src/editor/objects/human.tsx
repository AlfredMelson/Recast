// export default function dataAnalysis(userdata) {
//   'use strict'

//   const indexOf =
//     [].indexOf ||
//     function (item) {
//       for (let i = 0, l = userdata.length; i < l; i++) {
//         if (i in userdata && userdata[i] === item) return i
//       }
//       return -1
//     }

//   function makePrefixer(prefix) {
//     return function (name) {
//       return prefix + '-' + name
//     }
//   }

//   function isArray(obj) {
//     return toString.call(obj) === '[object Array]'
//   }

//   function sn(tagName, className, data) {
//     const result = document.createElement(tagName)

//     result.className = className
//     result.appendChild(document.createTextNode('' + data))

//     return result
//   }

//   function scn(tagName, className, child) {
//     // eslint-disable-next-line prefer-const
//     let result = document.createElement(tagName),
//       i,
//       len

//     result.className = className

//     if (isArray(child)) {
//       for (i = 0, len = child.length; i < len; i += 1) {
//         result.appendChild(child[i])
//       }
//     } else {
//       result.appendChild(child)
//     }

//     return result
//   }

//   function linkNode(child, href, target) {
//     const a = scn('a', HYPERLINK_CLASS_NAME, child)
//     a.setAttribute('href', href)
//     a.setAttribute('target', target)
//     return a
//   }

//   // eslint-disable-next-line no-var
//   var toString = Object.prototype.toString,
//     prefixer = makePrefixer('jh'),
//     p = prefixer,
//     ARRAY = 2,
//     BOOL = 4,
//     INT = 8,
//     FLOAT = 16,
//     STRING = 32,
//     OBJECT = 64,
//     SPECIAL_OBJECT = 128,
//     FUNCTION = 256,
//     UNK = 1,
//     STRING_CLASS_NAME = p('type-string'),
//     STRING_EMPTY_CLASS_NAME = p('type-string') + ' ' + p('empty'),
//     BOOL_TRUE_CLASS_NAME = p('type-bool-true'),
//     BOOL_FALSE_CLASS_NAME = p('type-bool-false'),
//     BOOL_IMAGE = p('type-bool-image'),
//     INT_CLASS_NAME = p('type-int') + ' ' + p('type-number'),
//     FLOAT_CLASS_NAME = p('type-float') + ' ' + p('type-number'),
//     OBJECT_CLASS_NAME = p('type-object'),
//     OBJ_KEY_CLASS_NAME = p('key') + ' ' + p('object-key'),
//     OBJ_VAL_CLASS_NAME = p('value') + ' ' + p('object-value'),
//     OBJ_EMPTY_CLASS_NAME = p('type-object') + ' ' + p('empty'),
//     FUNCTION_CLASS_NAME = p('type-function'),
//     ARRAY_KEY_CLASS_NAME = p('key') + ' ' + p('array-key'),
//     ARRAY_VAL_CLASS_NAME = p('value') + ' ' + p('array-value'),
//     ARRAY_CLASS_NAME = p('type-array'),
//     ARRAY_EMPTY_CLASS_NAME = p('type-array') + ' ' + p('empty'),
//     HYPERLINK_CLASS_NAME = p('a'),
//     UNKNOWN_CLASS_NAME = p('type-unk')

//   function getType(obj) {
//     const type = typeof obj

//     switch (type) {
//       case 'boolean':
//         return BOOL
//       case 'string':
//         return STRING
//       case 'number':
//         return obj % 1 === 0 ? INT : FLOAT
//       case 'function':
//         return FUNCTION
//       default:
//         if (isArray(obj)) {
//           return ARRAY
//         } else if (obj === Object(obj)) {
//           if (obj.constructor === Object) {
//             return OBJECT
//           }
//           return OBJECT | SPECIAL_OBJECT
//         } else {
//           return UNK
//         }
//     }
//   }

//   function _format(data, options, parentKey?) {
//     let result,
//       container,
//       key,
//       keyNode,
//       valNode,
//       len,
//       childs,
//       tr,
//       value,
//       isEmpty = true,
//       isSpecial = false

//     // accum = [],

//     if (getType(data) === BOOL) {
//       const boolOpt = options.bool
//       container = document.createElement('div')

//       if (boolOpt.showImage) {
//         const img = document.createElement('img')
//         img.setAttribute('class', BOOL_IMAGE)

//         img.setAttribute('src', '' + (data ? boolOpt.img.true : boolOpt.img.false))

//         container.appendChild(img)
//       }

//       if (boolOpt.showText) {
//         container.appendChild(
//           data
//             ? sn('span', BOOL_TRUE_CLASS_NAME, boolOpt.text.true)
//             : sn('span', BOOL_FALSE_CLASS_NAME, boolOpt.text.false)
//         )
//       }
//       result = container
//     } else if (getType(data) === STRING) {
//       if (data === '') {
//         result = sn('span', STRING_EMPTY_CLASS_NAME, '(Empty Text)')
//       } else {
//         result = sn('span', STRING_CLASS_NAME, data)
//       }
//     } else if (getType(data) === INT) {
//       result = sn('span', INT_CLASS_NAME, data)
//     } else if (getType(data) === FLOAT) {
//       result = sn('span', FLOAT_CLASS_NAME, data)
//     } else if (getType(data) & OBJECT) {
//       if (getType(data) & SPECIAL_OBJECT) {
//         isSpecial = true
//       }
//       childs = []

//       const aTarget = options.hyperlinks.target
//       const hyperlinkKeys = options.hyperlinks.keys

//       // Is Hyperlink Key
//       const hyperlinksEnabled =
//         options.hyperlinks.enable && hyperlinkKeys && hyperlinkKeys.length > 0

//       for (key in data) {
//         isEmpty = false

//         value = data[key]

//         valNode = _format(value, options, key)
//         keyNode = sn('th', OBJ_KEY_CLASS_NAME, key)

//         if (
//           hyperlinksEnabled &&
//           typeof value === 'string' &&
//           indexOf.call(hyperlinkKeys, key) >= 0
//         ) {
//           valNode = scn('td', OBJ_VAL_CLASS_NAME, linkNode(valNode, value, aTarget))
//         } else {
//           valNode = scn('td', OBJ_VAL_CLASS_NAME, valNode)
//         }

//         tr = document.createElement('tr')
//         tr.appendChild(keyNode)
//         tr.appendChild(valNode)

//         childs.push(tr)
//       }

//       if (isSpecial) {
//         result = sn('span', STRING_CLASS_NAME, data.toString())
//       } else if (isEmpty) {
//         result = sn('span', OBJ_EMPTY_CLASS_NAME, '(Empty Object)')
//       } else {
//         result = scn('table', OBJECT_CLASS_NAME, scn('tbody', '', childs))
//       }
//     } else if (getType(data) === FUNCTION) {
//       result = sn('span', FUNCTION_CLASS_NAME, data)
//     } else if (getType(data) === ARRAY) {
//       if (data.length > 0) {
//         childs = []
//         const showArrayIndices = options.showArrayIndex

//         const aTarget = options.hyperlinks.target
//         const hyperlinkKeys = options.hyperlinks.keys

//         // Hyperlink of arrays?
//         const hyperlinksEnabled =
//           parentKey &&
//           options.hyperlinks.enable &&
//           hyperlinkKeys &&
//           hyperlinkKeys.length > 0 &&
//           indexOf.call(hyperlinkKeys, parentKey) >= 0

//         for (key = 0, len = data.length; key < len; key += 1) {
//           keyNode = sn('th', ARRAY_KEY_CLASS_NAME, key)
//           value = data[key]

//           if (hyperlinksEnabled && typeof value === 'string') {
//             valNode = _format(value, options, key)
//             valNode = scn('td', ARRAY_VAL_CLASS_NAME, linkNode(valNode, value, aTarget))
//           } else {
//             valNode = scn('td', ARRAY_VAL_CLASS_NAME, _format(value, options, key))
//           }

//           tr = document.createElement('tr')

//           if (showArrayIndices) {
//             tr.appendChild(keyNode)
//           }
//           tr.appendChild(valNode)

//           childs.push(tr)
//         }

//         result = scn('table', ARRAY_CLASS_NAME, scn('tbody', '', childs))
//       } else {
//         result = sn('span', ARRAY_EMPTY_CLASS_NAME, '(Empty List)')
//       }
//     } else {
//       result = sn('span', UNKNOWN_CLASS_NAME, data)
//     }

//     return result
//   }

//   function format(data, options) {
//     options = validateOptions(options || {})
//     const result = _format(data, options)
//     result.className = result.className + ' ' + prefixer('root')

//     return result
//   }

//   function validateOptions(options) {
//     options = validateArrayIndexOption(options)
//     options = validateHyperlinkOptions(options)
//     options = validateBoolOptions(options)
//     // Add any more option validators here

//     return options
//   }

//   function validateArrayIndexOption(options) {
//     if (options.showArrayIndex === undefined) {
//       options.showArrayIndex = true
//     } else {
//       // Force to boolean just in case
//       options.showArrayIndex = options.showArrayIndex ? true : false
//     }

//     return options
//   }

//   function validateHyperlinkOptions(options) {
//     const hyperlinks = {
//       enable: false,
//       keys: null,
//       target: '',
//     }

//     if (options.hyperlinks && options.hyperlinks.enable) {
//       hyperlinks.enable = true
//       hyperlinks.keys = isArray(options.hyperlinks.keys) ? options.hyperlinks.keys : []
//       if (options.hyperlinks.target) {
//         hyperlinks.target = '' + options.hyperlinks.target
//       } else {
//         hyperlinks.target = '_blank'
//       }
//     }

//     options.hyperlinks = hyperlinks

//     return options
//   }

//   function validateBoolOptions(options) {
//     if (!options.bool) {
//       options.bool = {
//         text: {
//           true: 'true',
//           false: 'false',
//         },
//         img: {
//           true: '',
//           false: '',
//         },
//         showImage: false,
//         showText: true,
//       }
//     } else {
//       const boolOptions = options.bool

//       // Show text if no option
//       if (!boolOptions.showText && !boolOptions.showImage) {
//         boolOptions.showImage = false
//         boolOptions.showText = true
//       }

//       if (boolOptions.showText) {
//         if (!boolOptions.text) {
//           boolOptions.text = {
//             true: 'true',
//             false: 'false',
//           }
//         } else {
//           const t = boolOptions.text.true,
//             f = boolOptions.text.false

//           if (getType(t) != STRING || t === '') {
//             boolOptions.text.true = 'true'
//           }

//           if (getType(f) != STRING || f === '') {
//             boolOptions.text.false = 'false'
//           }
//         }
//       }

//       if (boolOptions.showImage) {
//         if (!boolOptions.img.true && !boolOptions.img.false) {
//           boolOptions.showImage = false
//         }
//       }
//     }

//     return options
//   }

//   return {
//     format: format,
//   }
// }

export function Placeholder() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}
