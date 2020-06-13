import React from 'react'
import Header from './components/Header'
import AddTransaction from './components/AddTransaction'
import TotalAmount from './components/TotalAmount'
import TransactionList from "./components/TransactionList"
import { GlobalState } from "./context/GlobalState"
import Transaction from './components/Transaction'
import "./App.css"


function App() {
    return (
      <GlobalState>
           <Header />
        <div className="main-div">
           <TotalAmount />
           <TransactionList />
           <AddTransaction />
        </div>
      </GlobalState>
    )
}

export default App
