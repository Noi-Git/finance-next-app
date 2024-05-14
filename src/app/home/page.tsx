import React from 'react'
import {
  availableAmount,
  availableText,
  pageButtonWrap,
  pageButton,
  pageIncomeButton,
  pageExpenseButton,
  pageSavingButton,
  pageAmountWrap,
  pageIncomeAmount,
  pageExpenseAmount,
  pageSavingAmount,
  pageWrap,
} from '@/components/styles/home-style'

const Home = () => {
  return (
    <>
      <div className={availableAmount}>$ 1200</div>
      <span className={availableText}>Available</span>
      <div className={pageWrap}>
        <div className={pageAmountWrap}>
          <button className={pageIncomeAmount}>$2000</button>
          <button className={pageExpenseAmount}>$800</button>
          <button className={pageSavingAmount}>$400</button>
        </div>
        <div className={pageButtonWrap}>
          <button className={pageIncomeButton}>Income</button>
          <button className={pageExpenseButton}>Expense</button>
          <button className={pageSavingButton}>Saving</button>
        </div>
      </div>
    </>
  )
}

export default Home
