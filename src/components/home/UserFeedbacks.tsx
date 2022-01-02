import * as React from 'react'
import SwipeableViews from 'react-swipeable-views'
import ButtonBase from '@mui/material/ButtonBase'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ArrowButton from '../action/ArrowButton'
import { TESTIMONIAL } from '../../cms'

type ProfileAlias = {
  name: string
  role: string
}

type FeedbackAlias = {
  quote: string
  profile: ProfileAlias
}

const Feedback = ({ quote, profile }: FeedbackAlias) => {
  return (
    <Box sx={{ color: '#fff' }}>
      <Typography variant='subtitle1' component='div' sx={{ mb: 20 }}>
        {quote}
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ ml: 20 }}>
          <Typography fontWeight='bold' sx={{ mb: 10 }}>
            {profile.name},{' '}
            <Box component='span' sx={{ color: 'grey.600', fontWeight: 'regular' }}>
              {profile.role}
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default function UserFeedbacks() {
  const [slideIndex, setSlideIndex] = React.useState(0)
  return (
    <Box sx={{ maxWidth: { md: 500 } }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 20 }}>
        <Box alignSelf='center'>
          {TESTIMONIAL.map(item => (
            <ButtonBase
              key={item.index}
              aria-label={`Testimonial from ${item.profile.name}`}
              onClick={() => setSlideIndex(item.index)}
              sx={{
                display: 'inline-block',
                width: 14,
                height: 14,
                borderRadius: '50%',
                p: '4px',
                ml: item.index !== 0 ? 2 : 0,
                '& .Mui-focused': {
                  boxShadow: theme => `0px 0px 0px 2px ${theme.palette.grey[400]}`,
                },
              }}>
              <Box
                sx={{
                  height: '100%',
                  borderRadius: 1,
                  bgcolor: 'grey.500',
                  ...(item.index === slideIndex && {
                    bgcolor: 'grey.300',
                  }),
                }}
              />
            </ButtonBase>
          ))}
        </Box>
        <ArrowButton
          direction='left'
          disabled={slideIndex === 0}
          onClick={() => setSlideIndex(i => i - 1)}
          sx={{ ml: 'auto' }}
        />
        <ArrowButton
          direction='right'
          disabled={slideIndex === TESTIMONIAL.length - 1}
          onClick={() => setSlideIndex(i => i + 1)}
        />
      </Box>
      <SwipeableViews index={slideIndex} onChangeIndex={index => setSlideIndex(index)}>
        {TESTIMONIAL.map(item => (
          <Feedback key={item.profile.name} {...item} />
        ))}
      </SwipeableViews>
    </Box>
  )
}
