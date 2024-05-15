import { prisma } from '@/utils/connect'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const ibudgets = await prisma.incomeBudget.findMany()
    return new NextResponse(JSON.stringify(ibudgets), { status: 200 })
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }),
      { status: 500 }
    )
  }
}

export const POST = () => {
  return new NextResponse('Hello', { status: 200 })
}
