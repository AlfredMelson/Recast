import * as React from 'react'
import Box, { BoxProps } from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useRecoilValue } from 'recoil'
import { selectedElementAtom } from '../../pages/apijson/display/EditResponse'

export default function AsideEditInfo({ appeared, ...props }: { appeared: boolean } & BoxProps) {
  const [hidden, setHidden] = React.useState(false)

  const selectedElement = useRecoilValue(selectedElementAtom)

  const basicCard = () => {
    return (
      <Card sx={{ minWidth: 275 }}>
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
        transform: hidden || !appeared ? 'translateX(100%)' : 'translateX(0)',
        transition: '0.3s',
        top: 0,
        right: 0,
        px: 2,
        pt: 1,
        pb: 2,
        bgcolor: ({ palette }) => palette.primaryDark[700],
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
          aria-label={hidden ? 'show' : 'hide'}
          onClick={() => setHidden(bool => !bool)}
          sx={{
            position: 'sticky',
            zIndex: 2,
            transition: '0.3s',
            left: 10,
            top: 30,
            transform: hidden || !appeared ? 'translateX(-74px)' : 'translateX(20%)',
            opacity: appeared ? 1 : 0,
            bgcolor: 'primaryDark.500',
            '&:hover, &.Mui-focused': {
              bgcolor: 'primaryDark.600',
            },
          }}>
          {hidden ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
        </IconButton>

        <Box sx={{ pt: 9 }}>{basicCard()}</Box>
      </Box>
    </Box>
  )
}
