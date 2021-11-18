import Divider from '@mui/material/Divider'
import { Box } from '@mui/material'
import { AppFooter } from '../../layout'
import HeroNoMatch from '../../components/no-match/Hero'

export function NoMatch() {
  return (
    <Box>
      <HeroNoMatch />
      <Divider />
      <AppFooter />
    </Box>
  )
}
