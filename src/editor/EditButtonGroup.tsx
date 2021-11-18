import * as React from 'react'
import { useDispatch } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import EditIcon from '@mui/icons-material/Edit'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import { useRecoilValue } from 'recoil'
import { padVisualDataAtom } from '../recoil'
import { dataSlice } from '../utils/dataSlice'
import { isString, isNumber } from './objects/types'
import { EditType, Path } from './types'

type EditButtonGroupTypes = {
  data: any
  path: Path
  hidden: boolean
}

export function EditButtonGroup({ data, path, hidden = false }: EditButtonGroupTypes) {
  const padVisualData = useRecoilValue(padVisualDataAtom)
  const onCopyButtonClicked = React.useCallback((event: React.SyntheticEvent) => {
    if (navigator.clipboard) {
      const value = event.currentTarget.getAttribute('data-value') || ''
      navigator.clipboard.writeText(`${value}`)
    }
  }, [])

  const dispatch = useDispatch()
  const { deletePath, setEditMode } = dataSlice.actions

  const onDeleteButtonClicked = React.useCallback(() => {
    dispatch(deletePath(path))
  }, [path, dispatch, deletePath])

  const onEditButtonClicked = React.useCallback(() => {
    dispatch(setEditMode({ path, type: EditType.Value }))
  }, [dispatch, path, setEditMode])

  return (
    <ButtonGroup
      size={padVisualData ? 'small' : 'medium'}
      variant='text'
      className={`edit-button-group ${hidden && 'hidden'}`}
      sx={{ border: 'none' }}>
      <Button
        onClick={onEditButtonClicked}
        data-value={data}
        sx={{ color: 'var(--app-text-edit)' }}>
        <EditIcon />
      </Button>
      {navigator.clipboard && (isString(data) || isNumber(data)) && (
        <Button
          onClick={onCopyButtonClicked}
          data-value={data}
          sx={{ color: 'var(--app-text-edit)' }}>
          <ContentCopyIcon />
        </Button>
      )}
      <Button
        onClick={onDeleteButtonClicked}
        data-value={data}
        sx={{ color: 'var(--app-text-edit)' }}>
        <DeleteIcon />
      </Button>
    </ButtonGroup>
  )
}
