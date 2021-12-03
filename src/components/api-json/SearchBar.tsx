import {
  useRecoilRefresher_UNSTABLE,
  useRecoilState,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil'
import ClearIcon from '@mui/icons-material/Clear'
import InputAdornment from '@mui/material/InputAdornment'
import RefreshIcon from '@mui/icons-material/Refresh'
import * as React from 'react'
import { Box } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import { green } from '@mui/material/colors'
import { userSubmittedUrlAtom, userTypedUrlAtom, userQuerySelector } from '../../recoil/api-json'
import { SxTfAdornmentIcon, SxTfSubmitButton, SxTextField } from '../sx'
import { GreenCircularProgress } from '../action/GreenCircularProgress'
import { SxToolTip } from '../sx/SxToolTip'

export function Searchbar() {
  // user entered api url stored in recoil
  const [userTypedUrl, setUserTypedUrl] = useRecoilState(userTypedUrlAtom)
  // state when user submits user entered url
  const setUserSubmittedUrl = useSetRecoilState(userSubmittedUrlAtom)
  // user entered url is set on enter or submit
  const handleTextFieldChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserTypedUrl(event.target.value)
  }
  // reset textfield value to stored default recoil
  const resetUserTypedUrl = useResetRecoilState(userTypedUrlAtom)
  //user requested url reset
  const handleReset = () => {
    resetUserTypedUrl()
  }
  // useRef to avoid re-renders during button interactions
  const interactionTimer = React.useRef<number>()
  // useEffect to handle side effect proceeding button interactions
  React.useEffect(() => {
    return () => {
      // cancel the timeout established by setTimeout()
      clearTimeout(interactionTimer.current)
    }
  }, [])
  // return a callback to clear cache
  const refresh = useRecoilRefresher_UNSTABLE(userQuerySelector)
  // useState hooks to handle refresh button icon transitions
  const [refreshRequest, setRefreshRequest] = React.useState(false)
  const [successfulRefresh, setSuccessfulRefresh] = React.useState(false)
  // handle refresh of user requested data from url
  const handleRefreshRequest = () => {
    if (!refreshRequest) {
      setSuccessfulRefresh(false)
      setRefreshRequest(true)
      //set state to success
      interactionTimer.current = window.setTimeout(() => {
        setSuccessfulRefresh(true)
        setRefreshRequest(false)
        refresh()
      }, 1000)
      //restore state to pre-interaction
      interactionTimer.current = window.setTimeout(() => {
        setSuccessfulRefresh(false)
      }, 4000)
      return
    }
  }
  // useState hooks to handle submit button transitions
  const [submitting, setSubmitting] = React.useState(false)
  const [successSubmit, setSuccessfulSubmit] = React.useState(false)
  // handle submission of user typed url
  const handleSubmitUrl = () => {
    if (!submitting) {
      setSuccessfulSubmit(false)
      setSubmitting(true)
      //set state to success
      interactionTimer.current = window.setTimeout(() => {
        setSuccessfulSubmit(true)
        setSubmitting(false)
        setUserSubmittedUrl(userTypedUrl)
      }, 1000)
      //restore state to pre-interaction
      interactionTimer.current = window.setTimeout(() => {
        setSuccessfulSubmit(false)
      }, 4000)
      return
    }
  }

  return (
    <SxTextField
      autoFocus
      fullWidth
      label='API URL'
      onChange={handleTextFieldChanges}
      value={userTypedUrl}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SxToolTip tooltipTitle={'Clear URL'}>
              <SxTfAdornmentIcon disabled={userTypedUrl === undefined} onClick={handleReset}>
                <ClearIcon />
              </SxTfAdornmentIcon>
            </SxToolTip>
            <Box sx={{ position: 'relative' }}>
              <SxToolTip tooltipTitle={'Refresh'}>
                <SxTfAdornmentIcon
                  disabled={userTypedUrl === undefined}
                  onClick={handleRefreshRequest}>
                  {!refreshRequest && !successfulRefresh ? (
                    <RefreshIcon />
                  ) : !successfulRefresh ? (
                    <RefreshIcon sx={{ color: 'transparent' }} />
                  ) : (
                    <CheckIcon sx={{ color: green[500] }} />
                  )}
                </SxTfAdornmentIcon>
              </SxToolTip>
              {refreshRequest && <GreenCircularProgress size='16px' />}
            </Box>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position='end'>
            <Box sx={{ position: 'relative' }}>
              <SxTfSubmitButton
                aria-label='toggle password visibility'
                disabled={userTypedUrl === undefined}
                onClick={handleSubmitUrl}
                variant='text'>
                {!submitting && !successSubmit
                  ? 'Submit'
                  : successSubmit && <CheckIcon sx={{ color: green[500] }} />}
              </SxTfSubmitButton>
              {submitting && <GreenCircularProgress size='20px' />}
            </Box>
          </InputAdornment>
        ),
      }}
    />
  )
}
