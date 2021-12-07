import * as React from 'react'
import { useRecoilState } from 'recoil'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import { ToggleButton } from '@mui/material'
import { userToggledApiAtom } from '../../recoil/api-json/atom'
import { SvgJsonLogo } from '../icons/SvgTsLogo'

export function DataToggle() {
  // state of user toggled api response
  const [userToggledApi, setUserToggledApi] = useRecoilState(userToggledApiAtom)

  const handleDataToggle = (
    _event: React.MouseEvent<HTMLElement>,
    newResponse: 'data' | 'edit' | 'full' | 'ts'
  ) => {
    //enforce that one button is active
    if (newResponse !== null) {
      console.log('newResponse:', newResponse)
      setUserToggledApi(newResponse)
    }
  }

  return (
    <ToggleButtonGroup value={userToggledApi} exclusive onChange={handleDataToggle}>
      <Paper
        component={ToggleButton}
        value='data'
        aria-label='data response'
        sx={{
          minWidth: '124px',
          borderRadius: '4px 4px 0 0',
        }}>
        <Typography variant='body2'>Data response</Typography>
      </Paper>
      <Paper
        component={ToggleButton}
        value='edit'
        aria-label='edit response'
        sx={{
          minWidth: '124px',
          border: 'none',
          borderRadius: '4px 4px 0 0',
        }}>
        <Typography variant='body2'>Edit response</Typography>
      </Paper>
      <Paper
        component={ToggleButton}
        value='ts'
        aria-label='ts interface'
        sx={{
          minWidth: '124px',
          border: 'none',
          borderRadius: '4px 4px 0 0',
        }}>
        <SvgJsonLogo />
        <Typography variant='body2'> interface</Typography>
      </Paper>
      <Paper
        component={ToggleButton}
        value='full'
        aria-label='full response'
        sx={{
          minWidth: '124px',
          border: 'none',
          borderRadius: '4px 4px 0 0',
        }}>
        <Typography variant='body2'>Full response</Typography>
      </Paper>
    </ToggleButtonGroup>
  )
}