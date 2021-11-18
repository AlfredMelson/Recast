import * as React from 'react'
import { alpha } from '@mui/material/styles'
import Popper from '@mui/material/Popper'
import Paper from '@mui/material/Paper'
import Fade from '@mui/material/Fade'
import IconImage from '../../icon/IconImage'
import { SubMenu } from './SubMenuStyle'
import { getNextIndex, MENUID } from './headerFunctions'

export function VizualizationsDropDown() {
  const [subMenuOpen, setSubMenuOpen] = React.useState(false)

  const [subMenuIndex, setSubMenuIndex] = React.useState<number | null>(null)

  const navRef = React.useRef<HTMLUListElement | null>(null)

  const productsMenuRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    if (typeof subMenuIndex === 'number') {
      document.getElementById(MENUID[subMenuIndex])?.focus()
    }
  }, [subMenuIndex])

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
  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab' && !event.shiftKey) {
      event.preventDefault()
      handleLeftRightArrow(
        new KeyboardEvent('keydown', { key: 'ArrowRight' }) as unknown as React.KeyboardEvent,
        productsMenuRef.current?.parentElement
      )
    }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault()
      handleLeftRightArrow(event, productsMenuRef.current?.parentElement)
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      if (event.target === productsMenuRef.current) {
        setSubMenuOpen(true)
      }
      setSubMenuIndex(prevValue => {
        if (prevValue === null) {
          return 0
        }
        if (prevValue === MENUID.length - 1) {
          return 0
        }
        return prevValue + 1
      })
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setSubMenuIndex(prevValue => {
        if (prevValue === null) {
          return 0
        }
        if (prevValue === 0) {
          return MENUID.length - 1
        }
        return prevValue - 1
      })
    }
    if (event.key === 'Escape') {
      setSubMenuOpen(false)
      setSubMenuIndex(null)
    }
  }
  return (
    <li
      onMouseOver={() => setSubMenuOpen(true)}
      onFocus={() => setSubMenuOpen(true)}
      onMouseOut={() => setSubMenuOpen(false)}
      onBlur={() => setSubMenuOpen(false)}>
      <div
        tabIndex={0}
        ref={productsMenuRef}
        aria-haspopup
        aria-expanded={subMenuOpen ? 'true' : 'false'}
        onKeyDown={handleKeyDown}>
        Vizualizations
      </div>
      <Popper
        open={subMenuOpen}
        anchorEl={productsMenuRef.current}
        transition
        placement='bottom-start'
        style={{ zIndex: 1200 }}>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper
              variant='outlined'
              sx={{
                minWidth: 498,
                overflow: 'hidden',
                borderColor: theme =>
                  theme.palette.mode === 'dark' ? 'primaryDark.400' : 'grey.200',
                bgcolor: theme =>
                  theme.palette.mode === 'dark' ? 'primaryDark.900' : 'background.paper',
                boxShadow: theme =>
                  `0px 4px 20px ${
                    theme.palette.mode === 'dark'
                      ? alpha(theme.palette.background.paper, 0.72)
                      : 'rgba(170, 180, 190, 0.3)'
                  }`,
                '& ul': {
                  margin: 0,
                  padding: 0,
                  listStyle: 'none',
                },
                '& li:not(:last-of-type)': {
                  borderBottom: '1px solid',
                  borderColor: theme =>
                    theme.palette.mode === 'dark' ? 'primaryDark.700' : 'grey.100',
                },
                '& a': { textDecoration: 'none' },
              }}>
              <ul>
                <li>
                  <SubMenu
                    id={MENUID[0]}
                    href='/richtreeview'
                    icon={<IconImage name='visual-a' />}
                    name='Treeview'
                    description='Expand and collapse the JSON tree.'
                    onKeyDown={handleKeyDown}
                  />
                </li>
                <li>
                  <SubMenu
                    id={MENUID[1]}
                    href='/jsjsontree'
                    icon={<IconImage name='visual-b' />}
                    name='Json Tree'
                    description='Expand and collapse the JSON tree.'
                    onKeyDown={handleKeyDown}
                  />
                </li>
                <li>
                  <SubMenu
                    id={MENUID[2]}
                    href='/deepdive'
                    icon={<IconImage name='visual-c' />}
                    name='Deep Dive'
                    description='Expand and collapse the JSON tree.'
                    onKeyDown={handleKeyDown}
                  />
                </li>
                <li>
                  <SubMenu
                    id={MENUID[3]}
                    href='/development'
                    icon={<IconImage name='visual-d' />}
                    name='Development'
                    description='Expand and collapse the JSON tree.'
                    onKeyDown={handleKeyDown}
                  />
                </li>
              </ul>
            </Paper>
          </Fade>
        )}
      </Popper>
    </li>
  )
}
