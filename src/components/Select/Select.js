import React, { useState } from 'react';

const Select = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (evt) => {
    handleMarkChange(evt);
  };


  console.log(selectedOption)
  const handleMarkChange = (evt) => setSelectedOption(evt.target.value.split(' ').join('-').toLowerCase());

  return (
    <div className='select'>
      <div className={`select__color select__color_type_${selectedOption}`}></div>
      <select className='select__item' onChange={handleChange}>
        <option>No list</option>
        <option>Important</option>
        <option>Not urgent</option>
      </select>
    </div>
  )
};

export default Select;