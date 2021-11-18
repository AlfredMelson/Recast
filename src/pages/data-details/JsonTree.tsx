import * as React from 'react'
import axios from 'axios'
import _ from 'lodash'
import { Alert, Box, Collapse, Container } from '@mui/material'
import { DataDetails } from './DataDetails'
import { Searchbar } from './SearchBar'

export const JsonTree = () => {
  const [showError, setShowError] = React.useState(false)
  const [currentResource, setCurrentResource] = React.useState({})
  //loading initial resource
  const fetchInitDataResource = async () => {
    const result = await axios.get('https://random-data-api.com/api/users/random_user')
    setCurrentResource(result.data)
  }
  React.useEffect(() => {
    fetchInitDataResource()
  }, [])
  //update current resource
  const updateDataSource = async URL => {
    try {
      if (URL) {
        const result = await axios.get(URL)
        setCurrentResource(result.data)
      }
    } catch (e) {
      console.log(e)
      setShowError(true)
      setTimeout(() => {
        setShowError(false)
      }, 4000)
    }
  }
  const handleClose = (_event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setShowError(false)
  }
  // show error message
  // const sendErrorMessage = () => {

  //   if (showError)
  //     return (
  //       <Snackbar
  //         anchorOrigin={{
  //           vertical: 'top',
  //           horizontal: 'center',
  //         }}
  //         open={showError}
  //         autoHideDuration={6000}
  //         onClose={handleClose}>
  //         <Alert
  //           variant='outlined'
  //           elevation={6}
  //           onClose={handleClose}
  //           severity='error'
  //           sx={{ width: '100%', backgroundColor: '#000000' }}>
  //           URL provided is invalid
  //         </Alert>
  //       </Snackbar>
  //     )
  //   return
  // }
  // edit a property from the object
  const EditObj = (newValue, key) => {
    const newObj = currentResource
    newObj[key] = newValue
    setCurrentResource(currentResource)
  }
  // delete a property from the object
  const DeleteObj = key => {
    setCurrentResource(_.omit(currentResource, key))
  }

  return (
    <Box sx={{ my: 2 }}>
      <Container maxWidth='lg'>
        <Box sx={{ my: 2 }}>
          <Searchbar updateDataSource={updateDataSource} />
          <Collapse in={showError}>
            <Box sx={{ mt: 1, mb: 2 }}>
              <Alert
                variant='outlined'
                elevation={6}
                onClose={handleClose}
                severity='error'
                sx={{ width: '100%', backgroundColor: '#000000' }}>
                URL provided is invalid
              </Alert>
            </Box>
          </Collapse>
        </Box>
      </Container>
      <Container maxWidth='xl'>
        <DataDetails data={currentResource} onDelete={DeleteObj} onEdit={EditObj} />
      </Container>
    </Box>
  )
}
