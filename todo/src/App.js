import React, { useReducer } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { reducer, initialState } from './reducers/reducer';

function App() {
  const [todoState, dispatch] = useReducer(reducer, initialState);

  //goes to FORM, on button
  const clearItem = () => {

  };

  //goes to LIST
  const toggleItem = (e) => {
    e.preventDefault();
    dispatch({ type: "TOGGLE_ITEM" });
    e.target.classList.add('toggled');
  };



  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <Form
        dispatch={dispatch}
        clearItem={clearItem}
      />
      <TodoList
        todoState={todoState}
        toggleItem={toggleItem}
      />
    </div>
  );
}

export default App;
