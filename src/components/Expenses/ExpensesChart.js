import React from 'react'

import Chart from '../Charts/Chart'

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ]

  for (const expense of props.expenses) {
    // wow. there is something called for of loop in js. its different from for in loops. STUDY!
    const expenseMonth = expense.date.getMonth()
    chartDataPoints[expenseMonth].value += expense.amount
  }
  return <Chart dataPoints={chartDataPoints} />
}
export default ExpensesChart
