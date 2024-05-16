'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { landingCardContents, landingPageButton } from './styles/home-style'

const UserLinks = () => {
  const { data, status } = useSession()
  return (
    <>
      <div className={landingCardContents}>
        {status === 'authenticated' ? (
          <>
            <Link href='/home' className={landingPageButton}>
              Home page
            </Link>
          </>
        ) : (
          <Link href='/login' className={landingPageButton}>
            Login
          </Link>
        )}
      </div>
    </>
  )
}

export default UserLinks
