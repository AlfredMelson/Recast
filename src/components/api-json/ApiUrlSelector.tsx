import * as React from 'react'
import Stack from '@mui/material/Stack'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { RandomData } from '../../cms/verbiage'
import { BrandColor } from '../../style/BrandColor'

/**
 * @name selectedApiProviderAtom
 * @description state representing the selected api provider
 * @param {String}
 * @type {Object}
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * @RecoilHooks to manage state changes and notify components subscribing to re-render
 * const [selectedApiProvider, setSelectedApiProvider] = useRecoilState(selectedApiProviderAtom)
 * const setSelectedApiProvider = useSetRecoilState(selectedApiProviderAtom)
 * const selectedApiProvider = useRecoilValue(selectedApiProviderAtom)
 * const resetSelectedApiProvider = useResetRecoilState(selectedApiProviderAtom)
 */
export const selectedApiProviderAtom = atom<string>({
  key: 'selectedApiProvider',
  default: '',
})

/**
 * @name selectedApiAtom
 * @description state representing the selected api provider
 * @param {String}
 * @type {Object}
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * @RecoilHooks to manage state changes and notify components subscribing to re-render:
 * const [selectedApi, setSelectedApi] = useRecoilState(selectedApiAtom)
 * const setSelectedApi = useSetRecoilState(selectedApiAtom)
 * const selectedApi = useRecoilValue(selectedApiAtom)
 * const resetSelectedApi = useResetRecoilState(selectedApiAtom)
 */
export const selectedApiAtom = atom<string>({
  key: 'selectedApi',
  default: '',
})

export function Provider() {
  const [selectedApiProvider, setSelectedApiProvider] = useRecoilState(selectedApiProviderAtom)

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedApiProvider(event.target.value as string)
  }

  return (
    <Paper
      sx={{
        height: 50,
        px: 10,
        display: 'flex',
        alignItems: 'center',
        bgcolor: theme =>
          theme.palette.mode === 'dark' ? BrandColor.Dark.Grey[900] : BrandColor.Light.Grey[200],
        border: '1px solid',
        borderColor: theme =>
          theme.palette.mode === 'dark' ? BrandColor.Dark.Grey[900] : BrandColor.Light.Grey[200],
        transition: theme =>
          theme.transitions.create(['all'], {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.easeInOut,
          }),
        '&:hover ': {
          border: '1px solid',
          borderColor: theme =>
            theme.palette.mode === 'dark' ? BrandColor.Dark.Blue[600] : BrandColor.Light.Blue[400],
        },
      }}>
      <FormControl sx={{ minWidth: 160, my: 10 }}>
        <Select
          autoWidth
          disableUnderline={true}
          id='provider-selector'
          value={selectedApiProvider}
          onChange={handleChange}>
          <MenuItem dense value='randomDataApi'>
            Random Data API
          </MenuItem>
          <MenuItem dense disabled value='other'>
            Other
          </MenuItem>
        </Select>
      </FormControl>
    </Paper>
  )
}

export function ProviderApi() {
  const apiProvider = useRecoilValue(selectedApiProviderAtom)
  // const setSelectedApi = useSetRecoilState(selectedApiAtom)
  const [providerUrl, setProviderUrl] = React.useState<string>('')

  const setSelectedApi = useSetRecoilState(selectedApiAtom)

  const baseUrl = 'https://random-data-api.com/api/'

  const handleChange = (event: SelectChangeEvent) => {
    setProviderUrl(event.target.value as string)
    setSelectedApi(`${baseUrl}${event.target.value}`)
  }

  return (
    <Box component='div'>
      {apiProvider !== '' && (
        <Paper
          sx={{
            height: 50,
            px: 10,
            display: 'flex',
            alignItems: 'center',
            bgcolor: theme =>
              theme.palette.mode === 'dark'
                ? BrandColor.Dark.Grey[900]
                : BrandColor.Light.Grey[200],
            border: '1px solid',
            borderColor: theme =>
              theme.palette.mode === 'dark'
                ? BrandColor.Dark.Grey[900]
                : BrandColor.Light.Grey[200],
            transition: theme =>
              theme.transitions.create(['all'], {
                duration: theme.transitions.duration.standard,
                easing: theme.transitions.easing.easeInOut,
              }),
            '&:hover ': {
              border: '1px solid',
              borderColor: theme =>
                theme.palette.mode === 'dark'
                  ? BrandColor.Dark.Blue[600]
                  : BrandColor.Light.Blue[400],
            },
          }}>
          <FormControl sx={{ minWidth: 160 }}>
            <Select
              autoWidth
              disableUnderline={true}
              id='provider-url-selector'
              value={providerUrl}
              onChange={handleChange}>
              {RandomData.map(item => (
                <MenuItem dense key={item.index} value={item.url}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Paper>
      )}
    </Box>
  )
}

export default function ApiSelector() {
  return (
    <Stack direction='row' spacing={20}>
      <Provider />
      <ProviderApi />
    </Stack>
  )
}
