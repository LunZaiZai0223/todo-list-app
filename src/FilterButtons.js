import React from 'react';

const FilterButtons = (props) => {
  const { setFilterState } = props;

  function handleClick (filterType) {
    isAll(filterType);
    isActive(filterType);
    isCompleted(filterType);
  }

  // 事件判斷
  function isAll (filterType) {
    if (filterType === 'all') {
      setFilterState(filterType);
    }
  }
  function isActive (filterType) {
    if (filterType === 'active') {
      setFilterState(filterType);
    }
  }
  function isCompleted (filterType) {
    if (filterType === 'completed') {
      setFilterState(filterType);
    }
  }

  return (
    <div className="filter-buttons-container">
      <button onClick={() => handleClick('all')}>ALL</button>
      <button onClick={() => handleClick('active')}>ACTIVE</button>
      <button onClick={() => handleClick('completed')}>COMPLETED</button>
    </div>
  )
}

export default FilterButtons;
