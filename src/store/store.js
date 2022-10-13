import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/CounterSlice'
import alphabetReducer from '../slices/AlphabetSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    alphabetCounter: alphabetReducer,
  },
})

export default store
