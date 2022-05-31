import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Balance from './components/Balance';
import Expenses from './components/Expenses';
import Transaction from './components/Transaction';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <section className="App">
     <div className='AppContainer'>
      
       <Header /> 
      <Balance />
       <Expenses />
        <Transaction />
       <AddTransaction />  
       </div>
      </section>
    </GlobalProvider>
    
    
  );
}

export default App;
