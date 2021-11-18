import { DataLabel } from '.'

interface undefinedState {
  value: []
  dataKey: string | number
  dataType: string
}
export function Unde({ value, dataKey, dataType }: undefinedState) {
  return (
    <div style={{ padding: 5 }}>
      <span>
        <span>"</span>
        <span>{dataKey}</span>
        <span>"</span> : <DataLabel type={dataType} />
        <span style={{ color: 'blue' }}>{value}</span>
      </span>
    </div>
  )
}
