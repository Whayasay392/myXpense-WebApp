import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState'

function MainTransaction( {transaction }) {
    const sign = transaction.amount < 0 ? '-' : '+';
    const {deleteTransaction} = useContext(GlobalContext)
  return (
      <div className='transactionItem my-2'>
          <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
              {transaction.name}<div><span>{sign}£{Math.abs(transaction.amount)}</span><button onClick={()=> deleteTransaction(transaction.id)} className='deleteBtn'>x</button></div>
            </li>
      </div>
    
  )
}

export default MainTransaction