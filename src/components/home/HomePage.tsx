import React from 'react'
import {
  availableAmount,
  availableText,
  pageButtonWrap,
  pageButton,
} from '../styles/home-style'

const HomePage = () => {
  return (
    <>
      <div className={availableAmount}>$ 500</div>
      <span className={availableText}>Available</span>
      <div className={pageButtonWrap}>
        <button className={pageButton}>Income</button>
        <button className={pageButton}>Expense</button>
        <button className={pageButton}>Saving</button>
      </div>
    </>
  )
}

export default HomePage
