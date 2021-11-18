import { DataLabel } from '.'

interface FuncState {
  value?: any
  dataKey: string | number
  dataType: string
}
export function JsonFunction({ dataKey, dataType }: FuncState) {
  return (
    <div style={{ padding: 5 }}>
      <span>
        <span>"</span>
        <span>{dataKey}</span>
        <span>"</span> : <DataLabel type={dataType} />
        <span style={{ color: 'blue' }}>Function()</span>
      </span>
    </div>
  )
}
