import React from 'react'
import IncomeType from './income-type/page'
import IncomeItem from './income-item/page'
import IncomeDetails from './income-details/page'
import IncomeTable from './income-table/page'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { IBudget } from '@/types/types'

export function useIncomeBudget() {
  return useQuery({
    queryKey: ['incomeBudget'],
    queryFn: () =>
      fetch('http://localhost:3000/api/itype').then((res) => res.json()),
  })
}
export function useCreateIncome() {
  const QueryClient = useQueryClient()
  return useMutation({
    mutationFn: (newBudget: IBudget) => {
      return fetch('http://http://localhost:3000/api/itype', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBudget),
      })
    },
    onSuccess: async () => {
      console.log('success')
    },
    onSettled: async (_, error) => {
      //_, means it should have some value but we don't want it
      if (error) {
        console.log(error)
      } else {
        await QueryClient.invalidateQueries({ queryKey: ['incomeBudget'] }) //incomeBudget is from Query -- will automatically refresh the page
      }
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
