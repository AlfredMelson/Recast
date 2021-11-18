import * as React from 'react'
import TreeView from '@mui/lab/TreeView'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
// import { TreeItem } from '@mui/lab'
import testJson from '../../data/sample.json'
import { Path } from '../../editor/types'
// import MUITreeView from './MUITreeView'
// import MUITreeViewMeta from './MUITreeViewMeta'
// import MUITreeViewSpan from './MUITreeViewSpan'

type RenderComponentTypes = {
  userData: any
  maxLvl: number // Process only to max level, where 0..n, -1 unlimited
  nLvl: number //Current level of node
  path?: Path
  insert?: boolean
}

function RenderComponent({ userData, maxLvl, nLvl }: RenderComponentTypes) {
  const data = userData
  const maximumLevel = maxLvl
  const nodeLevel = nLvl
  // const newArr = []

  const isMaximumLevel = maximumLevel >= 0 && nodeLevel >= maximumLevel
  // console.log('ReactFunction maximumLevel: ', maximumLevel)
  // console.log('ReactFunction nodeLevel: ', nodeLevel)
  // console.log('ReactFunction isMaximumLevel: ', isMaximumLevel)

  // Json Data Tests
  const jsonDataTest = data
  // console.log('jsonDataTestA: ', jsonDataTestA)
  // const jsonDataTestB = Object.keys(data)
  // console.log('jsonDataTestB: ', jsonDataTestB)
  // const jsonDataTestC = data[0]
  // console.log('jsonDataTestC: ', jsonDataTestC)
  // const jsonDataTestD = Object.keys(data[0])
  // console.log('jsonDataTestD: ', jsonDataTestD)

  // useState Hooks
  // const [muiElement, setMuiElement] = React.useState<string>('ui')

  const [eleClassName, setEleClassName] = React.useState('')
  console.log('USESTATE eleClassName ', eleClassName)

  const [dataLevel, setDataLevel] = React.useState<number>(nodeLevel)
  console.log('USESTATE dataLevel ', dataLevel)

  const [eleNodeId, setEleNodeId] = React.useState<number>(nodeLevel)
  console.log('USESTATE eleNodeId ', eleNodeId)

  const [eleId, setEleId] = React.useState<string>('')
  console.log('USESTATE eleId ', eleId)

  const [textNode, setTextNode] = React.useState<string>()
  console.log('USESTATE textNode ', textNode)

  const [rootCount, setRootCount] = React.useState<number>()
  console.log('USESTATE rootCount ', rootCount)

  // const [itemsCounted, setItemsCounted] = React.useState<number>()
  // console.log('USESTATE itemsCounted ', itemsCounted)

  // const [itemLinked, setItemLinked] = React.useState<number>()
  // console.log('USESTATE itemLinked ', itemLinked)

  switch (typeof jsonDataTest) {
    case 'object':
      if (jsonDataTest) {
        const isArray = Array.isArray(jsonDataTest)

        const items = isArray ? jsonDataTest : Object.keys(jsonDataTest)
        console.log('ReactFunction items: ', items)
        // console.log('ReactFunction Object.keys(value): ', Object.keys(data))
        // console.log('ReactFunction value: ', data)
        // console.log('ReactFunction isArray: ', isArray)
        // console.log('ReactFunction items: ', items)

        if (nodeLevel === 0) {
          // root level
          setRootCount(GroupItemsCount(items.length))
        }

        if (items.length && !isMaximumLevel) {
          const len = items.length - 1
          console.log('ReactFunction len: ', len)

          // Element className Attribute
          setEleClassName('type-' + (isArray ? 'array' : 'object'))
          // Data Level Attribute
          setDataLevel(nodeLevel)
          // nodeIdAttribute
          setEleNodeId(nodeLevel)
          // ID Attribute
          setEleId(isArray ? 'array' : 'object')

          items.forEach(function (key) {
            const item = isArray ? key : jsonDataTest[key]

            if (typeof item === 'object') {
              // null && date
              if (!item || item instanceof Date) {
                // Document.createTextNode()
                // Creates a new Text node. This methodis used to name the 'TreeItem'
                // TreeItem.appendChild(document.createTextNode(isArray ? '' : key))

                // example: "Session: "
                setTextNode(isArray ? '' : key)
                CreateSimpleValue(item ? item : null)
              }

              // array &amp; object
              else {
                const itemIsArray = Array.isArray(item)
                const itemLength = itemIsArray ? item.length : Object.keys(item).length

                // empty
                if (!itemLength) {
                  setTextNode(key + (itemIsArray ? '[]' : '{}'))
                } else {
                  // maximumLevel - only text, no link
                  if (maximumLevel < 0 && nodeLevel + 1 < maximumLevel) {
                    createItemsCount(itemLength)
                  }

                  // appendChild
                  return (
                    <RenderComponent userData={item} maxLvl={maximumLevel} nLvl={nodeLevel + 1} />
                  )
                }
              }
            }
            // simple values
            else {
              // object keys with key:
              if (!isArray) {
                setTextNode(key)
              }

              // recursive userData, maxLvl, nLvl
              return <RenderComponent userData={item} maxLvl={maximumLevel} nLvl={nodeLevel + 1} />
            }
            // const TreeItem = document.createElement('li')
          })
          // frag.appendChild(ulList)
        } else if (items.length && isMaximumLevel) {
          createItemsCount(items.length)
        }

        if (nodeLevel === 0) {
          // empty root
          if (!items.length) {
            createItemsCount(0)
          }
        }
        return
      }

    // return CreateSimpleValue(item)
  }
  return <>test</>
}

