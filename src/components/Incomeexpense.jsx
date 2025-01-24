import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Incomeexpense = () => {
    const {transactions} = useContext(GlobalContext)
    var pos = transactions.reduce((acc, transaction)=> transaction.amount>0?acc+transaction.amount:acc+0, 0)
    var neg = transactions.reduce((acc, transaction)=> transaction.amount<0?acc+transaction.amount:acc+0, 0)
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${pos.toFixed(2)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${Math.abs(neg).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Incomeexpense