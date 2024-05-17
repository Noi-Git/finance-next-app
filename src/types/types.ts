export type IncomeBudgetType = {
  ib_id?: String
  ib_name: String
  ib_amount: number
  createdAt?: Date
  options?: { i_name: String; i_amount: number }
}

export type IBudget = {
  ib_id?: String
  ib_name: String
  ib_amount: number
  createdAt?: Date
  options?: { i_name: String; i_amount: number }
}

export const IncomeItem = {
  i_id: String,
  createdAt: Date,
  i_name: String,
  i_amount: Number,
}

interface IncomeBudgetInput {
  incomeType: string
  incomeBudgetAmount: string
}
