import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {

    const [text, settext] = useState('');
    const [amount, setamount] = useState(0)
    const {addTransaction} = useContext(GlobalContext)
    
    const onsubmit=e=>{
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random()*10000000),
            text,
            amount: parseInt(amount)
        }
        addTransaction(newTransaction);
    }

  return (
    <div>
        <h3>Add new Transaction</h3>
        <form onSubmit={onsubmit}>
            <div className='form-control'>
                <label htmlFor="test">Text</label>
                <input type="text" value={text} onChange={(e)=>settext(e.target.value)} placeholder='Enter text...'/>
            </div>
            <div className='form-control'>
                <label htmlFor="amount">Amount
                    <br />
                    (negative: expense, positive: income)
                </label>
                <input type="number" value={amount} onChange={(e)=>setamount(e.target.value)} placeholder='Enter amount...'/>
            </div>
            <button className='btn'>Add Transaction</button>
        </form>
    </div>
  )
}

export default AddTransaction