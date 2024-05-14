import React from 'react'
import { homeCard } from '@/components/styles/home-style'
import {
  budgetCard,
  budgetContainer,
  cardForm,
  cardFormField,
  cardFormWrap,
  cardInput,
  cardLabel,
  cardTitle,
  cardTypeTitle,
} from '@/components/styles/form-style'

const IncomeType = () => {
  return (
    <>
      <div className={homeCard}>
        <div className={budgetContainer}>
          <div className={budgetCard}>
            <h2 className={cardTypeTitle}>Income: Type & Goal</h2>
            {/* <span className={cardTitle}>Type & Goal</span> */}

            <div className={cardFormWrap}>
              <form method='POST' className={cardForm}>
                <div className={cardFormField}>
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
                <div className={cardFormField}>
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
            </div>
            <input type='hidden' name='_action' value='createBudget' />
            <button type='submit' className='btn btn--dark'></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default IncomeType
