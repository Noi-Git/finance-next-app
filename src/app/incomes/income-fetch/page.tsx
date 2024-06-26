import { toast } from 'react-toastify'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { IBudget, IItem } from '@/types/types'
import { createIncomeBudget } from '@/utils/incomeHelper'

//FETCH INCOME TYPE
//QUERY
export function UseIncomeBudget() {
  return useQuery({
    queryKey: ['incomeBudget'],
    queryFn: () =>
      fetch('http://localhost:3000/api/itype').then((res) => res.json()),
  })
}

//MUTATION FOR CREATE
export function UseCreateIncome() {
  const QueryClient = useQueryClient()
  return useMutation({
    mutationFn: (newBudget: IBudget) => {
      return fetch('http://localhost:3000/api/itype', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBudget),
      })
    },
    onSuccess: async () => {
      console.log('success')
      return toast.success('Budget created!')
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

export function UseUpdateIncome() {
  const QueryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, newBudget }: { id: string; newBudget: IBudget }) => {
      return fetch(`http://http://localhost:3000/api/itype/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBudget),
      })
    },

    onSettled: async (_, error, variables) => {
      if (error) {
        console.log(error)
      } else {
        await QueryClient.invalidateQueries({ queryKey: ['incomeBudget'] })
        await QueryClient.invalidateQueries({
          queryKey: ['incomeB', { id: variables.id }],
        })
      }
    },
  })
}

export function UseDeleteIncome() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id }: { id: string }) => {
      return fetch(`http://http://localhost:3000/api/itype/${id}`, {
        method: 'DELETE',
      })
    },
    onSuccess: () => {
      console.log('Deleted')
    },
    onSettled: async (_, error) => {
      if (error) {
        console.log(error)
      } else {
        await queryClient.invalidateQueries({ queryKey: ['incomeBudget'] })
      }
    },
  })
}

//=== FETCH INCOME ITEM ===
//QUERY
export function UseIncomeItem() {
  return useQuery({
    queryKey: ['incomeItem'],
    queryFn: () =>
      fetch('http://localhost:3000/api/iitem').then((res) => res.json()),
  })
}

//MUTATION FOR CREATE
export function UseCreateIncomeItem() {
  const QueryClient = useQueryClient()
  return useMutation({
    mutationFn: (newItem: IItem) => {
      return fetch('http://localhost:3000/api/iitem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem),
      })
    },
    onSuccess: async () => {
      console.log('success')
      return toast.success('Item created!')
    },
    onSettled: async (_, error) => {
      //_, means it should have some value but we don't want it
      if (error) {
        console.log(error)
      } else {
        await QueryClient.invalidateQueries({ queryKey: ['incomeItem'] }) //incomeBudget is from Query -- will automatically refresh the page
      }
    },
  })
}

export function UseUpdateIncomeItem() {
  const QueryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, newItem }: { id: string; newItem: IItem }) => {
      return fetch(`http://http://localhost:3000/api/iitem/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem),
      })
    },

    onSettled: async (_, error, variables) => {
      if (error) {
        console.log(error)
      } else {
        await QueryClient.invalidateQueries({ queryKey: ['incomeBudget'] })
        await QueryClient.invalidateQueries({
          queryKey: ['incomeB', { id: variables.id }],
        })
      }
    },
  })
}

export function UseDeleteIncomeItem() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id }: { id: string }) => {
      return fetch(`http://http://localhost:3000/api/iitem/${id}`, {
        method: 'DELETE',
      })
    },
    onSuccess: () => {
      console.log('Deleted')
    },
    onSettled: async (_, error) => {
      if (error) {
        console.log(error)
      } else {
        await queryClient.invalidateQueries({ queryKey: ['incomeBudget'] })
      }
    },
  })
}

export async function incomeDashboardAction() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = UseIncomeBudget()
  const { _action, ...values } = Object.fromEntries(data)

  if (_action === 'createIncomeBudget') {
    try {
      createIncomeBudget({})
      return toast.success('Budget created!')
    } catch (error) {
      throw new Error('There was a problem creating your budget.')
    }
  }
}
