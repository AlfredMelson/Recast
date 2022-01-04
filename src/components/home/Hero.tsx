import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import GradientText from '../typography/GradientText'
import { HeroContainer } from '../../layout'
import LoadInJsonButton from './LoadInJsonButton'

export default function Hero() {
  const frame = React.useRef<null | HTMLDivElement>(null)
  const globalTheme = useTheme()
  const isMdUp = useMediaQuery(globalTheme.breakpoints.up('md'))
  React.useEffect(() => {
    let obs: undefined | MutationObserver
    function suppressTabIndex() {
      if (frame.current && isMdUp) {
        const elements = frame.current.querySelectorAll(
          'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
        )
        elements.forEach(elm => {
          elm.setAttribute('tabindex', '-1')
        })
      }
    }
    if (typeof MutationObserver !== 'undefined' && frame.current) {
      obs = new MutationObserver(suppressTabIndex)
      obs.observe(frame.current, { childList: true, subtree: true })
    }
    return () => {
      if (obs) {
        obs.disconnect()
      }
    }
  }, [isMdUp])
  return (
    <HeroContainer
      left={
        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant='h1' sx={{ my: 20, maxWidth: 500 }}>
            Visualize and recast <GradientText>JSON</GradientText>
          </Typography>
          <Typography variant='h6' color='text.secondary' sx={{ mb: 30, maxWidth: 436 }}>
            JavaScript Object Notation, a lightweight data-interchange format that is easy for
            humans to understand, for machines to parse and is programming language independent.
          </Typography>
          <LoadInJsonButton
            size='medium'
            variant='outlined'
            sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
          />
        </Box>
      }
      rightSx={{
        p: 3,
        minWidth: 2000,
        '& > div': {
          width: 360,
          display: 'inline-flex',
          verticalAlign: 'top',
          '&:nth-of-type(2)': {
            width: { xl: 400 },
          },
        },
        '&& *': {
          fontFamily: ['"IBM Plex Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'].join(
            ','
          ),
        },
      }}
      rightRef={frame}
      right={
        <React.Fragment>
          <div>
            {isMdUp && (
              <Stack spacing={40} sx={{ '& > .MuiPaper-root': { maxWidth: 'none' } }}></Stack>
            )}
          </div>
        </React.Fragment>
      }
    />
  )
}
