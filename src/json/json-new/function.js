/**
 * Build document using recursion
 * @param {Object|Array} value Input value
 * @param {Number} maximumLevel Process only to max level, where 0..n, -1 unlimited
 * @param {Number} nodeLevel Current level of node
 */

export function Walk(value, maximumLevel, nodeLevel) {
  const fragment = new DocumentFragment()
  const isMaximumLevel = maximumLevel >= 0 && nodeLevel >= maximumLevel

  switch (typeof value) {
    case 'object':
      if (value) {
        const isArray = Array.isArray(value)
        const items = isArray ? value : Object.keys(value)

        if (items.length && !isMaximumLevel) {
          // let len = items.length - 1
          const ParentTreeItem = document.createElement('ul')

          // Data Level Attribute
          ParentTreeItem.setAttribute('data-level', nodeLevel)

          // nodeIdAttribute

          ParentTreeItem.setAttribute('nodeId', nodeLevel)

          // ID Attribute
          // ParentTreeItem.setAttribute('id', isArray ? 'array' : 'object')

          // items.forEach(function (key, ind) {
          items.forEach(function (key) {
            const item = isArray ? key : value[key]
            const TreeItem = document.createElement('li')

            if (typeof item === 'object') {
              // null && date
              if (!item || item instanceof Date) {
                TreeItem.appendChild(document.createTextNode(isArray ? '' : key))

                TreeItem.appendChild(CreateSpanElement(item ? item : null))
              }
              // array &amp; object
              else {
                const itemIsArray = Array.isArray(item)
                const itemLength = itemIsArray ? item.length : Object.keys(item).length

                // empty
                if (!itemLength) {
                  TreeItem.appendChild(document.createTextNode(key + (itemIsArray ? ' []' : ' {}')))
                } else {
                  // 1+ items
                  const itemTitle =
                    (typeof key === 'string' ? key : '') + (itemIsArray ? '[]' : '{}')

                  const itemLink = GroupCount(itemLength)

                  // maximumLevel - only text, no link
                  if (maximumLevel >= 0 && nodeLevel + 1 >= maximumLevel) {
                    TreeItem.appendChild(document.createTextNode(itemTitle))
                  } else {
                    // itemLink.appendChild(itemsCount)
                    TreeItem.appendChild(itemLink)
                  }
                  TreeItem.appendChild(Walk(item, maximumLevel, nodeLevel + 1))
                }
              }
            }
            // simple values
            else {
              // object keys with key:
              if (!isArray) {
                TreeItem.appendChild(document.createTextNode(key))
              }
              TreeItem.appendChild(Walk(item, maximumLevel, nodeLevel + 1))
            }

            ParentTreeItem.appendChild(TreeItem)
          }, this)

          fragment.appendChild(ParentTreeItem)
        }

        break
      }

    default:
      // simple values
      fragment.appendChild(CreateSpanElement(value))
      break
  }

  return fragment
}

/**
 * Create element to hold value of key
 * @param  {Number|String|null|undefined|Date} value Input value
 * @return {Element}
 */
export function CreateSpanElement(value) {
  const spanElement = document.createElement('span')
  let type = typeof value
  let txt = value

  if (type === typeof 'string') {
    txt = value
  } else if (value === null) {
    // type = 'null'
    txt = 'null'
  } else if (value === undefined) {
    txt = 'undefined'
  } else if (value instanceof Date) {
    type = 'date'
    txt = value.toString()
  }

  spanElement.setAttribute('className', 'type-' + type)
  spanElement.innerHTML = txt

  return spanElement
}

/**
 * Create summary element
 * @param  {Number} count Items count
 * @return {Element}
 */
export function GroupCount(count) {
  const metaElement = document.createElement('meta')

  metaElement.innerHTML = ItemsCount(count)

  return metaElement
}

/**
 * Items title with count
 * @param  {Number} count Items count
 * @return {String}
 */
export function ItemsCount(count) {
  const itemsCountText = count > 1 || count === 0 ? 'items' : 'item'

  return count + ' ' + itemsCountText
}
