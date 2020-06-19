import React,{useContext} from 'react'
import { GlobalStateContext }from "../context/GlobalState"
import Transaction from "./Transaction"

function TransactionList() {

    const {transactions} = useContext(GlobalStateContext);
    
    return (
        <div>
            <hr />
           <h4>HISTORY</h4>
           <div>
           {
               transactions.map(transaction => (
               <Transaction key={transaction.id} transaction={transaction} />
               ))
            }
           </div>

        </div>
    )
}

export default TransactionList
