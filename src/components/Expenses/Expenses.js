import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import { useState } from 'react'
// import ExpensesFilter from './ExpensesFilter'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
const Expenses = (props) => {
  const expenses = props.data
  console.log(expenses)
  const [filteredYear, setFilteredYear] = useState('2020')
  const handleSelectedDate = (selectedYear) => {
    // logic to handle data returned from the expensesfilter component.

    console.log('hey form expenses!')

    setFilteredYear(selectedYear)
    console.log(selectedYear)
  }
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          selectedDate={handleSelectedDate}
        />
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        />
      </Card>
    </div>
  )
}

export default Expenses
