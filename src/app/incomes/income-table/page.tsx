'use client'

import React from 'react'
import {
  tableBody,
  tableCard,
  tableHead,
  tableRow,
  tableWrapper,
  tdAmount,
  tdDate,
  tdName,
  tdType,
  thAmount,
  thDate,
  thName,
  thType,
} from '@/components/styles/table-style'
import { featuredIncomeBudget, featureIncomeItem } from '@/data'

const IncomeTable = () => {
  const IncomeBudget = featuredIncomeBudget
  const incomeItem = featureIncomeItem

  return (
    <>
      <div className={tableCard}>
        <div>
          <table className={tableWrapper}>
            <thead>
              <tr className={tableHead}>
                <td className={thName}>Name</td>
                <td className={thAmount}>Amount</td>
                <td className={thDate}>Date</td>
                <td className={thType}>Income Type</td>
              </tr>
              {/* <tr className={tableHead}>
              {['Name', 'Amount', 'Date', 'Income Type'].map((i, index) => (
                <th key={index}>{i}</th>
              ))}
            </tr> */}
            </thead>

            <tbody className={tableBody}>
              {incomeItem.map((item) => (
                <div key={item.id}>
                  <tr className={tableRow}>
                    <td className={tdName}>{item?.name}</td>
                    <td className={tdAmount}>{item?.amount}</td>
                    <td className={tdDate}>13/05/2024</td>
                    <td className={tdType}>{item?.options[0]?.budgetType}</td>
                  </tr>
                </div>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default IncomeTable
