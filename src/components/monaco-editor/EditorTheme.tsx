import { loader } from '@monaco-editor/react'

export const monacoThemes = {
  'clouds-midnight': 'Clouds Midnight',
  'chrome-devtools': 'Chrome DevTools',
  cobalt: 'Cobalt', // dark
  slushPoppies: 'Slush and Poppies', // light
  iPlastic: 'iPlastic', // light
  blackboard: 'Blackboard', // dark
  katzenmilch: 'Katzenmilch', // light
}

export function EditorTheme(theme) {
  return new Promise<void>(res => {
    Promise.all([loader.init(), import(`monaco-themes/themes/${monacoThemes[theme]}.json`)]).then(
      ([monaco, themeData]) => {
        monaco.editor.defineTheme(theme, themeData)
        res()
      }
    )
    console.log()
  })
}
