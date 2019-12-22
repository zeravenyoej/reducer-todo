import React, { useReducer } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { reducer, initialState } from './reducers/reducer';

function App() {
  const [todoState, dispatch] = useReducer(reducer, initialState);


  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <div id='insideDiv'>
        <Form
          dispatch={dispatch}
        />
        <TodoList
          dispatch={dispatch}
          todoState={todoState}
        />
        </div>
    </div>
  );
}

export default App;
