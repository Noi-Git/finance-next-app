export type IncomeBudgetType = {
  ib_id: String
  ib_name: String
  ib_amount: number
  createdAt: Date
  budgetType: { i_name: String; i_amount: number }[]
}

export const IncomeItem = {
  i_id: String,
  createdAt: Date,
  i_name: String,
  i_amount: Number,
}
