import React from 'react';
import {Header} from './Components/Header';
import {Balance} from './Components/Balance';
import {IncomeExpense} from './Components/IncomeExpense';
import {Addtransaction} from './Components/Addtransaction'
import {Transactionlist} from './Components/Transactionlist';
import { Footer } from './Components/Footer'
import {GlobalProvider} from './Context/Appcontext'
import './App.css';

function App() {
  return (
    
      <GlobalProvider>
      <div className = "container">
        <Header />
        <Balance/>
        <IncomeExpense />
        <Transactionlist />
        <Addtransaction />
        <Footer />
        </div>
      </GlobalProvider>
    
  );
}

export default App;
