import React,{useContext} from 'react'
import { GlobalStateContext }from "../context/GlobalState"

function Transaction({transaction}) {
    
    const {DeleteTransaction} = useContext(GlobalStateContext);
    return (
        <li>
            <span>{transaction.name}</span>
            <strong>{transaction.price}</strong>
        </li>
    )
}

export default Transaction
