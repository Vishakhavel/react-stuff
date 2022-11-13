import React, { Fragment } from 'react'
import { RandomInput, InputBox, OutputBox, Generate } from '../styles'
const Display = (props) => {
  const currentRandomNumber = props.randomNumber
  if (currentRandomNumber != -1) {
    return <Fragment>UNIQUE ID: {currentRandomNumber}</Fragment>
  }

  return <Fragment>Invalid entry!</Fragment>
}

export default Display
