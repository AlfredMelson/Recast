import Typography from '@mui/material/Typography'
import * as React from 'react'
// import jsonrepair from 'jsonrepair'
import bracketText from '../../data/bracketText.json'
import { parsePath } from '../../json/json-new/ParsePath'
import { GetChildPaths } from './GetChildPaths'

export function DeepDive() {
  const [pathSelected, setPathSelected] = React.useState('')

  const onPathChangeSelect = (event: { target: { value: React.SetStateAction<string> } }) => {
    setPathSelected(event.target.value)
  }

  const [pathArray, setPathArray] = React.useState([])
  React.useEffect(() => {
    const result = GetChildPaths(bracketText, false)
    setPathArray(result)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathSelected])

  // Parse a JSON path like '.items[3].name' into an array
  const [pathParse, setPathParse] = React.useState<any[]>()

  const [pathLength, setPathLength] = React.useState<number>()

  React.useEffect(() => {
    if (pathSelected === null || undefined) {
      setPathParse([])
    } else {
      const result = parsePath(pathSelected)
      setPathParse(result)
      setPathLength(result.length)
    }
  }, [pathSelected])

  // const repaired = jsonrepair(bracketText)
  // console.log('repaired: ', repaired)

  return (
    <pre>
      <select value={pathSelected} onChange={onPathChangeSelect}>
        {pathArray.map(path => (
          <option key={path}>{path}</option>
        ))}
      </select>
      <br />
      <Typography gutterBottom>Selection Details:</Typography>
      <Typography>path: {JSON.stringify(pathParse)}</Typography>
      <Typography>depth: {pathLength}</Typography>
    </pre>
  )
}
