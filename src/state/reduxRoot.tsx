import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { textareaSlice } from '../utils/textareaSlice'
import { dataSlice } from '../utils/dataSlice'
import App from '../app'

const rootReducer = combineReducers({
  data: dataSlice.reducer,
  textarea: textareaSlice.reducer,
})
const store = configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof rootReducer>

export function ReduxRoot() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
