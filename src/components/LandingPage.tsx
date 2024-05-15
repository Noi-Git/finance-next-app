'use client'

import Link from 'next/link'
import React from 'react'
import {
  landingCard,
  landingCardContents,
  landingCardImage,
  landingContents,
  landingPageButton,
} from '@/components/styles/home-style'
import Image from 'next/image'

const LandingPage = () => {
  const user = true
  return (
    <>
      <div className={landingContents}>
        <div className={landingCard}>
          <div className={landingCardImage}>
            <Image
              src='/money-tree.svg'
              alt='a tree with golden coins'
              width={500}
              height={500}
            ></Image>
          </div>

          <div className={landingCardContents}>
            {!user ? (
              <>
                <Link href='/login' className={landingPageButton}>
                  Login
                </Link>
              </>
            ) : (
              <Link href='/home' className={landingPageButton}>
                Home page
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
