import * as React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { grey } from '@mui/material/colors'
import { useRecoilState, useRecoilValue } from 'recoil'
import { SxApiIconButton } from '../../../components/sx/SxIconButton'
import ApiDataSort, { currentDataAtom } from '../data-types/ApiDataSort'
import { EditResponseAlias, getType } from '../data-types/typeAliases'
import { FrFadeAnimation } from '../../../components/fr/FrFadeAnimation'
import { SxPaper } from '../../../components/sx/SxPaper'
import AsideEditInfo from '../../../components/api-json/AsideEditInfo'
import { elementStateAtom, selectedElementProperties } from '../../../recoil/api-json/atom'

export default function EditResponse({ data, onDelete, onEdit }: EditResponseAlias) {
  const element = useRecoilValue(selectedElementProperties)
  console.log('element', element)
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
    console.log('newkeys', newkeys)

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
      <SxApiIconButton
        onClick={(): void => setReveal(!reveal)}
        sx={{
          transform: reveal ? 'rotate(90deg)' : 'rotate(0deg)',
          mr: 1,
        }}>
        <KeyboardArrowRightIcon />
      </SxApiIconButton>
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
                <span style={{ color: grey[500] }}>
                  &#47;&#47;&nbsp;
                  {elementState.length}&nbsp;
                  {elementState.length === 1 ? 'item' : 'items'}
                </span>
              </React.Fragment>
            )}
          </Typography>
        </Stack>
      </React.Fragment>
    )
  }

  return (
    <FrFadeAnimation>
      <SxPaper sx={{ pl: 3, pr: 7 }}>
        {renderEditResponseContent()}
        <AsideEditInfo />
      </SxPaper>
    </FrFadeAnimation>
  )
}
