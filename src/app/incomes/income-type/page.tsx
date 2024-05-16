'use client'

import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
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
import { getData } from '@/app/api/itype/route'
// import { createIncomeBudget } from '@/utils/incomeHelper'

const IncomeType = () => {
  const [incomeBudgetType, setIncomeBudgetType] = useState([])

  useEffect(() => {
    getData()
      .then((data) => {
        setIncomeBudgetType(data)
      })
      .catch((error) => {
        console.error('Error fetching data', error)
      })
  }, [])

  if (incomeBudgetType === null) {
    return <div>Loading...</div>
  }

  const ibTypeData = incomeBudgetType
  const { _action, ...values } = Object.fromEntries(ibTypeData)
  console.log('🚀 ibTypeData:--', ibTypeData)

  if (_action === 'createIncomeBudget') {
    //=== dispatch
    // try {
    //   createBudget({
    //     ib_name: values.newBudget,
    //     ib_amount: values.newBudgetAmount,
    //   })
    //   return toast.success('Budget created!')
    // } catch (error) {
    //   throw new Error('There was a problem creating your budget.')
    // }
  }

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
                    name='newIncomeBudgetName'
                    id='newIncomeBudgetName'
                    placeholder='e.g.Salary'
                    className={cardInput}
                    required
                  />
                </div>
                {/* </form>
              <form className={cardForm}> */}
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
