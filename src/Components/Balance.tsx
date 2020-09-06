import React, { useContext } from 'react';
import {GlobalContext} from '../Context/Appcontext'

    
export const Balance = ()=>{
    const { transaction } = useContext(GlobalContext)
        
    
    const transAmounts = transaction.map(transaction => transaction.amount);
    const income = transAmounts.filter(i => i>0).reduce((a, b) => (a+b), 0);
    const expense = -transAmounts.filter(i => i<0).reduce((a, b) => (a+b), 0);
   
    return(
        
        <div>
            <h4>Your Balance</h4>
            <h1>${(income) - (expense)}</h1>
        </div>
    )
}