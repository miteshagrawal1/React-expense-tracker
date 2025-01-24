import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const TransactionList = () => {
const {transactions, deleteTransaction} = useContext(GlobalContext)

  return (
    <div>
        {transactions.length>0?
        <div>
        <h3>History</h3>
        <ul className='list'>
            {transactions.map(transaction=>(
              <li className={transaction.amount>0 ? 'plus' : 'minus'} key={transaction.id}>
              {transaction.text} <span>{transaction.amount>0?`+ $${transaction.amount}` : `- $${Math.abs(transaction.amount)}`}</span><button className='delete-btn' onClick={()=>deleteTransaction(transaction.id)}>X</button>
          </li>
            ))}
        </ul>
        </div>
        :
        ''}
    </div>
  )
}

export default TransactionList