import { useInView } from 'react-intersection-observer'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import StartToday from './StartToday'

const Placeholder = () => <Box sx={{ height: { xs: 587, sm: 303, md: 289 } }} />
// const StartToday = dynamic(() => import('./StartToday'), { loading: Placeholder });

const HeroEnd = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '500px',
  })
  return (
    <Box ref={ref} sx={{ bgcolor: '#001E3C' }}>
      <Container sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        {inView ? <StartToday /> : <Placeholder />}
      </Container>
    </Box>
  )
}

export default HeroEnd
