import * as React from 'react'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import CloseIcon from '@mui/icons-material/Close'
import CheckIcon from '@mui/icons-material/Check'
import DownloadIcon from '@mui/icons-material/Download'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { useRecoilState, useRecoilValue } from 'recoil'
import { green } from '@mui/material/colors'
import ClipboardJS from 'clipboard'
import { saveAs } from 'file-saver'
import { localEditorTextAtom, minifiedTextAtom, minifyDialogAtom } from '../../recoil'
import { GreenCircularProgress } from '../../components/action/GreenCircularProgress'
import { SxIconButton } from '../../components/icons/SxIconButton'

export function MinifyIcons() {
  const [minifyDialog, setMinifyDialog] = useRecoilState(minifyDialogAtom)
  const localEditorText = useRecoilValue(localEditorTextAtom)
  const [minifiedText, setMinifiedText] = useRecoilState(minifiedTextAtom)

  const handleClose = () => {
    setMinifyDialog(false)
  }

  const descriptionElementRef = React.useRef<HTMLElement>(null)
  React.useEffect(() => {
    if (minifyDialog) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [minifyDialog])

  // minify json
  React.useEffect(() => {
    async function Minify(text) {
      if (typeof JSON === 'undefined' || null) {
        return text
      } else {
        const results =
          (await typeof text) === 'string' && JSON.stringify(JSON.parse(text), null, 0)
        setMinifiedText(results)
        return
      }
    }
    Minify(localEditorText)
  }, [localEditorText, setMinifiedText])

  const [minifiedCopy, setMinifiedCopy] = React.useState(false)
  const [loadingCopy, setLoadingCopy] = React.useState(false)
  const [successCopy, setSuccessCopy] = React.useState(false)
  const copyTimer = React.useRef<number>()

  const handleClick = () => {
    const clipboard = new ClipboardJS('#copy-minified-to-clipboard')
    if (!loadingCopy) {
      setSuccessCopy(false)
      setLoadingCopy(true)
      clipboard.on('success', function (e) {
        setMinifiedCopy(true)
        e.clearSelection()
      })
      copyTimer.current = window.setTimeout(() => {
        setSuccessCopy(true)
        setLoadingCopy(false)
      }, 1000)
      copyTimer.current = window.setTimeout(() => {
        setSuccessCopy(false)
      }, 4000)
    }
  }

  React.useEffect(() => {
    return () => {
      clearTimeout(copyTimer.current)
    }
  }, [])

  const [loadingDownload, setLoadingDownload] = React.useState(false)
  const [successDownload, setSuccessDownload] = React.useState(false)
  const downloadTimer = React.useRef<number>()

  const handleDownload = () => {
    if (!loadingDownload) {
      setSuccessDownload(false)
      setLoadingDownload(true)
      const downloadJson = (text: string) => {
        try {
          const blob = new Blob([text], { type: 'application/json' + ';charset=utf-8' })
          saveAs(blob, 'minifiedJson.json')
        } catch (t) {
          this.emit('error', 'download', 'Downloading not supported on this browser.')
        }
      }
      downloadJson(minifiedText)
      downloadTimer.current = window.setTimeout(() => {
        setSuccessDownload(true)
        setLoadingDownload(false)
      }, 1000)
      downloadTimer.current = window.setTimeout(() => {
        setSuccessDownload(false)
      }, 4000)
    }
  }

  React.useEffect(() => {
    return () => {
      clearTimeout(downloadTimer.current)
    }
  }, [])

  return (
    <Stack direction='row'>
      <Box sx={{ position: 'relative' }}>
        <Tooltip
          arrow
          TransitionComponent={Fade}
          title={minifiedCopy ? 'Copied' : 'Copy minified json'}
          TransitionProps={{ onExited: () => setMinifiedCopy(false) }}>
          <SxIconButton
            id='copy-minified-to-clipboard'
            data-clipboard-target='#minified-json-data'
            onClick={handleClick}>
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
        <Tooltip
          arrow
          TransitionComponent={Fade}
          title={minifiedCopy ? 'Downloaded' : 'Download minified json'}>
          <SxIconButton onClick={handleDownload}>
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
      <Tooltip arrow TransitionComponent={Fade} title={'Close'}>
        <SxIconButton onClick={handleClose}>
          <CloseIcon />
        </SxIconButton>
      </Tooltip>
    </Stack>
  )
}
