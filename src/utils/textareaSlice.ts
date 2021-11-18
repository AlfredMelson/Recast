import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum ValidityType {
  Valid = 'valid',
  Invalid = 'invalid',
  None = 'none',
}

interface State {
  localText: string
  validity: ValidityType
}

const initialState: State = {
  localText: '',
  validity: ValidityType.None,
}

export const textareaSlice = createSlice({
  name: 'textarea',
  initialState,
  reducers: {
    setLocalText: (state: State, action: PayloadAction<string>) => {
      const text = action.payload
      state.localText = text
      if (text.length > 0) {
        try {
          JSON.parse(action.payload)
          state.validity = ValidityType.Valid
        } catch (e) {
          state.validity = ValidityType.Invalid
        }
      } else {
        state.validity = ValidityType.None
      }
    },
  },
})
