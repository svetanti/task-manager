import React, { useState } from 'react';

const Input = () => {
  const [value, setValue] = useState('');

  const handleChange = (evt) => {
    setValue(evt.target.value);
  };

  const delimiter = value.indexOf('//');
  const task = delimiter !== -1 ? value.slice(0, delimiter) : value;
  const note = delimiter !== -1 ? value.slice(delimiter) : '';

  return (
    <label className='input'>
      <div className='input__list-marker'></div>
      {/* <span className='input__text input__text_type_task'>{task}</span>
      <span className='input__text input__text_type_note'>{note}</span> */}
      <input
        className='input__field'
        value={value}
        onChange={handleChange}
        autoFocus={true}
        placeholder='Write a new task'></input>
    </label>
  )
};

export default Input;