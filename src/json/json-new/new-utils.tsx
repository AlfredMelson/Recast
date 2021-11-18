/**
 * STEP 1
 * Validate a string containing a JSON object using the browers built-in JSON parser
 * @param {String} data String with an (invalid) JSON object
 * @throws Error
 * @return {String} Parsed a JSON string
 */

export function deepCopyData(data): string {
  try {
    JSON.parse(JSON.stringify(data))
  } catch (error) {
    console.error('new-utils.tsx > deepCopyData(data)', error)
  }
  // console.log('new-utils.tsx >  deepCopyData > returned data:', data)
  return data
}
/**
 * STEP 2
 * Validate a string containing a JSON object using the browers built-in JSON parser
 * @param {String} data String with an (invalid) JSON object
 * @throws Error
 * @return {String} Parsed a JSON string
 */

// type validateJsonTypes = {
//   data: string
// }
export function validateJson(data): string {
  try {
    JSON.parse(data)
  } catch (error) {
    console.error('new-utils.tsx > validate(data)', error)
  }
  // console.log('new-utils.tsx > validateJson > returned data:', data)
  return data
}

/**
 * STEP 3
 * Validate that the passed value is an Array
 * Pass maximum number of items within the Array
 * @param {Any} data   String with an (invalid) JSON object
 * @param {Number} maximum  maximum number of items in array
 * @return {String} item[i] or oringial data
 */

// type validateArrayTypes = {
//   data: any
// }
export function validateArray(data): any {
  const maximum = 5000
  if (Array.isArray(data)) {
    // console.log('Data is an Array')
    const max = Math.min(data.length, maximum)
    // console.log('number of items in Array:', data.length)
    for (let i = 0; i < max; i++) {
      const item = data[i]
      // console.log('Item', i, 'has value:', item)
      return item
    }
  }
  // console.log('new-utils.tsx > validateArray > returned data:', data)
  return data
}

/**
 * Test whether some text contains a JSON array, i.e. the first
 * non-white space character is a [
 * @param {string} jsonText
 * @return {boolean}
 */
export function containsArray(jsonText) {
  return /^\s*\[/.test(jsonText)
}

export function hasOwnProperty(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key)
}

/**
 * Determine the type of an object
 * @param {Object} object
 * @return {String} Type of object
 */
export function objectType(object: any): string {
  if (object === null) {
    // console.log('new-utils.tsx > objectType: null')
    return 'null'
  }
  if (object === undefined) {
    // console.log('new-utils.tsx > objectType: undefined')
    return 'undefined'
  }
  if (object instanceof Number || typeof object === 'number') {
    // console.log('new-utils.tsx > objectType: Number')
    return 'number'
  }
  if (object instanceof String || typeof object === 'string') {
    // console.log('new-utils.tsx > objectType: String')
    return 'string'
  }
  if (object instanceof Boolean || typeof object === 'boolean') {
    // console.log('new-utils.tsx > objectType: Boolean')
    return 'boolean'
  }
  if (object instanceof RegExp) {
    // console.log('new-utils.tsx > objectType: RegExp')
    return 'regexp'
  }
  if (Object.prototype.toString.call(object) === '[object Array]') {
    // console.log('new-utils.tsx > objectType: array')
    return 'array'
  }
  // console.log('new-utils.tsx > objectType: object')
  return 'object'
}

/**
 * Test whether a value contains a url
 * Matches 'http://*' or 'https://*' without whitespace characters
 * @param {String} value
 * @return {Boolean} True or False
 */

// type isValueUrlTypes = {
//   value: any | string
// }
// export function isValueUrl({ value }: isValueUrlTypes): boolean {
//   const isUrlRegex = /^https?:\/\/\S+$/
//   return (typeof value === 'string' || value instanceof String) && isUrlRegex.test(value)
// }
