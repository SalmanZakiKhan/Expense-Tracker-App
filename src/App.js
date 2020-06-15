import React from 'react'
import Header from './components/Header'
import TotalAmount from './components/TotalAmount'
import Balance from './components/Balance'
import Expense from "./components/Expense"
import TransactionList from "./components/TransactionList"
import AddTransaction from './components/AddTransaction'

import { GlobalState } from "./context/GlobalState"
import "./App.css"


function App() {
    return (
      <GlobalState>
        <div className="main-div">
           <Header />
           <TotalAmount />
           <div className="sub-div">
             <Balance />
             <Expense />
           </div>
           <TransactionList />
           <AddTransaction />
          </div>
      </GlobalState>
    )
}

export default App
