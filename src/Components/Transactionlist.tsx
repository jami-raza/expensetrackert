import React,{useContext} from 'react';
import {GlobalContext} from '../Context/Appcontext'
import Transaction from './Transaction';

export function Transactionlist(){
    const {transaction} = useContext(GlobalContext)
    
    
    return(
        <div>
            <h3>History</h3>


            <ul className = "list">
                {transaction.map(transaction=>(<Transaction key={transaction.id}
                id={transaction.id}
                amount={transaction.amount}
                text={transaction.text}
                />))}
            </ul> 
              
        </div>
    )
}