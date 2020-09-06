import React, { useContext } from 'react';
import {GlobalContext} from '../Context/Appcontext';
import {transType} from '../Types/types';

const Transaction:React.FC<transType>=({id,text,amount})=>{
    const {deleteTrans} = useContext(GlobalContext)
    const sign = amount < 0 ? '-' : '';
    return(
        <li className = {amount < 0 ? 'minus' : 'plus'}>
            {text}<span>{sign}${Math.abs(amount)}</span>
            <button onClick={()=>deleteTrans(id)} className = "delete-btn">X</button>
            
            </li>
    )

}
export default Transaction;