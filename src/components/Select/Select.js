import React from 'react';

const Select = ({ selectedOption, handleChange }) => {
  return (
    <div className='select'>
      <div className={`select__color select__color_type_${selectedOption}`}></div>
      <select className='select__item' onChange={handleChange} value={selectedOption}>
        <option>No list</option>
        <option>Important</option>
        <option>Not urgent</option>
      </select>
    </div>
  )
};

export default Select;