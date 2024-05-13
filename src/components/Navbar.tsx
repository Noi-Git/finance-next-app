import Link from 'next/link'
import React from 'react'
import { navBar } from './styles/nav-style'

const Navbar = () => {
  return (
    <>
      <div className={navBar}>
        <Link href='/'>Personal Finance</Link>
      </div>
    </>
  )
}

export default Navbar
