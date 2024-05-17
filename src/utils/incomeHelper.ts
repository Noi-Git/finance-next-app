import {
  UseCreateIncome,
  UseIncomeBudget,
  UseIncomeItem,
} from '@/app/incomes/income-fetch/page'

export const formatDateToLocalString = (epoch: any) =>
  new Date(epoch).toLocaleDateString()

export const createIncomeBudget = ({ ib_name, ib_amount }: any) => {
  const { data, error, isLoading } = UseIncomeBudget()
  const newItem = {
    ib_name,
    ib_amount: +ib_amount,
  }
  const existingBudgets = data ?? []
  return UseCreateIncome(), JSON.stringify([...existingBudgets, newItem])
}

export const createIncomeItem = ({ ib_name, ib_amount }: any) => {
  const { data, error, isLoading } = UseIncomeItem()
  const newItem = {
    ib_name,
    ib_amount: +ib_amount,
  }
  const existingItems = data ?? []
  return UseIncomeItem(), JSON.stringify([...existingItems, newItem])
}
