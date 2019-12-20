import React from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <Form/>
      <TodoList/>
    </div>
  );
}

export default App;
