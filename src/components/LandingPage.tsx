'use client'

import Link from 'next/link'
import React from 'react'
import {
  homeCard,
  homeSubTitle,
  homeTitle,
} from '@/components/styles/home-style'
import { loginFooterSpan } from '@/components/styles/login-style'
import Image from 'next/image'

const LandingPage = () => {
  const user = false
  return (
    <>
      <div className={homeCard}>
        <h1 className={homeTitle}>Welcome!</h1>
        <h2 className={homeSubTitle}>Take charge of your finance freedom</h2>
        <Image
          src='/money-tree'
          alt='a tree with golden coins'
          width={30}
          height={30}
        ></Image>
        {!user ? (
          <Link href='/login'>Login</Link>
        ) : (
          <Link href='/home'>Home page</Link>
        )}
        <h2>
          Don&apos;t have an account
          <span className={loginFooterSpan}>Register</span>
        </h2>
      </div>

      {!user ? <Link href='/login'>Login</Link> : <Link href='/home'></Link>}
    </>
  )
}

export default LandingPage
