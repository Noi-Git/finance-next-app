//create a generic type
const identify = <T>(arg: T): T => arg

interface incomeTypeShema {
  id: number
  name: string
  amount: number
}

interface incomeItemSchema extends incomeTypeShema {
  id: number
  name: string
  amount: number
}

export const fetchIncome = (key: any): incomeItemSchema => {
  return JSON.parse(localStorage.getItem(key) || '')
}
