import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='text-xl h-12 text-green-700 flex items-center justify-center border-b-2 border-b-green-600 uppercase'>
        <Link href='/'>Personal Finance</Link>
      </div>
    </>
  )
}

export default Navbar
