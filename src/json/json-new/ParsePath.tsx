/**
 * Parse a JSON path like '.items[3].name' into an array
 * @param {string} jsonPath
 * @return {Array} Array<any>
 */

export function parsePath(jsonPath: string): Array<any> {
  const path = []
  let i = 0

  function parseProperty() {
    let prop = ''

    while (jsonPath[i] !== undefined && /[\w$]/.test(jsonPath[i])) {
      prop += jsonPath[i]
      i++
    }

    if (prop === '') {
      throw new Error('Invalid JSON path: property name expected at index ' + i)
    }
    // console.log('ParsePath prop: ', prop)
    return prop
  }

  function parseIndex(end) {
    let name = ''
    while (jsonPath[i] !== undefined && jsonPath[i] !== end) {
      name += jsonPath[i]
      i++
    }

    if (jsonPath[i] !== end) {
      throw new Error('Invalid JSON path: unexpected end, character ' + end + ' expected')
    }
    // console.log('ParsePath name: ', name)
    return name
  }

  while (jsonPath[i] !== undefined) {
    if (jsonPath[i] === '.') {
      i++
      path.push(parseProperty())
    } else if (jsonPath[i] === '[') {
      i++

      if (jsonPath[i] === "'" || jsonPath[i] === '"') {
        const end = jsonPath[i]
        i++

        path.push(parseIndex(end))

        if (jsonPath[i] !== end) {
          throw new Error("Invalid JSON path: closing quote ' expected at index " + i)
        }
        i++
      } else {
        let index = parseIndex(']').trim()
        if (index.length === 0) {
          throw new Error('Invalid JSON path: array value expected at index ' + i)
        }
        // Coerce numeric indices to numbers, but ignore star
        index = index === '*' ? index : JSON.parse(index)
        path.push(index)
      }

      if (jsonPath[i] !== ']') {
        throw new Error('Invalid JSON path: closing bracket ] expected at index ' + i)
      }
      i++
    } else {
      throw new Error('Invalid JSON path: unexpected character "' + jsonPath[i] + '" at index ' + i)
    }
  }
  // console.log('ParsePath path: ', path)
  return path
}
