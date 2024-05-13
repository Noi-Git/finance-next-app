import React from 'react'

const incomeBudget = [
  { id: 1, name: 'salary' },
  { id: 2, name: 'gardening' },
  { id: 3, name: 'dog walking' },
]

const IncomeItem = () => {
  return (
    <>
      <div className='form-wrapper'>
        <h2 className='h3'>Add New Income</h2>

        <div className='expense-input'>
          <div className='grid-xs'>
            <label htmlFor='newExpense'>Income Name</label>
            <input
              type='text'
              name='newExpense'
              id='newExpense'
              placeholder='e.g., gradening'
              required
            />
          </div>
          <div className='grid-xs'>
            <label htmlFor='newExpenseAmount'>Amount</label>
            <input
              type='number'
              step='0.01'
              inputMode='decimal'
              name='newExpenseAmount'
              id='newExpenseAmount'
              placeholder='e.g. 50'
              required
            />
          </div>
        </div>

        <label htmlFor='newExpenseBudget'> Budget Category</label>
        <select name='newExpenseBudget' id='newExpenseBudget' required>
          {incomeBudget.map((budget) => {
            return (
              <option key={budget.id} value={budget.id}>
                {budget.name}
              </option>
            )
          })}
        </select>
      </div>
      <input type='hidden' name='_action' value='createExpense' />
      <button type='submit' className='btn btn--dark'>
        <span>Add Expense</span>
      </button>
    </>
  )
}

export default IncomeItem
