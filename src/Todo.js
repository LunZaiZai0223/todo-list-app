import React from 'react';

const Todo = ({ todos, todo, setTodos }) => {
  console.log(todo);
  function handleClick (btnType) {
    if (btnType === 'delete') {

    } else if (btnType === 'complete') {
      changeAssignmentState();
    }
  }

  function deleteAssignment () {

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
    }));
    todo.isCompleted = !todo.isCompleted;
  }
  return (
    <div className="todo-item-wrapper">
      <li className="todo-item">{todo.assignment}</li>
      <button>刪除</button>
      <button onClick={() => handleClick('complete')}>完成</button>
    </div>
  );
};

export default Todo;