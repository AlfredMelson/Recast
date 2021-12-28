import * as React from 'react'
import axios from 'axios'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import Typography from '@mui/material/Typography'
import {
  apiDataAtom,
  userSubmittedUrlAtom,
  apiFullResponseAtom,
  userQuerySelector,
  apiResponseHeadersAtom,
} from '../../recoil/api-json/atom'
import Searchbar from '../../components/api-json/SearchBar'
import ApiTabs from '../../components/api-json/ApiTabs'
import ApiUrlSelector from '../../components/api-json/ApiUrlSelector'
import { darkGrey, lightGrey } from '../../style/MuiBrandingTheme'

// import { selectedElementAtom } from './display/EditResponse'
// import ApiFallback from '../../components/action/ApiFallback'
// import Alert from '@mui/material/Alert'
// import Collapse from '@mui/material/Collapse'
// import Snackbar from '@mui/material/Snackbar'

export function APIJson() {
  // const [showError, setShowError] = React.useState(false)
  // state when user submits user entered url
  const userSubmittedUrl = useRecoilValue(userSubmittedUrlAtom)
  // state of response.data returned from the api call
  const setApiData = useSetRecoilState(apiDataAtom)
  // state of full response returned from the api call
  const setApiFullResponse = useSetRecoilState(apiFullResponseAtom)
  // state of response.headers returned from the api call
  const setApiResponseHeaders = useSetRecoilState(apiResponseHeadersAtom)
  // api request
  React.useEffect(() => {
    const apiDataFetch = async () => {
      const response = await axios.get(userSubmittedUrl)
      // console.log('AXIOS response', response)
      setApiResponseHeaders(response.headers)
    }
    // test for url before invoking apiDataFetch
    if (userSubmittedUrl !== undefined) {
      apiDataFetch()
    }
  }, [userSubmittedUrl, setApiData, setApiFullResponse, setApiResponseHeaders])

  // state of query
  const userQuery = useRecoilValue(userQuerySelector)
  // api request
  React.useEffect(() => {
    const apiDataFetch = async () => {
      const response = await userQuery
      // console.log('RECOIL response', response)
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
  // state representing the selected element
  // const setSelectedElement = useSetRecoilState(selectedElementAtom)

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

  return (
    <Box
      sx={{
        pt: 1,
      }}>
      <Container
        maxWidth='lg'
        // onClick={(): void => {
        //   setSelectedElement(null)
        // }}
      >
        <Typography
          variant='body2'
          sx={{ color: theme => (theme.palette.mode === 'dark' ? darkGrey[50] : lightGrey[900]) }}>
          Select API from dropdown
        </Typography>

        <ApiUrlSelector />
        <Typography
          variant='body2'
          sx={{ color: theme => (theme.palette.mode === 'dark' ? darkGrey[50] : lightGrey[900]) }}>
          or Enter API
        </Typography>
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
        <ApiTabs />
      </Container>
    </Box>
  )
}
