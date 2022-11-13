import React, { Fragment } from 'react'
import { RandomInput, Input, InputBox, OutputBox, Generate } from '../styles'
import { useState } from 'react'
import randomNumber from '../utilities/randomNumber'
import Display from './Display'
const Form = () => {
  const [input, setInput] = useState('')
  const [currentRandomNumber, setCurrentRandomNumber] = useState()
  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(input)
    const generatedRandomNumber = randomNumber(input)
    setCurrentRandomNumber(generatedRandomNumber)
    setInput('')
  }

  return (
    <Fragment>
      <InputBox onSubmit={handleSubmit}>
        <Input type='number' value={input} onChange={handleInputChange} />
        <Generate type='submit' />
      </InputBox>
      <Display randomNumber={currentRandomNumber} />
    </Fragment>
  )
}

export default Form
