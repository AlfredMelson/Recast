import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Link as MuiLink } from '@mui/material'
import { styled } from '@mui/material/styles'
import { userGeneratedJsonAtom, minifiedTextAtom, minifyDialogOpenAtom } from '../../recoil'
import { SvgJsonLogo } from '../icons'
import { HeaderStyle } from '../mui/Header.style'
import { BrandSwatch } from '../../style/BrandSwatch'
import { Navigation } from '../mui'
import { MinifyIcons } from './MinifyIcons'

const TypographyRoot = styled(Typography)(({ theme }) => ({
  ...theme.typography.code,
  fontWeight: theme.typography.fontWeightRegular,
  color: theme.palette.text.secondary,
  transition: theme.transitions.create(['all'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),
  '&:hover': {
    color: theme.palette.text.primary,
  },
}))

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
          <Navigation aria-label='Main'>
            <ul>
              <li>Minified</li>
            </ul>
          </Navigation>
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
        <TypographyRoot variant='code' id='minified-json-data'>
          {minifiedText}
        </TypographyRoot>
      </DialogContent>
    </Dialog>
  )
}
