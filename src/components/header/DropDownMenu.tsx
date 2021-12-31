import * as React from 'react'
import { alpha } from '@mui/material/styles'
import Popper from '@mui/material/Popper'
import Paper from '@mui/material/Paper'
import Fade from '@mui/material/Fade'
import { Box } from '@mui/material'
import IconImage from '../icons/IconImage'
import { getNextIndex, MENUID } from '../action/KeyboardFunctions'
import { SubMenu } from '../mui/SubMenu.style'

export function DropDownMenu() {
  const [subMenuOpen, setSubMenuOpen] = React.useState(false)
  const [subMenuIndex, setSubMenuIndex] = React.useState<number | null>(null)
  //useRef to avoid re-renders during button interactions
  const navRef = React.useRef<HTMLUListElement | null>(null)
  //useRef to avoid re-renders during menu interactions
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
    <Box
      onMouseOver={() => setSubMenuOpen(true)}
      onFocus={() => setSubMenuOpen(true)}
      onMouseOut={() => setSubMenuOpen(false)}
      onBlur={() => setSubMenuOpen(false)}>
      <Box
        component='div'
        ref={productsMenuRef}
        aria-haspopup
        aria-expanded={subMenuOpen ? 'true' : 'false'}
        onKeyDown={handleKeyDown}>
        Products
      </Box>
      <Popper
        style={{ zIndex: 1600 }}
        open={subMenuOpen}
        anchorEl={productsMenuRef.current}
        transition
        placement='bottom-start'>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Paper
              variant='outlined'
              sx={{
                minWidth: 400,
                overflow: 'hidden',
                borderColor: 'transparent',
                bgcolor: theme => (theme.palette.mode === 'dark' ? 'grey.900' : 'grey.300'),
                boxShadow: theme =>
                  `0px 4px 20px ${
                    theme.palette.mode === 'dark'
                      ? alpha(theme.palette.background.paper, 1)
                      : 'rgba(170, 180, 190, 0.3)'
                  }`,
                '& ul': {
                  margin: 0,
                  padding: 0,
                  listStyle: 'none',
                },
                '& li:not(:last-of-type)': {
                  borderBottom: '1px solid',
                  borderColor: theme => (theme.palette.mode === 'dark' ? 'grey.700' : 'grey.100'),
                },
                '& a': { textDecoration: 'none' },
              }}>
              <ul>
                <li>
                  <SubMenu
                    id={MENUID[0]}
                    href='/tree-view'
                    icon={<IconImage name='visual-b' />}
                    name='User Loaded Json Treeview'
                    description='Expand and collapse the JSON tree.'
                    onKeyDown={handleKeyDown}
                  />
                </li>
                <li>
                  <SubMenu
                    id={MENUID[1]}
                    href='/api-json'
                    icon={<IconImage name='visual-b' />}
                    name='API Json'
                    description='Json from an API'
                    onKeyDown={handleKeyDown}
                  />
                </li>
                {/* <li>
                  <SubMenu
                    id={MENUID[2]}
                    href='/deep-dive'
                    icon={<IconImage name='visual-b' />}
                    name='Deep Dive'
                    description='Expand and collapse the JSON tree.'
                    onKeyDown={handleKeyDown}
                  />
                </li>
                <li>
                  <SubMenu
                    id={MENUID[3]}
                    href='/development'
                    icon={<IconImage name='visual-b' />}
                    name='Development'
                    description='Expand and collapse the JSON tree.'
                    onKeyDown={handleKeyDown}
                  />
                </li> */}
              </ul>
            </Paper>
          </Fade>
        )}
      </Popper>
    </Box>
  )
}
