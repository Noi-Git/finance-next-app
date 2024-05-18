import { getAuthSession } from '@/utils/auth'
import { prisma } from '@/utils/connect'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const iitem = await prisma.incomeItem.findMany()
    return new NextResponse(JSON.stringify(iitem), { status: 200 })
  } catch (err) {
    console.log('fetch income item error: --', err)
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

      const incomeItem = await prisma.incomeItem.create({
        data: body,
      })
      console.log(
        'sucessful from post backend endpoint - add new item to database'
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

      await prisma.incomeItem.update({
        where: {
          i_id: id,
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
      await prisma.incomeItem.delete({
        where: {
          i_id: id,
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

//convert promise into array of objects
// export const getData = async () => {
//   const data = await fetch('http://localhost:3000/api/i-item', {
//     cache: 'no-store',
//   })
//     .then((response) => response.json())
//     .then((iitems) => {
//       return iitems
//     })
//   return data
// }
