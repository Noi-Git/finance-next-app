export const formatDateToLocalString = (epoch: any) =>
  new Date(epoch).toLocaleDateString()

export const createIncomeBudget = ({ ib_name, ib_amount }: any) => {
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

export const createIncomeItem = ({ ib_name, ib_amount }: any) => {
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
