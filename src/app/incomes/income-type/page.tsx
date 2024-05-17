'use client'

import React from 'react'
import { homeCard } from '@/components/styles/home-style'
import {
  budgetCard,
  budgetContainer,
  cardForm,
  cardFormField,
  cardFormWrap,
  cardInput,
  cardLabel,
  cardTypeTitle,
} from '@/components/styles/form-style'
import { incomeButton } from '@/components/styles/buttons'
import { useSession } from 'next-auth/react'
import { UseCreateIncome, UseIncomeBudget } from '../page'
import { IBudget } from '@/types/types'
import { SubmitHandler, useForm } from 'react-hook-form'

const IncomeType = () => {
  const { data, error, isLoading } = UseIncomeBudget()
  const createBudgetMutation = UseCreateIncome() //step 1

  const { data: session, status } = useSession()

  const { register, handleSubmit, reset } = useForm<IBudget>() //step 3

  const handleInputChangeSubmit: SubmitHandler<IBudget> = (newBudget) => {
    //step 2
    createBudgetMutation.mutate(newBudget)
    reset()
  }

  if (error) return <p>Something went wrong...</p>
  if (isLoading || status === 'loading') return <p>Loading...</p>

  return (
    <>
      <div className={homeCard}>
        <div className={budgetContainer}>
          <div className={budgetCard}>
            <h2 className={cardTypeTitle}>Income: Type & Goal</h2>

            <div className={cardFormWrap}>
              <form
                className={cardForm}
                onSubmit={handleSubmit(handleInputChangeSubmit)}
              >
                <div className={cardFormField}>
                  <label className={cardLabel} htmlFor='newBudget'>
                    Budget Name
                  </label>
                  <input
                    type='text'
                    {...register('ib_name')}
                    placeholder='e.g.Salary'
                    className={cardInput}
                    required
                  />
                </div>

                <div className={cardFormField}>
                  <label className={cardLabel} htmlFor='newBudgetAmount'>
                    Amount
                  </label>
                  <input
                    type='number'
                    step='0.01'
                    {...register('ib_amount')}
                    placeholder='e.g., $3500.00'
                    className={cardInput}
                    inputMode='decimal'
                    required
                  />
                </div>
                <input
                  type='hidden'
                  name='_action'
                  value='createIncomeBudget'
                />
                <button
                  type='submit'
                  disabled={createBudgetMutation.isPending}
                  value={
                    createBudgetMutation.isPending ? 'Creating...' : 'Created'
                  }
                  className={incomeButton}
                >
                  Add Income Goal
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IncomeType
