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
import { userSubmittedUrlAtom, userTypedUrlAtom } from '../../recoil/api-json/atom'
import { userQuerySelector } from '../../recoil/api-json/selector'
import { SxTextfieldIcon, SxTextFieldButton, SxTextField } from '../../components/sx'

export function Searchbar() {
  //user entered api url stored in recoil
  const [userTypedUrl, setUserTypedUrl] = useRecoilState(userTypedUrlAtom)
  //user submits user entered url
  const setUserSubmittedUrl = useSetRecoilState(userSubmittedUrlAtom)
  //user entered url is set on enter or submit
  const handleTextFieldChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserTypedUrl(event.target.value)
  }
  //reset textfield value to stored default recoil
  const resetUrl = useResetRecoilState(userTypedUrlAtom)
  //user requested url reset
  const handleReset = () => {
    resetUrl()
  }
  //return a callback to clear cache
  const refresh = useRecoilRefresher_UNSTABLE(userQuerySelector)
  //user requested data from url refresh
  const handleRefresh = () => {
    refresh()
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
            <SxTextfieldIcon
              disabled={userTypedUrl === undefined}
              tooltipTitle={'Clear URL'}
              onClick={handleReset}>
              <ClearIcon />
            </SxTextfieldIcon>
            <SxTextfieldIcon
              disabled={userTypedUrl === undefined}
              tooltipTitle={'Refresh'}
              onClick={handleRefresh}>
              <RefreshIcon />
            </SxTextfieldIcon>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position='end'>
            <SxTextFieldButton
              aria-label='toggle password visibility'
              disabled={userTypedUrl === undefined}
              onClick={() => {
                setUserSubmittedUrl(userTypedUrl)
              }}
              variant='text'>
              Submit
            </SxTextFieldButton>
          </InputAdornment>
        ),
      }}
    />
  )
}
