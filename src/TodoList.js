import React from 'react';

// 匯入其他 Component
import Todo from './Todo.js';

const TodoList = (props) => {
  const { todos, setTodos } = props;
  console.log(todos);

  return (
    <div className="todo-list-container">
      <ul className="todo-item">
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              setTodos={setTodos}
              todos={todos}
            />
          )
        })}
      </ul>
    </div>
  );
};
export default TodoList;