import React from 'react'
import IncomeType from './income-type/page'
import IncomeItem from './income-item/page'
import IncomeDetails from './income-details/page'
import IncomeTable from './income-table/page'

const Incomes = () => {
  return (
    <>
      <IncomeType />
      <IncomeItem />
      <IncomeDetails />
      <IncomeTable />
    </>
  )
}

export default Incomes
