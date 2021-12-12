import * as React from 'react'
import {
  useRecoilRefresher_UNSTABLE,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil'
// import InputAdornment from '@mui/material/InputAdornment'
import Box from '@mui/material/Box'
import CheckIcon from '@mui/icons-material/Check'
import Paper from '@mui/material/Paper'
import { green } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import {
  userSubmittedUrlAtom,
  userTypedUrlAtom,
  userQuerySelector,
  apiDataAtom,
  apiFullResponseAtom,
} from '../../recoil/api-json/atom'
import { SxTextfieldButton } from '../sx'
import { SxCircularProgress } from '../action/SxCircularProgress'
import FadeDelay from '../animation/FadeDelay'

export default function Searchbar() {
  // user entered api url stored in recoil
  const [userTypedUrl, setUserTypedUrl] = useRecoilState(userTypedUrlAtom)
  // state when user submits user entered url
  const setUserSubmittedUrl = useSetRecoilState(userSubmittedUrlAtom)
  // user entered url is set on enter or submit
  const handleTextFieldChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserTypedUrl(event.target.value)
  }
  // reset textfield value to recoil stored default
  const resetUserTypedUrl = useResetRecoilState(userTypedUrlAtom)
  // reset textfield value to recoil stored default
  const resetUserSubmittedUrl = useResetRecoilState(userSubmittedUrlAtom)
  // reset response.data value to recoil stored default
  const resetApiData = useResetRecoilState(apiDataAtom)
  // reset full response value to recoil stored default
  const resetApiFullResponse = useResetRecoilState(apiFullResponseAtom)
  //user requested url reset
  const handleReset = () => {
    resetUserTypedUrl()
    resetUserSubmittedUrl()
    resetApiData()
    resetApiFullResponse()
  }
  // useRef to avoid re-renders during button handler
  const interactionTimer = React.useRef<number>()
  // useEffect to handle side effect proceeding button handler
  React.useEffect(() => {
    return () => {
      // cancel the timeout established by setTimeout()
      clearTimeout(interactionTimer.current)
    }
  }, [])
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
  // value of data fetch
  const apiData = useRecoilValue(apiDataAtom)

  return (
    <Paper
      sx={{
        height: '50px',
        width: 700,
        p: '0 0 0 8px',
        background: '#0D0D0D',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
      }}>
      <InputBase
        autoFocus
        sx={{ ml: 1, flex: 1, fontSize: '14px', minHeight: '32px' }}
        placeholder='Enter API url'
        onChange={handleTextFieldChanges}
      />
      {Object.getOwnPropertyNames(apiData).length !== 0 && (
        <FadeDelay delay={1000}>
          <SxTextfieldButton aria-label='clear url' onClick={handleReset}>
            <Typography variant='body2'>Clear</Typography>
          </SxTextfieldButton>
        </FadeDelay>
      )}
      <Box sx={{ position: 'relative' }}>
        <FadeDelay delay={400}>
          <SxTextfieldButton
            aria-label='toggle password visibility'
            disabled={userTypedUrl === undefined}
            onClick={handleSubmitUrl}>
            {!submitting && !successSubmit ? (
              <Typography variant='body2'>
                {Object.getOwnPropertyNames(apiData).length === 0 ? (
                  <FadeDelay delay={400}>
                    <span>Fetch</span>
                  </FadeDelay>
                ) : (
                  <FadeDelay delay={400}>
                    <span>Refetch</span>
                  </FadeDelay>
                )}
              </Typography>
            ) : (
              successSubmit && <CheckIcon sx={{ color: green[500] }} />
            )}
          </SxTextfieldButton>
        </FadeDelay>
        {submitting && <SxCircularProgress size='16px' color='green' />}
      </Box>
    </Paper>
  )
}
