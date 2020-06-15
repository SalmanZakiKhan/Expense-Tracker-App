import React,{ useContext } from 'react'
import {GlobalStateContext} from "../context/GlobalState"

function Expense() {
    const { transactions } = useContext(GlobalStateContext);
    const finalValue = transactions.map(transaction => +(transaction.price))
    .filter(number => number <= 0)
    .reduce((accumulator,currentValue) => accumulator + currentValue , +(0));
    return (
        <div className="expense-div">
            <span><b>EXPENSES :</b></span> <br /><br />
            <span className="calculatedvalues"><strong>$</strong>{Math.abs(finalValue)}</span>
        </div>
    )
}

export default Expense
