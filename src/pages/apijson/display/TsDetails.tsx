import * as React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { blue } from '@mui/material/colors'
import { useRecoilValue } from 'recoil'
import Box from '@mui/material/Box'
import { getType } from '../data-types'
import { userSubmittedUrlAtom } from '../../../recoil/api-json/atom'

// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
// import { SxIconButton } from '../../../components/sx'

interface TypeState {
  type: string
}
export function DataLabel({ type }: TypeState) {
  return (
    <Typography variant='code' sx={{ color: blue[500] }}>
      {type}
    </Typography>
  )
}

interface TsDetailsProps {
  data?: { [key: string]: any } | undefined
}
export const TsDetails: React.FC<TsDetailsProps> = ({ data }: TsDetailsProps) => {
  const [keys, setKeys] = React.useState<string[]>([])

  const [currentData, setCurrentData] = React.useState<TsDetailsProps['data']>({})

  React.useEffect(() => {
    const newkeys: string[] | undefined = Object.getOwnPropertyNames(data)
    setKeys(newkeys)
    setCurrentData(data)
  }, [data])

  const renderData = () => {
    return keys.map(key => {
      return (
        <DataType key={key} dataType={currentData ? getType(currentData[key]) : ''} dataKey={key} />
      )
    })
  }
  // state when user submits user entered url
  const apiUrl = useRecoilValue(userSubmittedUrlAtom)
  // split and pop to isolate interface name
  const lastSegment = apiUrl.split('/').pop()
  // remove underscore and uppercase following character
  const formLastSegment = lastSegment.replace(/(^|_)./g, s => s.slice(-1).toUpperCase())
  // substring and landIndexOf to verify last segment
  // const lastSegmentVerified = apiUrl.substring(apiUrl.lastIndexOf('/') + 1)
  // url ending with /, but breaks with underscore
  // const segmented = apiUrl.split('/')
  // const lastSegmentVerified2 = segmented[segmented.length - 2]

  return (
    <Typography variant='code'>
      {`interface ${formLastSegment}Types {`}
      <Box sx={{ ml: 2 }}>{renderData()}</Box>
      {'}'}
    </Typography>
  )
}

interface DataTypeProps {
  dataType: string | undefined
  dataKey?: string | number
}
function DataType({ dataType, dataKey }: DataTypeProps) {
  const renderValue = () => {
    switch (dataType) {
      case 'number':
        return <JsonNumber dataKey={dataKey} dataType={dataType} />
      case 'string':
        return <JsonString dataKey={dataKey} dataType={dataType} />
      // case 'object':
      //   return <JsonObject dataKey={dataKey} dataType={dataType} />
      case 'boolean':
        return <JsonBoolean dataKey={dataKey} dataType={dataType} />
      // case 'array':
      //   return <JsonArray dataKey={dataKey} dataType={dataType} />
      case 'function':
        return <JsonFunction dataKey={dataKey} dataType={dataType} />
      default:
        return null
    }
  }
  return renderValue()
}

interface JsonBooleanProps {
  dataKey: string | number
  dataType: string
}

function JsonBoolean({ dataKey, dataType }: JsonBooleanProps) {
  return (
    <Stack direction='row'>
      <Typography variant='code'>{dataKey}&#58;&nbsp;</Typography>
      <DataLabel type={dataType} />
    </Stack>
  )
}

interface JsonFunctionProps {
  dataKey: string | number
  dataType: string
}

function JsonFunction({ dataKey, dataType }: JsonFunctionProps) {
  return (
    <Stack direction='row'>
      <Typography variant='code'>{dataKey}&#58;&nbsp;</Typography>
      <DataLabel type={dataType} />
    </Stack>
  )
}

interface JsonNumberProps {
  dataKey: string | number
  dataType: string
}
function JsonNumber({ dataKey, dataType }: JsonNumberProps) {
  return (
    <Stack direction='row'>
      <Typography variant='code'>{dataKey}&#58;&nbsp;</Typography>
      <DataLabel type={dataType} />
    </Stack>
  )
}

interface JsonStringProps {
  dataKey: string | number
  dataType: string
}
function JsonString({ dataKey, dataType }: JsonStringProps) {
  return (
    <Stack direction='row'>
      <Typography variant='code'>{dataKey}&#58;&nbsp;</Typography>
      <DataLabel type={dataType} />
    </Stack>
  )
}

// interface JsonObjectProps {
//   dataKey: string | number
//   dataType: string | undefined
// }

// function JsonObject({ dataKey, dataType }: JsonObjectProps) {
//   const [col, setCol] = React.useState(true)
//   const [keys, setKeys] = React.useState<string[]>([])
//   const [currentValue, setCurrentValue] = React.useState<JsonObjectProps['value']>({})
//   React.useEffect(() => {
//     setCurrentValue(value)
//     setKeys(Object.keys(value ? value : ''))
//   }, [value])

//   const renderObject = () => {
//     return keys.map((k: string, i: number) => {
//       return (
//         <DataType key={i} dataType={currentValue ? getType(currentValue[k]) : ''} dataKey={k} />
//       )
//     })
//   }
//   const renderObjContent = () => {
//     if (col)
//       return (
//         <>
//           <Stack direction='row' sx={{ ml: 1 }}>
//             <SxIconButton onClick={toggleObj}>
//               <KeyboardArrowDownIcon />
//             </SxIconButton>
//             <Typography variant='code'>
//               {`"${dataKey}" :`}
//             </Typography>
//             <DataLabel type={dataType ? dataType : ''} />
//           </Stack>
//           <Stack direction='row' sx={{ pl: 1 }}>
//             <Typography variant='code'>
//               {'{'}
//               {renderObject()}
//               {'}'}
//             </Typography>
//           </Stack>
//         </>
//       )
//     return (
//       <Stack direction='row' sx={{ ml: 1 }}>
//         <SxIconButton onClick={toggleObj}>
//           <KeyboardArrowUpIcon />
//         </SxIconButton>
//         <Typography variant='code'>
//           {`"${dataKey}" :`}
//         </Typography>
//         <Stack direction='row' sx={{ pl: 1 }}>
//           <DataLabel type={dataType ? dataType : ''} />
//           <Typography variant='code'>{`{ ${keys.length} }`}</Typography>
//         </Stack>
//       </Stack>
//     )
//   }
//   const toggleObj = () => {
//     setCol(!col)
//   }
//   return renderObjContent()
// }
