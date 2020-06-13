import React,{useState,useContext} from 'react'
import { GlobalStateContext }from "../context/GlobalState"

function AddTransaction() {
    
    const {AddTransaction,state} = useContext(GlobalStateContext);
    const id = state.transactions.length + 1;

    const initialState={
        nameOfTransaction : '',
        amount: ''
    }
    const [current,setCurrent] = useState(initialState);

    const handleSubmit = (e) => {
      e.preventDefault();
      current.id = id;
      AddTransaction(current);
      setCurrent(initialState);
    }
    
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>ADD TRANSACTION : </label><br />
            <input type="text" value={current.nameOfTransaction} onChange={(e) => setCurrent(e)}/><br /><br />
            <label>ENTER AMOUNT : </label><br />
            <input type="number"  value={current.amount} onChange={(e) => setCurrent(e)}/><br /> <br />
            <button type="submit">SUBMIT</button>
        </form>
    );
}

export default AddTransaction
