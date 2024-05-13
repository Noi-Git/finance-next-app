'use client'
import Login from '@/components/login/Login'
import { homeContainer } from '../components/styles/home-style'
import HomePage from '@//components/home/HomePage'
export default function Home() {
  return (
    <>
      <main className={homeContainer}>
        {/* <Login /> */}
        <HomePage />
      </main>
    </>
  )
}
