import * as React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// import TextField from '@mui/material/TextField'
import { green, purple } from '@mui/material/colors'
import InputAdornment from '@mui/material/InputAdornment'
import { IconButton, Input } from '@mui/material'
import { SxIBApiInteraction } from '../../../components/sx/SxIconButton'
import ApiEditHighlighter from '../../../components/action/ApiEditHighlighter'
// import { ApiEditIcon } from '../../../components/icons/ApiEditIcon'
import { ApiDeleteIcon } from '../../../components/icons/ApiDeleteIcon'
import { ApiCloseIcon } from '../../../components/icons/ApiCloseIcon'
import { ApiApplyIcon } from '../../../components/icons/ApiApplyIcon'
import ApiDataTypeLabel from './ApiDataTypeLabel'
import { ApiNumberAlias } from './typeAliases'

export function ApiNumber({ id, value, dataKey, dataType, onEdit, onDelete }: ApiNumberAlias) {
  console.log(id)
  const [currentValue, setCurrentValue] = React.useState<ApiNumberAlias['value'] | any>()
  const [showInput, setShowInput] = React.useState(false)
  React.useEffect(() => {
    setCurrentValue(value)
  }, [value])
  const showEditInput = () => {
    setShowInput(true)
  }
  // const editNumber = () => {
  //   onEdit(currentValue, dataKey)
  //   setShowInput(!showInput)
  // }
  const deleteNumber = () => {
    onDelete(dataKey)
    setShowInput(false)
  }
  const cancelNumberEdit = () => {
    setShowInput(false)
  }
  return (
    <Box sx={{ ml: 4.8, cursor: 'pointer' }}>
      {/* <Typography variant='code'>&#34;{dataKey}&#34;&#58;&nbsp;</Typography>
      <ApiDataTypeLabel type={dataType} variant='edit' /> */}
      <ApiEditHighlighter selected={showInput} direction='row'>
        <Stack direction='row' onClick={showEditInput}>
          <Typography variant='code'>&#34;{dataKey}&#34;&#58;&nbsp;</Typography>
          <ApiDataTypeLabel type={dataType} variant='edit' />
        </Stack>
        {showInput ? (
          <React.Fragment>
            <Input
              autoFocus
              defaultValue={currentValue}
              onChange={e => {
                setCurrentValue(e.target.value)
              }}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='apply edit'
                    onClick={() => {
                      onEdit(currentValue, dataKey)
                      setShowInput(false)
                    }}
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge='end'>
                    <ApiApplyIcon
                      sx={{
                        color: theme =>
                          theme.palette.mode === 'dark'
                            ? currentValue !== value
                              ? theme.palette.grey[200]
                              : 'transparent'
                            : currentValue !== value
                            ? theme.palette.grey[900]
                            : 'transparent',

                        mr: 0.5,
                        '&:hover ': {
                          color: theme =>
                            theme.palette.mode === 'dark'
                              ? currentValue !== value
                                ? green[500]
                                : 'transparent'
                              : currentValue !== value
                              ? green[600]
                              : 'transparent',
                        },
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              }
            />

            <SxIBApiInteraction onClick={deleteNumber}>
              <ApiDeleteIcon />
            </SxIBApiInteraction>
            <SxIBApiInteraction onClick={cancelNumberEdit}>
              <ApiCloseIcon />
            </SxIBApiInteraction>
          </React.Fragment>
        ) : (
          <Typography variant='code' sx={{ color: purple[400] }} onClick={showEditInput}>
            {currentValue}
          </Typography>
        )}
      </ApiEditHighlighter>
      {/* </Stack> */}
      {/* <Stack direction='row' onClick={showEditInput}>
          <Typography variant='code'>&#34;{dataKey}&#34;&#58;&nbsp;</Typography>
          <ApiDataTypeLabel type={dataType} variant='edit' />
          <Typography variant='code' sx={{ color: purple[400] }}>
            {currentValue}
          </Typography>
        </Stack> */}
    </Box>
  )
}
