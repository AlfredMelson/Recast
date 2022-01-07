import {
  useRecoilRefresher_UNSTABLE,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil'
import Box from '@mui/material/Box'
import CheckIcon from '@mui/icons-material/Check'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { Stack } from '@mui/material'
import { selectedApiAtom, selectedApiProviderAtom } from '../ApiUrlSelector'
import {
  userSubmittedUrlAtom,
  userTypedUrlAtom,
  apiDataAtom,
  apiFullResponseAtom,
  userQuerySelector,
} from '../../../recoil/api-json/atom'
import { ButtonSxStyle, ApiDropdownWrapper } from '../../mui'
import { SxCircularProgress } from '../../action/SxCircularProgress'
import { BrandSwatch } from '../../../style/BrandSwatch'

export default function DataFetch() {
  // user entered api url stored in recoil
  const userTypedUrl = useRecoilValue(userTypedUrlAtom)

  // reset textfield value to recoil stored default
  const resetUserTypedUrl = useResetRecoilState(userTypedUrlAtom)

  // reset textfield value to recoil stored default
  const resetUserSubmittedUrl = useResetRecoilState(userSubmittedUrlAtom)

  // reset response.data value to recoil stored default
  const resetApiData = useResetRecoilState(apiDataAtom)

  // reset full response value to recoil stored default
  const resetApiFullResponse = useResetRecoilState(apiFullResponseAtom)

  const resetApiProvider = useResetRecoilState(selectedApiProviderAtom)

  const resetSelectedApi = useResetRecoilState(selectedApiAtom)

  const setUserSubmittedUrl = useSetRecoilState(userSubmittedUrlAtom)

  // useRef to avoid re-renders during button handler
  const interactionTimer = React.useRef<number>()

  // value of data fetch
  const apiData = useRecoilValue(apiDataAtom)

  // return a callback to clear cache
  const refresh = useRecoilRefresher_UNSTABLE(userQuerySelector)
  // useState hooks to handle submit button transitions
  const [submitting, setSubmitting] = React.useState(false)
  const [successSubmit, setSuccessfulSubmit] = React.useState(false)
  // handle submission of user typed url
  const handleSubmitUrl = () => {
    if (!submitting) {
      setSuccessfulSubmit(false)
      setSubmitting(true)
      // set state to success
      interactionTimer.current = window.setTimeout(() => {
        setSuccessfulSubmit(true)
        setSubmitting(false)
        // switch between initial call and refresh
        if (Object.getOwnPropertyNames(apiData).length === 0) {
          setUserSubmittedUrl(userTypedUrl)
        } else {
          refresh()
        }
      }, 1000)
      //restore state to pre-interaction
      interactionTimer.current = window.setTimeout(() => {
        setSuccessfulSubmit(false)
      }, 3000)
      return
    }
  }

  // useEffect to handle side effect proceeding button handler
  React.useEffect(() => {
    return () => {
      // cancel the timeout established by setTimeout()
      clearTimeout(interactionTimer.current)
    }
  }, [])

  return (
    <ApiDropdownWrapper title='Controls' sx={{ mt: 10, ml: 20, mb: 0 }}>
      <Stack direction='row' spacing={20}>
        <ButtonSxStyle
          aria-label='clear url'
          onClick={event => {
            event.preventDefault()
            resetUserTypedUrl()
            resetUserSubmittedUrl()
            resetApiData()
            resetApiFullResponse()
            resetApiProvider()
            resetSelectedApi()
          }}
          sx={{ mr: 5 }}
          disabled={userTypedUrl.length === 0}>
          <Typography variant='button'>Clear</Typography>
        </ButtonSxStyle>
        <Box sx={{ position: 'relative' }}>
          <ButtonSxStyle
            aria-label='fetch api'
            disabled={userTypedUrl === undefined}
            onClick={handleSubmitUrl}
            sx={{ mr: 10 }}>
            {!submitting && !successSubmit ? (
              <Typography variant='button'>
                {Object.getOwnPropertyNames(apiData).length === 0 ? (
                  <span>Fetch</span>
                ) : (
                  <span>Refetch</span>
                )}
              </Typography>
            ) : (
              successSubmit && <CheckIcon sx={{ color: BrandSwatch.Dark.Green[300] }} />
            )}
          </ButtonSxStyle>
          {submitting && <SxCircularProgress size='16px' color='green' />}
        </Box>
      </Stack>
    </ApiDropdownWrapper>
  )
}
