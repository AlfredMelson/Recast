import { atom } from 'recoil'
// import { AxiosResponse } from 'axios'

/**
 * userTypedUrlAtom represents the state of the user entered API URL.
 * @param {String | undefined}
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bug(s) detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [userTypedUrl, setUserTypedUrl] = useRecoilState(userTypedUrlAtom)
 * const setUserTypedUrl  = useSetRecoilState(userTypedUrlAtom)
 * const userTypedUrl  = useRecoilValue(userTypedUrlAtom)
 * const resetUserTypedUrl = useResetRecoilState(userTypedUrlAtom)
 */
export const userTypedUrlAtom = atom<string | undefined>({
  key: 'userTypedUrl',
  default: undefined,
})

/**
 * userSubmittedUrlAtom represents the state of the textfield when user submits.
 * @param {String | undefined}
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bug(s) detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [userSubmittedUrl, setUserSubmittedUrl] = useRecoilState(userSubmittedUrlAtom)
 * const setUserSubmittedUrl  = useSetRecoilState(userSubmittedUrlAtom)
 * const userSubmittedUrl  = useRecoilValue(userSubmittedUrlAtom)
 * const resetUserSubmittedUrl = useResetRecoilState(userSubmittedUrlAtom)
 */
export const userSubmittedUrlAtom = atom<string | undefined>({
  key: 'userSubmittedUrl',
  default: undefined,
})

/**
 * apiDataAtom represents the state of 'response.data' returned from the api call
 * @param {Record<string, unknown>}
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bug(s) detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [apiData, setApiData] = useRecoilState(apiDataAtom)
 * const setApiData  = useSetRecoilState(apiDataAtom)
 * const apiData  = useRecoilValue(apiDataAtom)
 * const resetApiData = useResetRecoilState(apiDataAtom)
 */
export const apiDataAtom = atom<Record<string, unknown>>({
  key: 'apiData',
  default: {},
})

/**
 * apiFullResponseAtom represents the state of full response returned from the api call
 * @param {Record<string, unknown>}
 * temp @param {AxiosResponse<any, any>}
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bug(s) detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [apiFullResponse, setApiFullResponse] = useRecoilState(apiFullResponseAtom)
 * const setApiFullResponse  = useSetRecoilState(apiFullResponseAtom)
 * const apiFullResponse  = useRecoilValue(apiFullResponseAtom)
 * const resetApiFullResponse = useResetRecoilState(apiFullResponseAtom)
 */
export const apiFullResponseAtom = atom({
  key: 'apiFullResponse',
  default: {},
})

/**
 * userToggledApiAtom represents the user toggled api response
 * @param {'data' | 'fullResponse'}
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bug(s) detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [userToggledApi, setUserToggledApi] = useRecoilState(userToggledApiAtom)
 * const setUserToggledApi  = useSetRecoilState(userToggledApiAtom)
 * const userToggledApi  = useRecoilValue(userToggledApiAtom)
 * const resetUserToggledApi = useResetRecoilState(userToggledApiAtom)
 */
export const userToggledApiAtom = atom<'data' | 'fullResponse'>({
  key: 'userToggledApi',
  default: 'data',
})
