import * as React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import { grey } from '@mui/material/colors'
import { SxIBApiInteraction } from '../../../components/sx/SxIconButton'
import ApiDataSort from '../data-types/ApiDataSort'
import { getType } from '../data-types/typeAliases'

type EditResponseAlias = {
  onEdit: (newValue: any, key: string | number) => void
  onDelete: (key: number | string) => void
  data?: { [key: string]: any } | undefined
}
export default function EditResponse({ data, onDelete, onEdit }: EditResponseAlias) {
  const [col, setCol] = React.useState(true)

  const [keys, setKeys] = React.useState<string[]>([])

  const [currentData, setCurrentData] = React.useState<EditResponseAlias['data']>({})

  React.useEffect(() => {
    const newkeys: string[] | undefined = Object.getOwnPropertyNames(data)
    setKeys(newkeys)
    setCurrentData(data)
  }, [data])

  const renderData = () => {
    return keys.map(key => {
      return (
        <ApiDataSort
          key={key}
          dataType={currentData ? getType(currentData[key]) : ''}
          dataValue={currentData ? currentData[key] : ''}
          dataKey={key}
          onEdit={onEdit}
          onDelete={onDelete}
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

  const renderEditResponseContent = () => {
    if (col)
      return (
        <React.Fragment>
          <Stack direction='row'>
            <IconToggle />
            <Typography variant='code'>data&#58;&nbsp;&#123;</Typography>
          </Stack>
          {renderData()}
          <Typography variant='code' sx={{ pl: 5 }}>
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
                data&#58;&nbsp;&#123;&#46;&#46;&#46;&#125;&nbsp;
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

  return (
    <Paper
      sx={{
        pt: 3,
        pl: 3,
        pb: 4,
        borderRadius: '0  4px 4px 4px',
        background: theme => (theme.palette.mode === 'dark' ? '#0D0D0D' : '#ffffff'),
      }}>
      {renderEditResponseContent()}
    </Paper>
  )
}
