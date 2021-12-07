import React, { useState, useEffect } from 'react';
import './App.css';

// 匯入其餘 Components
import InputForm from './InputForm.js';
import TodoList from './TodoList.js';
import FilterButtons from './FilterButtons.js';
import TodoHeader from './TodoHeader.js';
import Todo from './Todo';

function App () {
  const [inputText, setInputText] = useState('');
  console.log(inputText);
  // Todo 的內容要有 {assignment: xxx, isCompleted, id:xxx}
  const [todos, setTodos] = useState([]);
  const [filterState, setFilterState] = useState('all');
  const [filterTodos, setFilterTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [editingInput, setEditingInput] = useState('');
  const [currentDate, setCurrentDate] = useState({});
  console.log(currentDate);
  console.log('現在的 editingInput 為', editingInput);
  // useEffect section
  // useEffect(() => { changeFilterTodos(); }, []);
  // useEffect => 每次 filterState 有更改的話就重新篩選
  useEffect(() => { changeFilterTodos(); }, [filterState, todos]);
  useEffect(() => { getCurrentDate(); }, []);

  // 取得日期
  function getCurrentDate () {
    const monthList = [
      { num: 0, month: 'January' },
      { num: 1, month: 'February' },
      { num: 2, month: 'March' },
      { num: 3, month: 'April' },
      { num: 4, month: 'May' },
      { num: 5, month: 'June' },
      { num: 6, month: 'July' },
      { num: 7, month: 'August' },
      { num: 8, month: 'September' },
      { num: 9, month: 'October' },
      { num: 10, month: 'November' },
      { num: 11, month: 'December' }
    ];
    const dayOfWeekList = [
      { num: 0, day: 'Sunday' },
      { num: 1, day: 'Monday' },
      { num: 2, day: 'Tuesday' },
      { num: 3, day: 'Wednesday' },
      { num: 4, day: 'Thursday' },
      { num: 5, day: 'Friday' },
      { num: 6, day: 'Saturday' }
    ];

    const tempMonth = new Date().getMonth();
    const tempDay = new Date().getDay();
    const month = monthList.filter((month) => month.num === tempMonth)[0].month;
    const date = new Date().getDate();
    const day = dayOfWeekList.filter((day) => day.num === tempDay)[0].day;

    setCurrentDate({ month, date, day });
    console.log(currentDate);
  }

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
      <div className="todo-card">
        <TodoHeader
          currentDate={currentDate}
          todos={todos}
        />
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
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
        <FilterButtons
          setFilterState={setFilterState}
        />
      </div>
    </div>
  );
}

export default App;
