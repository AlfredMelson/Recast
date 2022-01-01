import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import CssBaseline from '@mui/material/CssBaseline'
import App from './app'
import MuiThemeProviderRoot from './style/MuiThemeProviderRoot'
import './style/BrandGlobal.css'
import './style/BrandGlobal.scss'

// create entry point using unique id from Document
const rootElement = document.getElementById('app')
// test for root element prior to invoking ReactDOM.createRoot
if (!rootElement) throw new Error('Failed to find the root element')
// create root
const root = ReactDOM.createRoot(rootElement)
// initial render
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <MuiThemeProviderRoot>
        <CssBaseline>
          <App />
        </CssBaseline>
      </MuiThemeProviderRoot>
    </RecoilRoot>
  </React.StrictMode>
)
