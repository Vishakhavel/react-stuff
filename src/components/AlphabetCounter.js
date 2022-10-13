import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { capitalize, regularize } from '../slices/AlphabetSlice'

const AlphabetCounter = () => {
  const alphabet = useSelector((state) => state.alphabetCounter.alphabet)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label='capitalize value'
          onClick={() => dispatch(capitalize())}
        >
          A
        </button>
        <span>{alphabet}</span>
        <button
          aria-label='regualrize value'
          onClick={() => dispatch(regularize())}
        >
          a
        </button>
      </div>
    </div>
  )
}

export default AlphabetCounter
