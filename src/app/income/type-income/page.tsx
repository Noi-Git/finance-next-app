import React from 'react'
import {
  budgetCard,
  cardForm,
  cardInput,
  cardLabel,
  cardTitle,
} from '../../styles/form'

const TypeIncome = () => {
  return (
    <>
      {' '}
      <div className=' bg-gray-100 text-green-700 flex items-center justify-center h-[calc(88vh)]'>
        <div className={budgetCard}>
          <h2 className={cardTitle}>Income type & budget</h2>

          <form method='POST' className={cardForm}>
            <div>
              <label className={cardLabel} htmlFor='newBudget'>
                Budget Name
              </label>
              <input
                type='text'
                name='newBudget'
                id='newBudget'
                placeholder='e.g.Salary'
                className={cardInput}
                required
              />
            </div>
          </form>
          <form className={cardForm}>
            <div>
              <label className={cardLabel} htmlFor='newBudgetAmount'>
                Amount
              </label>
              <input
                type='number'
                step='0.01'
                name='newBudgetAmount'
                id='newBudgetAmount'
                placeholder='e.g., $350.10'
                className={cardInput}
                inputMode='decimal'
                required
              />
            </div>
          </form>
          <input type='hidden' name='_action' value='createBudget' />
          <button type='submit' className='btn btn--dark'></button>
        </div>
      </div>
    </>
  )
}

export default TypeIncome
