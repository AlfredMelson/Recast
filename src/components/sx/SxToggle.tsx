import * as React from 'react'
import { styled } from '@mui/material/styles'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { useRecoilState } from 'recoil'
import { apiSelectorAtom } from '../../recoil/api-json/atom'

const SxToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    backgroundColor: 'transparent',
    background: 'transparent',
    border: 'none',
    '&:hover, &:focus': {
      backgroundColor: 'transparent',
    },
  },
}))

export const SxToggleButton = styled(ToggleButton)(() => ({
  fontSize: '14px',
  lineHeight: '21px',
  fontWeight: 600,
  minWidth: '110px',
  backgroundColor: 'transparent',
  textDecoration: 'none',
  '&:hover, &:focus': {
    color: '#007FFF',
    backgroundColor: 'transparent',
  },
  '& > div': {
    cursor: 'default',
  },
}))

export function SxToggle() {
  const [apiSelector, setApiSelector] = useRecoilState(apiSelectorAtom)

  const handleResponse = (_event: React.MouseEvent<HTMLElement>, newReponse: string | null) => {
    //enforce one button be active
    if (newReponse !== null) {
      setApiSelector(newReponse)
    }
  }

  return (
    <SxToggleButtonGroup size='small' value={apiSelector} exclusive onChange={handleResponse}>
      <SxToggleButton value='data' aria-label='data'>
        Data
      </SxToggleButton>
      <SxToggleButton value='full' aria-label='full response'>
        Full Response
      </SxToggleButton>
    </SxToggleButtonGroup>
  )
}
