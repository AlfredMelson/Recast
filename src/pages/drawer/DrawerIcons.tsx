import { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import DownloadIcon from '@mui/icons-material/Download'
import DeleteIcon from '@mui/icons-material/Delete'
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import ClipboardJS from 'clipboard'
import Tooltip from '@mui/material/Tooltip'
import Fade from '@mui/material/Fade'
import CheckIcon from '@mui/icons-material/Check'
import { green } from '@mui/material/colors'
import Stack from '@mui/material/Stack'
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess'
import saveAs from 'file-saver'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { localEditorTextAtom, minifyDialogAtom, validJsonAtom } from '../../recoil'
import { GreenCircularProgress } from '../../components/action/GreenCircularProgress'
import { SxIconButton } from '../../components/sx/SxIconButton'

export function DrawerIcons() {
  const resetList = useResetRecoilState(localEditorTextAtom)

  const setMinifyDialog = useSetRecoilState(minifyDialogAtom)

  const localEditorText = useRecoilValue(localEditorTextAtom)

  const validJson = useRecoilValue(validJsonAtom)

  const [jsonCopy, setJsonCopy] = useState(false)
  const [loadingCopy, setLoadingCopy] = useState(false)
  const [successCopy, setSuccessCopy] = useState(false)
  const copyTimer = useRef<number>()

  const handleJsonCopy = () => {
    const clipboard = new ClipboardJS(localEditorText)
    if (!loadingCopy) {
      setSuccessCopy(false)
      setLoadingCopy(true)
      clipboard.on('success', function (e) {
        setJsonCopy(true)
        e.clearSelection()
      })
      copyTimer.current = window.setTimeout(() => {
        setSuccessCopy(true)
        setLoadingCopy(false)
      }, 1000)
      copyTimer.current = window.setTimeout(() => {
        setSuccessCopy(false)
      }, 4000)
      return
    }
  }

  useEffect(() => {
    return () => {
      clearTimeout(copyTimer.current)
    }
  }, [])

  const [loadingDownload, setLoadingDownload] = useState(false)
  const [successDownload, setSuccessDownload] = useState(false)
  const downloadTimer = useRef<number>()

  const handleDownload = () => {
    if (!loadingDownload) {
      setSuccessDownload(false)
      setLoadingDownload(true)
      const downloadJson = (text: string) => {
        try {
          const blob = new Blob([text], { type: 'application/json' + ';charset=utf-8' })
          saveAs(blob, 'jsonNavigator.json')
        } catch (t) {
          this.emit('error', 'download', 'Downloading not supported on this browser.')
        }
      }
      downloadJson(localEditorText)
      downloadTimer.current = window.setTimeout(() => {
        setSuccessDownload(true)
        setLoadingDownload(false)
      }, 1000)
      downloadTimer.current = window.setTimeout(() => {
        setSuccessDownload(false)
      }, 4000)
    }
  }

  useEffect(() => {
    return () => {
      clearTimeout(downloadTimer.current)
    }
  }, [])

  return (
    <Stack direction='row' sx={{ visibility: validJson ? 'visible' : 'hidden' }}>
      <Box sx={{ position: 'relative' }}>
        <Tooltip
          arrow
          TransitionComponent={Fade}
          title={jsonCopy ? 'Copied' : 'Copy json'}
          TransitionProps={{ onExited: () => setJsonCopy(false) }}>
          <SxIconButton
            disabled={localEditorText.length === 0 ? true : false}
            onClick={handleJsonCopy}>
            {!loadingCopy && !successCopy ? (
              <ContentCopyIcon />
            ) : !successCopy ? (
              <ContentCopyIcon sx={{ color: 'transparent' }} />
            ) : (
              <CheckIcon sx={{ color: green[500] }} />
            )}
          </SxIconButton>
        </Tooltip>
        {loadingCopy && <GreenCircularProgress />}
      </Box>
      <Box sx={{ position: 'relative' }}>
        <Tooltip arrow TransitionComponent={Fade} title={'Download json'}>
          <SxIconButton
            disabled={localEditorText.length === 0 ? true : false}
            onClick={handleDownload}>
            {!loadingDownload && !successDownload ? (
              <DownloadIcon />
            ) : !successDownload ? (
              <DownloadIcon sx={{ color: 'transparent' }} />
            ) : (
              <CheckIcon sx={{ color: green[500] }} />
            )}
          </SxIconButton>
        </Tooltip>
        {loadingDownload && <GreenCircularProgress />}
      </Box>
      <Box sx={{ position: 'relative' }}>
        <Tooltip arrow TransitionComponent={Fade} title={'Delete json'}>
          <SxIconButton
            disabled={localEditorText.length === 0 ? true : false}
            onClick={() => {
              resetList()
            }}>
            {localEditorText.length > 0 ? <DeleteIcon /> : <DeleteOutlineIcon />}
          </SxIconButton>
        </Tooltip>
      </Box>
      <Box sx={{ position: 'relative' }}>
        <Tooltip arrow TransitionComponent={Fade} title={'Minify json'}>
          <SxIconButton
            disabled={localEditorText.length === 0 ? true : false}
            size='small'
            onClick={() => {
              setMinifyDialog(true)
            }}>
            <UnfoldLessIcon />
          </SxIconButton>
        </Tooltip>
      </Box>
    </Stack>
  )
}
