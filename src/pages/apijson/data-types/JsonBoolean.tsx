import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { green } from '@mui/material/colors'
import DataLabel from './DataLabel'
import { JsonBooleanProps } from './getProps'

export function JsonBoolean({ value, dataKey, dataType }: JsonBooleanProps) {
  return (
    <Stack direction='row'>
      <Typography variant='code' sx={{ mr: 1 }}>
        {`"${dataKey}": `}
      </Typography>
      <DataLabel type={dataType} />
      <Typography variant='code' sx={{ color: green[400] }}>{`"${value}"`}</Typography>
    </Stack>
  )
}
