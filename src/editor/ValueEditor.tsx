import * as React from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'
import Stack from '@mui/material/Stack'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { useRecoilState } from 'recoil'
import { keyCodeAtom } from '../recoil'
import { CTextField } from './components'
import { DataType, TypeDetermination, TypeCast } from './objects/types'
import { TypeBoolean } from './objects'
import { Path } from './types'
// import { VisualEditor } from '../../pages'

type ValueEditorTypes = {
  path: Path
  defaultValue: any
  onCancel: () => void
  onUpdate: (path: Path, value: any) => void
}

export function ValueEditor({ path, defaultValue, onCancel, onUpdate }: ValueEditorTypes) {
  // Value
  const [onChangeValue, setOnChangeValue] = React.useState<any>(defaultValue)
  const onValueChanged = React.useCallback(
    event => {
      const { value: newValue } = event.target
      setOnChangeValue(newValue)
    },
    [setOnChangeValue]
  )

  // Type
  const [onChangeType, setOnChangeType] = React.useState<DataType>(TypeDetermination(defaultValue))
  const onTypeChanged = React.useCallback(
    event => {
      const newType = event.target.value
      setOnChangeValue(TypeCast(newType, onChangeValue))
      setOnChangeType(newType)
    },
    [onChangeValue, setOnChangeType]
  )

  // Buttons
  const onOkClicked = React.useCallback(() => {
    onUpdate(path, TypeCast(onChangeType, onChangeValue))
  }, [onUpdate, path, onChangeType, onChangeValue])
  const onCancelClicked = React.useCallback(() => {
    onCancel()
  }, [onCancel])

  // Checkbox (boolean)
  const onCheckboxClicked = React.useCallback(
    event => {
      setOnChangeValue(event.target.checked)
    },
    [setOnChangeValue]
  )

  // Focus in on editing
  // Recoil NO
  const textFieldRef = React.useRef<HTMLInputElement>(null)
  React.useEffect(() => {
    if (textFieldRef.current) {
      textFieldRef.current.focus()
    }
  }, [textFieldRef, onChangeType])

  // Keyboard interactions
  // Recoil COMPLETE
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
        onOkClicked()
      } else if ((event.key === 'Escape' || event.keyCode === 27) && keyCode === event.keyCode) {
        event.preventDefault()
        onCancelClicked()
      }
    },
    [onOkClicked, onCancelClicked, keyCode]
  )

  return (
    <Stack direction='row' spacing={10}>
      {/* {onChangeType === DataType.Object && (
        // <VisualEditor parsedJson={TypeCast(type, defaultValue)} path={[]} insert={false} />
        <VisualEditor path={[]} insert={false} />
      )}
      {onChangeType === DataType.Array && (
        // <VisualEditor parsedJson={TypeCast(type, defaultValue)} path={[]} insert={false} />
        <VisualEditor path={[]} insert={false} />
      )} */}
      {onChangeType === DataType.String && (
        <CTextField
          size='small'
          variant='outlined'
          type='text'
          value={TypeCast(onChangeType, onChangeValue)}
          onChange={onValueChanged}
          ref={textFieldRef}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
        />
      )}
      {onChangeType === DataType.Number && (
        <CTextField
          size='small'
          variant='outlined'
          type='number'
          value={TypeCast(onChangeType, onChangeValue)}
          onChange={onValueChanged}
          ref={textFieldRef}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
        />
      )}
      {onChangeType === DataType.Boolean && (
        <TypeBoolean
          data={TypeCast(onChangeType, onChangeValue)}
          readOnly={false}
          onChange={onCheckboxClicked}
        />
      )}
      {onChangeType === DataType.Null && (
        <Box component='span'>
          <Typography
            variant='body1'
            sx={{
              paddingLeft: 1,
              color: '#888888',
            }}>
            null
          </Typography>
        </Box>
      )}
      <Select size='small' value={onChangeType} onChange={onTypeChanged} autoWidth>
        <MenuItem value={DataType.Object}>Object</MenuItem>
        <MenuItem value={DataType.Array}>Array</MenuItem>
        <MenuItem value={DataType.String}>String</MenuItem>
        <MenuItem value={DataType.Number}>Number</MenuItem>
        <MenuItem value={DataType.Boolean}>Boolean</MenuItem>
        <MenuItem value={DataType.Null}>Null</MenuItem>
      </Select>
      <ButtonGroup disableElevation={true} variant='outlined'>
        <Button onClick={onOkClicked}>
          <CheckCircleIcon />
        </Button>
        <Button onClick={onCancelClicked}>
          <CancelIcon />
        </Button>
      </ButtonGroup>
    </Stack>
  )
}
