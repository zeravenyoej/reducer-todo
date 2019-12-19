import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <Form/>
      <Display/>
    </div>
  );
}

export default App;
