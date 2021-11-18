import * as React from 'react'
import { useDispatch } from 'react-redux'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import TextField from '@mui/material/TextField'
import { useRecoilState } from 'recoil'
import { dataSlice } from '../utils/dataSlice'
import { keyCodeAtom } from '../recoil'
import { Path } from './types'

type KeyEditorProps = {
  path: Path
  defaultValue: any
  onCancel: () => void
  onUpdate: (path: Path, value: any) => void
  validateKeyName?: (newValue: string) => boolean
  sx: any
}

export function KeyEditor({
  path,
  defaultValue,
  onCancel,
  onUpdate,
  validateKeyName,
  sx,
}: KeyEditorProps) {
  const dispatch = useDispatch()
  const [isValid, setValid] = React.useState(true)
  const [value, setValue] = React.useState<any>(defaultValue)

  const onValueChanged = React.useCallback(
    event => {
      // set value
      const { value: newValue } = event.target
      setValue(newValue)
      // validation
      if (validateKeyName) {
        // check value and show
        if (newValue === defaultValue) {
          setValid(true)
        } else {
          setValid(validateKeyName(newValue))
        }
      }
    },
    [validateKeyName, defaultValue]
  )

  // Check validation
  React.useEffect(() => {
    setValid(defaultValue.length > 0)
  }, [defaultValue])

  // Approve interaction
  const onOKClicked = React.useCallback(() => {
    if (isValid) {
      onUpdate(path, value)
    }
  }, [isValid, onUpdate, path, value])

  // Cancel interaction
  const { deletePath } = dataSlice.actions
  const onCancelClicked = React.useCallback(() => {
    if (value === '') {
      dispatch(deletePath(path))
    }
    onCancel()
  }, [deletePath, dispatch, onCancel, path, value])

  // Focus in on editing
  const textFieldRef = React.useRef<HTMLInputElement>(null)
  React.useEffect(() => {
    if (textFieldRef.current) {
      textFieldRef.current.focus()
    }
  }, [textFieldRef])

  // Keyboard interaction
  const [keyCode, setKeyCode] = useRecoilState(keyCodeAtom)
  const onKeyDown = React.useCallback(
    event => {
      setKeyCode(event.keyCode)
    },
    [setKeyCode]
  )
  const onKeyUp = React.useCallback(
    event => {
      if ((event.key === 'Enter' || event.keyCode === 13) && keyCode === event.keyCode) {
        event.preventDefault()
        if (isValid) {
          onOKClicked()
        }
      } else if ((event.key === 'Escape' || event.keyCode === 27) && keyCode === event.keyCode) {
        event.preventDefault()
        onCancelClicked()
      } else {
        //
      }
    },
    [keyCode, isValid, onOKClicked, onCancelClicked]
  )

  return (
    <Stack direction='row' spacing={2} sx={{ sx }}>
      <Tooltip title='Approve' placement='top'>
        <Button
          size='small'
          onClick={onOKClicked}
          disabled={!isValid}
          sx={{ color: 'var(--app-text-edit-success)' }}>
          <CheckCircleIcon />
        </Button>
      </Tooltip>
      <Tooltip title='Cancel' placement='top'>
        <IconButton
          size='small'
          onClick={onCancelClicked}
          sx={{ color: 'var(--app-text-edit-failed)' }}>
          <CancelIcon />
        </IconButton>
      </Tooltip>
      <TextField
        size='small'
        variant='outlined'
        className={`text-editor form-control form-control-sm for-key ${
          isValid ? '' : 'is-invalid'
        }`}
        value={value}
        onChange={onValueChanged}
        ref={textFieldRef}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
      />
    </Stack>
  )
}
