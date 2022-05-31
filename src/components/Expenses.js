import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Row, Col } from 'react-bootstrap'


function Expenses() {
  const {transactions} = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount);
  
  const income = amounts
  .filter(item => item > 0)
  .reduce((acc,item) => (acc += item), 0).toFixed(2)

  const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);
  return (
    <Row className='expense-card text-center'>
        <Col sm={5} className='expense-box1 ' >
            <h5 className='pry-format text-center'>INCOME</h5>
            <p className='balance-amount text-center' style={{color: "green"}}>£{income}</p>
        </Col>
        <Col sm={5} className='expense-box2'>
            <h5 className='pry-format text-center'>EXPENSES</h5>
            <p className='balance-amount text-center' style={{color: "red"}}>£{expense}</p>
        </Col>
    </Row>
  )
}

export default Expenses