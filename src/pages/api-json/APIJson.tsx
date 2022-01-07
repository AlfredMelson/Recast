import * as React from 'react'
import axios from 'axios'
import Container from '@mui/material/Container'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material'
import {
  apiDataAtom,
  userSubmittedUrlAtom,
  apiFullResponseAtom,
  userQuerySelector,
  apiResponseHeadersAtom,
} from '../../recoil/api-json/atom'
import ApiTabs from '../../components/api-json/ApiTabs'
import ApiUrlSelector from '../../components/api-json/ApiUrlSelector'
import { BrandSwatch } from '../../style/BrandSwatch'
import { HeroStyle } from '../../components/mui/Hero.style'
import { DataFetch, DataSearchBar } from '../../components/api-json/selectors'

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
    // test for url before invoking axiosFetch
    if (userSubmittedUrl !== undefined) {
      const axiosFetch = async url => {
        const response = await axios.get(url)
        setApiFullResponse(response)
        setApiResponseHeaders(response.headers)
        return
      }
      axiosFetch(userSubmittedUrl)
    }
  }, [userSubmittedUrl, setApiData, setApiFullResponse, setApiResponseHeaders])

  // state of query
  const userQuery = useRecoilValue(userQuerySelector)
  // api request
  React.useLayoutEffect(() => {
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
    <Container
      maxWidth='lg'
      // onClick={(): void => {
      //   setSelectedElement(null)
      // }}
    >
      <HeroStyle>
        <Typography
          variant='body2'
          sx={{
            fontStyle: 'italic',
            color: theme =>
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[100]
                : BrandSwatch.Light.Grey[800],
            mt: 20,
            mb: 14,
          }}>
          Select API from dropdown
        </Typography>

        <ApiUrlSelector />
        <Typography
          variant='body2'
          sx={{
            fontStyle: 'italic',
            color: theme =>
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Grey[100]
                : BrandSwatch.Light.Grey[800],
            mt: 20,
            mb: 14,
          }}>
          or Enter API
        </Typography>
        <Stack direction='row' spacing={20} justifyContent='space-between' alignItems='flex-start'>
          <DataSearchBar />
          <DataFetch />
        </Stack>
      </HeroStyle>
      {/* <Collapse in={showError}>
            <Box sx={{ mt: 10, mb: 20 }}>
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
      <ApiTabs />
    </Container>
  )
}
