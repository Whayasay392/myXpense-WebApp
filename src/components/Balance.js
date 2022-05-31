import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState';

function Balance() {
  const {transactions} = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) =>(acc += item), 0).toFixed(2);
  return (
    <div className=''>
        <h5 className='pry-format'>YOUR BALANCE</h5>
        <p className='balance-amount'>£{total}</p>
    </div>
  )
}

export default Balance