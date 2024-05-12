import React from 'react'
import {
  loginCard,
  loginContainer,
  loginForm,
  loginFormField,
  loginInput,
  loginLabel,
  loginTitle,
} from '../styles/login-style'

const Login = () => {
  return (
    <>
      <div className={loginContainer}>
        <div className={loginCard}>
          <h1 className={loginTitle}>Login</h1>
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
    </>
  )
}

export default Login
