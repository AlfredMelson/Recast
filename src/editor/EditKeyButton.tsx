import * as React from 'react'
import { useDispatch } from 'react-redux'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import BuildCircleIcon from '@mui/icons-material/BuildCircle'
import { dataSlice } from '../utils/dataSlice'
import { isObject } from './objects/types'
import { Path, EditType } from './types'

type EditKeyButtonTypes = {
  data: any
  path: Path
  hidden: boolean
}

export function EditKeyButton({ data, path, hidden = false }: EditKeyButtonTypes) {
  const dispatch = useDispatch()
  const { setEditMode } = dataSlice.actions

  const onEditButtonClicked = React.useCallback(() => {
    dispatch(setEditMode({ path, type: EditType.Key }))
  }, [dispatch, path, setEditMode])

  return (
    <Box
      component='div'
      className={`edit-buttons d-flex flex-row align-items-start ${hidden ? 'hidden' : ''}`}>
      {isObject(data) && (
        <IconButton size='small' data-value={data} onClick={onEditButtonClicked}>
          <BuildCircleIcon />
        </IconButton>
      )}
    </Box>
  )
}
