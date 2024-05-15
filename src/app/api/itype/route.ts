import { prisma } from '@/utils/connect'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const itype = await prisma.incomeItem.findMany()
    return new NextResponse(JSON.stringify(itype), { status: 200 })
  } catch (err) {
    console.log('fetch income type error: --', err)
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }),
      { status: 500 }
    )
  }
}

// export const createBudget = ({ name, amount }) => {
//   const newItem = {
//     id: crypto.randomUUID(),
//     name: name,
//     createdAt: Date.now(),
//     amount: +amount,
//   }
//   const existingBudgets = fetchData('budgets') ?? []
//   return localStorage.setItem(
//     'budgets',
//     JSON.stringify([...existingBudgets, newItem])
//   )
// }
