export default (state,action) => {
    

   switch(action.type) {
     case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: [...state.transactions,action.payload]
        }

     case 'DELETE_TRANSACTION':
         return {
           ...state,
           transactions: state.transactions.map(transaction => transaction.price)
         }   

     default: 
        return state;
   }
  
}

