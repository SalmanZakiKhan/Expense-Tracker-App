import React,{createContext,useReducer} from 'react'
import reducer from "./reducer"


const initialState = {
   transactions: [{
        id: 1,
        name:"buy book",
        price:3000
    },{
        id: 1,
        name:"buy cake",
        price:-1000
    },{
        id: 1,
        name:"buy goods",
        price:2000
    }]
};


 export const GlobalStateContext = createContext(initialState);


export function GlobalState({children}) {
    const [state,,dispatch] = useReducer(reducer,initialState);

    const AddTransaction = (transaction) => {
       return {
         action: 'ADD-TRANSACTION',
         payload: transaction
       };
    }

    const DeleteTransaction = (id) => {
        return {
            action: 'DELETE-TRANSACTION',
            payload: id
        };
    }
     
  return(
      <div>
        <GlobalState.Provider state={{
            state: initialState,
            DeleteTransaction,
            AddTransaction
        }}>
            {children}
        </GlobalState.Provider>
      </div>
  );
}


