import React,{useContext} from 'react'
import { GlobalStateContext }from "../context/GlobalState"

function TotalAmount() {

    const {state} = useContext(GlobalStateContext);
    const amount = state.transactions.map(transaction => transaction.price).reduce((accumulator,currentValue) => accumulator + currentValue, 0);
    return (
        <div>
            <h1>YOUR NET WORTH : $ {amount}</h1>
        </div>
    )
}

export default TotalAmount
