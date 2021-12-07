import * as React from 'react'
import Box from '@mui/material/Box'
import CloseIcon from '@mui/icons-material/Close'
import CheckIcon from '@mui/icons-material/Check'
import DownloadIcon from '@mui/icons-material/Download'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { green } from '@mui/material/colors'
import ClipboardJS from 'clipboard'
import { saveAs } from 'file-saver'
import { ButtonGroup } from '@mui/material'
import { localEditorTextAtom, minifiedTextAtom, minifyDialogOpenAtom } from '../../recoil'
import { GreenCircularProgress } from '../action/GreenCircularProgress'
import { SxAppBarIconButton } from '../sx/SxIconButton'
import { SxToolTip } from '../sx/SxToolTip'

export function MinifyIcons() {
  //set dialog with minified json visability
  const setMinifyDialogOpen = useSetRecoilState(minifyDialogOpenAtom)
  //retrieve localStorage value
  const localEditorText = useRecoilValue(localEditorTextAtom)
  //store minified json in recoil
  const [minifiedText, setMinifiedText] = useRecoilState(minifiedTextAtom)
  // minify json
  React.useEffect(() => {
    async function Minify(text) {
      if (typeof JSON === 'undefined' || null) {
        return text
      } else {
        const results = typeof text === 'string' && JSON.stringify(JSON.parse(text), null, 0)
        setMinifiedText(results)
        return
      }
    }
    Minify(localEditorText)
  }, [localEditorText, setMinifiedText])

  //useRef to avoid re-renders during button interactions
  const interactionTimer = React.useRef<number>()
  //useEffect to handle side effect proceeding button interactions
  React.useEffect(() => {
    return () => {
      //cancel the timeout established by setTimeout()
      clearTimeout(interactionTimer.current)
    }
  }, [])

  //useState hooks to handle button transitions during copy interaction
  const [minifiedCopy, setMinifiedCopy] = React.useState(false)
  const [loadingCopy, setLoadingCopy] = React.useState(false)
  const [successCopy, setSuccessCopy] = React.useState(false)

  const handleMinifyCopy = () => {
    const clipboard = new ClipboardJS('#copy-minified-to-clipboard')
    if (!loadingCopy) {
      setSuccessCopy(false)
      setLoadingCopy(true)
      clipboard.on('success', function (e) {
        setMinifiedCopy(true)
        e.clearSelection()
      })
      //set state to success
      interactionTimer.current = window.setTimeout(() => {
        setSuccessCopy(true)
        setLoadingCopy(false)
      }, 1000)
      //restore state to pre-interaction
      interactionTimer.current = window.setTimeout(() => {
        setSuccessCopy(false)
      }, 4000)
    }
  }

  //useState hooks to handle button transitions during download interaction
  const [loadingDownload, setLoadingDownload] = React.useState(false)
  const [successDownload, setSuccessDownload] = React.useState(false)

  const handleMinifiedDownload = () => {
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
      //set state to success
      interactionTimer.current = window.setTimeout(() => {
        setSuccessDownload(true)
        setLoadingDownload(false)
      }, 1000)
      //restore state to pre-interation
      interactionTimer.current = window.setTimeout(() => {
        setSuccessDownload(false)
      }, 4000)
    }
  }

  return (
    <ButtonGroup>
      <Box sx={{ position: 'relative', pl: 0.5 }}>
        <SxToolTip tooltipTitle={minifiedCopy ? 'Copied' : 'Copy minified json'}>
          <SxAppBarIconButton
            id='copy-minified-to-clipboard'
            data-clipboard-target='#minified-json-data'
            onClick={handleMinifyCopy}>
            {!loadingCopy && !successCopy ? (
              <ContentCopyIcon />
            ) : !successCopy ? (
              <ContentCopyIcon sx={{ color: 'transparent' }} />
            ) : (
              <CheckIcon sx={{ color: green[500] }} />
            )}
          </SxAppBarIconButton>
        </SxToolTip>
        {loadingCopy && <GreenCircularProgress size='20px' />}
      </Box>
      <Box sx={{ position: 'relative' }}>
        <SxToolTip tooltipTitle={minifiedCopy ? 'Downloaded' : 'Download minified json'}>
          <SxAppBarIconButton onClick={handleMinifiedDownload}>
            {!loadingDownload && !successDownload ? (
              <DownloadIcon />
            ) : !successDownload ? (
              <DownloadIcon sx={{ color: 'transparent' }} />
            ) : (
              <CheckIcon sx={{ color: green[500] }} />
            )}
          </SxAppBarIconButton>
        </SxToolTip>
        {loadingDownload && <GreenCircularProgress size='20px' />}
      </Box>
      <Box sx={{ position: 'relative', pr: 0.5 }}>
        <SxToolTip tooltipTitle={'Close'}>
          <SxAppBarIconButton
            onClick={() => {
              setMinifyDialogOpen(false)
            }}>
            <CloseIcon />
          </SxAppBarIconButton>
        </SxToolTip>
      </Box>
    </ButtonGroup>
  )
}