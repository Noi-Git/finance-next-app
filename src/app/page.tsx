import { homeContainer } from './styles/home-style'
import Login from './login/page'
import { useState } from 'react'
export default function Home() {
  return (
    <>
      <main className={homeContainer}>
        <Login />
      </main>
    </>
  )
}
