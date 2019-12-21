export const initialState = {   
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
};

export const reducer = (state, action) => {
    switch (action.type){
        case "ADD_TODO":
            return {
                ...state,
                item: action.payload,
                completed: false,
                id: new Date(),
            };
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
  