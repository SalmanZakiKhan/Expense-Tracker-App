import React from 'react'
import Header from './components/Header'
import TotalAmount from './components/TotalAmount'
import TransactionList from "./components/TransactionList"
import AddTransaction from './components/AddTransaction'
import Balance from './components/Balance'
import Expense from "./components/Expense"

import { GlobalState } from "./context/GlobalState"
import "./App.css"


function App() {
    return (
      <GlobalState>
        <div className="main-div">
           <Header />
           <TotalAmount />
           <Balance />
           <Expense />
           <TransactionList />
           <AddTransaction />
          </div>
      </GlobalState>
    )
}

export default App
