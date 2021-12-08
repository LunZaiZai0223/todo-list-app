import React from 'react';

const TodoHeader = ({ currentDate, todos }) => {
  const { month, date, day } = currentDate;

  return (
    <div className="todo-header">
      <div className="date-wrapper">
        <div className="date">
          <span>{day},</span> {date}th
        </div>
        <div className="month">{month}</div>
      </div>
      <div className="task-wrapper">
        Total Tasks: <span>{todos.length}</span>
      </div>
    </div>
  );
};

export default TodoHeader;
