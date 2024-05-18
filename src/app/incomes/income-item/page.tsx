import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSession } from 'next-auth/react'
import { homeCard } from '@/components/styles/home-style'
import {
  budgetCard,
  budgetContainer,
  cardTypeTitle,
  itemForm,
  itemFormField,
  itemFormWrap,
  itemInput,
  itemLabel,
  itemSelect,
} from '@/components/styles/form-style'
import { toast } from 'react-toastify'
import {
  UseCreateIncomeItem,
  UseIncomeBudget,
  UseIncomeItem,
} from '../income-fetch/page'
import { IItem } from '@/types/types'
import { incomeButton } from '@/components/styles/buttons'

const IncomeItem = () => {
  const { data, error, isLoading } = UseIncomeBudget()
  console.log(data)
  const createItemMutation = UseCreateIncomeItem() //step 1

  const { data: session, status } = useSession()

  const { register, handleSubmit, reset } = useForm<IItem>() //step 3

  const handleInputChangeSubmit: SubmitHandler<IItem> = (newItem) => {
    //step 2
    createItemMutation.mutate(newItem)
    reset()
  }

  if (error) return <p>Something went wrong...</p>
  if (isLoading || status === 'loading') return <p>Loading...</p>

  return (
    <>
      <div className={homeCard}>
        <div className={budgetContainer}>
          <div className={budgetCard}>
            <h2 className={cardTypeTitle}>
              Add New Income{' '}
              {/* <span>
                {data.length === 1 &&
                  `${data.map((iname: any) => iname.ib_name)}`}
              </span> */}
            </h2>

            <div className={itemFormWrap}>
              <form
                className={itemForm}
                onSubmit={handleSubmit(handleInputChangeSubmit)}
              >
                <div className={itemFormField}>
                  <label className={itemLabel}>Income Name</label>
                  <input
                    type='text'
                    {...register('i_name')}
                    // name='newExpense'
                    id='newExpense'
                    placeholder='e.g., gradening'
                    className={itemInput}
                    required
                  />
                </div>

                <div className={itemFormField}>
                  <label className={itemLabel}>Amount</label>
                  <input
                    type='number'
                    step='0.01'
                    inputMode='decimal'
                    {...register('i_amount')}
                    // name='newExpenseAmount'
                    id='newExpenseAmount'
                    className={itemInput}
                    placeholder='e.g. 50'
                    required
                  />
                </div>

                <div className={itemFormField}>
                  <label className={itemLabel}>Income Type</label>
                  <select
                    // name='newExpenseBudget'
                    id='newExpenseBudget'
                    // {...register('ib_name')}
                    className={itemInput}
                    required
                  >
                    {data.map((item: any) => {
                      return (
                        <option
                          key={item.ib_id}
                          value={item.ib_id}
                          {...register('i_name')}
                        >
                          {item.ib_name}
                        </option>
                      )
                    })}
                  </select>
                </div>
                <input type='hidden' name='_action' value='creteIncomeItem' />
                <button
                  type='submit'
                  disabled={createItemMutation.isPending}
                  value={
                    createItemMutation.isPending ? 'Creating...' : 'Created'
                  }
                  className={incomeButton}
                >
                  <span>Add Income</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IncomeItem
