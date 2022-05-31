import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import MainTransaction from './MainTransaction';

function Transaction() {
  const {transactions} = useContext(GlobalContext);
  return (
    <div>
        <h5 className='pry-format'>History</h5>
        <ul className='transactionList'>
          {transactions.map(transaction => (<MainTransaction key={transaction.id} transaction= {transaction}/>
          ))
        }
          
            
            {/* <li className='transactionItem'>
               
                  Books <span>£50</span><button className='deleteBtn'>x</button>
                
               
            </li> */}
        </ul>
    </div>
  )
}

export default Transaction