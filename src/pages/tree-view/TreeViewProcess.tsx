// import * as React from 'react'

export function GetNestedChildren(arr, guardian) {
  const nestOutput = []
  for (const i in arr) {
    if (arr[i].parent == guardian) {
      const descendant = GetNestedChildren(arr, arr[i].name)

      if (descendant.length) {
        arr[i].children = descendant
      }
      nestOutput.push(arr[i])
    }
  }
  return nestOutput
}

export function DestObjects(object) {
  const expandedId = []
  // push first number to account for Parent object
  expandedId.push('1')
  // increament id
  const increamentIdCount = (n => {
    return function () {
      n += 1
      expandedId.push(n.toString())
      return n
    }
  })(1)

  const objOutput = []

  const objProps = function (obj, parent) {
    //
    const isObject = function (val) {
      if (val === null) {
        return false
      }
      return typeof val === 'object'
    }
    for (const val in obj) {
      const node = increamentIdCount()
      if (isObject(obj[val])) {
        objOutput.push({
          id: node.toString(),
          parent: parent,
          name: val,
        })
        objProps(obj[val], val)
      } else {
        objOutput.push({
          id: node.toString(),
          name: val,
          parent: parent,
          // value: obj[val],
        })
      }
    }
  }

  objProps(object, undefined)

  const objectsDestructured = { objOutput, expandedId }
  return objectsDestructured
}

// interface ProcessTypes {
//   objOutput: any[]
//   nestOutput: any[]
//   expandedId: any[]
// }

// export default function Process(userData: any) {
//   const [destUserData, setDestUserData] = React.useState<string[]>()
//   const [userDataIds, setUserDataIds] = React.useState<string[]>()
//   const [processedData, setProcessedData] = React.useState<string[]>()

//   React.useEffect(() => {
//     const initProcessing = DestObjects(userData)
//     setDestUserData(initProcessing.objOutput)
//     setUserDataIds(initProcessing.expandedId)
//     const secProcessing = GetNestedChildren(destUserData, undefined)
//     setProcessedData(secProcessing)
//     return
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [userData])

//   // function getNestedChildren(arr, guardian) {
//   //   for (const i in arr) {
//   //     if (arr[i].guardian == guardian) {
//   //       const descendant = getNestedChildren(arr, arr[i].name)

//   //       if (descendant.length) {
//   //         arr[i].children = descendant
//   //       }
//   //       grouped.push(arr[i])
//   //     }
//   //   }
//   //   return
//   // }

//   // async function dataProcessing(data) {
//   //   const initStep = objProps(data, undefined)
//   //   console.log('initStep**', initStep)
//   //   const secStep = getNestedChildren(initStep, undefined)
//   //   console.log('secStep**', secStep)
//   //   const values = await Promise.all(secStep)
//   //   console.log('values**', values)
//   //   return values
//   // }

//   // const processed = dataProcessing(userData).catch(e => {
//   //   console.log('There has been a problem with your processing: ' + e.message)
//   // })
//   // console.log('processed**', processed)

//   const results = { destUserData, processedData, userDataIds }

//   return results
// }
