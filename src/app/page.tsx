import Login from '@/components/login/Login'
import { homeContainer } from '../components/styles/home-style'
export default function Home() {
  return (
    <>
      <main className={homeContainer}>
        <Login />
      </main>
    </>
  )
}
