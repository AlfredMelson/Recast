/**
 * Process input JSON - throws exception for unrecognized input.
 *
 * @param {Object|Array} json Input value
 * @return {Object|Array}
 */
export function ProcessInput(json) {
  if (json && typeof json === 'object') {
    return json
  } else {
    throw 'Input value is not object or array!'
  }
}

/**
 * Recursive walk for input value.
 * @param {Object|Array} value Input value
 * @param {Number} maxLvl Process only to max level, where 0..n, -1 unlimited
 * @param {Number} colAt Collapse at level, where 0..n, -1 unlimited
 * @param {Number} lvl Current level
 */

// export function Walk(value, maxLvl, colAt, lvl) {
//   var frag = document.createDocumentFragment()
//   var isMaxLvl = maxLvl >= 0 && lvl >= maxLvl
//   // var isCollapse = colAt >= 0 && lvl >= colAt

//   switch (typeof value) {
//     case 'object':
//       if (value) {
//         var isArray = Array.isArray(value)
//         var items = isArray ? value : Object.keys(value)

//         if (lvl === 0) {
//           // root level
//           // var rootCount = GroupItemsCount(items.length)
//           // hide/show
//           // var rootLink = GroupCount(items.length)
//           //   if (items.length) {
//           //     rootLink.addEventListener(
//           //       'click',
//           //       function () {
//           //         if (isMaxLvl) return
//           //         rootLink.classList.toggle('collapsed')
//           //         rootCount.classList.toggle('hide')
//           //         // main list
//           //         this._dom.container.querySelector('ul').classList.toggle('hide')
//           //       }.bind(this)
//           //     )
//           //     if (isCollapse) {
//           //       rootLink.classList.add('collapsed')
//           //       rootCount.classList.remove('hide')
//           //     }
//           //   } else {
//           //     rootLink.classList.add('empty')
//           //   }
//           // console.log('rootLink: ', rootLink)
//           // rootLink.appendChild(rootCount)
//           // frag.appendChild(rootLink)
//         }

//
// POINT 1
//

//         if (items.length && !isMaxLvl) {
//           // var len = items.length - 1
//           var ParentTreeItem = document.createElement('ul')

//           // Data Level Attribute
//           ParentTreeItem.setAttribute('data-level', lvl)

//           // nodeIdAttribute
//           ParentTreeItem.setAttribute('nodeId', lvl)

//           // ID Attribute
//           ParentTreeItem.setAttribute('id', isArray ? 'array' : 'object')
//           //   ParentTreeItem.classList.add(isArray ? 'array' : 'object')

//
// POINT 2
//

//           // items.forEach(function (key, ind) {
//           items.forEach(function (key) {
//             var item = isArray ? key : value[key]
//             var TreeItem = document.createElement('li')

//             if (typeof item === 'object') {
//               // null && date
//               if (!item || item instanceof Date) {
//                 // Document.createTextNode()
//                 // Creates a new Text node. This methodis used to name the 'TreeItem'
//                 TreeItem.appendChild(document.createTextNode(isArray ? '' : key + ': '))
//                 // example: "Session: "
//                 console.log(
//                   'document.createTextNode: ',
//                   document.createTextNode(isArray ? '' : key)
//                 )

//
// POINT 3
//

//                 TreeItem.appendChild(CreateSimple(item ? item : null, key))
//                 // <span class="type-null">null</span>
//                 console.log('CreateSimple: ', CreateSimple(item ? item : null, key))
//               }
//               // array &amp; object
//               else {
//                 var itemIsArray = Array.isArray(item)
//                 var itemLength = itemIsArray ? item.length : Object.keys(item).length

//                 // empty
//                 if (!itemLength) {
//                   TreeItem.appendChild(
//                     document.createTextNode(key + ': ' + (itemIsArray ? '[]' : '{}'))
//                   )
//                 } else {
//                   // 1+ items
//                   var itemTitle = (typeof key === 'string' ? key : '') + (itemIsArray ? '[]' : '{}')

//                   var itemLink = GroupCount(itemLength)
//                   // var itemsCount = GroupItemsCount(itemLength)

//
// POINT 4
//

//                   // maxLvl - only text, no link
//                   if (maxLvl >= 0 && lvl + 1 >= maxLvl) {
//                     TreeItem.appendChild(document.createTextNode(itemTitle))
//                   } else {
//                     // itemLink.appendChild(itemsCount)
//                     TreeItem.appendChild(itemLink)
//                   }

//                   TreeItem.appendChild(Walk(item, maxLvl, colAt, lvl + 1))
//                   // TreeItem.appendChild(document.createTextNode(itemIsArray ? ']' : '}'))

