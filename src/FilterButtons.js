import React from 'react';

const FilterButtons = (props) => {
  const { setFilterState, filterState } = props;

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
      <button
        className={filterState === 'all' ? "filter-button-is-selected" : "default-filter-button"} onClick={() => handleClick('all')}>ALL</button>
      <button
        className={filterState === 'active' ? "filter-button-is-selected" : "default-filter-button"} onClick={() => handleClick('active')}>ACTIVE</button>
      <button
        className={filterState === 'completed' ? "filter-button-is-selected" : "default-filter-button"} onClick={() => handleClick('completed')}>COMPLETED</button>
    </div>
  )
}

export default FilterButtons;
