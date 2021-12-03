import * as React from 'react'
import Divider from '@mui/material/Divider'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { useRecoilState } from 'recoil'
import ButtonGroup from '@mui/material/ButtonGroup'
import { userToggledApiAtom } from '../../recoil/api-json'

export function DataToggle() {
  // state of user toggled api response
  const [userToggledApi, setUserToggledApi] = useRecoilState(userToggledApiAtom)

  const handleDataToggle = (
    _event: React.MouseEvent<HTMLElement>,
    newReponse: 'data' | 'fullResponse'
  ) => {
    //enforce that one button is active
    if (newReponse !== null) {
      setUserToggledApi(newReponse)
    }
  }

  return (
    <ButtonGroup>
      <ToggleButtonGroup
        value={userToggledApi}
        exclusive
        onChange={handleDataToggle}
        sx={{ px: 1 }}>
        <ToggleButton value='data' aria-label='data'>
          response.data
        </ToggleButton>
        <Divider orientation='vertical' variant='middle' flexItem />
        <ToggleButton value='fullResponse' aria-label='full response'>
          Full response
        </ToggleButton>
      </ToggleButtonGroup>
    </ButtonGroup>
  )
}
