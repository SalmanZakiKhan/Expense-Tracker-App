import React,{useContext} from 'react'
import { GlobalStateContext }from "../context/GlobalState"

function Transaction({transaction : { name,price,id }}) {
  
    const {deleteTransaction} = useContext(GlobalStateContext);
    // deleteTransaction(id);
    return (
        <li className={ price > 0 ? "plus" : "minus" }>
          <span className="">{name}</span>
          <span className="amount"><b>$</b> {price}</span>
        </li>
    )
}

export default Transaction
