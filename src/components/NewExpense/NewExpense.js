import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false)
  // prop here to communicate with parent!
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    }

    props.onAddExpense(expenseData)
    setShowExpenseForm(false)
  }

  const handleAddExpenseButton = () => {
    console.log('handling add expense in a better way')
    setShowExpenseForm(true)
  }

  const handleCancelAddExpenseForm = () => {
    console.log('cancelling add expense button')
    setShowExpenseForm(false)
  }

  return (
    <div className='new-expense'>
      {!showExpenseForm && (
        <button onClick={handleAddExpenseButton}>Add Expense</button>
      )}
      {showExpenseForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={handleCancelAddExpenseForm}
        />
      )}
    </div>
  )
}

export default NewExpense
