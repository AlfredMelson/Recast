import { useInView } from 'react-intersection-observer'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { GITHUB_DATA } from '../../cms/verbiage'
import UserFeedbacks from './UserFeedbacks'

export function MuiStats() {
  return (
    <Grid item xs={12} md={6} container spacing={20}>
      {GITHUB_DATA.map(item => (
        <Grid key={item.quantity} item xs={6}>
          <Box
            sx={{
              height: '100%',
              p: 10,
              mr: 10,
              borderRight: '3px solid',
              borderColor: theme => (theme.palette.mode === 'dark' ? 'grey.600' : 'primary.100'),
            }}>
            <Typography
              component='div'
              variant='h3'
              color={theme => (theme.palette.mode === 'dark' ? 'primary.200' : 'primary.main')}
              fontWeight='bold'>
              {item.quantity}
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
      <Container sx={{ py: { xs: 40, md: 80 } }}>
        <Grid container spacing={30} alignItems='center'>
          <MuiStats />
          <Grid item xs={12} md={6} sx={{ zIndex: 1, minHeight: { xs: 400, sm: 307, lg: 355 } }}>
            {inView && <UserFeedbacks />}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Testimonials
