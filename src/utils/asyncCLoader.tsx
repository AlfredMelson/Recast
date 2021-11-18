import * as React from 'react'
import Box from '@mui/material/Box'
import Loading from '../components/loading'

const WaitingCompLoader = () => (
  <Box
    sx={{
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1,
      minHeight: 50,
      flexShrink: 0,
    }}
  >
    <Loading />
  </Box>
)

// eslint-disable-next-line react/display-name
const asyncComponentLoader = (Component: any) => (props: any) =>
  (
    <React.Suspense fallback={<WaitingCompLoader />}>
      <Component {...props} />
    </React.Suspense>
  )

export default asyncComponentLoader
