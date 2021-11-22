import * as React from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import App from './app'
import MuiThemeProviderRoot from './style/MuiThemeProviderRoot'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <MuiThemeProviderRoot>
        <App />
      </MuiThemeProviderRoot>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
