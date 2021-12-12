import * as React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { Link as MuiLink } from '@mui/material'
import { dataDrawerOpenAtom, localEditorTextAtom } from '../../recoil'
import { Navigation } from './NavigationStyle'
import { getNextIndex } from './headerFunctions'
import { ProductDropDown } from './ProductDropDown'

export function DrawerHeaderNavBar() {
  // retrieve localStorage value
  const localEditorText = useRecoilValue(localEditorTextAtom)
  // visability of drawer containing user json
  const setDataDrawerOpen = useSetRecoilState(dataDrawerOpenAtom)
  // useRef to avoid re-renders during button interactions
  const navRef = React.useRef<HTMLUListElement | null>(null)

  function handleLeftRightArrow(
    event: React.KeyboardEvent,
    target: EventTarget | HTMLElement | null = event.target
  ) {
    if (navRef.current) {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        let i = 0
        while (i < navRef.current.children.length) {
          const child = navRef.current.children.item(i)
          if (child && (target === child || child.contains(target as Node))) {
            const prevSibling = navRef.current.children.item(
              getNextIndex(event.key, i, navRef.current.children.length)
            )
            const htmlElement = prevSibling ? (prevSibling.firstChild as HTMLElement) : null
            if (htmlElement) {
              htmlElement.focus()
            }
          }
          i += 1
        }
      }
    }
  }

  return (
    <Navigation>
      <ul ref={navRef} onKeyDown={handleLeftRightArrow}>
        <li>
          <MuiLink onClick={() => setDataDrawerOpen(false)} sx={{ cursor: 'pointer' }}>
            Instructions
          </MuiLink>
        </li>
        {localEditorText && <ProductDropDown />}
      </ul>
    </Navigation>
  )
}
