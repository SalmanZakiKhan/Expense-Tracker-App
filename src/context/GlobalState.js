import React,{ createContext,useReducer } from 'react'
import {AppReducer} from "./reducer"

const initialState = {
   transactions: []
};

export const GlobalStateContext = createContext(initialState);

export function GlobalState({children}) {
    const [state,dispatch] = useReducer(AppReducer,initialState);

    const addTransaction = transaction => {
       dispatch({
         type: 'ADD_TRANSACTION',
         payload: transaction
       });
    }

    const deleteTransaction = id => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

  return(
      <div>
        <GlobalStateContext.Provider value={{
            transactions: state.transactions,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </GlobalStateContext.Provider>
      </div>
  );
}


