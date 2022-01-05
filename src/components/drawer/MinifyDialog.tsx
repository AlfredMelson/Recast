import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Link as MuiLink } from '@mui/material'
import { userGeneratedJsonAtom, minifiedTextAtom, minifyDialogOpenAtom } from '../../recoil'
import { SvgJsonLogo } from '../icons'
import { HeaderStyle } from '../mui/Header.style'
import { BrandSwatch } from '../../style/BrandSwatch'
import { Navigation } from '../mui'
import { MinifyIcons } from './MinifyIcons'

export function MinifyDialog() {
  //set dialog with minified json visability
  const [minifyDialogOpen, setMinifyDialogOpen] = useRecoilState(minifyDialogOpenAtom)
  //retrieve localStorage value
  const userGeneratedJson = useRecoilValue(userGeneratedJsonAtom)
  //store minified json in recoil
  const [minifiedText, setMinifiedText] = useRecoilState(minifiedTextAtom)
  // handle minification of json & move to recoil
  React.useEffect(() => {
    async function Minify(json: string) {
      const typeJson = typeof JSON === 'undefined' || null
      if (typeJson) {
        return json
      } else {
        const results = json.length > 0 && JSON.stringify(JSON.parse(json), null, 0)
        setMinifiedText(results)
        return
      }
    }
    Minify(userGeneratedJson)
  }, [userGeneratedJson, setMinifiedText])

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
          {/* <Stack direction='row' sx={{ gridColumn: 1, placeSelf: 'center start' }}> */}
          <Navigation aria-label='Main'>
            <ul>
              <li>Minified</li>
            </ul>
          </Navigation>
          {/* </Stack> */}
          {/* <Typography variant='body2' sx={{ marginTop: 8 }}>
            Minified
          </Typography> */}
          <Box
            sx={{
              ml: { xs: 'auto' },
              mx: { md: 'auto' },
              pr: { xs: 0, md: 240 },
            }}>
            <MinifyIcons />
          </Box>
        </Container>
      </HeaderStyle>
      <DialogContent
        dividers={true}
        sx={{
          background: theme =>
            theme.palette.mode === 'dark'
              ? BrandSwatch.Dark.Grey[700]
              : BrandSwatch.Light.Grey[100],
          overflowWrap: 'break-word',
          overflowX: 'scroll',
          '&::-webkit-scrollbar': {
            width: 0,
          },
        }}>
        <Typography
          variant='code'
          id='minified-json-data'
          sx={{
            fontSize: 14,
            fontWeight: theme => (theme.palette.mode === 'dark' ? 400 : 500),
            color: theme =>
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[100]
                : BrandSwatch.Light.Grey[700],
            transition: theme =>
              theme.transitions.create(['all'], {
                duration: theme.transitions.duration.standard,
                easing: theme.transitions.easing.easeInOut,
              }),
            '&:hover': {
              color: theme =>
                theme.palette.mode === 'dark'
                  ? BrandSwatch.Dark.Grey[50]
                  : BrandSwatch.Light.Grey[900],
            },
          }}>
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
