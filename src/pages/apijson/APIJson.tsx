import * as React from 'react'
import axios from 'axios'
import _ from 'lodash'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Paper, Typography } from '@mui/material'
import {
  apiDataAtom,
  userToggledApiAtom,
  userSubmittedUrlAtom,
  apiFullResponseAtom,
  userQuerySelector,
} from '../../recoil/api-json/atom'
import { DataToggle, Searchbar } from '../../components/api-json'
// import { ApiFallback } from '../../components/action/ApiFallback'
import DownloadInfo from '../../components/action/DownloadInfo'
import { EditRequest } from './display/EditRequest'
import { FullRequest } from './display/FullRequest'
import { DataRequest } from './display/DataRequest'
import { TsDetails } from './display/TsDetails'
// import Alert from '@mui/material/Alert'
// import Collapse from '@mui/material/Collapse'
// import Snackbar from '@mui/material/Snackbar'

export const APIJson = () => {
  // const [showError, setShowError] = React.useState(false)
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
      console.log('AXIOS response', response)
      // const response = await fetch(userSubmittedUrl).then(res => res.json())
      // setApiData(response.data)
      setApiFullResponse(response)
    }
    // test for url before invoking apiDataFetch
    if (userSubmittedUrl !== undefined) {
      apiDataFetch()
    }
  }, [userSubmittedUrl, setApiData, setApiFullResponse])

  // state of query
  const userQuery = useRecoilValue(userQuerySelector)
  // api request
  React.useEffect(() => {
    const apiDataFetch = async () => {
      const response = await userQuery
      console.log('RECOIL response', response)
      if (response !== undefined) {
        setApiData(response)
        // setApiFullResponse(response)
      } else return
    }
    // test for url before invoking apiDataFetch
    if (userQuery !== undefined) {
      apiDataFetch()
    }
  }, [setApiData, userQuery])

  // response from user typed url
  // const userQuery = useRecoilValue(userQuerySelector)
  // recoil Loadable
  // function UserInfo({ userID }) {
  //   const userNameLoadable = useRecoilValueLoadable(userNameQuery(userID))
  //   switch (userNameLoadable.state) {
  //     case 'hasValue':
  //       return userNameLoadable.contents
  //     case 'loading':
  //       return <div>Loading...</div>
  //     case 'hasError':
  //       throw userNameLoadable.contents
  //   }
  // }
  // UserInfo()

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

  // const handleClose = (_event?: React.SyntheticEvent, reason?: string) => {
  //   if (reason === 'clickaway') {
  //     return
  //   }
  //   setShowError(false)
  // }

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

  // edit a property of the object
  const EditObj = (newValue, key) => {
    const newObj = apiData
    newObj[key] = newValue
    setApiData(apiData)
  }
  // delete a property of the object
  const DeleteObj = key => {
    setApiData(_.omit(apiData, key))
  }

  return (
    <Box sx={{ py: 1, background: '#1F2428', height: '100vh' }}>
      <Container maxWidth='lg'>
        <Box>
          <Typography variant='caption' sx={{ color: 'lightgrey', fontWeight: 300 }}>
            https://random-data-api.com/api/users/random_user
          </Typography>
        </Box>
        <Box sx={{ my: 2 }}>
          <Searchbar />
          {/* <Collapse in={showError}>
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
          </Collapse> */}
        </Box>

        {/* <Box>
          
        </Box> */}
        {userSubmittedUrl !== undefined && (
          <React.Fragment>
            <DataToggle />
            <Box
              sx={{
                overflow: 'hidden',
                flexGrow: 1,
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
                '& pre': {
                  bgcolor: 'transparent !important',
                  position: 'relative',
                  zIndex: 1,
                  '&::-webkit-scrollbar': {
                    display: 'none',
                  },
                },
              }}>
              <Box sx={{ position: 'relative' }}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: '0  4px 4px 4px',
                    background: theme => (theme.palette.mode === 'dark' ? '#0D0D0D' : '#ffffff'),
                    // bgcolor: theme =>
                    //   theme.palette.mode === 'dark'
                    //     ? theme.palette.greyDark[900]
                    //     : theme.palette.grey[50],
                  }}>
                  {userToggledApi === 'data' && <DataRequest data={apiData} />}
                  {userToggledApi === 'edit' && (
                    <EditRequest data={apiData} onDelete={DeleteObj} onEdit={EditObj} />
                  )}
                  {userToggledApi === 'ts' && <TsDetails data={apiData} />}
                  {userToggledApi === 'full' && <FullRequest data={apiFullResponse} />}
                  {userToggledApi === 'ts' && <DownloadInfo appeared={true} />}
                </Paper>
              </Box>
            </Box>
          </React.Fragment>
        )}
      </Container>
    </Box>
  )
}
