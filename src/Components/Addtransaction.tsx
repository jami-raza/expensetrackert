import React,{useState,useContext} from 'react';
import {GlobalContext} from '../Context/Appcontext'

//add transaction function 
export const Addtransaction = () =>{


    const { addTrans } = useContext(GlobalContext)
    let [text,settext] = useState('');
    let [amount,setamount] = useState(0);
    const handleAddition = (event:{ preventDefault: () => void; }) => {
        event.preventDefault();

        const newtransaction = {
            id:Math.floor(Math.random() * 100000000),
            text,
            amount:Number(amount)
        }
        
        

        addTrans(newtransaction);
        if (Number(amount) === 0) {
            
            return false ;
        }
        
        settext('')
        setamount(0)
        
        
    }
    
    return(
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={handleAddition}>
                <div className = "form-control">
                    <label >Text</label>
                    <input type="text"
                    placeholder ="Enter text..." required={true}
                    value={text} 
                    onChange={(e)=>{settext(e.target.value)}}
                    />
                </div>
                <div className = "form-control">
                    <label>Amount<br />
                    (negative -expense ,positive + income)
                    </label>
                    <input type="number" 
                     placeholder ="Enter Amount.." 
                     value={amount}
                     onChange={(e)=>{setamount(Number(e.target.value))}}
                     required={true}
                     />
                    
                </div>
                <button type="submit" className = "btn">Add Transaction</button>

            </form>
        </div>
    )
}