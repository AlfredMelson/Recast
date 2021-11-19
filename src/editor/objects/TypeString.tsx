import Box from '@mui/system/Box'
import * as React from 'react'
import Tooltip from '@mui/material/Tooltip'
import Link from '@mui/material/Link'
import { Typography } from '@mui/material'
import isURL from '../../lib/validator/functions/isURL'
// import validator from '../../lib/validator'

type TypeStringTypes = {
  data: string
}

export function TypeString({ data }: TypeStringTypes) {
  let result: React.ReactElement | string = ''
  if (isURL(data, undefined)) {
    if (data.match(/\.(bmp|gif|jpg|jpeg|png|raw|tiff|webp)$/)) {
      result = (
        <Link href={data} target='_blank' rel='noopener noreferrer'>
          <img src={data} alt={data} />
          <br />
          <Box component='span'>{data}</Box>
        </Link>
      )
    } else {
      result = (
        <Tooltip title={data} placement='top-start'>
          <Link
            component='button'
            href={data}
            underline='none'
            target='_blank'
            rel='noopener noreferrer'>
            <Typography variant='body1'>Data Link</Typography>
          </Link>
        </Tooltip>
      )
    }
  } else {
    result = `${data}`
  }
  return (
    <Box component='span' className='string-type'>
      {result}
    </Box>
  )
}
