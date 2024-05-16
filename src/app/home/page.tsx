import React from 'react'
import {
  availableAmount,
  availableText,
  pageButtonWrap,
  pageIncomeButton,
  pageExpenseButton,
  pageSavingButton,
  pageAmountWrap,
  pageIncomeAmount,
  pageExpenseAmount,
  pageSavingAmount,
  pageWrap,
} from '@/components/styles/home-style'
import Link from 'next/link'

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
          <Link href='/incomes' className={pageIncomeButton}>
            Income
          </Link>
          <Link href='/' className={pageExpenseButton}>
            Expense
          </Link>
          <Link href='/' className={pageSavingButton}>
            Saving
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
