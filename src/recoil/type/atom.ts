import { atom } from 'recoil'
import _ from 'lodash'

export const isArray = (data: []) => Array.isArray(data)
// eslint-disable-next-line @typescript-eslint/ban-types
export const isObject = (data: object) => !isArray([]) && _.isObject(data)
export const isNull = (data: null) => data === null
export const isNumber = (data: number) => _.isNumber(data)
export const isString = (data: string) => _.isString(data)
export const isBoolean = (data: boolean) => _.isBoolean(data)

export enum DataType {
  Object = 'object',
  Array = 'array',
  String = 'string',
  Number = 'number',
  Boolean = 'boolean',
  Null = 'null',
}

export const dataTypeAtom = atom<DataType>({
  key: 'dataType',
  default: DataType.Object,
})

// const [dataType, setDataType] = useRecoilState(dataTypeAtom)
// const setDataType = useSetRecoilState(dataTypeAtom)
// const dataType  = useRecoilValue(dataTypeAtom)

// export const typeDeterminationSelector = selector<DataType>({
//   key: 'typeDetermination',
//   get: ({ get }) => {
//     const filter = get(dataTypeAtom)
//     const list = get(todoListState)

//     if (isNumber(value)) {
//       return DataType.Number
//     } else if (isString(value)) {
//       return DataType.String
//     } else if (isBoolean(value)) {
//       return DataType.Boolean
//     } else if (isNull(value)) {
//       return DataType.Null
//     } else if (isArray(value)) {
//       return DataType.Array
//     } else {
//       return DataType.Object
//     }
//   },
// })

// const [localJson, setLocalJson] = useRecoilState(localJsonSelector)
// const setLocalJson = useSetRecoilState(localJsonSelector)
// const localJson  = useRecoilValue(localJsonSelector)
