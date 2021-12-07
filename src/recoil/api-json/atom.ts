import { atom, selector } from 'recoil'

/**
 * userQuerySelector represents ...
 * @param {}
 * @return {}
 * @bug selector value onjects will freeze in development mode when bugs are detected
 *
 * selector(options)
 * Selectors represent a function, or derived state in Recoil. You can think of them as similar to an "idempotent" or "pure function" without side-effects that always returns the same value for a given set of dependency values. If only a get function is provided, the selector is read-only and returns a RecoilValueReadOnly object. If a set is also provided, it returns a writeable RecoilState object.
 *
 * Dynamic Dependencies
 * A read-only selector has a get method which evaluates the value of the selector based on dependencies. If any of those dependencies are updated, then the selector will re-evaluate. The dependencies are dynamically determined based on the atoms or selectors you actually use when evaluating the selector. Depending on the values of the previous dependencies, you may dynamically use different additional dependencies. Recoil will automatically update the current data-flow graph so that the selector is only subscribed to updates from the current set of dependencies
 *
 * Writeable Selectors
 * A bi-directional selector receives the incoming value as a parameter and can use that to propagate the changes back upstream along the data-flow graph. Because the user may either set the selector with a new value or reset the selector, the incoming value is either of the same type that the selector represents or a DefaultValue object which represents a reset action.
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const userQuery  = useRecoilValue(userQuerySelector)
 */
export const userQuerySelector = selector({
  key: 'userQuery',
  get: async ({ get }) => {
    const userSubmittedUrl = get(userSubmittedUrlAtom)
    if (userSubmittedUrl === undefined) {
      return
    } else {
      const urlData = await fetch(userSubmittedUrl).then(response => response.json())
      // console.log('urlData: ', urlData)
      return urlData
    }
  },
  // set: ({ set }, newValue) => {
  //   set(apiData(newValue.data), apiFullResponse(newValue))
  // },
  // set: ({set}, newValue) =>
  //   set(
  //     tempFahrenheit,
  //     newValue instanceof DefaultValue ? newValue : (newValue * 9) / 5 + 32
  //   ),
})

/**
 * userTypedUrlAtom represents the state of the user entered API URL.
 * @param {String | undefined}
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
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
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
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
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
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
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
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
 * apiResponseHeadersAtom represents the state of response.headers returned from the api call
 * @param {Record<string, unknown>}
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [apiResponseHeaders, setApiResponseHeaders] = useRecoilState(apiResponseHeadersAtom)
 * const setApiResponseHeaders  = useSetRecoilState(apiResponseHeadersAtom)
 * const apiResponseHeaders  = useRecoilValue(apiResponseHeadersAtom)
 * const resetApiResponseHeaders = useResetRecoilState(apiResponseHeadersAtom)
 */
export const apiResponseHeadersAtom = atom({
  key: 'apiResponseHeaders',
  default: {},
})

/**
 * userToggledApiAtom represents the user toggled api response
 * @param {'data' | 'edit' | 'full' | 'headers' | 'ts'}
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [userToggledApi, setUserToggledApi] = useRecoilState(userToggledApiAtom)
 * const setUserToggledApi  = useSetRecoilState(userToggledApiAtom)
 * const userToggledApi  = useRecoilValue(userToggledApiAtom)
 * const resetUserToggledApi = useResetRecoilState(userToggledApiAtom)
 */
export const userToggledApiAtom = atom<'data' | 'edit' | 'full' | 'ts' | 'headers'>({
  key: 'userToggledApi',
  default: 'data',
})
