import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SelectChangeEvent } from '@mui/material/Select'
import { useRecoilState } from 'recoil'
import FormControl from '@mui/material/FormControl'
import { selectedApiProviderAtom } from '../ApiUrlSelector'
import { SourceSelector } from '../../../cms/api-selector-verbiage'
import { SelectSx } from '../../mui/Select.style'
import { BrandSwatch } from '../../../style/BrandSwatch'

export default function DataSourceSelector() {
  const [selectedApiProvider, setSelectedApiProvider] = useRecoilState(selectedApiProviderAtom)

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedApiProvider(event.target.value as string)
  }

  return (
    <Stack
      direction='column'
      sx={{
        border: '1px solid',
        borderRadius: 1,
        borderColor: 'transparent',
        color: theme =>
          theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[200] : BrandSwatch.Light.Grey[700],
        backgroundColor: theme =>
          theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[900] : BrandSwatch.Light.Grey[50],
      }}>
      <Typography
        gutterBottom
        variant='body2'
        sx={{ margin: theme => theme.spacing(10, 0, 0, 20) }}>
        Source
      </Typography>
      <FormControl>
        <SelectSx id='provider-selector' value={selectedApiProvider} onChange={handleChange}>
          {/* <MenuItem dense value='randomDataApi'>
            Random Data API
          </MenuItem>
          <MenuItem dense value='jsonPlaceholderApi'>
            Json Placeholder API
          </MenuItem> */}
          {SourceSelector.map(item => (
            <MenuItem key={item.index} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </SelectSx>
      </FormControl>
    </Stack>
  )
}
