import React from 'react';

const Todo = ({ todos, todo, setTodos }) => {
  console.log(todo);

  // Events
  function handleClick (btnType) {
    if (btnType === 'delete') {
      deleteAssignment();
    } else if (btnType === 'complete') {
      changeAssignmentState();
    }
  }

  // 事件判斷
  function deleteAssignment () {
    // const foundTodo = todos.filter((item) => item.id === todo.id);
    // console.log(foundTodo);
    // const index = todos.indexOf(foundTodo);
    // todos = todos.splice(index, 1);
    // console.log(todos);
    // setTodos(todos);
    setTodos(todos.filter((item) => item.id !== todo.id));
  }
  function changeAssignmentState () {
    // 有用 ... 展開運算子避免 setSometing 直接重新更新
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          isCompleted: !item.isCompleted
        };
      }
      return item;
    }));
  }

  return (
    <div className="todo-item-wrapper">
      <li className="todo-item">{todo.assignment}</li>
      <button onClick={() => handleClick('delete')}>刪除</button>
      <button onClick={() => handleClick('complete')}>完成</button>
    </div>
  );
};

export default Todo;
