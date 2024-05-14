type IncomeBudget = {
  id: number
  name: string
  amount: number
}

type IncomeBudgets = IncomeBudget[]

export const featuredIncomeBudget: IncomeBudgets = [
  {
    id: 1,
    name: 'Salary',
    amount: 2000,
  },
  {
    id: 2,
    name: 'Lawn mowing',
    amount: 100,
  },
  {
    id: 3,
    name: 'Dog walking',
    amount: 300,
  },
]

type IncomeItem = {
  id: number
  name: string
  amount: number
  options: { id: number; budgetType: string; budgetAmount: number }[]
}

type IncomeItems = IncomeItem[]

export const featureIncomeItem: IncomeItems = [
  {
    id: 1,
    name: 'week 1 pay check',
    amount: 800,
    options: [{ id: 1, budgetType: 'Salary', budgetAmount: 2000 }],
  },
  {
    id: 2,
    name: 'Mowing first lawn',
    amount: 50,
    options: [{ id: 2, budgetType: 'Lawn mowing', budgetAmount: 200 }],
  },
  {
    id: 3,
    name: 'neighbor 1 dog',
    amount: 20,
    options: [{ id: 3, budgetType: 'Dog Walking', budgetAmount: 300 }],
  },
  {
    id: 4,
    name: 'neighbor 2 dog',
    amount: 20,
    options: [{ id: 3, budgetType: 'Dog Walking', budgetAmount: 300 }],
  },
  {
    id: 5,
    name: 'Mowing second lawn',
    amount: 30,
    options: [{ id: 2, budgetType: 'Lawn mowing', budgetAmount: 200 }],
  },
  {
    id: 6,
    name: 'neighbor 2 dog',
    amount: 25,
    options: [{ id: 3, budgetType: 'Dog Walking', budgetAmount: 300 }],
  },
  {
    id: 7,
    name: 'neighbor 3 dog sitting',
    amount: 40,
    options: [{ id: 3, budgetType: 'Dog Walking', budgetAmount: 300 }],
  },
  {
    id: 8,
    name: 'week 2 pay check',
    amount: 500,
    options: [{ id: 1, budgetType: 'Salary', budgetAmount: 2000 }],
  },
  {
    id: 9,
    name: 'Mowing first lawn',
    amount: 20,
    options: [{ id: 2, budgetType: 'Lawn mowing', budgetAmount: 200 }],
  },
  {
    id: 10,
    name: 'week 3 pay check',
    amount: 800,
    options: [{ id: 1, budgetType: 'Salary', budgetAmount: 2000 }],
  },
  {
    id: 11,
    name: 'neighbor 3 sitting',
    amount: 30,
    options: [{ id: 3, budgetType: 'Dog Walking', budgetAmount: 300 }],
  },
]
