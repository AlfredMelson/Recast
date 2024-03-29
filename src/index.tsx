import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import CssBaseline from '@mui/material/CssBaseline'
import App from './app'
import './style/BrandGlobal.css'
import BrandThemeProvider from './style/BrandThemeProvider'

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
      <BrandThemeProvider>
        <CssBaseline>
          <App />
        </CssBaseline>
      </BrandThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
)
