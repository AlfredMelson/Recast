import { useInView } from 'react-intersection-observer'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import * as React from 'react'

const Placeholder = () => <Box sx={{ height: { xs: 587, sm: 303, md: 289 } }} />
const StartToday = React.lazy(() => import('./StartToday'))

const HeroEnd = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '200px',
  })

  return (
    <Box ref={ref} sx={{ bgcolor: '#001E3C' }}>
      <Container sx={{ py: { xs: 40, sm: 60, md: 80 } }}>
        {inView ? <StartToday /> : <Placeholder />}
      </Container>
    </Box>
  )
}

export default HeroEnd
