import React, { useState } from 'react';

// 匯入其他 Component
import Todo from './Todo.js';


const TodoList = (props) => {
  const { todos, setTodos, filterState, filterTodos, setEditingInput, editingInput } = props;
  const { todoItemEditing, setTodoItemEditing } = useState(false);
  console.log(todos);

  // function ShowAllTodos () {
  // return (
  // {todos.map((todo) => {
  // return (
  // <Todo 
  // key={todo.id}
  // todo={todo}
  // setTodo={setTodo}
  // /> 
  // );
  // })}
  // );
  // }
  return (
    <div className="todo-list-container">
      <ul className="todo-item">
        {filterTodos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              setTodos={setTodos}
              todos={todos}
              setTodoItemEditing={setTodoItemEditing}
              setEditingInput={setEditingInput}
              editingInput={editingInput}
            />
          )
        })}
      </ul>
    </div>
  );
};

export default TodoList;
