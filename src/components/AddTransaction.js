import React, {useState, useContext} from 'react';
import { Form } from 'react-bootstrap';
import {GlobalContext} from '../context/GlobalState';
function AddTransaction() {
const [name, setName] = useState('');
const [amount, setAmount] = useState(0);
const {addTransaction} = useContext(GlobalContext)

const handleSubmit =(e) =>  {
  e.preventDefault();

  const newTransaction = {
    id: Math.floor(Math.random() * 100000000),
    name,
    amount: + amount
  }
  addTransaction(newTransaction);
}

  return (
    <div className=''>
        <h5 className='pry-format'>Add Transaction</h5>
        <Form className='transactionForm' onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Expense" value={name} onChange={(e)=> {setName(e.target.value)}}/>
      <input type="number" placeholder="Enter Amount" value={amount} onChange={(e)=> {setAmount(e.target.value)}}/>
      <input className='AddTransaction' type="submit" value="Add" />

        </Form>
    </div>
  )
}

export default AddTransaction