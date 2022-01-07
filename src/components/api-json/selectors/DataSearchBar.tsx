import { useRecoilState } from 'recoil'
import { Box } from '@mui/material'
import { userTypedUrlAtom } from '../../../recoil/api-json/atom'
import { ApiDropdownWrapper } from '../../mui'
import { selectedApiAtom } from '../ApiUrlSelector'
import { InputBaseSx } from '../../mui/InputBase.style'

export default function DataSearchBar() {
  // user entered api url stored in recoil
  const [userTypedUrl, setUserTypedUrl] = useRecoilState(userTypedUrlAtom)

  // user entered url is set on enter or submit
  const handleTextFieldChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserTypedUrl(event.target.value), setSelectedApi(event.target.value)
  }

  const [selectedApi, setSelectedApi] = useRecoilState(selectedApiAtom)

  // const inputField = React.useRef<HTMLInputElement>(null)
  // ref = { inputField }

  return (
    <Box sx={{ flex: 1 }}>
      <ApiDropdownWrapper title='Api Url' sx={{ mt: 10, ml: 20, mb: 0 }}>
        <InputBaseSx
          sx={{
            m: 10,
            pl: 20,
            width: 'calc(100% - 20px)',
            fontSize: 16,
            minHeight: 32,
          }}
          placeholder='Enter url ...'
          value={selectedApi !== '' ? selectedApi : userTypedUrl}
          onChange={handleTextFieldChanges}
        />
      </ApiDropdownWrapper>
    </Box>
  )
}
