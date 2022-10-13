import { createSlice } from '@reduxjs/toolkit'

export const AlphabetSlice = createSlice({
  name: 'alphabetCounter',
  initialState: {
    alphabet: 'A',
  },
  reducers: {
    capitalize: (state) => {
      state.alphabet = state.alphabet.toUpperCase()
    },
    regualarize: (state) => {
      state.alphabet = state.alphabet.toLowerCase()
    },
  },
})

export const { capitalize, regularize } = AlphabetSlice.actions

export default AlphabetSlice.reducer
