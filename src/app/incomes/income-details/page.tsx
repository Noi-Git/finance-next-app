// 'use client'

import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import {
  cardDetails,
  cardDetailsWrapper,
  detailsContainer,
} from '@/components/styles/detail-style'
import { featureIncomeItem } from '@/data'
import { homeCard } from '@/components/styles/home-style'

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/itype', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch income type')
  }
  return await res.json()
}

const IncomeDetails = async () => {
  const incomeType = await getData()
  // console.log('🚀 ~ :', incomeType)

  const incomeItem = featureIncomeItem
  // console.log('🚀 ~ IncomeDetails ~ incomeItem:', incomeItem)

  return (
    <>
      <div className={homeCard}>
        <div className={detailsContainer}>
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
        </div>
      </div>
    </>
  )
}

export default IncomeDetails
