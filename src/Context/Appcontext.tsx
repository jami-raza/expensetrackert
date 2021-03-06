import React, { useReducer,createContext } from 'react'
import Reducer from './GlobalProvider';
import { transactionType, transType  } from '../Types/types';


const initalState: transactionType = {
    transaction: [
        
    ],
    addTrans: () => {},
    deleteTrans: () => {},
};




export const GlobalContext = createContext(initalState)
export const GlobalProvider: React.FC = ({ children }: any) => {

    

    const [state, dispatch] = useReducer(Reducer, initalState)
    


    const addTrans = (trans: transType) => {


        dispatch(
            {
                type: 'Add_Transaction',
                payload: trans
            }
        );
    }

    const deleteTrans = (id: number) => {

        dispatch(

            {
                payload: id,
                type: 'Delete_Transaction'
            }


        );

    }

    return (
        <GlobalContext.Provider
            value={
                {
                    transaction: state.transaction,
                    addTrans,
                    deleteTrans,
                }
            }>
            {children}

        </GlobalContext.Provider>

    )
}