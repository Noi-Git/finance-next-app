import React from 'react'

const IncomeTable = () => {
  return (
    <>
      <div className='table'>
        <table>
          <thead>
            <tr>
              {['Name', 'Amount', 'Date', 'Budget Type'].map((i, index) => (
                <th key={index}>{i}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>first pay check</td>
              <td>2000</td>
              <td>13/05/2024</td>
              <td>Salary</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default IncomeTable
