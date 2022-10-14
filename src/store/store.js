import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/CounterSlice'
import alphabetReducer from '../slices/AlphabetSlice'

const store = configureStore({
  reducer: {
    number: counterReducer,
    alphabet: alphabetReducer,
  },
})

// IMPORTANT - PRONE TO REDUX CONFUSION:

// number and alphabet here signify that wre have named our state as state.number and state.alphabet, and
// counterReducer is the reducer function that will modify number and alphabetReducer is the reducer function that will
// modify the state.alphabet

export default store
