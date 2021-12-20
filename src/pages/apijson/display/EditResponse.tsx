import * as React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { grey } from '@mui/material/colors'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'
import { SxApiIconButton } from '../../../components/sx/SxIconButton'
import ApiDataSort, { currentDataAtom } from '../data-types/ApiDataSort'
import { EditResponseAlias, getType } from '../data-types/typeAliases'
import { FrFadeAnimation } from '../../../components/fr/FrFadeAnimation'
import { SxPaper } from '../../../components/sx/SxPaper'
import AsideEditInfo from '../../../components/api-json/AsideEditInfo'

/**
 * @name selectedElementAtom
 * @description state representing the selected element
 * @param {Number | Null}
 * @type {Object}
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [selectedElement, setSelectedElement] = useRecoilState(selectedElementAtom)
 * const setSelectedElement = useSetRecoilState(selectedElementAtom)
 * const selectedElement = useRecoilValue(selectedElementAtom)
 * const resetSelectedElement = useResetRecoilState(selectedElementAtom)
 */
export const selectedElementAtom = atom<number | null>({
  key: 'selectedElement',
  default: null,
})

/**
 * @name elementStateAtom
 * @description state representing an array of element ids
 * @param {String[]}
 * @type {Object}
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [elementState, setElementState] = useRecoilState(elementStateAtom)
 * const setElementState = useSetRecoilState(elementStateAtom)
 * const elementState = useRecoilValue(elementStateAtom)
 * const resetElementState = useResetRecoilState(elementStateAtom)
 */
export const elementStateAtom = atom<string[]>({
  key: 'elementState',
  default: [],
})

/**
 * @name selectedElementProperties
 * @description state representing an array of element ids
 * @param {String[]}
 * @type {Object}
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [elementState, setElementState] = useRecoilState(selectedElementProperties)
 * const setElementState = useSetRecoilState(selectedElementProperties)
 * const elementState = useRecoilValue(selectedElementProperties)
 * const resetElementState = useResetRecoilState(selectedElementProperties)
 */
export const selectedElementProperties = selector({
  key: 'selectedElementProperties',
  get: ({ get }) => {
    const selectedElementId = get(selectedElementAtom)
    // caseA: without a selected element there aren't any properties
    if (selectedElementId == null) return

    // caseB: else
    // return get(elementState(selectedElementId))
  },
})

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
        <AsideEditInfo appeared={true} />
      </SxPaper>
    </FrFadeAnimation>
  )
}
