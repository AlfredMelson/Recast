import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import App from './app'
import MuiThemeProviderRoot from './style/MuiThemeProviderRoot'

//construct root element
const rootElement = document.getElementById('app')
//test for root element before invoking ReactDOM.createRoot
if (!rootElement) throw new Error('Failed to find the root element')
//construct root
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <MuiThemeProviderRoot>
        <App />
      </MuiThemeProviderRoot>
    </RecoilRoot>
  </React.StrictMode>
)
