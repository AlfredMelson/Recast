import * as React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { green, grey } from '@mui/material/colors'
import { useRecoilState } from 'recoil'
import Box from '@mui/material/Box'
import { ButtonGroup } from '@mui/material'
import { SxApiEditIconButton } from '../../../components/sx/SxIconButton'
import ApiEditHighlighter from '../../../components/action/ApiEditHighlighter'
import { ApiDeleteIcon } from '../../../components/icons/ApiDeleteIcon'
import { ApiCloseIcon } from '../../../components/icons/ApiCloseIcon'
import { ApiApplyIcon } from '../../../components/icons/ApiApplyIcon'
import { selectedElementAtom } from '../../../recoil/api-json/atom'
import SxEditApiInput from '../../../components/sx/SxInput'
import { SxApiItemButton } from '../../../components/sx'
import { ApiStringAlias } from './typeAliases'
import ApiDataTypeLabel from './ApiDataTypeLabel'

export function ApiString({ index, value, dataKey, dataType, onEdit, onDelete }: ApiStringAlias) {
  const [selectedElement, setSelectedElement] = useRecoilState(selectedElementAtom)

  const [currentValue, setCurrentValue] = React.useState<ApiStringAlias['value'] | any>()

  React.useEffect(() => {
    setCurrentValue(value)
  }, [value])

  const handleStringEdit = (dataKey: string | number) => {
    onEdit(currentValue, dataKey)
    setSelectedElement(null)
  }

  const handleStringDelete = () => {
    onDelete(dataKey)
    setSelectedElement(null)
  }

  const handleCancelStringEdit = () => {
    setSelectedElement(null)
  }

  return (
    <Box sx={{ ml: 4.8, cursor: 'pointer' }}>
      <ApiEditHighlighter selected={selectedElement === index} direction='row'>
        {selectedElement === index ? (
          <Stack direction='row' justifyContent='center' alignItems='flex-end'>
            <Typography variant='code'>&#34;{dataKey}&#34;&#58;&nbsp;</Typography>
            <ApiDataTypeLabel type={dataType} variant='edit' />
            <SxEditApiInput
              currentValue={currentValue}
              dataKey={dataKey}
              onChange={event => {
                setCurrentValue(event.target.value)
              }}
              onEdit={onEdit}
              quotes={true}
            />
            <ButtonGroup variant='text'>
              <SxApiEditIconButton disabled={true} onClick={() => handleStringEdit(index)}>
                <ApiApplyIcon
                  sx={{
                    color: theme =>
                      theme.palette.mode === 'dark'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[900],
                    mr: 0.5,
                    '&:hover ': {
                      color: theme => (theme.palette.mode === 'dark' ? green[500] : green[600]),
                    },
                  }}
                />
              </SxApiEditIconButton>
              <SxApiEditIconButton onClick={handleStringDelete}>
                <ApiDeleteIcon />
              </SxApiEditIconButton>
              <SxApiEditIconButton onClick={handleCancelStringEdit}>
                <ApiCloseIcon />
              </SxApiEditIconButton>
            </ButtonGroup>
          </Stack>
        ) : (
          <SxApiItemButton onClick={() => setSelectedElement(index)}>
            <Typography
              sx={{
                color: theme => (theme.palette.mode === 'dark' ? grey[50] : '#000000'),
              }}
              variant='code'>
              &#34;{dataKey}&#34;&#58;&nbsp;
            </Typography>
            <ApiDataTypeLabel type={dataType} variant='edit' />
            <Typography variant='code' sx={{ color: green[400] }}>
              &#34;{currentValue}&#34;
            </Typography>
          </SxApiItemButton>
        )}
      </ApiEditHighlighter>
    </Box>
  )
}
