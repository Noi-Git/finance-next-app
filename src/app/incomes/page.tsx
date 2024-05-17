import React, { useEffect, useState } from 'react'
import IncomeType from './income-type/page'
import IncomeItem from './income-item/page'
import IncomeDetails from './income-details/page'
import IncomeTable from './income-table/page'
import { useSession } from 'next-auth/react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { IBudget } from '@/types/types'

export function useIncomeBudget() {
  return useQuery({
    queryKey: ['incomeBudget'],
    queryFn: () =>
      fetch('http://localhost:3000/api/itype').then((res) => res.json()),
  })
}
// export const QueryClient = useQueryClient()
export function useCreateIncome() {
  const QueryClient = useQueryClient()
  return useMutation({
    mutationFn: (newBudget) => {
      return fetch('http://http://localhost:3000/api/itype', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBudget),
      })
    },
    onSuccess() {
      QueryClient.invalidateQueries({ queryKey: ['incomeBudget'] })
    },
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
