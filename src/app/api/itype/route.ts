import { getAuthSession } from '@/utils/auth'
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

export const POST = async (req: NextRequest) => {
  const session = await getAuthSession()
  if (session) {
    try {
      const body = await req.json()

      const IncomeBudget = await prisma.incomeBudget.create({
        data: body,
      })
      return new NextResponse(JSON.stringify(body), { status: 201 })
    } catch (err) {
      return new NextResponse(
        JSON.stringify({ message: 'Something went wrong' }),
        { status: 500 }
      )
    }
  }
}

export const getData = async () => {
  const test = await fetch('http://localhost:3000/api/itype', {
    cache: 'no-store',
  })
    .then((res) => res.json())
    .then((ibudgets) => {
      // console.log(ibudgets)
      return ibudgets
    })
  // console.log(test)
  return test
}
