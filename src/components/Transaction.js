import React,{useContext} from 'react'
import { GlobalStateContext }from "../context/GlobalState"

function Transaction({transaction : { name,price,id }}) {
  
    const {deleteTransaction} = useContext(GlobalStateContext);
  
    return (
        <li className={`${ price > 0 ? "plus" : "minus" } li-flex-container`}>
          <span className="">{name}</span>
          <span className="amount"><b>$</b> {price}</span>
          <button className="btn" onClick={e => deleteTransaction(id)}>X</button>
        </li>
    )
}

export default Transaction
