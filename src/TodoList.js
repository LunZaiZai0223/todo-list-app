import React, { useState } from 'react';

// 匯入其他 Component
import Todo from './Todo.js';


const TodoList = (props) => {
  const { todos, setTodos, filterState, filterTodos, setEditingInput, editingInput, isEditing, setIsEditing } = props;

  // Click Event In Todo Item
  function handleClickInTodoItem (btnType, id) {
    if (btnType === 'complete') {
      completeTodo(id);
    } else if (btnType === 'edit') {
      console.log(btnType, id);
      setIsEditing(id);
    } else if (btnType === 'delete') {
      deleteTodo(id);
    }
  }
  function completeTodo (id) {
    const updateTodo = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    console.log(updateTodo);
    // setTodos(todos.map((todo) => {
    // if (todo.id === id) {
    // return {
    // ...todo,
    // isCompleted: !todo.isCompleted
    // };
    // }
    // }));
    setTodos(updateTodo);
  }
  function deleteTodo (id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // Submit Event
  function handleSubmit (event) {
    event.preventDefault();
  }

  // Click Event In Editing Todo Item
  function handleClickInEditingTodoItem (btnType, id) {
    if (btnType === 'cancel') {
      stopEditingTodoItem();

    } else if (btnType === 'save') {
      editTodoItem(id);
    }

  }

  function editTodoItem (id) {
    // console.log((todos.map((todo) => {
    // if (todo.id === id) {
    // return {
    // ...todo,
    // assignment: editingInput
    // };
    // }
    // })));
    const updateTodoItem = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.assignment = editingInput;
      }
      return todo;
    });
    // setTodos(todos.map((todo) => {
    // if (todo.id === id) {
    // return {
    // ...todo,
    // assignment: editingInput
    // };
    // }
    // }));
    // console.log(updateTodoItem);
    setTodos(updateTodoItem);
    setIsEditing(null);
    setEditingInput('');
  }
  function stopEditingTodoItem (id) {
    setIsEditing(null);
  }
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
      <ul className="todo-list">
        {filterTodos.map((todo) => <li className="todo-item-wrapper" key={todo.id}>
          {isEditing === todo.id ? (
            <div className="todo-edit-item">
              <form
                onSubmit={handleSubmit}
              >
                <p>把 {todo.assignment} 改成</p>
                <input
                  type="text"
                  onChange={(event) => setEditingInput(event.target.value)}
                  onKeyDown={(event) => { console.log(event, 'keydownEvent!') }}
                />
                <div className="edit-button-group">
                  <button onClick={() => handleClickInEditingTodoItem('cancel')}>Cancel</button>
                  <button onClick={() => handleClickInEditingTodoItem('save', todo.id)}>Save</button>
                </div>
              </form>
            </div>
          ) : (
            <div className="todo-item">
              <p>{todo.assignment}</p>
              <div className="todo-button-group">
                <button onClick={() => handleClickInTodoItem('complete', todo.id)}>Complete</button>
                <button onClick={() => handleClickInTodoItem('edit', todo.id)}>Edit</button>
                <button onClick={() => handleClickInTodoItem('delete', todo.id)}>Delete</button>
              </div>
            </div>
          )}
        </li>
        )}
      </ul>
    </div >
  );
};

export default TodoList;
