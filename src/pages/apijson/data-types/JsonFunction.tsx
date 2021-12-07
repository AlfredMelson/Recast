import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { blue } from '@mui/material/colors'
import DataLabel from './DataLabel'
import { JsonFunctionProps } from './getProps'

export function JsonFunction({ dataKey, dataType }: JsonFunctionProps) {
  return (
    <Stack direction='row'>
      <Typography variant='code' sx={{ mr: 1 }}>
        {`"${dataKey}": `}
      </Typography>
      <DataLabel type={dataType} />
      <Typography variant='code' sx={{ color: blue[400] }}>
        Function()
      </Typography>
    </Stack>
  )
}
