import * as React from 'react'
import { DataDetails } from './DataDetails'

interface IState {
  resource?: { [key: string]: any } | undefined
}

// export const Yachaoxiong: React.FC<IState> = ({ resource }) => {
export const Yachaoxiong: React.FC<IState> = () => {
  const [currentResource, setCurrentResource] = React.useState<IState['resource']>({})
  React.useEffect(() => {
    setCurrentResource(['https://random-data-api.com/api/users/random_user'])
  }, [])

  // edit a property from the object
  const EditObj = (newValue: any, key: any): void => {
    const newObj: IState['resource'] = { ...currentResource }
    newObj[key] = newValue
    setCurrentResource(newObj)
  }
  // delete a property from the object
  const DeleteObj = (key: string | number): void => {
    const currentValue: IState['resource'] = { ...currentResource }
    delete currentValue[key]
    // _.omit(currentResource, key)
    setCurrentResource(currentValue)
  }

  return (
    <div style={{ fontFamily: 'monospace' }} className='appContainer'>
      <DataDetails data={currentResource} onDelete={DeleteObj} onEdit={EditObj} />
    </div>
  )
}
