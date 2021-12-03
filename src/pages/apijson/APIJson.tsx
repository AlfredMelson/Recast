import * as React from 'react'
import axios from 'axios'
import _ from 'lodash'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import Container from '@mui/material/Container'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
  apiDataAtom,
  apiFullResponseAtom,
  userToggledApiAtom,
  userSubmittedUrlAtom,
} from '../../recoil/api-json'
import { DataToggle, Searchbar } from '../../components/api-json'
import { DataDetails } from './DataDetails'
import { FullDetails } from './FullDetails'

export const APIJson = () => {
  const [showError, setShowError] = React.useState(false)

  // const userQuery = useRecoilValue(userQuerySelector)
  // state of user toggled api response
  const userToggledApi = useRecoilValue(userToggledApiAtom)
  // state when user submits user entered url
  const userSubmittedUrl = useRecoilValue(userSubmittedUrlAtom)
  // state of response.data returned from the api call
  const [apiData, setApiData] = useRecoilState(apiDataAtom)
  // state of full response returned from the api call
  const [apiFullResponse, setApiFullResponse] = useRecoilState(apiFullResponseAtom)
  // api request
  React.useEffect(() => {
    const apiDataFetch = async () => {
      const response = await axios.get(userSubmittedUrl)
      // const response = await fetch(userSubmittedUrl).then(res => res.json())
      setApiData(response.data)
      setApiFullResponse(response)
    }
    // test for url before invoking apiDataFetch
    if (userSubmittedUrl !== undefined) {
      apiDataFetch()
    }
  }, [userSubmittedUrl, setApiData, setApiFullResponse])

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
    const newObj = apiData
    newObj[key] = newValue
    setApiData(apiData)
  }
  // delete a property from the object
  const DeleteObj = key => {
    setApiData(_.omit(apiData, key))
  }

  return (
    <Box sx={{ my: 2, background: '#202124' }}>
      <Container maxWidth='lg'>
        <Box sx={{ my: 2 }}>
          <Searchbar />
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

        {userSubmittedUrl !== undefined && (
          <React.Fragment>
            <Box sx={{ mb: 1 }}>
              <DataToggle />
            </Box>
            {userToggledApi === 'data' ? (
              <DataDetails data={apiData} onDelete={DeleteObj} onEdit={EditObj} />
            ) : (
              <FullDetails data={apiFullResponse} />
            )}
          </React.Fragment>
        )}
      </Container>
    </Box>
  )
}
