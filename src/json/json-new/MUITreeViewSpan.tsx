import * as React from 'react'

interface MUITreeViewSpanTypes {
  value: any
}

export default function MUITreeViewSpan({ value }: MUITreeViewSpanTypes) {
  // const [type, setType] = React.useState(typeof value)
  const [text, setText] = React.useState('')
  // setType(typeof value)
  const type = typeof value

  if (type === typeof 'string') {
    setText(value)
  } else if (value === null) {
    // type = 'null'
    setText('null')
  } else if (value === undefined) {
    setText('undefined')
  } else if (value instanceof Date) {
    // type = 'date'
    setText(value.toString())
    return
  }

  return <span>{text}</span>
}
