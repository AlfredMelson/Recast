import * as React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useRecoilState } from 'recoil'
import { Box } from '@mui/material'
import { IconButtonSxApiIcons } from '../../../components/mui/IconButton.style'
import ApiDataSort, { currentDataAtom } from '../data-types/ApiDataSort'
import { EditResponseAlias, getType } from '../data-types/typeAliases'
import { PaperSx } from '../../../components/mui/Paper.style'
import AsideEditInfo from '../../../components/api-json/AsideEditInfo'
import { elementStateAtom } from '../../../recoil/api-json/atom'
import { BrandSwatch } from '../../../style/BrandSwatch'
import { ErrorBoundary } from '../../../lib/ErrorBoundary'

export default function EditResponse({ data, onDelete, onEdit }: EditResponseAlias) {
  // const element = useRecoilValue(selectedElementProperties)
  // console.log('element', element)
  // state representing an array of element ids
  const [elementState, setElementState] = useRecoilState(elementStateAtom)
  // state representing...
  const [currentData, setCurrentData] = useRecoilState(currentDataAtom)
  // state of data reveal toggle
  const [reveal, setReveal] = React.useState(true)

  // const [keys, setKeys] = React.useState<string[]>([])

  // const [currentData, setCurrentData] = React.useState<EditResponseAlias['data']>({})

  React.useEffect(() => {
    const newkeys: string[] | undefined = Object.getOwnPropertyNames(data)
    // console.log('newkeys', newkeys)

    setElementState(newkeys)
    setCurrentData(data)
  }, [data, setElementState, setCurrentData])

  const renderData = () => {
    return elementState.map((key: string, index: number) => {
      return (
        <ApiDataSort
          key={index}
          index={index}
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
      <IconButtonSxApiIcons
        onClick={(): void => setReveal(!reveal)}
        sx={{
          transform: reveal ? 'rotate(90deg)' : 'rotate(0deg)',
          mr: 10,
        }}>
        <KeyboardArrowRightIcon />
      </IconButtonSxApiIcons>
    )
  }

  const renderEditResponseContent = () => {
    if (reveal)
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
            {elementState.length === 0 ? (
              ''
            ) : (
              <React.Fragment>
                data&#58;&nbsp;&#123;&#46;&#46;&#46;&#125;&nbsp;
                <Box
                  component='span'
                  sx={{
                    color: theme =>
                      theme.palette.mode === 'dark'
                        ? BrandSwatch.Dark.Grey[200]
                        : BrandSwatch.Light.Grey[900],
                  }}>
                  &#47;&#47;&nbsp;
                  {elementState.length}&nbsp;
                  {elementState.length === 1 ? 'item' : 'items'}
                </Box>
              </React.Fragment>
            )}
          </Typography>
        </Stack>
      </React.Fragment>
    )
  }

  return (
    <PaperSx sx={{ pl: 30, pr: 70 }}>
      <ErrorBoundary>
        {renderEditResponseContent()}
        <AsideEditInfo />
      </ErrorBoundary>
    </PaperSx>
  )
}
