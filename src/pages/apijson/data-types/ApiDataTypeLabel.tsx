import Typography from '@mui/material/Typography'
import { blue, grey } from '@mui/material/colors'

type ApiDataTypeLabelAlias = {
  type: string
  variant: 'edit' | 'ts'
}
export default function ApiDataTypeLabel({ type, variant }: ApiDataTypeLabelAlias) {
  return (
    <Typography variant='code' sx={{ color: variant === 'edit' ? grey[500] : blue[500] }}>
      {type}&nbsp;
    </Typography>
  )
}
