import MonacoEditor from '@monaco-editor/react'
import { useRecoilValue, useRecoilState } from 'recoil'
import * as React from 'react'
import { debounce } from 'lodash'
import Box from '@mui/system/Box'
import { userGeneratedJsonAtom, monacoThemeAtom } from '../../recoil'

export function Editor() {
  //retrieve editor theme value
  const monacoTheme = useRecoilValue(monacoThemeAtom)
  //retrieve localStorage value
  const [userGeneratedJson, setUserGeneratedJson] = useRecoilState(userGeneratedJsonAtom)
  // load from local storage
  React.useEffect(() => {
    const localStorageJson = localStorage.getItem('userGeneratedJson')
    if (localStorageJson) {
      setUserGeneratedJson(localStorageJson)
    }
  }, [setUserGeneratedJson])
  //lodash debounced() delays updating local text file for 750ms after user edit
  const onChange = debounce(
    React.useCallback(
      newValue => {
        setUserGeneratedJson(newValue)
      },
      [setUserGeneratedJson]
    ),
    750
  )

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <MonacoEditor
        height='100vh'
        value={userGeneratedJson}
        language='json'
        theme={monacoTheme}
        onChange={onChange}
        options={{
          acceptSuggestionOnCommitCharacter: true,
          acceptSuggestionOnEnter: 'on',
          accessibilitySupport: 'off',
          autoClosingOvertype: 'always',
          autoIndent: 'advanced',
          automaticLayout: true,
          codeLens: true,
          colorDecorators: false,
          contextmenu: true,
          lineNumbers: 'on',
          cursorBlinking: 'blink',
          cursorSmoothCaretAnimation: false,
          cursorStyle: 'line',
          disableLayerHinting: false,
          disableMonospaceOptimizations: false,
          dragAndDrop: false,
          fixedOverflowWidgets: false,
          folding: true,
          foldingStrategy: 'auto',
          fontLigatures: false,
          formatOnPaste: true,
          formatOnType: true,
          hideCursorInOverviewRuler: false,
          links: true,
          minimap: {
            enabled: true,
            renderCharacters: false,
          },
          mouseWheelZoom: true,
          multiCursorMergeOverlapping: true,
          multiCursorModifier: 'alt',
          overviewRulerBorder: false,
          overviewRulerLanes: 1,
          quickSuggestions: true,
          quickSuggestionsDelay: 100,
          readOnly: false,
          renderControlCharacters: false,
          renderFinalNewline: true,
          renderLineHighlight: 'all',
          renderWhitespace: 'none',
          revealHorizontalRightPadding: 30,
          roundedSelection: true,
          scrollBeyondLastLine: true,
          scrollBeyondLastColumn: 5,
          selectOnLineNumbers: false,
          selectionClipboard: false,
          selectionHighlight: true,
          showFoldingControls: 'mouseover',
          smoothScrolling: true,
          suggestOnTriggerCharacters: true,
          wordBasedSuggestions: true,
          wordSeparators: '~!@#$%^&*()-=+[{]}|;:\'",.<>/?',
          wordWrap: 'on',
          wordWrapBreakAfterCharacters: '\t})]?|&,;',
          wordWrapBreakBeforeCharacters: '{([+',
          wordWrapColumn: 80,
        }}
      />
    </Box>
  )
}
