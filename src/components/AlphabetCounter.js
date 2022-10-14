import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { capitalize, regularize } from '../slices/AlphabetSlice'

const AlphabetCounter = () => {
  const alphabet = useSelector((state) => state.alphabet.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label='capitalize value'
          onClick={() => dispatch(capitalize())}
        >
          B
        </button>
        <span>{alphabet}</span>
        <button
          aria-label='regualrize value'
          onClick={() => dispatch(regularize())}
        >
          C
        </button>
      </div>
    </div>
  )
}

export default AlphabetCounter
