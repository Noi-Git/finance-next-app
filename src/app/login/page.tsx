import React from 'react'
import {
  loginCard,
  loginContainer,
  loginFooter,
  loginFooterSpan,
  loginForm,
  loginFormField,
  loginFormWrap,
  loginInput,
  loginLabel,
  loginTitle,
} from '../styles/login-style'
import { homeCard, homeSubTitle, homeTitle } from '../styles/home-style'

const Login = () => {
  // const [user, setUser] = useState(false)
  return (
    <>
      {/* {!user ? () : (<h1>This is Home Page</h1>)} */}
      <div className={homeCard}>
        <h1 className={homeTitle}>Welcome!</h1>
        <h2 className={homeSubTitle}>Take charge of your finance freedom</h2>
        <div className={loginContainer}>
          <div className={loginCard}>
            <h1 className={loginTitle}>Login</h1>
            <div className={loginFormWrap}>
              <form method='POST' className={loginForm}>
                <div className={loginFormField}>
                  <label className={loginLabel} htmlFor='newBudget'>
                    Email:
                  </label>
                  <input
                    type='text'
                    name='newBudget'
                    id='newBudget'
                    placeholder='e.g. name@test.com'
                    className={loginInput}
                    required
                  />
                </div>
              </form>
              <form className={loginForm}>
                <div className={loginFormField}>
                  <label className={loginLabel} htmlFor='newBudgetAmount'>
                    Password:
                  </label>
                  <input
                    type='number'
                    step='0.01'
                    name='newBudgetAmount'
                    id='newBudgetAmount'
                    placeholder='e.g., Password1234'
                    className={loginInput}
                    inputMode='decimal'
                    required
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={loginFooter}>
          <h2>
            Don&apos;t have an account
            <span className={loginFooterSpan}>Register</span>
          </h2>
        </div>
      </div>
    </>
  )
}

export default Login
