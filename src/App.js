import React, { useState } from 'react';
import './App.css';


// 匯入其餘 Components
import InputForm from './InputForm.js';
import TodoList from './TodoList.js';

function App () {
  const [inputText, setInputText] = useState('');
  console.log(inputText);
  // Todo 的內容要有 {assignment: xxx, isCompleted, id:xxx}
  const [todos, setTodos] = useState([]);
  console.log(todos);

  return (
    <div className="container">
      {console.log('App render')}
      <InputForm
        inputText={inputText}
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
      />

    </div>
  );
}

export default App;
