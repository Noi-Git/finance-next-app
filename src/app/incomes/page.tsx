'use client'
import React from 'react'
import IncomeType from './income-type/page'
import IncomeItem from './income-item/page'
import IncomeDetails from './income-details/page'
import IncomeTable from './income-table/page'
import { UseIncomeBudget } from './income-fetch/page'

const Incomes = () => {
  const { data, error, isLoading } = UseIncomeBudget()
  console.log('🚀 ~ Incomes ~ data:', data)
  return (
    <>
      {data && data.length > 0 ? (
        <>
          <IncomeType />
          <IncomeItem />
        </>
      ) : (
        <>
          <IncomeDetails />
          <IncomeTable />
        </>
      )}
    </>
  )
}

export default Incomes
