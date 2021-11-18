import Input from '@mui/material/Input'
// import * as React from 'react'

export default function FieldInput(value) {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     value: props.value,
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.value !== value) {
  //     this.setState({
  //       value: nextProps.value,
  //     })
  //   }
  // }

  // const [newValue, setNewValue] = React.useState('Cat in the Hat')
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setNewValue(event.target.value)
  // }

  const onKeyup = () => {
    // if (e.keyCode === 13) {
    //   if (e.target.value !== value) return
    // }
  }

  const handleBlur = () => {
    // if (e.target.value !== value) return
  }

  return <Input value={value} onKeyUp={onKeyup} onBlur={handleBlur} />
}
