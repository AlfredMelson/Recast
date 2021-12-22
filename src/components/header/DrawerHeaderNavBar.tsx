import { useRecoilValue, useSetRecoilState } from 'recoil'
import { Link as MuiLink } from '@mui/material'
import { dataDrawerOpenAtom, localEditorTextAtom } from '../../recoil'
import { Navigation } from '../mui/Navigation.style'
import { ProductDropDown } from './ProductDropDown'
// import { getNextIndex } from './headerFunctions'
// import handleLeftRightArrow from '../action/KeyboardLeftRightArrow'

export function DrawerHeaderNavBar() {
  // retrieve localStorage value
  const localEditorText = useRecoilValue(localEditorTextAtom)
  // visability of drawer containing user json
  const setDataDrawerOpen = useSetRecoilState(dataDrawerOpenAtom)
  // useRef to avoid re-renders during button interactions
  // const navRef = React.useRef<HTMLUListElement | null>(null)

  return (
    <Navigation aria-label='Main'>
      {/* <ul ref={navRef} onKeyDown={handleLeftRightArrow}> */}
      <ul>
        <li>
          <MuiLink onClick={() => setDataDrawerOpen(false)} sx={{ cursor: 'pointer' }}>
            Instructions
          </MuiLink>
        </li>
        <li>{localEditorText && <ProductDropDown />}</li>
      </ul>
    </Navigation>
  )
}
