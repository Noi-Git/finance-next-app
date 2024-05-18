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
      console.log(
        'sucessful from post backend endpoint - add new bubget database'
      )
      return new NextResponse(JSON.stringify(body), { status: 201 })
    } catch (err) {
      return new NextResponse(
        JSON.stringify({ message: 'Something went wrong' }),
        { status: 500 }
      )
    }
  }
}

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params
  const session = await getAuthSession()
  if (session) {
    try {
      const body = await req.json()

      await prisma.incomeBudget.update({
        where: {
          ib_id: id,
        },
        data: body,
      })
      return new NextResponse(JSON.stringify({ message: 'Updated' }), {
        status: 200,
      })
    } catch (err) {
      console.log(err)
      return new NextResponse(
        JSON.stringify({ message: 'Something went wrong' }),
        { status: 500 }
      )
    }
  }
}

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params
  const session = await getAuthSession()
  if (session) {
    try {
      await prisma.incomeBudget.delete({
        where: {
          ib_id: id,
        },
      })
      return new NextResponse(JSON.stringify({ message: 'Deleted' }), {
        status: 200,
      })
    } catch (err) {
      console.log(err)
      return new NextResponse(
        JSON.stringify({ message: 'Something went wrong' }),
        { status: 500 }
      )
    }
  }
}
