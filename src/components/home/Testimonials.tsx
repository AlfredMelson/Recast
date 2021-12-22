import { useInView } from 'react-intersection-observer'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import UserFeedbacks from './UserFeedbacks'

const data = [
  { title: '0', metadata: 'Weekly downloads on npm' },
  { title: '1', metadata: 'Stars on GitHub' },
  { title: '1', metadata: 'Open-source contributor' },
  { title: '99', metadata: 'Followers on Twitter' },
]

export function MuiStats() {
  return (
    <Grid item xs={12} md={6} container spacing={2}>
      {data.map(item => (
        <Grid key={item.title} item xs={6}>
          <Box
            sx={{
              height: '100%',
              p: 1,
              pl: 2,
              borderLeft: '4px solid',
              borderColor: theme => (theme.palette.mode === 'dark' ? 'grey.600' : 'primary.100'),
            }}>
            <Typography
              component='div'
              variant='h3'
              color={theme => (theme.palette.mode === 'dark' ? 'primary.200' : 'primary.main')}
              fontWeight='bold'>
              {item.title}
            </Typography>
            <Typography color={theme => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800')}>
              {item.metadata}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '500px',
  })
  return (
    <Box ref={ref}>
      <Container sx={{ py: { xs: 4, md: 8 } }}>
        <Grid container spacing={3} alignItems='center'>
          <Grid item xs={12} md={6} sx={{ zIndex: 1, minHeight: { xs: 400, sm: 307, lg: 355 } }}>
            {inView && <UserFeedbacks />}
          </Grid>
          <MuiStats />
        </Grid>
      </Container>
    </Box>
  )
}

export default Testimonials