//                   // var list = TreeItem.querySelector('li')
//                   // var itemLinkCb = function () {
//                   //   itemLink.classList.toggle('collapsed')
//                   //   itemsCount.classList.toggle('hide')
//                   //   list.classList.toggle('hide')
//                   // }

//                   // hide/show
//                   // itemLink.addEventListener('click', itemLinkCb)

//                   // collapse lower level
//                   // if (colAt >= 0 && lvl + 1 >= colAt) {
//                   //   itemLinkCb()
//                   // }
//                 }
//               }
//             }
//             // simple values
//             else {
//               // object keys with key:
//               if (!isArray) {
//                 TreeItem.appendChild(document.createTextNode(key))
//               }

//               // recursive
//               TreeItem.appendChild(Walk(item, maxLvl, colAt, lvl + 1))
//             }

//             // add comma to the end
//             // if (ind < len) {
//             //   li.appendChild(document.createTextNode(','))
//             // }

//             ParentTreeItem.appendChild(TreeItem)
//           }, this)

//           frag.appendChild(ParentTreeItem)
//         }
//         // else if (items.length && isMaxLvl) {
//         //   var itemsCount = GroupItemsCount(items.length)
//         //   itemsCount.classList.remove('hide')

//         //   frag.appendChild(itemsCount)
//         // }

//         if (lvl === 0) {
//           // empty root
//           // if (!items.length) {
//           //   var itemsCount = GroupItemsCount(0)
//           //   itemsCount.classList.remove('hide')
//           //   frag.appendChild(itemsCount)
//           // }
//           // root cover
//           //   frag.appendChild(document.createTextNode(isArray ? ']' : '}'))
//           // collapse
//           // if (isCollapse) {
//           //   frag.querySelector('ul').classList.add('hide')
//           // }
//         }
//         break
//       }

//     default:
//       // simple values
//       frag.appendChild(CreateDefault(value))
//       break
//   }

//   return frag
// }

// /**
//  * Create simple value (no object|array).
//  * @param  {Number|String|null|undefined|Date} value Input value
//  * @return {Element}
//  */
// export function CreateSimple(value, key) {
//   var spanEl = document.createElement('span')
//   var pairedkey = key
//   var type = typeof value
//   var txt = value

//   if (type === typeof 'string') {
//     txt = value
//   } else if (value === null) {
//     // type = 'null'
//     txt = 'null'
//   } else if (value === undefined) {
//     txt = 'undefined'
//   } else if (value instanceof Date) {
//     type = 'date'
//     txt = value.toString()
//   }

//   // spanEl.classList.add('type-' + type)
//   spanEl.setAttribute('className', 'type-' + type)
//   spanEl.setAttribute('id', pairedkey)
//   spanEl.innerHTML = txt

//   return spanEl
// }
// /**
//  * Create simple value (no object|array).
//  * @param  {Number|String|null|undefined|Date} value Input value
//  * @return {Element}
//  */
// export function CreateDefault(value) {
//   var spanEl = document.createElement('span')
//   var type = typeof value
//   var txt = value

//   if (type === typeof 'string') {
//     txt = value
//   } else if (value === null) {
//     // type = 'null'
//     txt = 'null'
//   } else if (value === undefined) {
//     txt = 'undefined'
//   } else if (value instanceof Date) {
//     type = 'date'
//     txt = value.toString()
//   }

//   // spanEl.classList.add('type-' + type)
//   spanEl.setAttribute('className', 'type-' + type)
//   // spanEl.setAttribute('id', key)
//   spanEl.innerHTML = txt

//   return spanEl
// }

// /**
//  * Create items count element.
//  * @param  {Number} count Items count
//  * @return {Element}
//  */
// export function GroupItemsCount(count) {
//   var itemsCount = document.createElement('span')
//   // itemsCount.classList.add('items-ph')
//   // itemsCount.classList.add('hide')
//   itemsCount.innerHTML = ItemsCount(count)
//   return itemsCount
// }

// /**
//  * Create clickable link.
//  * @param  {Number} count Items count
//  * @return {Element}
//  */
// export function GroupCount(count) {
//   var metaEl = document.createElement('meta')
//   // metaEl.classList.add('list-link')
//   // metaEl.href = 'javascript:void(0)'
//   // metaEl.innerHTML = title || ''
//   metaEl.innerHTML = ItemsCount(count)

//   // metaEl.setAttribute('nodeId', title || '') // FIX concat parent nodeID with child nodeID
//   // metaEl.setAttribute('label', title || '')

//   return metaEl
// }

// /**
//  * Get correct items title for count.
//  * @param  {Number} count Items count
//  * @return {String}
//  */
// export function ItemsCount(count) {
//   var itemsTxt = count > 1 || count === 0 ? 'items' : 'item'

//   return count + ' ' + itemsTxt
// }
