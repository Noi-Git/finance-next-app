'use client'
import Login from '@/components/login/Login'
import { homeContainer } from '../components/styles/home-style'
import HomePage from '@//components/home/HomePage'
import IncomeItem from '../components/income/IncomeItem'
import IncomeType from '../components/income/IncomeType'
import IncomeDetail from '@/components/income/IncomeDetail'
import IncomeTable from '@/components/income/IncomeTable'
export default function Home() {
  return (
    <>
      <main className={homeContainer}>
        {/* <Login /> */}
        {/* <HomePage /> */}
        <IncomeType />
        <IncomeItem />
        <IncomeDetail />
        <IncomeTable />
      </main>
    </>
  )
}
