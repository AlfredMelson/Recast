import * as React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { grey } from '@mui/material/colors'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Box } from '@mui/system'
import { SxIBApiInteraction } from '../../../components/sx'
import ApiDataSort from './ApiDataSort'
import ApiDataTypeLabel from './ApiDataTypeLabel'
import { getType, ApiObjectAlias } from './typeAliases'

export function ApiObject({ value, dataKey, dataType, onDelete }: ApiObjectAlias) {
  const [col, setCol] = React.useState(true)

  const [keys, setKeys] = React.useState<string[]>([])

  const [currentValue, setCurrentValue] = React.useState<ApiObjectAlias['value']>({})

  React.useEffect(() => {
    setCurrentValue(value)
    setKeys(Object.keys(value ? value : ''))
  }, [value])

  const EditOneProperty = (newValue: any, key: string | number): void => {
    const newObj: { [key: string]: any } | undefined = { ...currentValue }
    newObj[key] = newValue
    setCurrentValue(newObj)
  }
  const DeleteOneProperty = (key: any): void => {
    const newObj: { [key: string]: any } = { ...currentValue }
    // newObj = _.omit(currentValue, key);
    currentValue ? delete newObj[key] : ''
    newObj ? setCurrentValue(newObj) : ''
    newObj ? setKeys(Object.keys(newObj)) : ''
  }

  const renderObject = () => {
    return keys.map((k: string, i: number) => {
      return (
        <ApiDataSort
          key={i}
          i={i}
          dataType={currentValue ? getType(currentValue[k]) : ''}
          dataValue={currentValue ? currentValue[k] : ''}
          dataKey={k}
          onEdit={EditOneProperty}
          onDelete={DeleteOneProperty}
        />
      )
    })
  }

  function IconToggle() {
    return (
      <SxIBApiInteraction
        onClick={() => setCol(!col)}
        sx={{
          transform: col ? 'rotate(90deg)' : 'rotate(0deg)',
        }}>
        <KeyboardArrowRightIcon />
      </SxIBApiInteraction>
    )
  }

  const renderObjContent = () => {
    if (col)
      return (
        <React.Fragment>
          <Stack direction='row'>
            <IconToggle />
            <Typography variant='code'>&#34;{dataKey}&#34;&#58;&nbsp;</Typography>
            <ApiDataTypeLabel type={dataType ? dataType : ''} variant='edit' />
            <SxIBApiInteraction
              onClick={() => {
                onDelete(dataKey)
              }}>
              <DeleteIcon fontSize='small' />
            </SxIBApiInteraction>
            &nbsp;&#123;
          </Stack>
          <Box sx={{ pl: 3 }}>{renderObject()}</Box>
          <Typography variant='code' sx={{ ml: 8.4 }}>
            &#125;
          </Typography>
        </React.Fragment>
      )

    return (
      <React.Fragment>
        <Stack direction='row'>
          <IconToggle />
          <Typography variant='code'>
            {keys.length === 0 ? (
              ''
            ) : (
              <React.Fragment>
                &#34;{dataKey}&#34;&#58;&nbsp;&#123;&#46;&#46;&#46;&#125;&nbsp;
                <span style={{ color: grey[500] }}>
                  &#47;&#47;&nbsp;
                  {keys.length}&nbsp;
                  {keys.length === 1 ? 'item' : 'items'}
                </span>
              </React.Fragment>
            )}
          </Typography>
        </Stack>
      </React.Fragment>
    )
  }

  return renderObjContent()
}

{
  /* <Stack direction='row'>
          <SxIBApiInteraction onClick={toggleObj}>
            <KeyboardArrowRightIcon />
          </SxIBApiInteraction>
          <Typography variant='code'>&#34;{dataKey}&#34;&#58;&nbsp;</Typography>
          <Stack direction='row'>
            <ApiDataTypeLabel type={dataType ? dataType : ''} variant='edit' />
            <Typography variant='body1'>{`{ ${keys.length} }`}</Typography>
          </Stack>
        </Stack> */
}
