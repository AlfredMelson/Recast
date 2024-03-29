import * as React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useRecoilState } from 'recoil'
import { ButtonGroup } from '@mui/material'
import { IconButtonSxApiEdit } from '../../../components/mui/IconButton.style'
import ApiEditHighlighter from '../../../components/action/ApiEditHighlighter'
import { ApiDeleteIcon } from '../../../components/icons/ApiDeleteIcon'
import { ApiCloseIcon } from '../../../components/icons/ApiCloseIcon'
import { ApiApplyIcon } from '../../../components/icons/ApiApplyIcon'
import { selectedElementAtom } from '../../../recoil/api-json/atom'
import { InputSxEditApi } from '../../../components/mui/Input.style'
import { ButtonSxApiJsonEditItem } from '../../../components/mui'
import { BrandSwatch } from '../../../style/BrandSwatch'
import ApiDataTypeLabel from './ApiDataTypeLabel'
import { ApiNumberAlias } from './typeAliases'

export function ApiNumber({ index, value, dataKey, dataType, onEdit, onDelete }: ApiNumberAlias) {
  // console.log('ApiNumber : index', index)

  const [selectedElement, setSelectedElement] = useRecoilState(selectedElementAtom)

  const [currentValue, setCurrentValue] = React.useState<ApiNumberAlias['value'] | any>()

  React.useEffect(() => {
    setCurrentValue(value)
  }, [value])

  const handleNumberEdit = () => {
    onEdit(currentValue, dataKey)
    setSelectedElement(null)
  }

  const handleNumberDelete = () => {
    onDelete(dataKey)
    setSelectedElement(null)
  }

  const handleCancelNumberEdit = () => {
    setSelectedElement(null)
  }

  return (
    <Box sx={{ ml: 48, cursor: 'pointer' }}>
      <ApiEditHighlighter selected={selectedElement === index} direction='row'>
        {selectedElement === index ? (
          <Stack direction='row' justifyContent='center' alignItems='flex-end'>
            <Typography variant='code'>&#34;{dataKey}&#34;&#58;&nbsp;</Typography>
            <ApiDataTypeLabel type={dataType} variant='edit' />
            <InputSxEditApi
              currentValue={currentValue}
              dataKey={dataKey}
              onChange={event => {
                setCurrentValue(event.target.value)
              }}
              onEdit={onEdit}
            />
            <ButtonGroup variant='text'>
              <IconButtonSxApiEdit onClick={handleNumberEdit}>
                <ApiApplyIcon
                  sx={{
                    color: theme =>
                      theme.palette.mode === 'dark'
                        ? BrandSwatch.Dark.Grey[50]
                        : BrandSwatch.Light.Grey[900],
                    mr: 5,
                    '&:hover': {
                      color: BrandSwatch.Dark.Green[300],
                    },
                  }}
                />
              </IconButtonSxApiEdit>
              <IconButtonSxApiEdit onClick={handleNumberDelete}>
                <ApiDeleteIcon />
              </IconButtonSxApiEdit>
              <IconButtonSxApiEdit onClick={handleCancelNumberEdit}>
                <ApiCloseIcon />
              </IconButtonSxApiEdit>
            </ButtonGroup>
          </Stack>
        ) : (
          <ButtonSxApiJsonEditItem onClick={() => setSelectedElement(index)}>
            <Typography
              sx={{
                color: theme =>
                  theme.palette.mode === 'dark'
                    ? BrandSwatch.Dark.Grey[50]
                    : BrandSwatch.Light.Grey[900],
              }}
              variant='code'>
              &#34;{dataKey}&#34;&#58;&nbsp;
            </Typography>
            <ApiDataTypeLabel type={dataType} variant='edit' />
            <Typography
              variant='code'
              sx={{
                color: theme =>
                  theme.palette.mode === 'dark'
                    ? BrandSwatch.Dark.Purple[500]
                    : BrandSwatch.Light.Purple[600],
              }}>
              {currentValue}
            </Typography>
          </ButtonSxApiJsonEditItem>
        )}
      </ApiEditHighlighter>
    </Box>
  )
}
