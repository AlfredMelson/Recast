/**
 * Test whether something is a Promise
 * @param {*} object
 * @returns {boolean} Returns true when object is a promise, false otherwise
 */
export function IsPromise(object: Promise<any>): boolean {
  return object && typeof object.then === 'function' && typeof object.catch === 'function'
}

/**
 * Test whether a custom validation error has the correct structure
 * @param {*} validationError The error to be checked.
 * @returns {boolean} Returns true if the structure is ok, false otherwise
 */
export function IsValidValidationError(validationError: { path: any; message: any }): boolean {
  return (
    typeof validationError === 'object' &&
    Array.isArray(validationError.path) &&
    typeof validationError.message === 'string'
  )
}

/**
 * Stringify an array with a path in a JSON path like '.items[3].name'
 * @param {Array.<string | number>} path
 * @returns {string}
 */
export function StringifyPath(path: any[]): string {
  return path
    .map(p => {
      if (typeof p === 'number') {
        return '[' + p + ']'
      } else if (typeof p === 'string' && p.match(/^[A-Za-z0-9_$]+$/)) {
        return '.' + p
      } else {
        return '["' + p + '"]'
      }
    })
    .join('')
}

/**
 * Execute custom validation if configured.
 * Returns a promise resolving with the custom errors (or an empty array).
 */
export function ValidateCustom(json, onValidate) {
  if (!onValidate) {
    return Promise.resolve([])
  }

  try {
    const customValidateResults = onValidate(json)

    const resultPromise = IsPromise(customValidateResults)
      ? customValidateResults
      : Promise.resolve(customValidateResults)

    return resultPromise.then(customValidationPathErrors => {
      if (Array.isArray(customValidationPathErrors)) {
        return customValidationPathErrors
          .filter(error => {
            const valid = IsValidValidationError(error)

            if (!valid) {
              console.warn(
                'Ignoring a custom validation error with invalid structure. ' +
                  'Expected structure: {path: [...], message: "..."}. ' +
                  'Actual error:',
                error
              )
            }

            return valid
          })
          .map(
            (
              error // change data structure into the structure matching the JSON schema errors
            ) => ({
              dataPath: StringifyPath(error.path),
              message: error.message,
              type: 'customValidation',
            })
          )
      } else {
        return []
      }
    })
  } catch (err) {
    return Promise.reject(err)
  }
}
