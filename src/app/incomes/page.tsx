import React, { useEffect, useState } from 'react'
import IncomeType from './income-type/page'
import IncomeItem from './income-item/page'
import IncomeDetails from './income-details/page'
import IncomeTable from './income-table/page'
import { useSession } from 'next-auth/react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export function useIncomeBudget() {
  return useQuery({
    queryKey: ['incomeBudget'],
    queryFn: () =>
      fetch('http://localhost:3000/api/itype').then((res) => res.json()),
  })
}

const Incomes = () => {
  return (
    <>
      {/* {ibTypeData} */}
      <IncomeType />
      <IncomeItem />
      <IncomeDetails />
      <IncomeTable />
    </>
  )
}

export default Incomes
