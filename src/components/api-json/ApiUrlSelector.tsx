import * as React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

/**
 * @name selectedApiProviderAtom
 * @description state representing the selected api provider
 * @param {String | Null}
 * @type {Object}
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [apiProvider, setApiProvider] = useRecoilState(selectedApiProviderAtom)
 * const setApiProvider = useSetRecoilState(selectedApiProviderAtom)
 * const apiProvider = useRecoilValue(selectedApiProviderAtom)
 * const resetApiProvider = useResetRecoilState(selectedApiProviderAtom)
 */
export const selectedApiProviderAtom = atom<string | null>({
  key: 'apiProvider',
  default: null,
})

/**
 * @name selectedApiAtom
 * @description state representing the selected api provider
 * @param {String | Null}
 * @type {Object}
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [selectedApi, setSelectedApi] = useRecoilState(selectedApiAtom)
 * const setSelectedApi = useSetRecoilState(selectedApiAtom)
 * const selectedApi = useRecoilValue(selectedApiAtom)
 * const resetSelectedApi = useResetRecoilState(selectedApiAtom)
 */
export const selectedApiAtom = atom<string | null>({
  key: 'selectedApi',
  default: null,
})

export function Provider() {
  const [apiProvider, setApiProvider] = useRecoilState(selectedApiProviderAtom)

  const handleChange = (event: SelectChangeEvent) => {
    setApiProvider(event.target.value as string)
  }

  return (
    <Box sx={{ minWidth: 160 }}>
      <FormControl sx={{ minWidth: 160, my: 1 }}>
        <Select id='demo-simple-select' value={apiProvider} onChange={handleChange}>
          <MenuItem dense value='randomDataApi'>
            Random Data API
          </MenuItem>
          <MenuItem dense disabled value='other'>
            Other
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export function ProviderApi() {
  const apiProvider = useRecoilValue(selectedApiProviderAtom)
  const setSelectedApi = useSetRecoilState(selectedApiAtom)
  const [providerUrl, setProviderUrl] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setProviderUrl(event.target.value as string)
    setSelectedApi(`https://random-data-api.com/api/${event.target.value}`)
  }

  const data = [
    { index: 1, name: 'Address', url: 'address/random_address' },
    { index: 2, name: 'Appliance', url: 'appliance/random_appliance' },
    { index: 3, name: 'App', url: 'app/random_app' },
    { index: 4, name: 'Bank', url: 'bank/random_bank' },
    { index: 5, name: 'Beer', url: 'beer/random_beer' },
    { index: 6, name: 'Blood', url: 'blood/random_blood' },
    { index: 7, name: 'Business Credit Card', url: 'business_credit_card/random_card' },
    { index: 8, name: 'Cannabis', url: 'cannabis/random_cannabis' },
    { index: 9, name: 'Code', url: 'code/random_code' },
    { index: 10, name: 'Coffee', url: 'coffee/random_coffee' },
    { index: 11, name: 'Commerce', url: 'commerce/random_commerce' },
    { index: 12, name: 'Company', url: 'company/random_company' },
    { index: 13, name: 'Computer', url: 'computer/random_computer' },
    { index: 14, name: 'Crypto', url: 'crypto/random_crypto' },
    { index: 15, name: 'CryptoCoin', url: 'crypto_coin/random_crypto_coin' },
    { index: 16, name: 'Color', url: 'color/random_color' },
    { index: 17, name: 'Dessert', url: 'dessert/random_dessert' },
    { index: 18, name: 'Device', url: 'device/random_device' },
    { index: 19, name: 'Food', url: 'food/random_food' },
    { index: 20, name: 'Name', url: 'name/random_name' },
    { index: 21, name: 'Hipster', url: 'hipster/random_hipster_stuff' },
    { index: 22, name: 'Invoice', url: 'invoice/random_invoice' },
    { index: 23, name: 'Users', url: 'users/random_user' },
    { index: 24, name: 'Stripe', url: 'stripe/random_stripe' },
    { index: 25, name: 'Subscrpiption', url: 'subscription/random_subscription' },
    { index: 26, name: 'Vehicle', url: 'vehicle/random_vehicle' },
    { index: 27, name: 'ID Number ', url: 'id_number/random_id_number' },
    { index: 28, name: 'Internet Stuff', url: 'internet_stuff/random_internet_stuff' },
    { index: 29, name: 'Lorem Ipsum ', url: 'lorem_ipsum/random_lorem_ipsum' },
    { index: 30, name: 'Lorem Flickr ', url: 'lorem_flickr/random_lorem_flickr' },
    { index: 31, name: 'Lorem Pixel ', url: 'lorem_pixel/random_lorem_pixel' },
    { index: 32, name: 'Nation', url: 'nation/random_nation' },
    { index: 33, name: 'Number', url: 'number/random_number' },
    { index: 34, name: 'Phone Number ', url: 'phone_number/random_phone_number' },
    { index: 35, name: 'Placeholdit', url: 'placeholdit/random_placeholdit' },
    { index: 36, name: 'Restaurant', url: 'restaurant/random_restaurant' },
  ]

  return (
    <Box sx={{ minWidth: 160 }}>
      {apiProvider !== null && (
        <FormControl sx={{ minWidth: 160, my: 1 }}>
          <Select id='demo-simple-select' value={providerUrl} onChange={handleChange}>
            {data.map(({ index, name, url }) => (
              <MenuItem key={index} dense value={url}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Box>
  )
}

export default function ApiSelector() {
  return (
    <Stack direction='row' sx={{ minWidth: 160 }} spacing={2}>
      <Provider />
      <ProviderApi />
    </Stack>
  )
}
