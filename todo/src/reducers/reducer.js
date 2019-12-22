export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: new Date()
    }, 
    {
        item: 'Go to sleep',
        completed: false, 
        id: new Date()
    }
];

export const reducer = (state, action) => {
    switch (action.type){
        case "ADD_TODO":
            const newTodo = {
                item: action.payload,
                completed: false,
                item: new Date()
            };
            return [...state, newTodo];
        case "TOGGLE_ITEM":
            return state.map(item=>{
                if(item.id === action.payload){
                    return {...item, completed: true}
                } else {
                    return item
                }
            });
        case "CLEAR_ITEMS":
            return state.filter(item=>{
                return item.completed === false
            });
        default: 
            return state;
    }
};


//   export const reducer = (state, action) => {
//     console.log(state, action);
//     switch (action.type) {
//       case 'UPDATE_TITLE':
//         return {
//           ...state,
//           title: action.payload
//         };
//       // NEW CASE HERE
//       case 'TOGGLE_EDIT':
//         return {
//           ...state,
//           editing: !state.editing
//         };
//       default:
//         return state;
//     }
//   };
  