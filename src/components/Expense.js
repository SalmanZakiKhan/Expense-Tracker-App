import React,{ useContext } from 'react'
import {GlobalStateContext} from "../context/GlobalState"

function Expense() {
    const { transactions } = useContext(GlobalStateContext);
    const finalValue = transactions.map(transaction => +(transaction.price))
    .filter(number => number <= 0)
    .reduce((accumulator,currentValue) => accumulator + currentValue , +(0));
    return (
        <div>
            {finalValue}
        </div>
    )
}

export default Expense
