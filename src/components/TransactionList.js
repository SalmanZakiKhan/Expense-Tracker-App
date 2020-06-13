import React,{useContext} from 'react'
import { GlobalStateContext }from "../context/GlobalState"
import Transaction from "./Transaction"

function TransactionList() {

    const {state} = useContext(GlobalStateContext);
    return (
        <ul>
            {
               state.transactions.map(transaction => {
                <Transaction key={transaction.id} transaction={transaction} />
              })
            }
        </ul>
    )
}

export default TransactionList
