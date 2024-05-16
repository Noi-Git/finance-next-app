'use client'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { logInOut } from './styles/nav-style'
import { useRouter } from 'next/navigation'

const UserLinks = () => {
  const { status } = useSession()
  const router = useRouter()

  if (status !== 'authenticated') {
    router.push('/login')
  }

  return (
    <>
      <div>
        {status === 'authenticated' ? (
          <>
            <span className={logInOut} onClick={() => signOut()}>
              Logout
            </span>
          </>
        ) : (
          <span className={logInOut} onClick={() => signIn()}>
            Login
          </span>
        )}
      </div>
    </>
  )
}

export default UserLinks
