import React from 'react'
import { homeCard } from '@/components/styles/home-style'
import {
  budgetCard,
  budgetContainer,
  cardTypeTitle,
  itemForm,
  itemFormField,
  itemFormWrap,
  itemInput,
  itemLabel,
  itemSelect,
} from '@/components/styles/form-style'
import { toast } from 'react-toastify'

const IncomeItem = () => {
  // const { _action, ...values } = Object.fromEntries(iData)

  // if (_action === 'createIncomeItem') {
  // }

  return (
    <>
      <div className={homeCard}>
        <div className={budgetContainer}>
          <div className={budgetCard}>
            <h2 className={cardTypeTitle}>Add New Income</h2>

            <div className={itemFormWrap}>
              <form method='POST' className={itemForm}>
                <div className={itemFormField}>
                  <label className={itemLabel}>Income Name</label>
                  <input
                    type='text'
                    name='newExpense'
                    id='newExpense'
                    placeholder='e.g., gradening'
                    className={itemInput}
                    required
                  />
                </div>
              </form>
              <form className={itemForm}>
                <div className={itemFormField}>
                  <label className={itemLabel}>Amount</label>
                  <input
                    type='number'
                    step='0.01'
                    inputMode='decimal'
                    name='newExpenseAmount'
                    id='newExpenseAmount'
                    className={itemInput}
                    placeholder='e.g. 50'
                    required
                  />
                </div>
              </form>
              <form className={itemForm}>
                <div className={itemFormField}>
                  <label className={itemLabel}>Income Type</label>
                  <select
                    name='newExpenseBudget'
                    id='newExpenseBudget'
                    className={itemInput}
                    required
                  >
                    {/* {incomeBudget.map((budget) => {
                      return (
                        <option key={budget.id} value={budget.id}>
                          {budget.name}
                        </option>
                      )
                    })} */}
                  </select>
                </div>
              </form>
            </div>
            <input type='hidden' name='_action' value='creteIncomeItem' />
            <button type='submit' className='btn btn--dark'>
              <span>Add Income</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default IncomeItem
