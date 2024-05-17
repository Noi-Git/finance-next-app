import { prisma } from '@/utils/connect'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const iitem = await prisma.incomeItem.findMany()
    return new NextResponse(JSON.stringify(iitem), { status: 200 })
  } catch (err) {
    console.log('fetch income type error: --', err)
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }),
      { status: 500 }
    )
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
