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

export const createIncomeItem = ({ i_name, i_amount, ib_name }: any) => {
  const { data, error, isLoading } = UseIncomeItem()
  const newItem = {
    i_name,
    i_amount: +i_amount,
    ib_name,
  }
  const existingItems = data ?? []
  return UseIncomeItem(), JSON.stringify([...existingItems, newItem])
}
