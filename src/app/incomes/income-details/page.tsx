import React from 'react'
// import { Link } from 'react-router-dom'
import {
  cardDetails,
  cardDetailsWrapper,
} from '@/components/styles/detail-style'

const income = [
  { id: 1, name: 'salary' },
  { id: 2, name: 'gardening' },
  { id: 3, name: 'dog walking' },
]

const IncomeDetails = () => {
  return (
    <>
      <h2>
        show each income or expense card with progress bar from BudgetItem.jsx
      </h2>
      <div className={cardDetailsWrapper}>
        <div className={cardDetails}>
          <div className='progress-text'>
            <h3>Salary</h3>
            <p>$5000 Budgeted</p>
          </div>
          <progress max='5000' value='3500'>
            <p>formatPercentage(3500 / 5000)</p>
          </progress>
          <div className='progress-text'>
            <small>3500 received</small>
            <small>5000-3500 = 1500 remaining</small>
          </div>

          <button className='btn' type='submit'>
            <span>Delete Income</span>
          </button>
        </div>

        <div className={cardDetails}>
          <div className='progress-text'>
            <h3>Gardening</h3>
            <p>$300 Budgeted</p>
          </div>
          <progress max='300' value='200'>
            <p>formatPercentage(200 / 300)</p>
          </progress>
          <div className='progress-text'>
            <small>200 received</small>
            <small>300-200 = 100 remaining</small>
          </div>

          <button className='btn' type='submit'>
            <span>Delete Income</span>
          </button>

          {/* <div className='flex-sm'> */}
          {/* <Link to=('/') className='btn'> */}
          {/* <span>View Details</span> */}
          {/* </Link> */}
          {/* </div> */}
        </div>
      </div>
    </>
  )
}

export default IncomeDetails
