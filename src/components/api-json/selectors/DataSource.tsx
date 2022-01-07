import MenuItem from '@mui/material/MenuItem'
import { SelectChangeEvent } from '@mui/material/Select'
import { useRecoilState } from 'recoil'
import FormControl from '@mui/material/FormControl'
import { selectedApiProviderAtom } from '../ApiUrlSelector'
import { SourceSelector } from '../../../cms/api-selector-verbiage'
import { SelectSx, ApiDropdownWrapper } from '../../mui/'

export default function DataSourceSelector() {
  const [selectedApiProvider, setSelectedApiProvider] = useRecoilState(selectedApiProviderAtom)

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedApiProvider(event.target.value as string)
  }

  return (
    <ApiDropdownWrapper title='Source' sx={{ mt: 10, ml: 20, mb: 0 }}>
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
    </ApiDropdownWrapper>
  )
}
