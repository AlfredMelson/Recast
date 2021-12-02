import * as React from 'react'
import Typography from '@mui/material/Typography'
import { getType } from './data-types'
import { FullDataType } from './data-types/FullDataType'

interface FullDetailsProps {
  data?: { [key: string]: any } | undefined
}
export const FullDetails: React.FC<FullDetailsProps> = ({ data }: FullDetailsProps) => {
  //
  console.log('data', data)
  //

  const [keys, setKeys] = React.useState<string[]>([])

  const [currentData, setCurrentData] = React.useState<FullDetailsProps['data']>({})

  React.useEffect(() => {
    const newkeys: string[] | undefined = Object.getOwnPropertyNames(data)
    setKeys(newkeys)
    setCurrentData(data)
  }, [data])

  const renderData = () => {
    return keys.map(key => {
      return (
        <FullDataType
          key={key}
          dataType={currentData && getType(currentData[key])}
          dataValue={currentData && currentData[key]}
          dataKey={key}
        />
      )
    })
  }
  return <Typography>{renderData()}</Typography>
}
