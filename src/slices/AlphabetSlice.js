import { createSlice } from '@reduxjs/toolkit'

export const AlphabetSlice = createSlice({
  name: 'alphabetCounter',
  initialState: {
    value: 'A',
  },
  reducers: {
    capitalize: (state) => {
      console.log('hi')
      state.value = 'B'
    },

    regularize: (state) => {
      state.value = 'C'
    },
  },
})

export const { capitalize, regularize } = AlphabetSlice.actions

export default AlphabetSlice.reducer
// reducers are exported as default from the slice files.
