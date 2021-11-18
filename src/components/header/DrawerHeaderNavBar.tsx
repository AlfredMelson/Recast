import * as React from 'react'
import Link from '@mui/material/Link'
import { useRecoilValue } from 'recoil'
import { localEditorTextAtom } from '../../recoil'
import { Navigation } from './NavigationStyle'
import { getNextIndex } from './headerFunctions'
import { VizualizationsDropDown } from './VizualizationsDropDown'

export function DrawerHeaderNavBar() {
  const localEditorText = useRecoilValue(localEditorTextAtom)

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
          <Link href='/start'>Instructions</Link>
        </li>
        {localEditorText && <VizualizationsDropDown />}
      </ul>
    </Navigation>
  )
}
