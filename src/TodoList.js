import React from 'react';

const TodoList = (props) => {
  const { todos, setTodos, filterTodos, setEditingInput, editingInput, isEditing, setIsEditing } = props;

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
    setTodos(updateTodo);
  }
  function deleteTodo (id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // Submit Event
  function handleSubmit (event, id) {
    event.preventDefault();
    editTodoItem(id);
  }

  // Save Editing
  function editTodoItem (id) {
    const updateTodoItem = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.assignment = editingInput;
      }
      return todo;
    });
    setTodos(updateTodoItem);
    setIsEditing(null);
    setEditingInput('');
  }

  // Cancel Editing
  function stopEditingTodoItem () {
    setIsEditing(null);
  }

  // Noto do
  function Noto (props) {
    const { todos } = props;
    if (todos.length === 0) {
      return (
        <p className="nothing-to-do">Nothing To Do</p>
      )
    } return null
  }

  return (
    <div className="todo-list-container">
      <Noto todos={todos} />
      <ul className="todo-list">
        {filterTodos.map((todo) => <li className="todo-item-wrapper" key={todo.id}>
          {isEditing === todo.id ? (
            <div className="todo-edit-item">
              <form
                onSubmit={(event) => handleSubmit(event, todo.id)}
              >
                <p>把 {todo.assignment} 改成</p>
                <input
                  onChange={(event) => setEditingInput(event.target.value)}
                />
                <div className="edit-button-group">
                  <button type="button" onClick={stopEditingTodoItem}>Cancel</button>
                  <button type="submit">Save</button>
                </div>
              </form>
            </div>
          ) : (
            <div className="todo-item">
              <div className="todo-complete-item">
                <input
                  type="checkbox"
                  id={todo.id}
                  onChange={() => handleClickInTodoItem('complete', todo.id)}
                  className={todo.isCompleted ? 'todo-is-completed' : 'todo-is-not-completed-yet'}
                />
                <label
                  className={todo.isCompleted ? 'todo-is-completed-text' : ''}
                  htmlFor={todo.id}>
                  {todo.assignment}
                </label>
              </div>
              <div className="todo-button-group">
                <button onClick={() => handleClickInTodoItem('edit', todo.id)}><i className="fas fa-edit"></i></button>
                <button onClick={() => handleClickInTodoItem('delete', todo.id)}><i className="fas fa-trash-alt"></i></button>
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
