import React,{useContext} from 'react';
import {GlobalContext} from '../Context/Appcontext'
export const IncomeExpense = ()=> {
    
   const {transaction} = useContext(GlobalContext)

   const transAmounts = transaction.map(transaction => transaction.amount);
    const income = transAmounts.filter(i => i>0).reduce((a, b) => (a+b), 0);
    const expense = -transAmounts.filter(i => i<0).reduce((a, b) => (a+b), 0);

    return(
    
    
        <div className = "inc-exp-container">
            <div >
                <h4>Income</h4>
            <p className = "money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
            <p className = "money minus">-${expense}</p>
            </div>
        </div>
    );
}    

