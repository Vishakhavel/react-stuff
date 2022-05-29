import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  // const [useInput, setUSerInput] = useState({
  //   enteredAmount: '',
  //   enteredDate: '',
  //   enteredTitle: '',
  // })

  const submitHandler = (event) => {
    event.preventDefault() // page reloads on form submission. So we can now continuer handling the button click usign javascript!

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate), // parses date string to convert into date object.
    }

    // console.log(expenseData)

    props.onSaveExpenseData(expenseData)
    setEnteredDate('')
    setEnteredAmount('')
    setEnteredTitle('')

    // passing the data from here to the parent component.
  }

  const titleChangeHandler = (event) => {
    // console.log('title changed!')
    setEnteredTitle(event.target.value)

    // setUSerInput({
    //   ...userInput, // just copy the user inputs prev state and then overwrite specific attribute
    //   enteredTitle: event.target.value,
    // })

    // setUSerInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   }
    // })
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor=''> Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className='new-expense__control'>
          <label htmlFor=''> Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className='new-expense__control'>
          <label htmlFor=''> Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2023-01-01'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}
export default ExpenseForm
