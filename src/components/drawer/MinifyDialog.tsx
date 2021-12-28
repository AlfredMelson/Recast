import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Link as MuiLink } from '@mui/material'
import { localEditorTextAtom, minifiedTextAtom, minifyDialogOpenAtom } from '../../recoil'
import { SvgJsonLogo } from '../icons'
import { HeaderStyle } from '../mui/Header.style'
import { MinifyIcons } from './MinifyIcons'

export function MinifyDialog() {
  //set dialog with minified json visability
  const [minifyDialogOpen, setMinifyDialogOpen] = useRecoilState(minifyDialogOpenAtom)
  //retrieve localStorage value
  const localEditorText = useRecoilValue(localEditorTextAtom)
  //store minified json in recoil
  const [minifiedText, setMinifiedText] = useRecoilState(minifiedTextAtom)

  //minify json - move to recoil
  React.useEffect(() => {
    function Minify(text: string) {
      if (typeof JSON === 'undefined' || null) {
        return text
      } else {
        try {
          const results = JSON.stringify(JSON.parse(text), null, 0)
          setMinifiedText(results)
        } catch (error) {
          console.log('MinifyDialog TC', error)
        }
        return
      }
    }
    Minify(localEditorText)
  }, [localEditorText, setMinifiedText])

  return (
    <Dialog
      fullWidth={true}
      maxWidth='lg'
      open={minifyDialogOpen}
      onClose={() => {
        setMinifyDialogOpen(false)
      }}
      scroll='paper'>
      <HeaderStyle>
        <Container maxWidth='xl' sx={{ display: 'flex', alignItems: 'center', minHeight: 64 }}>
          <Box aria-label='Go to homepage' sx={{ lineHeight: 0, mr: 20, cursor: 'pointer' }}>
            <MuiLink
              onClick={() => {
                setMinifyDialogOpen(false)
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
