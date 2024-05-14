'use client'

import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import {
  cardDetails,
  cardDetailsWrapper,
} from '@/components/styles/detail-style'
import { featureIncomeItem } from '@/data'

const IncomeDetails = () => {
  const incomeItem = featureIncomeItem

  return (
    <>
      <div className={cardDetailsWrapper}>
        {incomeItem.map((item) => (
          <div key={item.id}>
            <div className={cardDetails}>
              <div className='progress-text'>
                <h3>{item?.options[0]?.budgetType}</h3>
                <p>${item?.options[0]?.budgetAmount} Budgeted</p>
              </div>
              <progress
                max={item?.options[0]?.budgetAmount}
                value={item?.amount}
              >
                <p>
                  formatPercentage({item?.amount} /{' '}
                  {item?.options[0]?.budgetAmount})
                </p>
              </progress>
              <div className='progress-text'>
                <small>${item?.amount} received</small>{' '}
                <small>
                  ${item?.options[0]?.budgetAmount - item?.amount} remaining
                </small>
              </div>
              <button className='btn' type='submit'>
                <span>View Detail</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default IncomeDetails
