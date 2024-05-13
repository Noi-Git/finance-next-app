import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export const GET = async () => {
  try {
    const income_budget = await prisma.incomeBudget.findMany()
    return new NextResponse(JSON.stringify(income_budget), { status: 200 })
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }),
      { status: 500 }
    )
  }
}
