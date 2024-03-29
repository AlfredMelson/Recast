import * as React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import Box from '@mui/material/Box'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import { VolumeSelector } from '../../../cms'
import { apiRequestQuantityAtom, selectedApiAtom } from '../ApiUrlSelector'
import { ApiUIWrapper } from '../../mui'

export default function DataQuantitySelector() {
  const setSelectedApi = useRecoilValue(selectedApiAtom)

  const setApiRequestQuantity = useSetRecoilState(apiRequestQuantityAtom)

  // filter base from BaseUrlData using selected provider (apiProvider)
  // const baseUrl = BaseUrlData.filter(base => base.index === apiProvider)[0].base

  // const providerUrls = apiProvider === 'jsonPlaceholderApi' ? JsonPlaceholderData : RandomData

  // set max number requests to 10
  // const maxRequests = 10
  // const initialPostRequest = '1'

  // const [postRequests, setPostRequests] = React.useState<string>(initialPostRequest)

  // const handleChange = (event: SelectChangeEvent) => {
  //   setPostRequests(event.target.value as string)
  //   // setSelectedApi(`${baseUrl}${event.target.value}${postRequests}`)
  // }

  const [value, setValue] = React.useState('1')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
    setApiRequestQuantity(`${setSelectedApi}${event.target.value}`)
  }

  return (
    <Box component='div'>
      {setSelectedApi !== '' && (
        <ApiUIWrapper title='Volume' sx={{ ml: 20, pt: 8 }}>
          <FormControl component='fieldset' sx={{ pb: 12 }}>
            <RadioGroup
              row
              id='provider-url-selector'
              aria-label='api request volume'
              name='api request volume'
              value={value}
              onChange={handleChange}
              sx={{ pr: 10, pl: 20 }}>
              {VolumeSelector.map(item => (
                <FormControlLabel
                  key={item.index}
                  sx={{ padding: theme => theme.spacing(0, 5) }}
                  value={item.value}
                  control={<Radio />}
                  label={item.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </ApiUIWrapper>
      )}
    </Box>
  )
}
