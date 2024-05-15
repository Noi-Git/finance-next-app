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
