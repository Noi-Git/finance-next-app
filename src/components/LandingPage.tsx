'use client'

import Link from 'next/link'
import React from 'react'
import {
  homeCard,
  homeSubTitle,
  homeTitle,
  landingPageButton,
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
          src='/money-tree.svg'
          alt='a tree with golden coins'
          width={500}
          height={500}
        ></Image>
        {!user ? (
          <>
            <Link href='/login' className={landingPageButton}>
              Login
            </Link>
            <h2>
              Don&apos;t have an account
              <span className={loginFooterSpan}>Register</span>
            </h2>
          </>
        ) : (
          <Link href='/home' className={landingPageButton}>
            Home page
          </Link>
        )}
      </div>
    </>
  )
}

export default LandingPage
