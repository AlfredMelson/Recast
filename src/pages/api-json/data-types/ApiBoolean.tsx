import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { BrandSwatch } from '../../../style/BrandSwatch'
import ApiDataTypeLabel from './ApiDataTypeLabel'
import { ApiBooleanAlias } from './typeAliases'

export function ApiBoolean({ value, dataKey, dataType }: ApiBooleanAlias) {
  // // state representing the selected element
  // const [selectedElement, setSelectedElement] = useRecoilState(selectedElementAtom)
  return (
    <Stack direction='row'>
      <Typography variant='code'>&#34;{dataKey}&#34;&#58;&nbsp;</Typography>
      <ApiDataTypeLabel type={dataType} variant='edit' />
      <Typography variant='code' sx={{ color: BrandSwatch.Dark.Green[300] }}>
        {value ? `${value}` : <span style={{ color: BrandSwatch.Dark.Red[300] }}>{value}</span>}
      </Typography>
    </Stack>
  )
}
