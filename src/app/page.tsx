import Image from 'next/image'
import {
  homeCard,
  homeContainer,
  homeSubTitle,
  homeTitle,
} from './styles/home-style'
import Login from './login/page'
import { loginFooter, loginFooterSpan } from './styles/login-style'

export default function Home() {
  return (
    <>
      <main className={homeContainer}>
        <div className={homeCard}>
          <h1 className={homeTitle}>Welcome!</h1>
          <h2 className={homeSubTitle}>Take charge of your finance freedom</h2>
          <Login />
          <div className={loginFooter}>
            <h2>
              Don&apos;t have an account
              <span className={loginFooterSpan}>Register</span>
            </h2>
          </div>
        </div>
      </main>
    </>
  )
}
