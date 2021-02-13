import React from 'react';

const Select = ({ selectedOption, handleChange }) => {
  console.log(selectedOption)
  return (
    <div className='select'>
      <div className={`select__color select__color_type_${selectedOption}`}></div>
      <select
        name='list' className='select__item'
        onChange={handleChange}
        value={selectedOption}>
        <option value='no-list'>No list</option>
        <option value='important'>Important</option>
        <option value='not-urgent'>Not urgent</option>
      </select>
    </div>
  )
};

export default Select;