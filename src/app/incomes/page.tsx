import React from 'react'
import { fetchIncome } from '@/utils/incomeHelper'
import IncomeType from './income-type/page'
import IncomeItem from './income-item/page'
import IncomeDetails from './income-details/page'
import IncomeTable from './income-table/page'

const Incomes = () => {
  const incomeBudget = false

  return (
    <>
      {/* if !user.income ? <IncomeType /> <IncomeItem /> :  <IncomeType /> <IncomeItem /> <IncomeDetails /> <IncomeTable />*/}
      {!incomeBudget ? (
        <>
          <IncomeType />
          <IncomeItem />
        </>
      ) : (
        <>
          <IncomeType />
          <IncomeItem />
          <IncomeDetails />
          <IncomeTable />
        </>
      )}
    </>
  )
}

export default Incomes
