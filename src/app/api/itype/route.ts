import { prisma } from '@/utils/connect'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const itype = await prisma.incomeBudget.findMany()
    return new NextResponse(JSON.stringify(itype), { status: 200 })
  } catch (err) {
    console.log('fetch income type error: --', err)
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }),
      { status: 500 }
    )
  }
}

export const getData = async () => {
  const test = await fetch('http://localhost:3000/api/itype', {
    cache: 'no-store',
  })
    .then((response) => response.json())
    .then((ibudgets) => {
      // console.log(ibudgets)
      return ibudgets
    })
  // console.log(test)
  return test
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
