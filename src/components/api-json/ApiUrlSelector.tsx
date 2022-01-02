import Stack from '@mui/material/Stack'
import { atom } from 'recoil'
import { DataCategorySelector, DataQuantitySelector, DataSourceSelector } from './selectors'

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
 * @name selectedApiUrlsAtom
 * @description state representing the selected api url
 * @param {String}
 * @type {Object}
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * @RecoilHooks to manage state changes and notify components subscribing to re-render
 * const [selectedApiUrls, setSelectedApiUrls = useRecoilState(selectedApiUrlsAtom)
 * const setSelectedApiUrls = useSetRecoilState(selectedApiUrlsAtom)
 * const selectedApiUrls = useRecoilValue(selectedApiUrlsAtom)
 * const resetSelectedApiUrls = useResetRecoilState(selectedApiUrlsAtom)
 */
export const selectedApiUrlsAtom = atom<string>({
  key: 'selectedApiUrls',
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

/**
 * @name apiRequestQuantityAtom
 * @description state representing the url with quantity
 * @param {String}
 * @type {Object}
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * @RecoilHooks to manage state changes and notify components subscribing to re-render:
 * const [apiRequestQuantity, setApiRequestQuantity] = useRecoilState(apiRequestQuantityAtom)
 * const setApiRequestQuantity = useSetRecoilState(apiRequestQuantityAtom)
 * const apiRequestQuantity = useRecoilValue(apiRequestQuantityAtom)
 * const resetApiRequestQuantity = useResetRecoilState(apiRequestQuantityAtom)
 */
export const apiRequestQuantityAtom = atom<string>({
  key: 'apiRequestQuantity',
  default: '',
})

export default function ApiSelector() {
  return (
    <Stack direction='row' spacing={20}>
      <DataSourceSelector />
      <DataCategorySelector />
      <DataQuantitySelector />
    </Stack>
  )
}
