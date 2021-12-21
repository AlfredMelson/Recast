import { Link as MuiLink } from '@mui/material'
import { useSetRecoilState } from 'recoil'
import { Link } from 'react-router-dom'
import { dataDrawerOpenAtom } from '../../recoil'
import { Navigation } from './NavigationStyle'
import { ProductDropDown } from './ProductDropDown'

export function HeaderNavBar() {
  // set visability of user json drawer
  const setDataDrawerOpen = useSetRecoilState(dataDrawerOpenAtom)

  return (
    <Navigation>
      {/* <ul ref={navRef} onKeyDown={handleLeftRightArrow}> */}
      <ul>
        <li>
          <MuiLink sx={{ cursor: 'pointer' }} onClick={() => setDataDrawerOpen(true)}>
            JSON
          </MuiLink>
        </li>
        <li>
          <ProductDropDown />
        </li>
        <li>
          <Link to='/'>Instructions</Link>
        </li>
      </ul>
    </Navigation>
  )
}
