import Box, { BoxProps } from '@mui/material/Box'
import Add from '@mui/icons-material/Add'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useRecoilValue } from 'recoil'
import IconButton from '@mui/material/IconButton'
import { selectedElementAtom } from '../../recoil/api-json/atom'
import { darkBlue, lightBlue } from '../../style/MuiBrandingTheme'

export default function AsideEditInfo({ ...props }: BoxProps) {
  const selectedElement = useRecoilValue(selectedElementAtom)

  const selectedElementCard = () => {
    return (
      <Card sx={{ minWidth: 275, borderRadius: '4px' }}>
        <CardActionArea>
          <CardContent>
            <Typography variant='h6' component='div' gutterBottom>
              Selected element
            </Typography>
            <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
              id: {selectedElement}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
              dataType:
            </Typography>
            <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
              dataValue:
            </Typography>
            <Typography sx={{ fontSize: 14 }} color='text.secondary'>
              dataKey:
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    )
  }

  return (
    <Box
      {...props}
      sx={{
        position: 'absolute',
        bottom: 0,
        transform: selectedElement === null ? 'translateX(100%)' : 'translateX(0)',
        transition: '0.5s',
        transitionDelay: '0.5s',
        top: 0,
        right: 0,
        px: 2,
        pt: 1,
        pb: 2,
        bgcolor: theme => (theme.palette.mode === 'dark' ? darkBlue[800] : lightBlue[300]),
        minWidth: '200px',
        zIndex: 1,
        borderLeft: '1px solid',
        borderColor: 'divider',
        borderRadius: '0 0 4px 0',
        ...props.sx,
      }}>
      <Box
        sx={{
          position: 'sticky',
          top: 0,
        }}>
        <IconButton
          // aria-label={hidden ? 'show' : 'hide'}
          // onClick={() => setHidden(bool => !bool)}
          sx={{
            position: 'sticky',
            zIndex: 2,
            transition: '0.3s',
            left: 10,
            top: 0,
            mb: 2,
            bgcolor: theme => (theme.palette.mode === 'dark' ? darkBlue[700] : lightBlue[200]),
            '&:hover, &.Mui-focused': {
              bgcolor: theme => (theme.palette.mode === 'dark' ? darkBlue[600] : lightBlue[200]),
            },
          }}>
          <Add />
        </IconButton>

        {selectedElementCard()}
        <IconButton
          // aria-label={hidden ? 'show' : 'hide'}
          // onClick={() => setHidden(bool => !bool)}
          sx={{
            position: 'sticky',
            zIndex: 2,
            transition: '0.3s',
            left: 10,
            top: 0,
            mt: 2,
            bgcolor: theme => (theme.palette.mode === 'dark' ? darkBlue[700] : lightBlue[200]),
            '&:hover, &.Mui-focused': {
              bgcolor: theme => (theme.palette.mode === 'dark' ? darkBlue[600] : lightBlue[200]),
            },
          }}>
          <Add />
        </IconButton>
      </Box>
    </Box>
  )
}
