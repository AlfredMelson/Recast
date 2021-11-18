export function objValues(obj) {
  const keys = Object.keys(obj)
  const values = []
  for (let i = 0; i < keys.length; i++) {
    values.push(obj[keys[i]])
  }
  return values
}
