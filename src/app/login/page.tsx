'use client'

import React, { useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { homeSubTitle, homeTitle } from '@/components/styles/home-style'
import {
  loginHomeCard,
  loginHomeContainer,
  loginHomeImage,
  loginHomeContents,
  loginButtonTextFacebook,
  loginButtonTextGoogle,
  loginButtonGoogle,
  loginButtonFacebook,
} from '@/components/styles/login-style'

const Login = () => {
  const { data, status } = useSession()
  const router = useRouter()

  return (
    <>
      <div className={loginHomeContainer}>
        <div className={loginHomeCard}>
          <div className={loginHomeImage}>
            <Image
              src='/money-tree.svg'
              alt='a tree with golden coins'
              width={500}
              height={500}
            ></Image>
          </div>
          <div className={loginHomeContents}>
            <h1 className={homeTitle}>Welcome!</h1>
            <h2 className={homeSubTitle}>
              Take charge of your finance freedom
            </h2>
            <button className={loginButtonGoogle}>
              <Image
                src='/google-icon.svg'
                alt='google icon'
                width={50}
                height={50}
                onClick={() => signIn('google')}
                className='object-contains'
              />
              <span className={loginButtonTextGoogle}>Sign in with Google</span>
            </button>

            <button className={loginButtonFacebook}>
              <Image
                src='/facebook-icon.svg'
                alt='google icon'
                width={35}
                height={35}
                className='object-contains'
              />
              <span className={loginButtonTextFacebook}>
                Sign in with Facebook
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
