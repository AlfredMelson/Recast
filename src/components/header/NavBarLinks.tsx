import { Link as MuiLink } from '@mui/material'
import { useSetRecoilState } from 'recoil'
import { Link } from 'react-router-dom'
import { dataDrawerOpenAtom } from '../../recoil'
import { Navigation } from '../mui/Navigation.style'
import { DropDownMenu } from './DropDownMenu'

export function NavBarLinks() {
  // set visability of user json drawer
  const setDataDrawerOpen = useSetRecoilState(dataDrawerOpenAtom)

  return (
    <Navigation aria-label='Main'>
      {/* <ul ref={navRef} onKeyDown={handleLeftRightArrow}> */}
      <ul>
        <li>
          <MuiLink sx={{ cursor: 'pointer' }} onClick={() => setDataDrawerOpen(true)}>
            Load-in JSON
          </MuiLink>
        </li>
        <li style={{ margin: '0 40px' }}>
          <DropDownMenu />
        </li>
        <li>
          <Link to='/'>Instructions</Link>
        </li>
      </ul>
    </Navigation>
  )
}
