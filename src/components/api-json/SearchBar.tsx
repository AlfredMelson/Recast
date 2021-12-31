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
import { TextFieldButtonSx } from '../mui'
import { SxCircularProgress } from '../action/SxCircularProgress'
import FadeDelay from '../animation/FadeDelay'
import { BrandColors } from '../../style/BrandColors'
import { selectedApiAtom, selectedApiProviderAtom } from './ApiUrlSelector'

export default function Searchbar() {
  // user entered api url stored in recoil
  const [userTypedUrl, setUserTypedUrl] = useRecoilState(userTypedUrlAtom)
  // state when user submits user entered url
  const setUserSubmittedUrl = useSetRecoilState(userSubmittedUrlAtom)
  // user entered url is set on enter or submit
  const handleTextFieldChanges = event => {
    setUserTypedUrl(event.target.value), setSelectedApi(event.target.value)
  }
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
  // user requested url reset

  // const handleReset = () => {
  //   resetUserTypedUrl()
  //   resetUserSubmittedUrl()
  //   resetApiData()
  //   resetApiFullResponse()
  //   resetApiProvider()
  // }
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

  const [selectedApi, setSelectedApi] = useRecoilState(selectedApiAtom)
  console.log('selectedApi', selectedApi)

  // const inputField = React.useRef<HTMLInputElement>(null)
  // ref = { inputField }

  return (
    <Paper
      sx={{
        height: 50,
        width: 700,
        display: 'flex',
        alignItems: 'center',
        bgcolor: theme =>
          theme.palette.mode === 'dark' ? BrandColors.Dark.Grey[900] : BrandColors.Light.Grey[200],
        border: '1px solid',
        borderColor: theme =>
          theme.palette.mode === 'dark' ? BrandColors.Dark.Grey[900] : BrandColors.Light.Grey[200],
        transition: theme =>
          theme.transitions.create(['all'], {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.easeInOut,
          }),
        '&:hover ': {
          border: '1px solid',
          borderColor: theme =>
            theme.palette.mode === 'dark'
              ? BrandColors.Dark.Blue[600]
              : BrandColors.Light.Blue[400],
        },
      }}>
      <InputBase
        autoFocus
        autoComplete='off'
        sx={{
          ml: 10,
          flex: 1,
          fontSize: 'clamp(0.88rem, 0.83rem + 0.24vw, 1rem)',
          minHeight: 32,
        }}
        placeholder='Enter API url'
        value={selectedApi !== '' ? selectedApi : userTypedUrl}
        // onChange={event => {
        //   setUserTypedUrl(event.target.value), setSelectedApi(event.target.value)
        // }}
        onChange={handleTextFieldChanges}
      />
      <FadeDelay delay={1000}>
        <TextFieldButtonSx
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
        </TextFieldButtonSx>
      </FadeDelay>
      <Box sx={{ position: 'relative' }}>
        <FadeDelay delay={400}>
          <TextFieldButtonSx
            aria-label='fetch api'
            disabled={userTypedUrl === undefined}
            onClick={handleSubmitUrl}
            sx={{ mr: 10 }}>
            {!submitting && !successSubmit ? (
              <Typography variant='button'>
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
          </TextFieldButtonSx>
        </FadeDelay>
        {submitting && <SxCircularProgress size='16px' color='green' />}
      </Box>
    </Paper>
  )
}
