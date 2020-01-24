export const initialState = [
    {
        item: 'First todo',
        completed: false,
        id: Date()
    }, 
];

export const reducer = (state, action) => {
    switch (action.type){
        case "ADD_TODO":
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            };
            console.log('reducer: ', state, newTodo)
            return [...state, newTodo];
        case "TOGGLE_ITEM":
            return state.map(item=>{
                if(item.id === action.payload){
                    return {...item, completed: !item.completed}
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
