import React,{ createContext,useReducer } from 'react'
import AppReducer from "./reducer"


const initialState = {
   transactions: []
};


 export const GlobalStateContext = createContext(initialState);


export function GlobalState({children}) {
    const [state,dispatch] = useReducer(AppReducer,initialState);

    const addTransaction = (transaction) => {
       console.log(transaction);
       dispatch({
         type: 'ADD_TRANSACTION',
         payload: transaction
       });
    }


  return(
      <div>
        <GlobalStateContext.Provider value={{
            transactions: state.transactions,
            addTransaction
        }}>
            {children}
        </GlobalStateContext.Provider>
      </div>
  );
}


