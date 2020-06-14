import React,{ useContext } from 'react'
import { GlobalStateContext }from "../context/GlobalState"

function Balance() {
    const { transactions } = useContext(GlobalStateContext);
    const finalValue = transactions.map(transaction => +transaction.price)
    .filter(price => price > 0)
    .reduce((accumulator,currentValue) => accumulator + currentValue ,+(0));
    
    return (
        <div>
            {finalValue}
        </div>
    )
}

export default Balance
