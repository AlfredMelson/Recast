import { Button, Stack, TextField } from '@mui/material'
import * as React from 'react'

export function Searchbar({ updateDataSource }: { updateDataSource: any }): JSX.Element {
  const [URL, setURL] = React.useState('')
  return (
    <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={2}>
      <TextField
        fullWidth
        label='Data URL'
        margin='dense'
        // helperText='Paste data URL'
        variant='outlined'
        sx={{ mr: 2 }}
        onChange={e => setURL(e.target.value)}
      />
      <Button
        sx={{ height: '50px' }}
        onClick={() => {
          updateDataSource(URL)
        }}
        variant='text'>
        Submit
      </Button>
    </Stack>
  )
}
