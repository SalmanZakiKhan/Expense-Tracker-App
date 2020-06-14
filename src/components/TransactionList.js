import React,{useContext} from 'react'
import { GlobalStateContext }from "../context/GlobalState"
import Transaction from "./Transaction"

function TransactionList() {

    const {transactions} = useContext(GlobalStateContext);
    console.log(transactions);
    return (
        <ul>
            {
               transactions.map(transaction => (
               <Transaction key={transaction.id} transaction={transaction} />
               ))
            }
        </ul>
    )
}

export default TransactionList
