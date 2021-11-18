import * as React from 'react'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import DeleteIcon from '@mui/icons-material/Delete'
import { DataLabel, getTypes, DataTypes } from '.'

interface objectState {
  value?: { [key: string]: any } | undefined
  dataKey: string | number
  dataType: string | undefined
  onEdit: (newVale: any, key: string | number) => void
  onDelete: (dataKey: string | number) => void
}

export const JsonObject: React.FC<objectState> = ({
  value,
  dataKey,
  dataType,
  onDelete,
}: objectState) => {
  const [col, setCol] = React.useState(true)
  const [keys, setKeys] = React.useState<string[]>([])
  const [currentValue, setCurrentValue] = React.useState<objectState['value']>({})
  React.useEffect(() => {
    setCurrentValue(value)
    setKeys(Object.keys(value ? value : ''))
  }, [value])
  const EditOneProperty = (newValue: any, key: string | number): void => {
    const newObj: { [key: string]: any } | undefined = { ...currentValue }
    newObj[key] = newValue
    setCurrentValue(newObj)
  }
  const DeleteOneProperty = (key: any): void => {
    const newObj: { [key: string]: any } = { ...currentValue }
    // newObj = _.omit(currentValue, key);
    currentValue ? delete newObj[key] : ''
    newObj ? setCurrentValue(newObj) : ''
    newObj ? setKeys(Object.keys(newObj)) : ''
  }

  const renderObject = () => {
    return keys.map((k: string, i: number) => {
      return (
        <DataTypes
          key={i}
          dataType={currentValue ? getTypes(currentValue[k]) : ''}
          dataValue={currentValue ? currentValue[k] : ''}
          dataKey={k}
          onEdit={EditOneProperty}
          onDelete={DeleteOneProperty}
        />
      )
    })
  }
  const renderObjContent = () => {
    if (col)
      return (
        <div style={{ padding: 5, marginLeft: 6 }}>
          <div onClick={toggleObj}>
            <PlayCircleFilledIcon
              onClick={toggleObj}
              className='collapseIcon'
              style={{ cursor: 'pointer', height: 16, color: '#3c8dad', marginTop: 5 }}
            />
            <span>"{dataKey}"</span>

            <span>:</span>
            <span style={{ fontWeight: 'bold', paddingLeft: 5 }}>{'{'}</span>
            <span>
              <DeleteIcon
                style={{ cursor: 'pointer', color: 'rgb(184, 59, 59)' }}
                className='deleteIcon'
                onClick={() => {
                  onDelete(dataKey)
                }}
              />

              {/* <CancelIcon className='cancelIcon'style={{cursor: 'pointer'}} /> */}
            </span>
            <DataLabel type={dataType ? dataType : ''} />
          </div>
          <div style={{ paddingLeft: 12 }}>
            {renderObject()}
            <div>
              <span style={{ fontWeight: 'bold' }}>{'}'}</span>
            </div>
          </div>
        </div>
      )
    return (
      <div style={{ padding: 5, marginLeft: 6 }}>
        <div>
          <PlayCircleFilledIcon
            onClick={toggleObj}
            className='collapseIcon'
            style={{ cursor: 'pointer', height: 16, color: '#3c8dad', marginTop: 5 }}
          />
          "{dataKey}
          ":
          <span style={{ fontWeight: 'bold' }}>
            {'{'}
            <DataLabel type={dataType ? dataType : ''} />
          </span>
          <span style={{ color: 'gray' }}>{keys.length} items</span>
          <span style={{ fontWeight: 'bold' }}>{'}'}</span>
        </div>
      </div>
    )
  }
  const toggleObj = () => {
    // setCurrentValue(currentValue);
    setCol(!col)
  }
  return renderObjContent()
}
