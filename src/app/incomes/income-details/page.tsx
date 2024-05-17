'use client'

import React, { useEffect, useState } from 'react'
import {
  cardDetails,
  cardDetailsWrapper,
  detailsContainer,
} from '@/components/styles/detail-style'
import { featureIncomeItem } from '@/data'
import { homeCard } from '@/components/styles/home-style'
// import { getData } from '@/app/api/itype/route'

const IncomeDetails = () => {
  const [incomeBudgetType, setIncomeBudgetType] = useState([])

  // useEffect(() => {
  //   getData()
  //     .then((data) => {
  //       setIncomeBudgetType(data)
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data', error)
  //     })
  // }, [])

  if (incomeBudgetType === null) {
    return <div>Loading...</div>
  }

  const ibType = incomeBudgetType
  const { _action, ...values } = Object.fromEntries(ibType)

  // const testtt = ibType.map((ib) => console.log(ib))

  return (
    <>
      <div className={homeCard}>
        <div className={detailsContainer}>
          <div className={cardDetailsWrapper}>
            {/* {ibType.map((item: IncomeBudgetType) => (
              <div key={item.ib_id}>
                <div className={cardDetails}>
                  <div className='progress-text'>
                    <h3>{item?.options?.i_name}</h3>
                    <p>${item?.options?.i_amount} Budgeted</p>
                  </div> */}
            {/* <progress
                    max={item?.options[0]?.i_amount}
                    value={item?.ib_amount}
                  >
                    <p>
                      formatPercentage({item?.ib_amount} /{' '}
                      {item?.options[0]?.i_amount})
                    </p>
                  </progress> */}
            <div className='progress-text'>
              {/* <small>${item?.i_amount} received</small>{' '} */}
              <small>
                {/* ${item?.options[0]?.i_amount - item?.ib_amount} remaining */}
              </small>
            </div>
            <button className='btn' type='submit'>
              <span>View Detail</span>
            </button>
          </div>
        </div>
        {/* ))} */}
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  )
}

export default IncomeDetails
