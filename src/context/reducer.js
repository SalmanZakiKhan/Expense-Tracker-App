export default function reducer(state,action){

   switch(action.type){

    case 'ADD-TRANSACTION':
        return {transaction: [...state,action.payload]};

    case 'DELETE-TRANSACTION':
        return {};

    default: 
        return state;
   }
}