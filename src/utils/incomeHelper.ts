import { getData } from '@/app/api/itype/route'
import { IncomeBudgetType } from '@/types/types'

export const formatDateToLocalString = (epoch: any) =>
  new Date(epoch).toLocaleDateString()

export const createBudget = ({ ib_name, ib_amount }: any) => {
  const newItem = {
    ib_name,
    ib_amount: +ib_amount,
  }
  // const existingBudgets = getData() ?? []
  // return localStorage.setItem(
  //   'budgets',
  //   JSON.stringify([...existingBudgets, newItem])
  // )
}