/**
 * Create simple value (no object|array).
 *
 * @param  {Number|String|null|undefined|Date} value Input value
 * @return {Element}
 */
function CreateSimpleValue(value) {
  const [eleClassName, setEleClassName] = React.useState('')

  const [eleText, setEleText] = React.useState<string>('')
  console.log('CreateSimpleValue eleText ', eleText)
  const type = typeof value
  let result = value

  if (type === 'string') {
    result = '"' + value + '"'
  } else if (value === null) {
    result = null
  } else if (value === undefined) {
    result = 'undefined'
  } else if (value instanceof Date) {
    result = value.toString()
  }

  setEleClassName('type-' + type)
  setEleText(result)

  return <span className={eleClassName}>{eleText}</span>
}
const TestTest = CreateSimpleValue('test string')
console.log('CreateSimpleValue ', TestTest)

/**
 * Create items count element.
 * @param  {Number} count Items count
 * @return {Element}
 */
export function GroupItemsCount(count) {
  const itemsCount = count
  // itemsCount.classList.add('items-ph')
  // itemsCount.classList.add('hide')
  // itemsCount.innerHTML = ItemsCount(count)
  return itemsCount
}

// function GroupCount(count) {
//   const itemsCountText = count > 1 || count === 0 ? 'items' : 'item'
//   const ItemsCount = count + ' ' + itemsCountText

//   return createElement(MUITreeViewMeta, {
//     title: ItemsCount,
//     length: count,
//   })
// }

/**
 * Create items count element.
 *
 * @param  {Number} count Items count
 * @return {Element}
 */
function createItemsCount(count) {
  const itemsCount = document.createElement('span')
  itemsCount.classList.add('items-ph')
  itemsCount.classList.add('hide')
  itemsCount.innerHTML = this._getItemsTitle(count)

  return itemsCount
}

export default function JsonNavigator() {
  // const [jsonData, setJsonData] = React.useState({})

  // React.useEffect(() => {
  //   const project = testJson
  //   setJsonData(project)
  //   return
  // }, [])

  return (
    <TreeView
      aria-label='file system navigator'
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <RenderComponent userData={testJson} maxLvl={-1} nLvl={-1} />
    </TreeView>
  )
}
