import React, { useState, useEffect } from 'react';
import './App.css';

// 匯入其餘 Components
import InputForm from './InputForm.js';
import TodoList from './TodoList.js';
import FilterButtons from './FilterButtons.js';

function App () {
  const [inputText, setInputText] = useState('');
  console.log(inputText);
  // Todo 的內容要有 {assignment: xxx, isCompleted, id:xxx}
  const [todos, setTodos] = useState([]);
  const [filterState, setFilterState] = useState('all');
  const [filterTodos, setFilterTodos] = useState([]);
  const [editingInput, setEditingInput] = useState('');

  // useEffect section
  // useEffect(() => { changeFilterTodos(); }, []);
  // useEffect => 每次 filterState 有更改的話就重新篩選
  useEffect(() => { changeFilterTodos(); }, [filterState, todos]);

  // 篩選需要的 Component
  function changeFilterTodos () {
    console.log('changeFilterTodos!!!!!!!')
    console.log(todos);
    if (filterState === 'all') {
      showAllTodos();
    } else if (filterState === 'active') {
      console.log('showing only active todos');
      showOnlyActiveTodos();
    } else if (filterState === 'completed') {
      console.log('showing only completed todos');
      showOnlyCompletedTodos();
    }
  }

  // 篩選判斷
  function showOnlyCompletedTodos () {
    setFilterTodos(todos.filter((todo) => todo.isCompleted === true));
  }
  function showOnlyActiveTodos () {
    setFilterTodos(todos.filter((todo) => todo.isCompleted === false));
  }
  function showAllTodos () {
    setFilterTodos(todos);
  }
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
        filterState={filterState}
        filterTodos={filterTodos}
        setEditingInput={setEditingInput}
        editingInput={editingInput}
      />
      <FilterButtons
        setFilterState={setFilterState}
      />
    </div>
  );
}

export default App;
