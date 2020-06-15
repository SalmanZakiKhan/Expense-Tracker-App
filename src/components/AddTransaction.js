import React,{useState,useContext} from 'react'
import {GlobalStateContext} from "../context/GlobalState"

function AddTransaction() {
    
    const {addTransaction,transactions} = useContext(GlobalStateContext);

    const initialState = {
        name : '',
        price: '',
        id: ''
    }
    const [current,setCurrent] = useState(initialState);

    const onChangeHandler = (e) => {
        const { name,value } = e.target;
        setCurrent({
            ...current,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      current.id = transactions.length + 1;
      addTransaction(current);
      setCurrent(initialState);
    }
    
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>ADD TRANSACTION : </label><br />
            <input type="text" value={current.name} name="name" onChange={(e) => onChangeHandler(e)}/><br /><br />
            <label>ENTER AMOUNT : (in + or -) </label><br />
            <input type="number"  value={current.price} name="price" onChange={(e) => onChangeHandler(e)}/><br /> <br />
            <button type="submit"><span>enter transaction</span></button>
        </form>
    );
}

export default AddTransaction
