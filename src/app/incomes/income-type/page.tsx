'use client'

import React, { useEffect, useState } from 'react'
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

// const noitest = getData().then((data) => {
//   return data
// })

const IncomeType = () => {
  const [incomeBudgetType, setIncomeBudgetType] = useState(null)

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

  const test = JSON.stringify(incomeBudgetType)
  console.log('🚀 ~ IncomeType ~ test:', test)

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
