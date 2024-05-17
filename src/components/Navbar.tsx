'use client'

import Link from 'next/link'
import React from 'react'
import { logInOut, navBar } from './styles/nav-style'
import UserLinks from './UserLinks'
import { signOut, useSession } from 'next-auth/react'

const Navbar = () => {
  const { status } = useSession()
  return (
    <>
      <div className={navBar}>
        <Link href='/'>Personal Finance</Link>
        <UserLinks />
      </div>
    </>
  )
}

export default Navbar
