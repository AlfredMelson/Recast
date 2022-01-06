import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import { SelectChangeEvent } from '@mui/material/Select'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { selectedApiAtom, selectedApiProviderAtom } from '../ApiUrlSelector'
import { BaseUrlData, JsonPlaceholderData, RandomData } from '../../../cms'
import { SelectSx } from '../../mui'
import { BrandSwatch } from '../../../style/BrandSwatch'

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
        <Stack
          direction='column'
          sx={{
            border: '1px solid',
            borderRadius: 1,
            borderColor: 'transparent',
            color: theme =>
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[200]
                : BrandSwatch.Light.Grey[700],
            backgroundColor: theme =>
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[900]
                : BrandSwatch.Light.Grey[50],
          }}>
          <Typography
            gutterBottom
            variant='body2'
            sx={{ margin: theme => theme.spacing(10, 0, 0, 20) }}>
            Data
          </Typography>
          <FormControl>
            <SelectSx id='provider-url-selector' value={providerUrl} onChange={handleChange}>
              {providerUrls.map(item => (
                <MenuItem key={item.index} value={item.url}>
                  {item.name}
                </MenuItem>
              ))}
            </SelectSx>
          </FormControl>
        </Stack>
      )}
    </Box>
  )
}
