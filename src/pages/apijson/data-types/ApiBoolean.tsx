import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { green, red } from '@mui/material/colors'
import ApiDataTypeLabel from './ApiDataTypeLabel'
import { ApiBooleanAlias } from './typeAliases'

export function ApiBoolean({ value, dataKey, dataType }: ApiBooleanAlias) {
  return (
    <Stack direction='row'>
      <Typography variant='code'>&#34;{dataKey}&#34;&#58;&nbsp;</Typography>
      <ApiDataTypeLabel type={dataType} variant='edit' />
      <Typography variant='code' sx={{ color: green[400] }}>
        {value ? `${value}` : <span style={{ color: red[400] }}>{value}</span>}
      </Typography>
    </Stack>
  )
}
