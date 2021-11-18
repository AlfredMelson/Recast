import Paper from '@mui/material/Paper'
import CircularProgress from '@mui/material/CircularProgress'

export default function Loading() {
  return (
    <Paper
      elevation={0}
      square={true}
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress size={50} />
    </Paper>
  )
}
