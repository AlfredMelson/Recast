import * as React from 'react'
import Box from '@mui/material/Box'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import DownloadIcon from '@mui/icons-material/Download'
import DeleteIcon from '@mui/icons-material/Delete'
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import ClipboardJS from 'clipboard'
import CheckIcon from '@mui/icons-material/Check'
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess'
import saveAs from 'file-saver'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import CloseIcon from '@mui/icons-material/Close'
import { dataDrawerOpenAtom, localEditorTextAtom, minifyDialogOpenAtom } from '../../recoil'
import { SxCircularProgress } from '../action/SxCircularProgress'
import { IconButtonSxAppBar, ToolTipSx, ButtonGroupSx } from '../mui'
import { BrandSwatch } from '../../style/BrandSwatch'

export function DrawerIcons() {
  // retrieve localStorage value
  const localEditorText = useRecoilValue(localEditorTextAtom)
  // reset localStorage value to recoil stored default
  const resetLocalEditorText = useResetRecoilState(localEditorTextAtom)
  // set dialog with minified json visability
  const setMinifyDialogOpen = useSetRecoilState(minifyDialogOpenAtom)
  // useRef to avoid re-renders during button interactions
  const interactionTimer = React.useRef<number>()
  // useEffect to handle side effect proceeding button interactions
  React.useEffect(() => {
    return () => {
      // cancel the timeout established by setTimeout()
      clearTimeout(interactionTimer.current)
    }
  }, [])
  // useState hooks to handle button transitions during copy
  const [jsonCopy, setJsonCopy] = React.useState(false)
  const [loadingCopy, setLoadingCopy] = React.useState(false)
  const [successCopy, setSuccessCopy] = React.useState(false)
  // handle copy of json to clipboard
  const handleJsonCopy = () => {
    const clipboard = new ClipboardJS(localEditorText)
    if (!loadingCopy) {
      setSuccessCopy(false)
      setLoadingCopy(true)
      clipboard.on('success', function (event) {
        setJsonCopy(true)
        event.clearSelection()
      })
      // set state to success
      interactionTimer.current = window.setTimeout(() => {
        setSuccessCopy(true)
        setLoadingCopy(false)
      }, 1000)
      // restore state to pre-interaction
      interactionTimer.current = window.setTimeout(() => {
        setSuccessCopy(false)
      }, 4000)
      return
    }
  }
  // useState hooks to handle button transitions during download interaction
  const [loadingDownload, setLoadingDownload] = React.useState(false)
  const [successDownload, setSuccessDownload] = React.useState(false)

  const handleDownload = () => {
    if (!loadingDownload) {
      setSuccessDownload(false)
      setLoadingDownload(true)
      const downloadJson = (text: string) => {
        try {
          const blob = new Blob([text], { type: 'application/json' + ';charset=utf-8' })
          saveAs(blob, 'recast.json')
        } catch (t) {
          this.emit('error', 'download', 'Downloading not supported on this browser.')
        }
      }
      downloadJson(localEditorText)
      // set state to success
      interactionTimer.current = window.setTimeout(() => {
        setSuccessDownload(true)
        setLoadingDownload(false)
      }, 1000)
      // restore state to pre-interation
      interactionTimer.current = window.setTimeout(() => {
        setSuccessDownload(false)
      }, 4000)
    }
  }

  // visability of drawer containing user json
  const setDataDrawerOpen = useSetRecoilState(dataDrawerOpenAtom)

  return (
    <ButtonGroupSx>
      <Box sx={{ position: 'relative', pl: 5 }}>
        <ToolTipSx tooltipTitle={jsonCopy ? 'Copied' : 'Copy json'}>
          <IconButtonSxAppBar
            disabled={localEditorText.length === 0 ? true : false}
            onClick={handleJsonCopy}>
            {!loadingCopy && !successCopy ? (
              <ContentCopyIcon />
            ) : !successCopy ? (
              <ContentCopyIcon sx={{ color: 'transparent' }} />
            ) : (
              <CheckIcon sx={{ color: BrandSwatch.Dark.Green[300] }} />
            )}
          </IconButtonSxAppBar>
        </ToolTipSx>
        {loadingCopy && <SxCircularProgress size='20px' color='green' />}
      </Box>
      <Box sx={{ position: 'relative' }}>
        <ToolTipSx tooltipTitle={'Download json'}>
          <IconButtonSxAppBar
            disabled={localEditorText.length === 0 ? true : false}
            onClick={handleDownload}>
            {!loadingDownload && !successDownload ? (
              <DownloadIcon />
            ) : !successDownload ? (
              <DownloadIcon sx={{ color: 'transparent' }} />
            ) : (
              <CheckIcon sx={{ color: BrandSwatch.Dark.Green[300] }} />
            )}
          </IconButtonSxAppBar>
        </ToolTipSx>
        {loadingDownload && <SxCircularProgress size='20px' color='green' />}
      </Box>
      <Box sx={{ position: 'relative' }}>
        <ToolTipSx tooltipTitle={'Delete json'}>
          <IconButtonSxAppBar
            disabled={localEditorText.length === 0 ? true : false}
            onClick={() => {
              resetLocalEditorText()
            }}>
            {localEditorText.length > 0 ? <DeleteIcon /> : <DeleteOutlineIcon />}
          </IconButtonSxAppBar>
        </ToolTipSx>
      </Box>
      <Box sx={{ position: 'relative' }}>
        <ToolTipSx tooltipTitle={'Minify json'}>
          <IconButtonSxAppBar
            disabled={localEditorText.length === 0 ? true : false}
            onClick={() => {
              setMinifyDialogOpen(true)
            }}>
            <UnfoldLessIcon />
          </IconButtonSxAppBar>
        </ToolTipSx>
      </Box>
      <Box sx={{ position: 'relative', pr: 5 }}>
        <ToolTipSx tooltipTitle={'Close'}>
          <IconButtonSxAppBar
            onClick={() => {
              setDataDrawerOpen(false)
            }}>
            <CloseIcon />
          </IconButtonSxAppBar>
        </ToolTipSx>
      </Box>
    </ButtonGroupSx>
  )
}
