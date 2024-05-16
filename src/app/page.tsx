import React from 'react'
import {
  landingCard,
  landingCardImage,
  landingContents,
} from '@/components/styles/home-style'
import Image from 'next/image'
import UserLinks from '@/components/UserLinks'

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
          <UserLinks />
        </div>
      </div>
    </>
  )
}

export default LandingPage
