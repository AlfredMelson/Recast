import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import Fab from '@mui/material/Fab'
import Zoom from '@mui/material/Zoom'
import DialogContent from '@mui/material/DialogContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import UpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Link as MuiLink } from '@mui/material'
import { localEditorTextAtom, minifiedTextAtom, minifyDialogAtom } from '../../recoil'
import SvgJsonLogo from '../../components/icons/SvgJsonLogo'
import { HeaderStyle } from '../../layout'
import { MinifyIcons } from './MinifyIcons'

export function MinifyDialog() {
  const [minifyDialog, setMinifyDialog] = useRecoilState(minifyDialogAtom)
  const localEditorText = useRecoilValue(localEditorTextAtom)
  const [minifiedText, setMinifiedText] = useRecoilState(minifiedTextAtom)

  const handleClose = () => {
    setMinifyDialog(false)
  }

  const descriptionElementRef = React.useRef<HTMLElement>(null)
  React.useEffect(() => {
    if (minifyDialog) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [minifyDialog])

  // minify json
  React.useEffect(() => {
    async function Minify(text: string) {
      if (typeof JSON === 'undefined' || null) {
        return text
      } else {
        const results =
          (await typeof text) === 'string' && JSON.stringify(JSON.parse(text), null, 0)
        setMinifiedText(results)
        return
      }
    }
    Minify(localEditorText)
  }, [localEditorText, setMinifiedText])

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  const handleScrollClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    )

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  return (
    <Dialog fullWidth={true} maxWidth='lg' open={minifyDialog} onClose={handleClose} scroll='paper'>
      <HeaderStyle>
        <Container maxWidth='xl' sx={{ display: 'flex', alignItems: 'center', minHeight: 64 }}>
          <Box aria-label='Go to homepage' sx={{ lineHeight: 0, mr: 2, cursor: 'pointer' }}>
            <MuiLink
              onClick={() => {
                setMinifyDialog(false)
              }}>
              <SvgJsonLogo width={120} />
            </MuiLink>
          </Box>
          <Typography variant='body2'>Minified</Typography>
          <Box
            sx={{
              ml: { xs: 'auto' },
              mx: { md: 'auto' },
              pr: { xs: 0, md: '127px' },
            }}>
            <MinifyIcons />
          </Box>
        </Container>
      </HeaderStyle>
      <DialogContent
        dividers={true}
        sx={{
          background: '#002240',
          overflowWrap: 'break-word',
          overflowX: 'scroll',
          '&::-webkit-scrollbar': {
            width: 0,
          },
        }}>
        <Typography paragraph variant='body2' id='minified-json-data' sx={{ color: '#9CDCFE' }}>
          <span id='back-to-top-anchor' />
          {minifiedText}
        </Typography>
        <Zoom in={trigger}>
          <Box onClick={handleScrollClick}>
            <Fab style={{ position: 'fixed', bottom: 2, right: 2 }} aria-label='scroll back to top'>
              <UpIcon />
            </Fab>
          </Box>
        </Zoom>
      </DialogContent>
    </Dialog>
  )
}

// interface Props {
//   children: React.ReactElement
// }

// function ScrollTop(props: Props) {
//   const { children } = props
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 100,
//   })

//   const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
//     const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
//       '#back-to-top-anchor'
//     )

//     if (anchor) {
//       anchor.scrollIntoView({
//         behavior: 'smooth',
//         block: 'center',
//       })
//     }
//   }

//   return (
//     <Zoom in={trigger}>
//       <Box
//         onClick={handleClick}
//         role='presentation'
//         sx={{ position: 'fixed', bottom: 16, right: 16 }}>
//         {children}
//       </Box>
//     </Zoom>
//   )
// }
