import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded'
import GradientText from '../typography/GradientText'
import SectionHeadline from '../typography/SectionHeadline'
import LoadInJsonButton from './LoadInJsonButton'

export default function StartToday() {
  return (
    <Grid container spacing={{ xs: 20, md: 40 }} alignItems='center'>
      <Grid item xs={12} sm={6} md={6} sx={{ mb: { md: 4 } }}>
        <SectionHeadline
          overline='Go live!'
          title={
            <Typography variant='h2' sx={{ maxWidth: 460, mb: 10 }}>
              Start your exploration of <GradientText>Json</GradientText> today.
            </Typography>
          }
          description='Try it for yourself, and share with us your thoughts.'
        />
        <LoadInJsonButton size='medium' variant='outlined' />
      </Grid>
      <Grid item xs={12} sm={6} md={6} container spacing={20}>
        <Grid item xs={12} md={6}>
          <Paper
            // component={Link}
            // href='/'
            // noLinkStyle
            variant='outlined'
            sx={{ p: 2, height: '100%' }}>
            <Typography variant='body2' fontWeight='bold' sx={{ mb: 5 }}>
              Json Showcase
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{ mb: 10 }}>
              See more projects and companies that rely on MUI.
            </Typography>
            <Typography
              color={theme => (theme.palette.mode === 'dark' ? 'primary.400' : 'primary.600')}
              variant='body2'
              fontWeight='bold'>
              Learn more <KeyboardArrowRightRounded sx={{ verticalAlign: 'middle' }} />
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            // component={Link}
            // href={ROUTES.blog}
            // noLinkStyle
            variant='outlined'
            sx={{ p: 2, height: '100%' }}>
            <Typography variant='body2' fontWeight='bold' sx={{ mb: 5 }}>
              Json News
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{ mb: 10 }}>
              Check behind the scenes and news from the company.
            </Typography>
            <Typography
              color={theme => (theme.palette.mode === 'dark' ? 'primary.400' : 'primary.600')}
              variant='body2'
              fontWeight='bold'>
              Learn more <KeyboardArrowRightRounded sx={{ verticalAlign: 'middle' }} />
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  )
}
