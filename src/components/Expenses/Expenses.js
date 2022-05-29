import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import { useState } from 'react'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')
  const handleSelectedDate = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  // filtering by date
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          selectedDate={handleSelectedDate}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses
