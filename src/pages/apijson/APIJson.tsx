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
  apiFullAtom,
  apiSelectorAtom,
  userSubmittedUrlAtom,
} from '../../recoil/api-json/atom'
import { SxToggle } from '../../components/sx/SxToggle'
import { DataDetails } from './DataDetails'
import { Searchbar } from './SearchBar'
import { FullDetails } from './FullDetails'

export const APIJson = () => {
  const [showError, setShowError] = React.useState(false)

  // const userQuery = useRecoilValue(userQuerySelector)

  const apiSelector = useRecoilValue(apiSelectorAtom)
  console.log('apiSelector', apiSelector)

  //resource stored as Recoil default
  const userSubmittedUrl = useRecoilValue(userSubmittedUrlAtom)
  //api response stored in recoil
  const [apiData, setApiData] = useRecoilState(apiDataAtom)
  //api response stored in recoil
  const [apiFull, setApiFull] = useRecoilState(apiFullAtom)
  //api request
  React.useEffect(() => {
    const apiDataFetch = async () => {
      const response = await axios.get(userSubmittedUrl)
      setApiData(response.data)
      setApiFull(response)
    }
    //test for url before invoking apiDataFetch
    if (userSubmittedUrl !== undefined) {
      apiDataFetch()
    }
  }, [userSubmittedUrl, setApiData, setApiFull])

  //update current resource
  // const updateDataSource = async URL => {
  //   try {
  //     if (URL) {
  //       const response = await axios.get(URL)
  //       setApiData(response.data)
  //     }
  //   } catch (e) {
  //     console.log(e)
  //     setShowError(true)
  //     setTimeout(() => {
  //       setShowError(false)
  //     }, 4000)
  //   }
  // }

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
      </Container>
      <Container maxWidth='xl'>
        {userSubmittedUrl !== undefined && (
          <React.Fragment>
            <Box sx={{ mb: 1 }}>
              <SxToggle />
            </Box>

            {apiSelector === 'data' ? (
              <DataDetails data={apiData} onDelete={DeleteObj} onEdit={EditObj} />
            ) : (
              <FullDetails data={apiFull} />
            )}
          </React.Fragment>
        )}
      </Container>
    </Box>
  )
}
