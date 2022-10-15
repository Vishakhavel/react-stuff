import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { connect } from 'react-redux'

import { decrement, increment } from '../slices/CounterSlice'
import { Button, Box } from '../styles/'
const NumberCounter = (props) => {
  // const count = useSelector((state) => state.number.value)
  const dispatch = useDispatch()

  return (
    <Box>
      <Button
        aria-label='Increment value'
        // onClick={() => dispatch(increment())}
        onClick={props.increment}
      >
        Increment
      </Button>
      {props.value}

      <Button
        aria-label='Decrement value'
        // onClick={() => dispatch(decrement())}
        onClick={props.decrement}
      >
        Decrement
      </Button>
    </Box>
  )
}

// export default NumberCounter

const mapStateToProps = (state) => {
  // return {state.number.value}
  console.log(state)
  return state.number
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NumberCounter)
