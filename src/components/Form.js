import React, { Fragment } from 'react'
import { RandomInput, Input, InputBox, OutputBox } from '../styles'
import { Button } from 'antd'
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
      <Form onSubmit={handleSubmit}>
        <Input type='number' value={input} onChange={handleInputChange} />
        <Button type='primary' size='large'>
          Primary
        </Button>
        <Button danger type='submit'>
          Default
        </Button>
      </Form>
      <Display randomNumber={currentRandomNumber} />
    </Fragment>
  )
}

export default Form
