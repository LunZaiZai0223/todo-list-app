import React from 'react';

const InputForm = (props) => {
  const { todos, setTodos, inputText, setInputText } = props;
  console.log(inputText);
  console.log(todos);
  function handleChange (event) {
    setInputText(event.target.value);
  }
  function handleSubmit (event) {
    event.preventDefault();
    console.log('發送表單');
    setTodos([
      ...todos,
      { assignment: inputText, isCompleted: false, id: Math.random() * 500 }
    ]);
    setInputText('');
  }

  return (
    <form
      className="todo-input-form"
      onSubmit={handleSubmit}
    >

      <div className="input-wrapper">
        <input
          value={inputText}
          onChange={handleChange}
          className="todo-input"
        />
        <input
          type="submit"
          className="todo-input-submit"
        />
      </div>
    </form>
  );
};

export default InputForm;