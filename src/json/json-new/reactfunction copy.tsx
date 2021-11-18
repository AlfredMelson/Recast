export function ProcessInput(json) {
  if (json && typeof json === 'object') {
    return json
  } else {
    throw 'Input value is not object or array!'
  }
}

// import { createElement } from 'react'
// import MUITreeView from './MUITreeView'
// import MUITreeViewMeta from './MUITreeViewMeta'
// import MUITreeViewSpan from './MUITreeViewSpan'

// // const keysToComponentMap = {
// //   ui: MUITreeView,
// //   li: MUITreeView,
// // }

// // const stylesMap = styles => {
// //   let mappedStyles = {}
// //   styles.forEach(style => {
// //     mappedStyles[style.name] = style.value
// //   })
// //   return mappedStyles
// // }

// export function RenderComponent(
//   value: Record<string, unknown> | Array<any>, //Input value
//   maximumLevel: number, // Process only to max level, where 0..n, -1 unlimited
//   nodeLevel: number //Current level of node
// ) {
//   const isMaximumLevel = maximumLevel >= 0 && nodeLevel >= maximumLevel
//   // const [textNode, setTextNode] = React.useState()

//   switch (typeof value) {
//     case 'object':
//       if (value) {
//         const isArray = Array.isArray(value)
//         const items = isArray ? value : Object.keys(value)

//         console.log('ReactFunction value: ', value)
//         console.log('ReactFunction isArray: ', isArray)
//         console.log('ReactFunction items: ', items)

//         if (items.length && !isMaximumLevel) {
//           // let len = items.length - 1
//           // const ParentTreeItem = document.createElement('ul')
//           // Data Level Attribute
//           // ParentTreeItem.setAttribute('data-level', nodeLevel)
//           // nodeIdAttribute
//           // ParentTreeItem.setAttribute('nodeId', nodeLevel)
//           // ID Attribute
//           // ParentTreeItem.setAttribute('id', isArray ? 'array' : 'object')

//           // items.forEach(function (key, ind) {
//           items.forEach(function (key) {
//             const item = isArray ? key : value[key]
//             console.log('ReactFunction item: ', item)

//             if (typeof item === 'object') {
//               // null && date
//               if (!item || item instanceof Date) {
//                 // TreeItem.appendChild(document.createTextNode(isArray ? '' : key))
//                 // setTextNode(isArray ? '' : key)

//                 // TreeItem.appendChild(CreateSpanElement(item ? item : null))
//                 return createElement(MUITreeViewSpan, {
//                   value: value,
//                   // className: className ? className : null,
//                   // ariaHidden: ariaHidden ? ariaHidden : null,
//                 })
//               }
//               // array &amp; object
//               else {
//                 const itemIsArray = Array.isArray(item)
//                 const itemLength = itemIsArray ? item.length : Object.keys(item).length

//                 // empty
//                 if (!itemLength) {
//                   // TreeItem.appendChild(document.createTextNode(key + (itemIsArray ? ' []' : ' {}')))
//                   // setTextNode(key + (itemIsArray ? ' []' : ' {}'))
//                 } else {
//                   // 1+ items
//                   const itemTitle =
//                     (typeof key === 'string' ? key : '') + (itemIsArray ? '[]' : '{}')
//                   console.log('ReactFunction itemTitle: ', itemTitle)

//                   const itemLink = GroupCount(itemLength)
//                   console.log('ReactFunction itemLink: ', itemLink)

//                   // maximumLevel - only text, no link
//                   if (maximumLevel >= 0 && nodeLevel + 1 >= maximumLevel) {
//                     // TreeItem.appendChild(document.createTextNode(itemTitle))
//                     // setTextNode(itemTitle)
//                     console.log('ReactFunction maximumLevel: ', maximumLevel)
//                     console.log('ReactFunction nodeLevel: ', nodeLevel)
//                   } else {
//                     // itemLink.appendChild(itemsCount)
//                     // TreeItem.appendChild(itemLink)
//                   }
//                   return RenderComponent(item, maximumLevel, nodeLevel + 1)
//                 }
//               }
//             }
//             // simple values
//             else {
//               // object keys with key:
//               if (!isArray) {
//                 // TreeItem.appendChild(document.createTextNode(key))
//                 // setTextNode(key)
//               }
//               return RenderComponent(item, maximumLevel, nodeLevel + 1)
//             }

//             return createElement(MUITreeView, {
//               id: key,
//               key: key,
//               dataLevel: nodeLevel,
//               nodeId: nodeLevel,
//               // className: className ? className : null,
//               // ariaHidden: ariaHidden ? ariaHidden : null,
//             })
//           })

//           return createElement(MUITreeView, {
//             id: value,
//             // key: value,
//             dataLevel: nodeLevel,
//             nodeId: nodeLevel,
//             // className: className ? className : null,
//             // ariaHidden: ariaHidden ? ariaHidden : null,
//           })
//         }
//       }

//       return createElement(MUITreeViewSpan, {
//         value: value,
//         // className: className ? className : null,
//         // ariaHidden: ariaHidden ? ariaHidden : null,
//       })
//   }
// }

// console.log('ReactFunction RenderComponent: ', RenderComponent)

// /**
//  * Create summary element
//  * @param  {Number} count Items count
//  * @return {Element}
//  */
// export function GroupCount(count) {
//   const itemsCountText = count > 1 || count === 0 ? 'items' : 'item'
//   const ItemsCount = count + ' ' + itemsCountText

//   return createElement(MUITreeViewMeta, {
//     title: ItemsCount,
//     length: count,
//     // dataLevel: nodeLevel,
//     // nodeId: nodeLevel,
//     // className: className ? className : null,
//     // ariaHidden: ariaHidden ? ariaHidden : null,
//   })
// }

// /**
//  * Items title with count
//  * @param  {Number} count Items count
//  * @return {String}
//  */
// export function ItemsCount(count) {
//   const itemsCountText = count > 1 || count === 0 ? 'items' : 'item'

//   return count + ' ' + itemsCountText
// }
