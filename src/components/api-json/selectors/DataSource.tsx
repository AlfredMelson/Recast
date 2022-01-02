import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useRecoilState } from 'recoil'
import FormControl from '@mui/material/FormControl'
import { selectedApiProviderAtom } from '../ApiUrlSelector'
import { PaperSxApiSelectorWrapper } from '../../mui'

export default function DataSourceSelector() {
  const [selectedApiProvider, setSelectedApiProvider] = useRecoilState(selectedApiProviderAtom)

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedApiProvider(event.target.value as string)
  }

  return (
    <PaperSxApiSelectorWrapper>
      <FormControl sx={{ minWidth: 160, m: 10 }}>
        <Select
          autoWidth
          disableUnderline={true}
          id='provider-selector'
          value={selectedApiProvider}
          onChange={handleChange}>
          <MenuItem dense value='randomDataApi'>
            Random Data API
          </MenuItem>
          <MenuItem dense value='jsonPlaceholderApi'>
            Json Placeholder API
          </MenuItem>
          <MenuItem dense disabled value='other'>
            Other
          </MenuItem>
        </Select>
      </FormControl>
    </PaperSxApiSelectorWrapper>
  )
}
