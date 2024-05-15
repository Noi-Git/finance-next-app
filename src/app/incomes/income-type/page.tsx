import React from 'react'
import { toast } from 'react-toastify'
import { homeCard } from '@/components/styles/home-style'
import {
  budgetCard,
  budgetContainer,
  cardForm,
  cardFormField,
  cardFormWrap,
  cardInput,
  cardLabel,
  cardTypeTitle,
} from '@/components/styles/form-style'
import { incomeButton } from '@/components/styles/buttons'
import { fetchIncome } from '@/utils/incomeHelper'

export function incomeDashboardLoader() {
  const incomeBudget = fetchIncome('incomeBudget')
  return { incomeBudget }
}

// action
export async function dashboardAction({ request }) {
  // await wait()
  const data = await request.formData()
  const { _action, ...values } = Object.fromEntries(data)
  // console.log(data)
  // console.log('_action', _action)

  // if (_action === 'newUser') {
  //   try {
  //     localStorage.setItem('userName', JSON.stringify(values.userName))
  //     return toast.success(`Welcome, ${values.userName}`)
  //   } catch (error) {
  //     throw new Error('There was a problem creating your account.')
  //   }
  // }

  if (_action === 'createIncomeBudget') {
    try {
      createIncomeBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      })
      return toast.success('Income budget created!')
    } catch (error) {
      throw new Error('There was a problem creating your income budget.')
    }
  }

  // if (_action === 'createExpense') {
  //   try {
  //     createExpense({
  //       name: values.newExpense,
  //       amount: values.newExpenseAmount,
  //       budgetId: values.newExpenseBudget,
  //     })
  //     // console.log('values.newExpense', values)
  //     return toast.success(`Expense ${values.newExpense} created!`)
  //   } catch (error) {
  //     throw new Error('There was a problem creating your expense.')
  //   }
  // }

  // if (_action === 'deleteExpense') {
  //   try {
  //     deleteItem({
  //       key: 'expenses',
  //       id: values.expenseId,
  //     })
  //     // console.log('values.newExpense', values)
  //     return toast.success(`Expense deleted!`)
  //   } catch (error) {
  //     throw new Error('There was a problem deleting your expense.')
  //   }
  // }
}

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
                    name='newIncomeBudget'
                    id='newIncomeBudget'
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
                    name='newIncomeBudgetAmount'
                    id='newIncomeBudgetAmount'
                    placeholder='e.g., $3500.00'
                    className={cardInput}
                    inputMode='decimal'
                    required
                  />
                </div>
              </form>
            </div>
            <input type='hidden' name='_action' value='createIncomeBudget' />
            <button type='submit' className={incomeButton}>
              Add Income Goal
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default IncomeType
