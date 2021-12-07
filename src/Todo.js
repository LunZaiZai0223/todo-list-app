import React, { useState } from 'react';

const Todo = ({ todos, todo, setTodos, setTodoItemEditing, editingInput, setEditingInput, isEditing, setIsEditing }) => {
  // const [editingInput, setEditingInput] = useState('');
  console.log(todo);
  // Events
  function handleClickInTodoItem (btnType) {
    if (btnType === 'delete') {
      deleteAssignment();
    } else if (btnType === 'complete') {
      changeAssignmentState();
    } else if (btnType === 'edit') {
      editTodoItem();
    }
  }

  function handleClickInEditingTodoItem (btnType) {
    if (btnType === 'cancel') {
      cancelEditingTodoItem();
    } else if (btnType === 'save') {

    }
  }

  function handleSubmitInEditingTodoItem (event) {
    console.log('submitGO')
    event.preventDefault();
  }
  function handleChangeInEditingTodoItem (event) {
    console.log(event.target.value);
    setEditingInput(event.target.value);

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
  function editTodoItem () {
    // setTodos(todos.map((item) => {
    // if (item.id === todo.id) {
    // return {
    // ...item,
    // isEditing: true
    // };
    // }
    // }));
    setIsEditing(todo.id);
  }
  function cancelEditingTodoItem () {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          isEditing: false
        };
      }
    }));
  }
  function saveEditingResult () {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,

        }
      }
    }))
  }
  function CreateTodoItem (props) {
    const { todo } = props;
    // if (!todo.isEditing) {
    return (
      <div key={todo.id} className="todo-item-wrapper">
        {console.log(isEditing)}
        {isEditing === todo.id ? (<form onSubmit={handleSubmitInEditingTodoItem} className="edit-todo-form">
          <p>把 {todo.assignment} 改成</p>
          <input
            type="text"
            value={editingInput}
            onChange={(event) => setEditingInput(event.target.value)}

          />
          <div className="edit-button-wrapper">
            <button>Cancel</button>
            <button>Save</button>
          </div>
        </form>) :
          (<>
            <li className="todo-item">{todo.assignment}</li>
            <button onClick={() => handleClickInTodoItem('delete')}>刪除</button>
            <button onClick={() => handleClickInTodoItem('complete')}>完成</button>
            <button onClick={() => handleClickInTodoItem('edit')}>修改</button> </>)
        }
      </div>
    );
    // } return null
  }

  // function CreateEditingTodoItem (props) {
  // const { todo } = props;
  // // if (todo.isEditing) {
  // return (
  // <div key={todo.id} className="todo-editing-item-wrapper">
  // <form
  // onSubmit={handleSubmitInEditingTodoItem}
  // >
  // <p>把 {todo.assignment} 改成</p>
  // <input
  // type="text"
  // value={editingInput}
  // onChange={handleChangeInEditingTodoItem}
  // />
  // <div className="todo-editing-item-button-wrapper">
  // <button onClick={() => handleClickInEditingTodoItem('cancel')}>Cancel</button>
  // <button>Save</button>
  // </div>
  // </form>
  // </div>
  // )
  // // }
  // // return null
  // }
  return (
    <>
      <CreateTodoItem todo={todo} />
    </>
  );
};

export default Todo;
