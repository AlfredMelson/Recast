import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import GradientText from '../typography/GradientText'
import ReturnHomeButtons from './ReturnHomeButtons'

export default function HeroNoMatch() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Container
        sx={{
          minHeight: 500,
          height: 'calc(100vh - 120px)',
          maxHeight: { xs: 500, sm: 700, xl: 1000 },
          transition: '0.3s',
        }}>
        <Grid container alignItems='center' wrap='nowrap' sx={{ height: '100%', mx: 'auto' }}>
          <Grid item md={7} lg={6} sx={{ m: 'auto' }}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant='h1' sx={{ my: 20, maxWidth: 500 }}>
                It seems you&nbsp;have <GradientText>lost</GradientText> your way
              </Typography>
              <Typography color='text.secondary' sx={{ mb: 30, maxWidth: 500 }}>
                JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is
                easy for humans to read and write. It is easy for machines to parse and generate.
              </Typography>
              <ReturnHomeButtons sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
