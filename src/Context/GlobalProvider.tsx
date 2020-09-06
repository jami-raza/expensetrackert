import { transType } from '../Types/types'


type Actions =
  | { type: "Delete_Transaction"; payload: number }
  | { type: "Add_Transaction"; payload: transType };

const Reducer = (state:{transaction:transType[]},action:Actions) => {

    switch (action.type) {
        case 'Add_Transaction':
            
        
            return {
                ...state,
                transaction: [...state.transaction, action.payload]
                
            }
        case 'Delete_Transaction':
            
            return {...state,
                transaction: state.transaction.filter((
                transaction)=>(transaction.id !== action.payload))
            }
                
    
        default:
            return state
    }


}

export default Reducer;