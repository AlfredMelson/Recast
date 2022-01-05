import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import { selectedApiAtom, selectedApiProviderAtom } from '../ApiUrlSelector'
import { PaperSxApiSelectorWrapper } from '../../mui'
import { BaseUrlData, JsonPlaceholderData, RandomData } from '../../../cms'

export default function DataCategorySelector() {
  const apiProvider = useRecoilValue(selectedApiProviderAtom)
  console.log('apiProvider', apiProvider)

  const [providerUrl, setProviderUrl] = React.useState<string>('')
  console.log('providerUrl', providerUrl)

  const setSelectedApi = useSetRecoilState(selectedApiAtom)

  // filter base from BaseUrlData using selected provider (apiProvider)
  const baseUrl = BaseUrlData.filter(base => base.index === apiProvider)[0].base

  const providerUrls = apiProvider === 'jsonPlaceholderApi' ? JsonPlaceholderData : RandomData

  const handleChange = (event: SelectChangeEvent) => {
    setProviderUrl(event.target.value as string)
    setSelectedApi(`${baseUrl}${event.target.value}`)
  }

  return (
    <Box component='div'>
      {apiProvider !== '' && (
        <PaperSxApiSelectorWrapper>
          <FormControl sx={{ minWidth: 200, m: 10 }}>
            <Select
              autoWidth
              disableUnderline={true}
              id='provider-url-selector'
              value={providerUrl}
              onChange={handleChange}>
              {providerUrls.map(item => (
                <MenuItem key={item.index} value={item.url}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </PaperSxApiSelectorWrapper>
      )}
    </Box>
  )
}
